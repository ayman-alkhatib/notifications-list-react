import useNotificationsData from "../useNotificationsData";
import styles from "./Header.module.css";
import { useState } from "react";
function Header({ setMarkAllAsUnRead }) {
  const notificationsData = useNotificationsData();
  const [notificationActiveNum, setNotificationActiveNum] = useState(
    notificationsData.reduce((prev, cur) => {
      if (!cur.readStatus) return (prev = prev + 1);
      return prev;
    }, 0)
  );
  return (
    <header className={styles.header}>
      <h1>
        Notifications <span>{notificationActiveNum}</span>
      </h1>

      <button
        onClick={() => {
          setMarkAllAsUnRead(true);
          setNotificationActiveNum(0);
        }}
      >
        Mark all as read
      </button>
    </header>
  );
}

export default Header;
