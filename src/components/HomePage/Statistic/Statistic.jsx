import style from './Statistic.module.css';

function Statistic() {
  return (
    <section className={style.container}>
        <div className={style.statistics}>
            <div>
                <img src="/assets/Statistic/bag.png" alt="bag" className={style.statIcon} />
                <div className={style.statText}>
                    <h2>25</h2>
                    <p>ЛЕТ ОПЫТА РАБОТЫ</p>
                </div>
            </div>
            <div>
                <img src="/assets/Statistic/builder.png" alt="builder" className={style.statIcon} />
                <div className={style.statText}>
                    <h2>215</h2>
                    <p>СТРОИТЕЛЬНЫХ ПОДРЯДА</p>
                </div>
            </div>
            <div>
                <img src="/assets/Statistic/building.png" alt="building" className={style.statIcon} />
                <div className={style.statText}>
                    <h2>800</h2>
                    <p>ЗАВЕРШЕННЫХ ПРОЕКТОВ</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Statistic;
