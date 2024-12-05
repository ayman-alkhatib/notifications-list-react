import NotificationType from "./NotificationType";
import Target from "./Target";
import Username from "./Username";
function NotificationBody({ notificationObject }) {
  let { username, notificationType, target, readStatus } = notificationObject;
  return (
    <div className="notificationBody">
      <Username username={username} />
      <NotificationType notificationType={notificationType} />
      <Target
        notificationType={notificationType}
        target={target}
        readStatus={readStatus}
      />
    </div>
  );
}

export default NotificationBody;
