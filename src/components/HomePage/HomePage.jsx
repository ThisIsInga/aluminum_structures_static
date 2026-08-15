import { useRef } from 'react';
import NavBar from '../layout/NavBar/NavBar.jsx'
import Primary from '../HomePage/Primary/Primary.jsx'
import Services from '../HomePage/Services/Services.jsx'
import Sale from '../HomePage/Sale/Sale.jsx'
import Info from '../HomePage/Information/Info.jsx'
import Statistic from '../HomePage/Statistic/Statistic.jsx'
import ContactInfo from '../HomePage/ContactInfo/ContactInfo.jsx'
import Footer from '../layout/Footer/Footer.jsx'

function HomePage() {
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const infoRef = useRef(null);
  const contactsInfoRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <NavBar />
        <section ref={mainRef}>
          <Primary />
        </section>
        <section ref={servicesRef}>
          <Services />
        </section>
        <Sale id='sale'/>
        <section ref={infoRef}>
          <Info />
        </section>
        <Statistic id='statistic'/>
        <section ref={contactsInfoRef}>
          <ContactInfo />
        </section>
        <Footer 
          scrollToMain={() => scrollToRef(mainRef)}
          scrollToServices={() => scrollToRef(servicesRef)}
          scrollToInfo={() => scrollToRef(infoRef)}
          scrollToContacts={() => scrollToRef(contactsInfoRef)}
        />
    </>
  )
}

export default HomePage;
