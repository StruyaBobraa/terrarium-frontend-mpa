'use client';
import styles from "./page.module.css";
import dynamic from "next/dynamic";
const Navbar = dynamic (() => import("@/containers/navbar/navbar"), {
  ssr: false,
});
const Greeting = dynamic (() => import("@/containers/greeting/greeting"), {
  ssr: false,
});


export default function Home() {
  return (
    <div className={styles.Layout}>
      <Navbar/>
      <Greeting/>
    </div>
  );
}
