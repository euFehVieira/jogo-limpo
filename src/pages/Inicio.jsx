import Styles from "../styles/inicio/Inicio.module.css";
import Header from "../components/Header";
import DivSec1 from "../components/inicio/div-sec1";
import DivSec2 from "../components/inicio/div-sec2";
import Footer from "../components/Footer";

function Inicio() {
  return (
    <main>
      <Header />
      <section className={Styles.section1_inicio}>
        <DivSec1 />
      </section>

      <section className={Styles.section2_inicio}>
        <DivSec2 />
      </section>
      <Footer />
    </main>
  );
}

export default Inicio;
