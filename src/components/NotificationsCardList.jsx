import styles from "./NotificationsCardList.module.css";
import NotificationCard from "./NotificationCard";
import useNotificationsData from "../useNotificationsData";

function NotificationsCardList({ markAllAsUnRead }) {
  const notificationsData = useNotificationsData();
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
