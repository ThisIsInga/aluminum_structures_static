import { Link } from 'react-router-dom';
import style from './Primary.module.css';

function Primary() {
  return (
    <section className={style.primary}>
      <div className={style.container}>
        <div className={style.title}>
            <h2>Работаем со всеми<br />алюминиевыми системами</h2>
        </div>
        <div className={style.description}>
          <p>
            <span className={style.word}>
              <Link to="/door">Двери</Link>
            </span> - 
            <span className={style.word}> 
              <Link to="/window"> Окна</Link>  
            </span> - 
            <span className={style.word}>
              <Link to="/stainedGlasses"> Витражи</Link>
            </span>
          </p>
        </div>
        <Link 
          to="/cost"
          className={style.primaryButton}
        >
          Узнать стоимость
        </Link>
      </div>
    </section>
  );
}

export default Primary;