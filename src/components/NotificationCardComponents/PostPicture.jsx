import styles from "./PostPicture.module.css";
function PostPicture({ notificationType }) {
  return (
    <>
      {notificationType.toLowerCase().includes("picture") && (
        <div className={styles.picture}>
          <img
            src="https://pnklrwkqmvxxpkqaanrs.supabase.co/storage/v1/object/sign/media/images/image-chess.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZWRpYS9pbWFnZXMvaW1hZ2UtY2hlc3Mud2VicCIsImlhdCI6MTczMzkwNDkyOCwiZXhwIjoxNzY1NDQwOTI4fQ._7JoqKc3_Ls62WYrMvc2My9dVCmdBT10YL3iB0AJ6gE&t=2024-12-11T08%3A15%3A29.684Z"
            alt="chess"
          />
        </div>
      )}
    </>
  );
}

export default PostPicture;
