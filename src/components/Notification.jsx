import Avatar from "./Avatar";
import styles from "./Notification.module.css";

function Notification({ notificationObject }) {
  const {
    id,
    avatar,
    username,
    notificationType,
    target,
    messagePreview,
    readStatus,
    timestamp,
  } = notificationObject;

  return (
    <div
      id={id}
      className={`${styles.notification} ${readStatus ? styles.active : ""}`}
    >
      <Avatar imgSrc={avatar} />
      <div className={styles.textBox}>
        <span className={styles.username}>
          <strong> {username} </strong>
        </span>
        <span className={styles.notificationType}> {notificationType} </span>
        {readStatus && <span className={styles.activeNotification}></span>}
        {target && (
          <span
            className={styles.target}
            style={{
              color: notificationType.toLowerCase().includes("group")
                ? "hsl(219, 85%, 26%)"
                : "",
            }}
          >
            {" "}
            {target}{" "}
          </span>
        )}
        <span className={styles.timestamp}> {timestamp} </span>
        {messagePreview && <p> {messagePreview} </p>}
      </div>
    </div>
  );
}
export default Notification;