import Image from "next/image";
import { Card } from "@repo/ui/card";
import styles from "./page.module.css";
import ProductCatalog from "./components/Productcatalog";

export default function Home() {
  return (
      <ProductCatalog />
  );
}
