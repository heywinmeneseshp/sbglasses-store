import React from "react";
import Search from "../components/Search";
import Order from "../components/Order";
import styles from "@styles/SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-container']}>
        <Search></Search>
      </div>
      <div>
        <Order></Order>
      </div>
    </div>
  );
};
export default SearchBar;
