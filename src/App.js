import Notification from "./components/Notification";
import { notificationData } from "./notificationsData";
import styles from './App.module.css'
import { useState } from "react";



function App() {
  const [notificationDataState, setNotificationDataState] = useState(notificationData)
  function handleMarkAllASUnRead() {
    setNotificationDataState((state) => {
      return state.map((notificationObject) => { return { ...notificationObject, readStatus: false } })
    })
  }
  const notificationActiveNum = notificationDataState.reduce((prev, cur) => {
    if (cur.readStatus) return prev = prev + 1
    return prev
  }, 0)
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Notifications <span>{notificationActiveNum}</span></h1>

          <button onClick={handleMarkAllASUnRead}>Mark all as read</button>
        </header>

        <main>
          {notificationDataState.map(notificationObject =>
          (<Notification
            notificationObject={notificationObject}
            key={notificationObject.id} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
