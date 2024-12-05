import styles from './App.module.css'
import { useState } from "react";
import Header from "./components/Header";
import NotificationsCardList from "./components/NotificationsCardList";
import Footer from './components/Footer';



function App() {
  const [markAllAsUnRead, setMarkAllAsUnRead] = useState(false)


  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header setMarkAllAsUnRead={setMarkAllAsUnRead} />
        <NotificationsCardList markAllAsUnRead={markAllAsUnRead} />
        <Footer />
      </div>
    </div >
  );
}

export default App;
