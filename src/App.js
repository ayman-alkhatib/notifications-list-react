import Notification from "./components/Notification";
import { notificationData } from "./notificationsData";
import styles from './App.module.css'
import { useState } from "react";



function App() {
  const [markAllAsUnRead, setMarkAllAsUnRead] = useState(false)

  const notificationActiveNum = notificationData.reduce((prev, cur) => {
    if (cur.readStatus) return prev = prev + 1
    return prev
  }, 0)
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Notifications <span>{notificationActiveNum}</span></h1>

          <button onClick={() => {
            setMarkAllAsUnRead(true)
          }}>Mark all as read</button>
        </header>

        <main>
          {notificationData.map(notificationObject =>
          (<Notification
            notificationObject={notificationObject}
            markAllAsUnRead={markAllAsUnRead}
            key={notificationObject.id} />
          ))}
        </main>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.linkedin.com/in/ayman---alkhatib" target="_blank">Ayman Alkhatib</a>.
        </div>
      </div>
    </div >
  );
}

export default App;
