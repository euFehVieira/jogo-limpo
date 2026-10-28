import Styles from "../styles/inicio/Inicio.module.css";
import DivSec1 from "../components/inicio/div-sec1";
import DivSec2 from "../components/inicio/div-sec2";

function Inicio() {
  return (
    <main>
      <section className={Styles.section1_inicio}>
        <DivSec1 />
      </section>

      <section className={Styles.section2_inicio}>
        <DivSec2 />
      </section>
    </main>
  );
}

export default Inicio;
