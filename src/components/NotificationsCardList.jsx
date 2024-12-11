import styles from "./NotificationsCardList.module.css";
import { notificationsData } from "../notificationsData";
import NotificationCard from "./NotificationCard";
import { useEffect, useState } from "react";
import { supabase } from "../createSupabase";

function NotificationsCardList({ markAllAsUnRead }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      let { data: notifications, error } = await supabase
        .from("notifications")
        .select("*");

      console.log(notifications);
      if (error) console.error("Error fetching notifications:", error);
      else setNotifications(notifications);
    };
    fetchNotifications();

    // Real-time subscription
    const channel = supabase
      .channel("notifications")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "notifications" },
        (payload) => {
          setNotifications((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  return (
    <main className={styles.main}>
      {notifications.map((notificationObject) => (
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
