'use client'
import dynamic from "next/dynamic";
import styles from "../page.module.css";
import Navbar from "@/containers/navbar/navbar";
const Recovery = dynamic (() => import("@/containers/recovery/recovery"));

export default function RegistrationPage() {
    return (
        <div className={styles.Layout}>
            <Navbar/>
            <Recovery/>
        </div>
    );
}