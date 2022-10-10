import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat Burgers | Main Page</title>
        <meta name="title" content="fat burgers" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Main</h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            width={400}
            height={300}
            alt="fatBurger"
          />
        </div>
        <p className={styles.text}>
          Что такое идеальный бургер? Лист свежего салата, мягкие булочки,
          сочное мясо. О других составляющих начинки можно поспорить, ведь это
          дело вкуса.
        </p>
        <p className={styles.text}>
          Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
          обслуживания, правильная атмосфера заведения.
        </p>
        <Link href="/burgers">
          <a className={styles.btn}>All Burgers</a>
        </Link>
      </div>
    </>
  );
}
