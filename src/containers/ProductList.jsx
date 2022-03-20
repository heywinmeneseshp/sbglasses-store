import React, { useState, useEffect } from "react";
import Card from "@components/Cards";
import useGetProducts from "@hooks/useGetProducts";
import styles from '@styles/Cards.module.scss';

const API = "https://api.escuelajs.co/api/v1/products"

const ProducList = () => {

  const products = useGetProducts(API);
  
  return (
    <div className={styles.cards-container}>
      {products.map( (product, key) => (
        <Card product={product} key={key} />
      ))}
    </div>
  );
};

export default ProducList;
