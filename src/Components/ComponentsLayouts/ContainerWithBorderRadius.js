import styles from "./ContainerWithBorderRadius.module.css";

/* simple shell with border-radius */
function ContainerWithBorderRadius({ className, children }) {
  return (
    <div className={`${styles["container"]} ${className}`}>{children}</div>
  );
}

export default ContainerWithBorderRadius;
