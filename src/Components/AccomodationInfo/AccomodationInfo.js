import styles from "./AccomodationInfo.module.css";
import Tags from "./Tags";
import Host from "./Host";
import Rating from "./Rating";
import Title from "./Title";

/* props.annonce mandatory */
function AccomodationInfo({ annonce }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["left"]}>
        <Title title={annonce.title} location={annonce.location} />
        <Tags tags={annonce.tags} />
      </div>
      <div className={styles["right"]}>
        <Rating rating={annonce.rating} maxRating={"5"} />
        <Host name={annonce.host.name} picture={annonce.host.picture} />
      </div>
    </div>
  );
}

export default AccomodationInfo;
