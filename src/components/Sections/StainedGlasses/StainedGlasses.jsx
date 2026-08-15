import style from './StainedGlasses.module.css';
import NavBar from '../../layout/NavBar/NavBar.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
// import Footer from './../Footer/Footer.jsx'

function StainedGlasses() {
  const images = [
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses1.jpg', alt: 'StainedGlasses 1' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses2.jpg', alt: 'StainedGlasses 2' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses3.jpg', alt: 'StainedGlasses 3' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses4.jpg', alt: 'StainedGlasses 4' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses5.jpg', alt: 'StainedGlasses 5' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses6.jpg', alt: 'StainedGlasses 6' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses7.jpg', alt: 'StainedGlasses 7' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses8.jpg', alt: 'StainedGlasses 8' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses9.jpg', alt: 'StainedGlasses 9' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses10.jpg', alt: 'StainedGlasses 10' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses11.jpg', alt: 'StainedGlasses 11' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses12.jpg', alt: 'StainedGlasses 12' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses13.jpg', alt: 'StainedGlasses 13' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses14.jpg', alt: 'StainedGlasses 14' },
    { src: '/assets/Swiper/StainedGlasses/StainedGlasses15.jpg', alt: 'StainedGlasses 15' },
  ];

  return (
    <section>
      <NavBar />
      <Section object='ВИТРАЖИ'/>
      <Swiper images={images} /> 
      {/* <Footer /> */}
    </section>
  );
}

export default StainedGlasses;
