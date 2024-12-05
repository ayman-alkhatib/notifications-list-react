import styles from "./NotificationType.module.css";
function NotificationType({ notificationType }) {
  return <span className={styles.notificationType}> {notificationType} </span>;
}

export default NotificationType;
