import style from './Cost.module.css';
import NavBar from '../../layout/NavBar/NavBar.jsx';
import Write from '../../layout/Write/Write.jsx';

function Cost() {
    return (
        <section>
        <NavBar />
        <div className={style.container}>
            <h2>ИНСТРУКЦИЯ:</h2>
            <div className={style.instruction}>
                <ol>
                    <li>
                        <div>
                            Нарисуйте конструкцию
                            <img src='/assets/Cost/plan.jpg' alt="Инструкция по рисованию конструкции" />
                        </div>
                    </li>
                    <li>Сфотографируйте или отсканируйте</li>
                    <li>Полученный файл отправьте нам на alukon@mail.ru <br /> или на whatsapp +79990865442</li>
                    <li>В ближайшее время мы свяжемся с вами и вы получите ответ</li>
                </ol>
            </div>
            <Write type="construction"/>
        </div>
        {/* <Footer /> */}
        </section>
    );
}

export default Cost;