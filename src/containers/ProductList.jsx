import React, { useState, useEffect } from "react";
import Card from "@components/Cards";
import useGetProducts from "@hooks/useGetProducts";
import styles from '@styles/Cards.module.scss';



const ProducList = ({number}) => {

  const products = useGetProducts(number);
  
  return (
    <div className={styles['cards-container']}>
      {products.map( (product, key) => (
        <Card product={product} key={key} />
      ))}
    </div>
  );
};

export default ProducList;
