import style from './Write.module.css';

function Write({ type = "construction" }) {
    const getMessageText = () => {
        if (type === "construction") {
            return {
                subject: 'Запрос на расчет стоимости конструкции',
                body: 'Здравствуйте! Прошу рассчитать стоимость конструкции.',
                whatsapp: 'Здравствуйте! Прошу рассчитать стоимость конструкции.'
            };
        } else {
            return {
                subject: 'Запрос на приобретение товара',
                body: 'Здравствуйте! Хочу приобрести товар',
                whatsapp: 'Здравствуйте! Хочу приобрести товар'
            };
        }
    };

    const message = getMessageText();

    const handleOpenMailRu = () => {
        const email = 'alukon@mail.ru';
        const mailruLink = `https://e.mail.ru/compose/?to=${email}&subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
        
        const newWindow = window.open(mailruLink, '_blank');
        if (!newWindow) {
            alert('Пожалуйста, разрешите всплывающие окна для этого сайта');
        }
    };

    const handleOpenWhatsApp = () => {
        const phone = '+79990865442';
        const whatsappLink = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message.whatsapp)}`;
        
        const newWindow = window.open(whatsappLink, '_blank');
        if (!newWindow) {
            alert('Пожалуйста, разрешите всплывающие окна для этого сайта');
        }
    };

    return (
        <div className={style.buttons}>
            <button className={style.button} onClick={handleOpenMailRu}>
                Написать на Mail.ru
            </button>
            <button className={style.button} onClick={handleOpenWhatsApp}>
                Написать в WhatsApp
            </button>
        </div>
    );
}

export default Write;