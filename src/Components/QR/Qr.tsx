import Image from "next/image";
import React from "react";
import styles from "./Qr.module.css"
const Qr = () => {
  return (
    <>
      <article className={styles.container}>
        <Image
          alt="qr-code"
          src="/image-qr-code.png"
          height={290}
          width={290}
          className="images"
        ></Image>
        <h3 className={styles.text}>Improve your fron-end skills by building projects</h3>
        <p className={styles.text}>
          Scan the QR code to visit Frontend Mentor and take your skills to the
          next level
        </p>
      </article>
    </>
  );
};

export default Qr;
