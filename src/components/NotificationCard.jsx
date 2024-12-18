import Avatar from "./NotificationCardComponents/Avatar";
import styles from "./NotificationCard.module.css";
import PostPicture from "./NotificationCardComponents/PostPicture";
import TextBox from "./NotificationCardComponents/TextBox";
import { supabase } from "../createSupabase";

function NotificationCard({ notificationObject }) {
  let { id, avatar, notificationType, readStatus } = notificationObject;

  async function handleReadUpdate() {
    if (readStatus) return;

    const { error } = await supabase
      .from("notifications")
      .update({ readStatus: true })
      .eq("id", id);
    if (error) {
      console.error(error);
    }
  }

  return (
    <div
      onClick={() => {
        handleReadUpdate();
      }}
      id={id}
      className={`${styles.notification} ${readStatus ? "" : "active"}`}
    >
      <Avatar imgSrc={avatar} />
      <TextBox
        notificationObject={notificationObject}
        readStatus={readStatus}
      />
      <PostPicture notificationType={notificationType} />
    </div>
  );
}
export default NotificationCard;
