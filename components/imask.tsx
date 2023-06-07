import { IMaskInput } from "react-imask";
import styles from './imask.module.css'

function ImaskCustomInput() {
  return (
    <div className="">
      <IMaskInput mask="500 00 00 00" className={styles.inputmask} />
    </div>
  );
}

export default function Imask() {
  return <ImaskCustomInput />;
}
