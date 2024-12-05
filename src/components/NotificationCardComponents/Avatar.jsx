import styles from "./Avatar.module.css";
function Avatar({ imgSrc }) {
  return (
    <div className={styles.image}>
      <img src={imgSrc} alt="avatar" />
    </div>
  );
}

export default Avatar;
