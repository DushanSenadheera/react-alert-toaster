import "./Alert.css";
import React, { useEffect, useState, FC } from "react";
import { IconExclamationCircle, IconCheck, IconX  } from "@tabler/icons-react";

interface AlertProps {
  message: string;
  alertType: 'error' | 'success' | 'info';
}

const Alert: FC<AlertProps> = ({ message: initialMessage, alertType }) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  if (!message) return null;

  const icon = alertType === 'error' ? <IconX stroke={2} color="red" /> : alertType === 'success' ? <IconCheck stroke={2} color="green" /> : alertType === 'info' ? <IconExclamationCircle stroke={2} color="orange" /> : null;

  return (
    <div className="alert">
      <div className="icon">
        {icon}
      </div>
      <div className="message">
        {message}
      </div>
    </div>
  );
};

export default Alert;
