import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Dashboard from "./components/Dashboard";
import DeleteButton from "@repo/ui/DeleteButton";
export default function Home() {
  return (
    <div className={styles.page}>
      <Dashboard />
      <DeleteButton></DeleteButton>
    </div>
  );
}
