import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import style from './Product.module.css';
import NavBar from '../../components/layout/NavBar/NavBar.jsx';
import Footer from '../../components/layout/Footer/Footer.jsx';
import Write from '../layout/Write/Write.jsx';

function Product() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <section className={style.container}>
      <NavBar />
      <div className={style.product}>
        <div className={style.productImage}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={style.productInfo}>
          <h2>{product.title}</h2>
          <span>{product.newPrice} ₽</span>
          {product.oldPrice && (
            <span className={style.oldPrice}>{product.oldPrice} ₽</span>
          )}
          <p className={style.contact}>Купить: +7-999-080-98-00 alukon@mail.ru</p>
        </div>
        <Write type="product" />
      </div>
      <Footer />
    </section>
  );
}

export default Product;