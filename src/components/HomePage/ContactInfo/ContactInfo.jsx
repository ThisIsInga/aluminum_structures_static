import style from './ContactInfo.module.css';

function ContactInfo() {
  return (
    <section className={style.container}>
      <div className={style.contacts}>
        <div className={`${style.wideItem} ${style.centerItem}`}> 
          <div className={style.statText}>
            <div className={style.statHeader}>
              <img src='/assets/ContactInfo/phone-call.png' alt="Иконка телефона" className={style.icon} />
              <p>Звоните нам:</p>
            </div>
            <h2>+7-999-080-98-00<br/>alukon@mail.ru</h2>
          </div>
        </div>
        <div className={`${style.centerItem}`}>
          <div className={style.statText}>
            <div className={style.statHeader}>
              <img src='/assets/ContactInfo/location.png' alt="Иконка адреса" className={style.icon} />
              <p>Адрес офиса:</p>
            </div>
            <h2>г.Хабаровск, ул.Оборская 11-Б</h2>
          </div>
        </div>
        <div className={`${style.wideItem} ${style.centerItem}`}> 
          <div className={style.statText}>
            <div className={style.statHeader}>
              <img src='/assets/ContactInfo/calendar.png' alt="Иконка графика работы" className={style.icon} />
              <p>График работы:</p>
            </div>
            <h2>Пн-Пт с 9:00 до 18:00<br/>Сб-Вс с 10:00 до 17:00</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;