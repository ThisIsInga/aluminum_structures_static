import style from './Window.module.css';
import NavBar from '../../layout/NavBar/NavBar.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
// import Footer from './../Footer/Footer.jsx'

function Window() {
  const images = [
    { src: '/assets/Swiper/Windows/window1.jpg', alt: 'Window 1' },
    { src: '/assets/Swiper/Windows/window2.jpg', alt: 'Window 2' },
  ];

  return (
    <section>
      <NavBar />
      <Section object='ОКНА'/>
      <Swiper images={images} />
      {/* <Footer /> */}
    </section>
  );
}

export default Window;
