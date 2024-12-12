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

    return notificationsData
}

export default useNotificationsData
