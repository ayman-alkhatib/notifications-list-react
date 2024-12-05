import styles from "./NotificationsCardList.module.css";
import { notificationsData } from "../notificationsData";
import NotificationCard from "./NotificationCard";

function NotificationsCardList({ markAllAsUnRead }) {
  return (
    <main className={styles.main}>
      {notificationsData.map((notificationObject) => (
        <NotificationCard
          notificationObject={notificationObject}
          markAllAsUnRead={markAllAsUnRead}
          key={notificationObject.id}
        />
      ))}
    </main>
  );
}

export default NotificationsCardList;
