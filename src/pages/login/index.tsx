import { useState } from "react";
import styles from "@/styles/SignUp.module.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <>
      <div className={styles.loginpage}>
        <div className={styles.form}>
          <h1 className={styles.heading}>SignIn to your account</h1>
          <input
            className={styles.formInput}
            type="text"
            placeholder="username"
          />
          <input
            className={styles.formInput}
            type="password"
            placeholder="password"
          />
          <button className={styles.signUp}>Login</button>
        </div>
      </div>
    </>
  );
}
