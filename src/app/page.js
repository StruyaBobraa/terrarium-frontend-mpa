'use client';
import React, { useState } from "react";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Navbar from "@/containers/navbar/navbar";
const Animals = dynamic (() => import("@/containers/animals/animals"));
const Greeting = dynamic (() => import("@/containers/greeting/greeting"));



export default function Home() {
  const [isAuth, setIsAuth] = useState(false);

  function loginClickHandler(email, password) {
    console.log(email, password);
    setIsAuth(true);
  }

  return (
    <div className={styles.Layout}>
      <Navbar/>
      {
        isAuth 
        ? <Animals/>
        : <Greeting onLoginClick={(email, password) => loginClickHandler(email, password)}/>
      }
    </div>
  );
}
