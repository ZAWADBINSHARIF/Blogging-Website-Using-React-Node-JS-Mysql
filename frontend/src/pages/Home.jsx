// external import
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`/posts/${search}`);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();

  }, [search]);

  return (
    <div className="home">
      <div className="posts">

        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.id + " " + post.title} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link to={`/post/${post.id}`}>
                <button type="button">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
export default Home;