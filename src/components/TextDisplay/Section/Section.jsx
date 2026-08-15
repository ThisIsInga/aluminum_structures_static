import style from './Section.module.css';

function Section({ object }) {
  return (
    <section>
      <div className={style.container}>
        <div className={style.section}>
          <span className={style.subheading}>Раздел</span>
          <h2 className={style.mainHeading}>{object}</h2>
        </div>
      </div>
    </section>
  );
}

export default Section;