import Avatar from "./NotificationCardComponents/Avatar";
import styles from "./NotificationCard.module.css";
import PostPicture from "./NotificationCardComponents/PostPicture";
import TextBox from "./NotificationCardComponents/TextBox";

function NotificationCard({ markAllAsUnRead, notificationObject }) {
  let { id, avatar, notificationType, readStatus } = notificationObject;

  if (markAllAsUnRead && !readStatus) readStatus = true;

  return (
    <div
      id={id}
      className={`${styles.notification} ${readStatus ? "" : "active"}`}
    >
      <Avatar imgSrc={avatar} />
      <TextBox notificationObject={notificationObject} />
      <PostPicture notificationType={notificationType} />
    </div>
  );
}
export default NotificationCard;
