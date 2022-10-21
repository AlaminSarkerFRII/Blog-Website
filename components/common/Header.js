import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.heros}>
        <h1>NEXT-HERO</h1>
      <nav className={styles.main}>
        <ul className="navitems">
          <Link href="/"><a>Home </a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/signup"><a>Sign UP</a></Link>
        </ul>
      </nav>
      <div className={styles.items}>
        <span>sign up</span>
        <span>sign im</span>
      </div>
    </div>
  );
};

export default Header;
