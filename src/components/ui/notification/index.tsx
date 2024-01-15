import ReactDOM from "react-dom";

import classes from "./styles.module.css";
import { NotificationVariants } from "./types";

type Props = {
  title: string;
  message: string;
  status: NotificationVariants;
};

export const Notification = (props: Props) => {
  const { title, message, status } = props;

  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${classes[`${status}`]}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")!
  );
};

export default Notification;
export * from "./types";
