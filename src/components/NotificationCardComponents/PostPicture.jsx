import styles from "./PostPicture.module.css";
function PostPicture({ notificationType }) {
  return (
    <>
      {notificationType.toLowerCase().includes("picture") && (
        <div className={styles.picture}>
          <img src="images/image-chess.webp" alt="chess" />
        </div>
      )}
    </>
  );
}

export default PostPicture;
