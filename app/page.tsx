import styles from "./page.module.css";
import React from "react";

const App: React.FC = () => {
  return (
      <main className={styles.container}>
          <div className={styles.dataFetchContainer}></div>
      </main>
  );
};

export default App;
