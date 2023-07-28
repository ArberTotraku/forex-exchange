import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link className='title-footer' to='/'>
        Totraku's Converter
      </Link>
      <div>
        <a href='https://github.com/'>
          <i className='fa-brands fa-square-github'></i>
        </a>
        <a href='https://linkedin.com/'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
