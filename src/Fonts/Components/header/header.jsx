import React from "react";
import styles from "./header.module.css";

const header = React.forwardRef((props, ref) => {
  return (
    <div className={styles.header_container} ref={ref}>
      <div className={styles.main_header}>
        <h1 className={styles.main_header_text}>WASSERTRAEGER</h1>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.navigation_elements}>
          <li className={styles.nav_item}>ABOUT</li>
          <li className={styles.nav_item}>SKILLS</li>
          <li className={styles.nav_item}>CONTACT</li>
          <li className={styles.nav_item}>GALLERY</li>
        </ul>
      </div>
    </div>
  );
});

export default header;
