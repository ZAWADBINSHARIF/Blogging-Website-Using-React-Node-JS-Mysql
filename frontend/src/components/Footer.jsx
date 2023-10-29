import Logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made with ❄ and <b>React JS</b>
      </span>
    </footer>
  )
}
export default Footer