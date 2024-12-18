import { supabase } from "../createSupabase";
import styles from "./Header.module.css";

function Header({ unreadNum }) {
  async function handleReadUpdate() {
    const { error } = await supabase
      .from("notifications")
      .update({ readStatus: true })
      .eq("readStatus", false);
    if (error) {
      console.error(error);
    }
  }

  return (
    <header className={styles.header}>
      <h1>
        Notifications <span>{unreadNum}</span>
      </h1>

      <button onClick={handleReadUpdate}>Mark all as read</button>
    </header>
  );
}

export default Header;
