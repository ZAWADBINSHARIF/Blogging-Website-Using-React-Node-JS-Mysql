import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { toast } from "react-toastify";
import moment from 'moment';

const Write = () => {

  const [post, setPost] = useState({
    title: '',
    desc: '',
    img: '',
    category: null
  });

  function handleChange({ key, value }) {
    setPost({ ...post, [key]: value });
  }

  async function handlePost(e) {

    e.preventDefault();

    const formData = new FormData();

    if (post.title && post.desc && post.img) {

      const date = moment().format("YYYY-MM-DD");

      formData.append('title', post.title);
      formData.append('desc', post.desc);
      formData.append('img', post.img);
      formData.append('category', post.category);
      formData.append('date', date);

      try {
        const response = await axios.post('/post', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response.data);

      } catch (error) {
        toast.error(error.response.data);
        console.log(error);
      }

    } else {
      toast.warning("Fill the Title, Description and Image")
    }
  }

  console.log(post);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='Title' value={post.title} onChange={(e) => handleChange({ key: 'title', value: e.target.value })} />
        <div className="editorContainer">
          <ReactQuill className='editorArea' theme="snow" value={post.desc} onChange={(value) => handleChange({ key: 'desc', value })} />
        </div>
      </div>
      <menu>
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="file" id="file" onChange={(e) => handleChange({ key: 'img', value: e.target.files[0] })} />
          <label className='file' htmlFor="file">Upload Image</label>

          <div className="button">
            <button>Save as a draft</button>
            <button onClick={(e) => handlePost(e)}>Update</button>
          </div>

        </div>
        <div className="item">

          <h1>Category</h1>

          <div className="cat">
            <input type="radio" name='cat' value='art' id='art' onChange={(e) => handleChange({ key: 'category', value: e.target.value })} />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='science' id='science' onChange={(e) => handleChange({ key: 'category', value: e.target.value })} />
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='technology' id='technology' onChange={(e) => handleChange({ key: 'category', value: e.target.value })} />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='cinema' id='cinema' onChange={(e) => handleChange({ key: 'category', value: e.target.value })} />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='design' id='design' onChange={(e) => handleChange({ key: 'category', value: e.target.value })} />
            <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
            <input type="radio" name='cat' value='food' id='food' onChange={(e) => handleChange({ key: 'category', value: e.target.value })} />
            <label htmlFor="food">Food</label>
          </div>


        </div>
      </menu>
    </div>
  );
};
export default Write;