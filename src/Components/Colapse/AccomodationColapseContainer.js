import styles from "./AccomodationColapseContainer.module.css";
import Colapse from "./Colapse";

function AccomodationColapseContainer({annonce}) {
  return (
    <div className={styles['container']}>
      <Colapse title="Description" text={annonce.description} style={{width: '100% !important'}}/>
      <Colapse title="Equipements" list={annonce.equipments} />
    </div>
  );
}

export default AccomodationColapseContainer;
