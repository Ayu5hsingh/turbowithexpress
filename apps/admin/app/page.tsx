import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <Dashboard />
    </div>
  );
}
