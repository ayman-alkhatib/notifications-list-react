import styles from './App.module.css'
import { useEffect, useState } from "react";
import Header from "./components/Header";
import NotificationsCardList from "./components/NotificationsCardList";
import Footer from './components/Footer';
import useNotificationsData from './useNotificationsData';

function App() {
  const notifications = useNotificationsData()
  const [unreadNum, setUnreadNum] = useState(0);
  useEffect(() => {
    setUnreadNum(
      notifications.reduce((prev, cur) => {
        if (!cur.readStatus) return (prev = prev + 1);
        return prev;
      }, 0)
    );
  }, [notifications]);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header unreadNum={unreadNum} />
        <NotificationsCardList notificationsData={notifications} />
        <Footer />
      </div>
    </div >
  );
}

export default App;
