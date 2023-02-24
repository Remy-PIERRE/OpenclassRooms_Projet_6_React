import styles from "./ContainerWithBorderRadius.module.css";

function ContainerWithBorderRadius({ className, children }) {
  return (
    <div className={`${styles["container"]} ${className}`}>{children}</div>
  );
}

export default ContainerWithBorderRadius;
