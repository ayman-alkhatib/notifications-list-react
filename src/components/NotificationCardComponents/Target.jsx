import styles from "./Target.module.css";
function Target({ notificationType, target, readStatus }) {
  return (
    <span
      className={styles.target}
      style={{
        color: notificationType.toLowerCase().includes("group")
          ? "hsl(219, 85%, 26%)"
          : "hsl(219, 12%, 42%)",
      }}
    >
      {target}
      {!readStatus && <span className={styles.activeNotification}></span>}
    </span>
  );
}

export default Target;
