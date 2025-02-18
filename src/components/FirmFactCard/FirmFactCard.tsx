import React from "react";
import styles from "./FirmFactCard.module.scss";
import { Button } from "../Button/Button";

interface FirmFactCardProps {
  variant: "default" | "border" | "disabled";
  buttonText: string;
  buttonVariant?: "default" | "icon";
  icon?: string;
}

export const FirmFactCard: React.FC<FirmFactCardProps> = ({
  variant,
  buttonText,
  buttonVariant = "icon",
  icon,
}) => {
  const cardClass = `${styles.card} ${styles[variant]}`;

  return (
    <div className={cardClass}>
      <Button>
        {buttonVariant === "icon" && icon && (
          <img src={icon} alt="Icon" className={styles.icon} />
        )}
        {buttonText}
      </Button>
    </div>
  );
};
