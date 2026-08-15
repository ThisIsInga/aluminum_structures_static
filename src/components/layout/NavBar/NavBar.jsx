import style from './NavBar.module.css';

function NavBar() {
  return (
    <section className={style.navBar}>
      <div className={style.menu}>
        <div className={style.title}>
          <img 
            src='/assets/primary/company.png'
            alt="Логотип компании" 
            className={style.logo}
          />
          <h1>Алюкон ДВ</h1>
          <p>Производство алюминиевых конструкций</p>
        </div>
        <div className={style.info}>
          <p className={style.infoItem}>
            <img 
              src='/assets/primary/icons/map.png'
              alt="Адрес" 
              className={style.icon}
            />
            г.Хабаровск, ул.Оборская 11-Б
          </p>
          <p className={style.infoItem}>
            <img 
              src='/assets/primary/icons/phone-call.png'
              alt="Телефон" 
              className={style.icon}
            />
            +7-999-080-98-00
          </p>
          <p className={style.infoItem}>
            <img 
              src='/assets/primary/icons/email.png'
              alt="Электронная почта" 
              className={style.icon}
            />
            alukon@mail.ru
          </p>
        </div>
      </div>
    </section>
  );
}

export default NavBar;