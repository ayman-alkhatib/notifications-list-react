import NotificationBody from "./NotificationBody";
import styles from "./TextBox.module.css";
function TextBox({ notificationObject }) {
  let { messagePreview, timestamp } = notificationObject;
  return (
    <div className={styles.textBox}>
      <NotificationBody notificationObject={notificationObject} />
      <span className={styles.timestamp}> {timestamp} </span>
      {messagePreview && <p> {messagePreview} </p>}
    </div>
  );
}

export default TextBox;
