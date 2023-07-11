import React from "react";
import styles from "./underheader.module.css";
import headerImage from "../../../assets/Asset 2.png";
export default function underheader(props) {
  const { className } = props;

  return (
    <div className={className}>
      <h2 className={styles.nico}>NICO</h2>
      <img src={headerImage} alt="" className={styles.header_image} />
      <p className={styles.artwork}>ARTWORK</p>
    </div>
  );
}
