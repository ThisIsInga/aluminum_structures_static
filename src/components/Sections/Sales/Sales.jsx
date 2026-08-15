import style from './Sales.module.css';
import Card from '../../layout/Card/Card.jsx';
import Section from '../../TextDisplay/Section/Section.jsx';
import Swiper from '../../layout/Swiper/Swiper.jsx';
import Window from './../Window/Window.jsx';
import StainedGlasses from '../StainedGlasses/StainedGlasses.jsx';
import img1 from './../../../../public/assets/Sale/sale1.jpg';
import img2 from './../../../../public/assets/Sale/sale2.png';
import img3 from './../../../../public/assets/Sale/sale3.png';
import img4 from './../../../../public/assets/Sale/sale4.png';

function Sales() {
  const saleProducts = [
    {
      id: 1,
      newPrice: "250 000",
      oldPrice: "350 000",
      title: "Вакуумный подъёмник для стекла Итальянский",
      shortDescription: "Пневматический вакуумный подъемник для листов стекла Elephant",
      img: img1
    },
    {
      id: 2,
      newPrice: "6 000",
      oldPrice: "10 000",
      title: "Инфракрасный обогреватель Ballu BIH-T-4.5",
      shortDescription: "Отличное решение для обогрева больших помещений, цехов, гаражей или открытых площадок",
      img: img2
    },
    {
      id: 3,
      newPrice: "2 000",
      oldPrice: "4 000",
      title: "Алюминиевые композитные панели",
      shortDescription: "Идеально подходят для облицовки фасадов, изготовления наружной рекламы и интерьерной отделки",
      img: img3
    },
    {
      id: 4,
      newPrice: "2 000",
      oldPrice: "",
      title: "СКРЫТЫЕ МОСКИТНЫЕ СЕТКИ",
      shortDescription: "Скрытые москитные сетки нового поколения!",
      img: img4
    }
  ];

  const images1 = [
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

  const images2 = [
    { src: '/assets/Swiper/Windows/window1.jpg', alt: 'Window 1' },
    { src: '/assets/Swiper/Windows/window2.jpg', alt: 'Window 2' },
  ];

  const images3 = [
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
      <section className={style.container}>
      <div className={style.title}>
        <h2>Распродажа!</h2>
        <p>Забирай материалы по низким ценам!</p>
      </div>
      <div className={style.objects}>
        {saleProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            title={product.title}
            shortDescription={product.shortDescription}
            img={product.img}
          />
        ))}
      </div>
    </section>
    <Section object='ДВЕРИ'/>
    <Swiper images={images1} />
    <Section object='ОКНА'/>
    <Swiper images={images2} />
    <Section object='ВИТРАЖИ'/>
    <Swiper images={images3} /> 
    </section>
  );
}

export default Sales;