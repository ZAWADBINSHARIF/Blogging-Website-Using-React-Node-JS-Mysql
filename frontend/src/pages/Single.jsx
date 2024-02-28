// external import
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
import axios from 'axios';
import DOMPurify from "dompurify";

// internal import
import Edit from '../assets/img/edit.png';
import Delete from '../assets/img/delete.png';
import Menu from '../components/Menu';
import { AuthContext } from '../context/authContext';

const Single = () => {

  const [post, setPost] = useState([]);
  const { pathname } = useLocation();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const postID = pathname.split('/')[2];
  const API = import.meta.env.VITE_API;

  function getText(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    return doc.body.textContent;
  }

  const handleDeletePost = async () => {
    try {
      await axios.delete(`/post/${postID}`);
      toast.warn('Post has been deleted');
      navigate('/');
    } catch (error) {
      toast.error('Failed to delete');
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`/post/${postID}`);
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
        <img src={`${API}/blog_post_img/${post?.post_img}`} alt="article image" />
        <div className="user">
          {post?.user_img && <img src={post?.user_img} alt="Profile Picture" />}
          <div className="info">
            <span style={{ textTransform: 'capitalize' }}>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username
            &&
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="Edit Button" />
              </Link>
              <img src={Delete} alt="Delete Button" onClick={handleDeletePost} />
            </div>}
        </div>

        <h1>{post.title}</h1>

        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        >

        </p>


      </article>

      <Menu cat={post?.category} />

    </div>
  );
};
export default Single;