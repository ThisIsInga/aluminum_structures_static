import style from './Services.module.css';

function Services() {
  return (
    <section className={style.services}>
      <div className={style.container}>
        <div className={style.title}>
          Наши услуги
        </div>
        <div className={style.subtitle}>
          Профессиональные решения для вашего бизнеса
        </div>
        <div className={style.objects}>
          <div className={style.object}>
            <div className={style.icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H21M7 15H9M12 15H14M17 15H19M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={style.objectTitle}>Расчёт конструкций</h3>
            <p className={style.objectDescription}>
              Профессиональный расчет и проектирование конструкций любой сложности
            </p>
          </div>
          
          <div className={style.object}>
            <div className={style.icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 10L12 11.5M12 11.5L10 10M12 11.5V8.5M9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9C7 7.89543 7.89543 7 9 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={style.objectTitle}>Раскрой</h3>
            <p className={style.objectDescription}>
              Точный и эффективный раскрой материалов с минимальными отходами
            </p>
          </div>
          
          <div className={style.object}>
            <div className={style.icon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 7H6C4.89543 7 4 7.89543 4 9V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V9C20 7.89543 19.1046 7 18 7H16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={style.objectTitle}>Сборка</h3>
            <p className={style.objectDescription}>
              Качественная сборка конструкций с соблюдением всех стандартов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;