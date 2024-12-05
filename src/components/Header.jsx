import styles from "./Header.module.css";
import { notificationsData } from "../notificationsData";
function Header({ setMarkAllAsUnRead }) {
  const notificationActiveNum = notificationsData.reduce((prev, cur) => {
    if (cur.readStatus) return (prev = prev + 1);
    return prev;
  }, 0);
  return (
    <header className={styles.header}>
      <h1>
        Notifications <span>{notificationActiveNum}</span>
      </h1>

      <button
        onClick={() => {
          setMarkAllAsUnRead(true);
        }}
      >
        Mark all as read
      </button>
    </header>
  );
}

export default Header;
