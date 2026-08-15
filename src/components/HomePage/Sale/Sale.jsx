import style from './Sale.module.css';
import { Link } from 'react-router-dom';
import Card from '../../layout/Card/Card.jsx';
import img1 from './../../../../public/assets/Sale/sale1.jpg'
import img2 from './../../../../public/assets/Sale/sale2.png'
import img3 from './../../../../public/assets/Sale/sale3.png'
import img4 from './../../../../public/assets/Sale/sale4.png'

function Sale() {
  // Статический массив для демонстрации (опционально)
  const staticCards = [
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
      title: "Инфракрасный обогревательBallu BIH-T-4.5",
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

  return (
    <section className={style.container}>
      <div className={style.title}>
        <h2>Распродажа!</h2>
        <p>Забирай материалы по низким ценам!</p>
      </div>
      <div className={style.objects}>
        {staticCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            newPrice={card.newPrice}
            oldPrice={card.oldPrice}
            title={card.title}
            shortDescription={card.shortDescription}
            img={card.img}
          />
        ))}
      </div>
      <div className={style.look}>
        <Link to="/sale">Посмотреть ещё...</Link>
      </div>
    </section>
  );
}

export default Sale;