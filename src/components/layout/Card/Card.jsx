import { Link } from 'react-router-dom';
import style from './Card.module.css';

function Card({ id, img, oldPrice, newPrice, title, shortDescription, fullDescription }) {

  const productData = {
    id,
    newPrice,
    oldPrice,
    title,
    shortDescription,
    img
  };

  const isMosquitoNet = title.toLowerCase().includes('москитн') ||
  shortDescription.toLowerCase().includes('москитн');

  return (
    <div className={`${style.card} ${isMosquitoNet ? style.mosquitoNet : ''}`}>
      <Link 
        to={`/product/${id}`} 
        state={{ product: productData}}
      >
        <img src={img} alt={title} />
      </Link>
      <p>{newPrice} <span style={{ textDecoration: 'line-through' }}>{oldPrice}</span></p>
      <h2>{title}</h2>
      <span>{shortDescription}</span>
      {fullDescription && <p>{fullDescription}</p>}
    </div>
  );
}

export default Card;
