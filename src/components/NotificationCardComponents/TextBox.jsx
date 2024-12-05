import NotificationBody from "./NotificationBody";
import styles from "./TextBox.module.css";
function TextBox({ notificationObject, isRead }) {
  let { messagePreview, timestamp } = notificationObject;
  return (
    <div className={styles.textBox}>
      <NotificationBody
        notificationObject={notificationObject}
        isRead={isRead}
      />
      <span className={styles.timestamp}> {timestamp} </span>
      {messagePreview && <p> {messagePreview} </p>}
    </div>
  );
}

export default TextBox;
