import NotificationType from "./NotificationType";
import Target from "./Target";
import Username from "./Username";
function NotificationBody({ notificationObject, isRead }) {
  let { username, notificationType, target } = notificationObject;
  return (
    <div className="notificationBody">
      <Username username={username} />
      <NotificationType notificationType={notificationType} />
      <Target
        notificationType={notificationType}
        target={target}
        readStatus={isRead}
      />
    </div>
  );
}

export default NotificationBody;
