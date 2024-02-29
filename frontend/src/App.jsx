// external import
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';

// internal import
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthContext } from './context/authContext';

const Layout = () => {

  return (
    <div className='Layout'>
      <div className="container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

const App = () => {

  const {setCurrentUser} = useContext(AuthContext)

  // ** At the time of ending access token cookies time, it automatically removes value of localstorage
  axios.interceptors.response.use(function (response) {
    if (response.headers['no-access-cookies'] === 'true') {
      setCurrentUser(null)
      console.log(response.headers['no-access-cookies']);
    }
    return response;
  });

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;