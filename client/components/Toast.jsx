import React, { useEffect, useState } from "react";

function Toast({ message, duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="toast  toast-top toast-center">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Toast;
