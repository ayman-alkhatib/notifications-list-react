import styles from "./NotificationsCardList.module.css";
import NotificationCard from "./NotificationCard";
function NotificationsCardList({ notificationsData }) {
  return (
    <main className={styles.main}>
      {notificationsData.map((notificationObject) => (
        <NotificationCard
          notificationObject={notificationObject}
          key={notificationObject.id}
        />
      ))}
    </main>
  );
}

export default NotificationsCardList;
