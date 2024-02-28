// external import
import { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Menu = ({ cat }) => {

    const API = import.meta.env.VITE_API;
    const [posts, setPosts] = useState([]);
    const { pathname } = useLocation();

    const postID = pathname.split('/')[2];

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`/posts/?cat=${cat}`);
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts();

    }, [cat]);

    return (
        <menu>

            <h1>Other posts you may like</h1>

            {posts.map(post => {

                if (post.id != postID) {
                    return (
                        <div className="post" key={post.id}>
                            <img src={API + '/' + 'blog_post_img' + '/' + post.img} alt="Post img" />
                            <h2>{post.title}</h2>
                            <Link to={`/post/${post.id}`}>
                                <button type="button">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    );
                }
            })}
        </menu>
    );
};
export default Menu;