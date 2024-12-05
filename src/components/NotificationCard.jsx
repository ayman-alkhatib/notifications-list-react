import Avatar from "./NotificationCardComponents/Avatar";
import styles from "./NotificationCard.module.css";
import PostPicture from "./NotificationCardComponents/PostPicture";
import TextBox from "./NotificationCardComponents/TextBox";
import { useState } from "react";

function NotificationCard({ markAllAsUnRead, notificationObject }) {
  let { id, avatar, notificationType, readStatus } = notificationObject;
  const [isRead, setIsRead] = useState(readStatus);

  if (markAllAsUnRead && !isRead) setIsRead(true);

  return (
    <div
      onClick={() => {
        setIsRead(true);
      }}
      id={id}
      className={`${styles.notification} ${isRead ? "" : "active"}`}
    >
      <Avatar imgSrc={avatar} />
      <TextBox notificationObject={notificationObject} isRead={isRead} />
      <PostPicture notificationType={notificationType} />
    </div>
  );
}
export default NotificationCard;
