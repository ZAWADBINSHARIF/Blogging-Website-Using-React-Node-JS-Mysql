// external import
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

// internal import
import Edit from '../assets/img/edit.png';
import Delete from '../assets/img/delete.png';
import Menu from '../components/Menu';
import { AuthContext } from '../context/authContext';

const Single = () => {

  const [post, setPost] = useState([]);
  const { pathname } = useLocation();
  const { currentUser } = useContext(AuthContext);

  const postID = pathname.split('/')[2];

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`/post/${postID}`);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();

  }, [postID]);

  return (
    <div className="single">
      <article>
        <img src={post?.post_img} alt="article image" />
        <div className="user">
          {post?.user_img && <img src={post?.user_img} alt="Profile Picture" />}
          <div className="info">
            <span style={{ textTransform: 'capitalize' }}>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username
            &&
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="Edit Button" />
              </Link>
              <Link to={`/write?delete=2`}>
                <img src={Delete} alt="Delete Button" />
              </Link>
            </div>}
        </div>

        <h1>{post.title}</h1>

        {post.desc}

      </article>

      <Menu />

    </div>
  );
};
export default Single;