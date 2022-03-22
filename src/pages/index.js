import Head from 'next/head';
import ProductList from "@containers/ProductList";
import SearchBar from "@containers/SearchBar";
import AsideLeft from "@containers/AsideLeft";
import styles from "@styles/Home.module.scss";

export default function Home() {
  return (
    <>
    <Head>
    <title>Sb Glasses</title>
    </Head>
      <section className={styles["super-home"]}>
      <section className={styles["home-container"]}>
        <div className={styles["one"]}>
          <SearchBar />
        </div>
        <div className={styles["two"]}>
          <AsideLeft className={styles["four"]}/>
          <ProductList className={styles["three"]} />
        </div>
      </section>
    </section>
    </>    
  )
}
