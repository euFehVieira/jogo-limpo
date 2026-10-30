import Styles from "../../styles/Preconceito/Div1Sec2.module.css";

function Div1Sec2() {
  return (
    <div className={Styles.titulos_Div1Sec2}>
      <div className={Styles.div_left}>
        <h3>PRECONCEITOS</h3>
        <h2>
          QUATRO DESAFIOS. <span>UMA SÓ LUTA.</span>
        </h2>
      </div>

      <div className={Styles.div_right}>
        <p>
          O preconceito pode aparecer nos treinos, nas competições, nos comentários e nas arquibancadas. Reconhecer essas atitudes é o primeiro passo para mudar.
        </p>
      </div>
    </div>
  );
}

export default Div1Sec2;
