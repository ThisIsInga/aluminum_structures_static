import style from './Door.module.css';
import NavBar from '../../layout/NavBar/NavBar.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
// import Footer from './../Footer/Footer.jsx'

function Door() {
  const images = [
    { src: '/assets/Swiper/Doors/doors1.jpg', alt: 'Doors 1' },
    { src: '/assets/Swiper/Doors/doors2.jpg', alt: 'Doors 2' }, 
    // { src: '/assets/Swiper/Doors/doors3.jpg', alt: 'Doors 3' },
    { src: '/assets/Swiper/Doors/doors4.jpg', alt: 'Doors 4' },
    { src: '/assets/Swiper/Doors/doors5.jpg', alt: 'Doors 5' },
    { src: '/assets/Swiper/Doors/doors6.jpg', alt: 'Doors 6' },
    { src: '/assets/Swiper/Doors/doors7.jpg', alt: 'Doors 7' },
    { src: '/assets/Swiper/Doors/doors8.jpg', alt: 'Doors 8' },
    { src: '/assets/Swiper/Doors/doors9.jpg', alt: 'Doors 9' },
    { src: '/assets/Swiper/Doors/doors10.jpg', alt: 'Doors 10' },
    { src: '/assets/Swiper/Doors/doors11.jpg', alt: 'Doors 11' },
    { src: '/assets/Swiper/Doors/doors12.jpg', alt: 'Doors 12' },
  ];

  return (
    <section>
      <NavBar />
      <Section object='ДВЕРИ'/>
      <Swiper images={images} />
      {/* <Footer /> */}
    </section>
  );
}

export default Door;
