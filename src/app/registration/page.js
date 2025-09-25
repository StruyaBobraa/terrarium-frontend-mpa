'use client'
import dynamic from "next/dynamic";
import styles from "../page.module.css";
const Registration = dynamic (() => import("@/containers/registration/registration"), {
    ssr: false,
});
const Navbar = dynamic (() => import("@/containers/navbar/navbar"), {
    ssr: false,
});


export default function RegistrationPage() {
    return (
        <div className={styles.Layout}>
            <Navbar/>
            <Registration/>
        </div>
    );
}