import React, {useContext} from "react";
import AppContext from "@context/AppContext"
import styles from '@styles/ShoppingCart.module.scss'

const ItemCard = (item) => {

  const { product, indexValue } = item;
  const { removeProduct } = useContext(AppContext);

  const handleRemove = index => {
    removeProduct(index);
   
  } 
    return (
        <div className={styles['item-cart']}>
          <img
            className={styles['img-cart']}
            src={product.images[0]}
            alt={product.title}
          />
          <p className={styles['item-title-cart']}>{product.title}</p>
          <div className={styles['container-valor-cart']}>
            <p className={styles['valor-cart']}>${product.price}</p>
            <img
              className={styles['delete-cart']}
              src="https://cdn-icons-png.flaticon.com/512/109/109602.png"
              alt=""
              onClick={ () => handleRemove(indexValue)}
            />
          </div>
        </div>
    )
}

export default ItemCard;