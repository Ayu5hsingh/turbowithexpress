import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import ProductCatalog from "./components/Productcatalog";

export default function Home() {
  return (
        <ProductCatalog />
  );
}
