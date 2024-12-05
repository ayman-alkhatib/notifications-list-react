import Avatar from "./Avatar";
import styles from "./Notification.module.css";

function Notification({ markAllAsUnRead, notificationObject }) {
  let {
    id,
    avatar,
    username,
    notificationType,
    target,
    messagePreview,
    readStatus,
    timestamp,
  } = notificationObject;
  if (markAllAsUnRead && !readStatus) {
    readStatus = true;
  }
  return (
    <div
      id={id}
      className={`${styles.notification} ${readStatus ? "" : "active"}`}
    >
      <Avatar imgSrc={avatar} />
      <div className={styles.textBox}>
        <div className="notificationBody">
          <span className={styles.username}>
            <strong> {username} </strong>
          </span>
          <span className={styles.notificationType}> {notificationType} </span>

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
        </div>
        <span className={styles.timestamp}> {timestamp} </span>
        {messagePreview && <p> {messagePreview} </p>}
      </div>

      {notificationType.toLowerCase().includes("picture") && (
        <div className={styles.picture}>
          <img src="images/image-chess.webp" alt="chess" />
        </div>
      )}
    </div>
  );
}
export default Notification;
