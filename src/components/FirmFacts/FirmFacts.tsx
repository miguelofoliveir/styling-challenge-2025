import React from "react";
import styles from "./FirmFacts.module.scss";
import { FirmFactCard } from "../FirmFactCard/FirmFactCard";
import closeIcon from "../../assets/close.svg";
import shapeIcon from "../../assets/shape.png";

export const FirmFacts: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={closeIcon} alt="Close" className={styles.closeIcon} />
      <h1 className={styles.title}>Firm Facts</h1>
      <hr className={styles.separator} />
      <div className={styles.grid}>
        <div className={styles.spanTwoRows}>
          <FirmFactCard
            variant="default"
            buttonText="This is a two line button that terminates with..."
            buttonVariant="icon"
            icon={shapeIcon}
          />
        </div>
        <FirmFactCard
          variant="default"
          buttonText="This is a two line button that terminates with..."
          buttonVariant="icon"
          icon={shapeIcon}
        />
        <FirmFactCard
          variant="default"
          buttonText="This is a one line button"
          buttonVariant="icon"
          icon={shapeIcon}
        />
        <FirmFactCard
          variant="default"
          buttonText="This is a two line button that terminates with..."
          buttonVariant="icon"
          icon={shapeIcon}
        />
        <FirmFactCard
          variant="border"
          buttonText="This is a two line button that terminates with..."
          buttonVariant="icon"
          icon={shapeIcon}
        />
        <FirmFactCard
          variant="disabled"
          buttonText="This is a two line button that terminates with..."
          buttonVariant="icon"
          icon={shapeIcon}
        />
        <FirmFactCard
          variant="border"
          buttonText="This is a two line button that terminates with..."
          buttonVariant="icon"
          icon={shapeIcon}
        />
      </div>
    </div>
  );
};