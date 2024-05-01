import React from "react";
import styles from "./loader.module.css";
const Loader = () => {
    return (
        <div class={styles.container}>
            <div class={styles.dot}></div>
            <div class={styles.dot}></div>
            <div class={styles.dot}></div>
            <div class={styles.dot}></div>
            <div class={styles.dot}></div>
            <div class={styles.dot}></div>
        </div>
    );
};

export default Loader;
