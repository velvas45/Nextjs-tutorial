import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './layouts.module.css';

function Layouts(props) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layouts;
