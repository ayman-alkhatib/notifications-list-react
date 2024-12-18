import { useEffect, useState } from "react";
import { supabase } from "./createSupabase";

function useNotificationsData() {
    const [notificationsData, setNotifications] = useState([]);
    useEffect(() => {
        const fetchNotifications = async () => {
            let { data: notifications, error } = await supabase
                .from("notifications")
                .select("")
                .order("created_at", { ascending: false }); // Default sorting

            if (error) console.error("Error fetching notifications:", error);
            else {
                setNotifications(notifications)

            }
        };
        fetchNotifications();


        // Real-time subscription
        const channel = supabase
            .channel("notifications")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "notifications" },
                (payload) => {
                    switch (payload.eventType) {
                        case 'INSERT':
                            setNotifications((prevNotifications) => [payload.new, ...prevNotifications]);
                            break;
                        case 'UPDATE':
                            setNotifications((prevNotifications) =>
                                prevNotifications.map((notif) =>
                                    notif.id === payload.new.id ? { ...notif, ...payload.new } : notif
                                )
                            );
                            break;
                        case 'DELETE':
                            setNotifications((prevNotifications) =>
                                prevNotifications.filter((notif) => notif.id !== payload.old.id)
                            );
                            break;
                        default:
                    }
                }
            )
            .subscribe();


        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    return notificationsData
}

export default useNotificationsData