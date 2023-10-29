// external import
import { Link } from 'react-router-dom'

// internal import
import Edit from '../assets/img/edit.png'
import Delete from '../assets/img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <article>
        <img src="https://ae01.alicdn.com/kf/HTB1fxlsaPDuK1Rjy1zjq6zraFXa1/Andoer-Photography-Background-Backdrop-1500-2100mm-Classic-Fashion-Wooden-Floor-for-Studio-Professional-Photographer.jpg_640x640.jpg" alt="article image" />
        <div className="user">
          <img src="https://th.bing.com/th/id/OIP.KWkLH3TP7mFGGIaoRFoKwQHaHa?pid=ImgDet&w=500&h=500&rs=1" alt="Profile Picture" />
          <div className="info">
            <span>Jhony</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Edit Button" />
            </Link>
            <Link to={`/write?delete=2`}>
              <img src={Delete} alt="Delete Button" />
            </Link>
          </div>
        </div>

        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>

        <p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex quo natus deleniti soluta molestias magnam debitis blanditiis dolorum reiciendis molestiae quidem aspernatur animi enim accusantium, illum, eum, autem tempore ut fuga laboriosam sequi? Exercitationem ab ipsa aut hic commodi, nisi ut consectetur nemo quia magni blanditiis sed provident, soluta, architecto necessitatibus labore. Accusantium quae, commodi magni quam accusamus eum placeat explicabo rerum maiores numquam aliquid necessitatibus eos animi esse corporis dolorem minus ut rem ipsum. Optio, voluptatibus et eius illo dolore aliquam neque facilis nesciunt eligendi inventore quibusdam ducimus vero natus nobis, harum vitae quia tempore consectetur non nulla.</p>
          <br />
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex quo natus deleniti soluta molestias magnam debitis blanditiis dolorum reiciendis molestiae quidem aspernatur animi enim accusantium, illum, eum, autem tempore ut fuga laboriosam sequi? Exercitationem ab ipsa aut hic commodi, nisi ut consectetur nemo quia magni blanditiis sed provident, soluta, architecto necessitatibus labore. Accusantium quae, commodi magni quam accusamus eum placeat explicabo rerum maiores numquam aliquid necessitatibus eos animi esse corporis dolorem minus ut rem ipsum. Optio, voluptatibus et eius illo dolore aliquam neque facilis nesciunt eligendi inventore quibusdam ducimus vero natus nobis, harum vitae quia tempore consectetur non nulla.</p>
          <br />
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex quo natus deleniti soluta molestias magnam debitis blanditiis dolorum reiciendis molestiae quidem aspernatur animi enim accusantium, illum, eum, autem tempore ut fuga laboriosam sequi? Exercitationem ab ipsa aut hic commodi, nisi ut consectetur nemo quia magni blanditiis sed provident, soluta, architecto necessitatibus labore. Accusantium quae, commodi magni quam accusamus eum placeat explicabo rerum maiores numquam aliquid necessitatibus eos animi esse corporis dolorem minus ut rem ipsum. Optio, voluptatibus et eius illo dolore aliquam neque facilis nesciunt eligendi inventore quibusdam ducimus vero natus nobis, harum vitae quia tempore consectetur non nulla.</p>
          <br />
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex quo natus deleniti soluta molestias magnam debitis blanditiis dolorum reiciendis molestiae quidem aspernatur animi enim accusantium, illum, eum, autem tempore ut fuga laboriosam sequi? Exercitationem ab ipsa aut hic commodi, nisi ut consectetur nemo quia magni blanditiis sed provident, soluta, architecto necessitatibus labore. Accusantium quae, commodi magni quam accusamus eum placeat explicabo rerum maiores numquam aliquid necessitatibus eos animi esse corporis dolorem minus ut rem ipsum. Optio, voluptatibus et eius illo dolore aliquam neque facilis nesciunt eligendi inventore quibusdam ducimus vero natus nobis, harum vitae quia tempore consectetur non nulla.</p>
        </p>

      </article>

      <Menu/>

    </div>
  )
}
export default Single