import Notification from "./components/Notification";
import { notificationData } from "./notificationsData";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {notificationData.map(notificationObject =>
        (<Notification
          notificationObject={notificationObject}
          key={notificationObject.id} />
        ))}

      </header>
    </div>
  );
}

export default App;
