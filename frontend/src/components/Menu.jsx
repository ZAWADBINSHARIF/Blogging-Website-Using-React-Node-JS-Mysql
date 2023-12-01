// external import
import { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Menu = ({ cat }) => {

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

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    //         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    //         img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //     }
    // ]

    return (
        <menu>

            <h1>Other posts you may like</h1>

            {posts.map(post => {

                if (post.id != postID) {
                    return (
                        <div className="post" key={post.id}>
                            <img src={post.img} alt="Post img" />
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