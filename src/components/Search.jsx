import React from "react";
import styles from "@styles/Search.module.scss";

const Search = () => {
  return (
    <div className={styles.father-conainter}>
        <input
          className={styles.search}
          type="text"
          id="search"
          placeholder="Buscar producto"
        />
    </div>
  );
};

export default Search;
