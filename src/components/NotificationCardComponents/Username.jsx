import styles from "./Username.module.css";
function Username({ username }) {
  return (
    <span className={styles.username}>
      <strong> {username} </strong>
    </span>
  );
}

export default Username;
