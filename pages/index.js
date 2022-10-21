import Head from "next/head";
import Image from "next/image";
import Banner from "../components/common/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
}
