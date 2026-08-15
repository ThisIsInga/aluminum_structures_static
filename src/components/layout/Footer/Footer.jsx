import style from './Footer.module.css';

function Footer({ 
  scrollToMain, 
  scrollToInfo,
  scrollToServices,
  scrollToContacts,
}) {
  return (
    <section className={style.container}>
      <div className={style.mainInfo} style={{ margin: '0 auto' }}>
        <div className={style.companyInfo}>
          <h2 className={style.companyTitle}>АЛЮКОН ДВ</h2>
          <p className={style.companyDescription}>Производственная компания</p>
        </div>
        
        <div className={style.linksContainer}>
          <ul className={style.navList}>
            <li 
              className={style.navItem}
              onClick={scrollToMain}
            >Главная</li>
            <li 
              className={style.navItem}
              onClick={scrollToInfo}
            >О компании</li>
            <li 
              className={style.navItem}
              onClick={scrollToServices}
            >Услуги</li>
            <li 
              className={style.navItem}
              onClick={scrollToMain}
            >Готовые обьекты</li>
            <li 
              className={style.navItem}
              onClick={scrollToContacts}
            >Контакты</li>
          </ul>
        </div>
      </div>
      <div className={style.secondaryInfo}> 
        <p>Copyright © 2025 - 2030 Алюкон ДВ</p>
      </div>
    </section>
  );
}

export default Footer;
