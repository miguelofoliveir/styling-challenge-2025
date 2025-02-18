import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant?: "default" | "icon";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  disabled = false,
  children,
  onClick,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {variant === "icon" && (
        <img src="/path/to/icon.svg" alt="Icon" className={styles.icon} />
      )}
      <span className={styles.text}>{children}</span>
    </button>
  );
};
