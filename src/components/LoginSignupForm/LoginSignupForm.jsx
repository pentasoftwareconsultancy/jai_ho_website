import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import "boxicons";

const LoginSignupForm = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <div className={styles["curved-shape"]}></div>
      <div className={styles["curved-shape2"]}></div>
      
      {/* Login Form */}
      <div className={`${styles["form-box"]} ${styles.Login}`}>
        <h2 className={styles.animation} style={{ "--D": 0, "--S": 21 }}>Login</h2>
        <form>
          <div className={styles["input-box"]}>
            <input type="text" required />
            <label>Username</label>
            <box-icon type='solid' name='user'></box-icon>
          </div>
          <div className={styles["input-box"]}>
            <input type="password" required />
            <label>Password</label>
            <box-icon name='lock-alt' type='solid'></box-icon>
          </div>
          <div className={styles["input-box"]}>
            <button className={styles.btn} type="submit">Login</button>
          </div>
          <div className={styles["regi-link"]}>
            <p>Don't have an account? <br /> <a href="#" onClick={() => setIsActive(true)}>Sign Up</a></p>
          </div>
        </form>
      </div>
      
      {/* Info for Login */}
      <div className={`${styles["info-content"]} ${styles.Login}`}>
        <h2>WELCOME BACK!</h2>
        <p>We are happy to have you with us again. If you need anything, we are here to help.</p>
      </div>

      {/* Register Form */}
      <div className={`${styles["form-box"]} ${styles.Register}`}>
        <h2>Register</h2>
        <form>
          <div className={styles["input-box"]}>
            <input type="text" required />
            <label>Username</label>
            <box-icon type='solid' name='user'></box-icon>
          </div>
          <div className={styles["input-box"]}>
            <input type="email" required />
            <label>Email</label>
            <box-icon name='envelope' type='solid'></box-icon>
          </div>
          <div className={styles["input-box"]}>
            <input type="password" required />
            <label>Password</label>
            <box-icon name='lock-alt' type='solid'></box-icon>
          </div>
          <div className={styles["input-box"]}>
            <button className={styles.btn} type="submit">Register</button>
          </div>
          <div className={styles["regi-link"]}>
            <p>Already have an account? <br /> <a href="#" onClick={() => setIsActive(false)}>Sign In</a></p>
          </div>
        </form>
      </div>
      
      {/* Info for Register */}
      <div className={`${styles["info-content"]} ${styles.Register}`}>
        <h2>WELCOME!</h2>
        <p>We’re delighted to have you here. If you need any assistance, feel free to reach out.</p>
      </div>
    </div>
  );
};

export default LoginSignupForm;
