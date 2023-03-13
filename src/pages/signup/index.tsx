import React, { useState } from 'react';
import styles from "@/styles/SignUp.module.css";
import Link from "next/link";

export default function SignUp() {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password)

  const handleSubmit = () => {
    //handle submit 
  }

  return (
    <>
      <div className={styles.loginpage}>
        <div className={styles.form}>
          <h1 className={styles.heading}>Sign up for an account</h1>
          <input
            className={styles.formInput}
            type="email"
            value={username}
            placeholder="email"
            onChange={(evt)=> setUsename(evt.target.value)}
          />
          <input
            className={styles.formInput}
            type="password"
            value={password}
            placeholder="password"
            onChange={(evt)=> setPassword(evt.target.value)}
          />
          <button className={styles.signUp} onClick={handleSubmit}>Sign Up</button>
          <Link href="/login" className={styles.linkBtn}>
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
}
