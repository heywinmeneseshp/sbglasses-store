import React from "react";
import styles from "@styles/Product.module.scss";

const Product = () => {
    return (
        <div>
            <aside className={styles.product-detail}>
            
            <img className={styles.close} src="https://cdn-icons-png.flaticon.com/512/109/109602.png" alt="close"/>
            <img src="https://s2.r29static.com/bin/entry/8ce/0,200,2000,2000/x/1727217/image.png"
                alt="glasses"/>
        
            <div className={styles.product-info}>
                <p>$ 150.000</p>
                <p>Glasses</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste architecto eos et, sapiente eum ipsam
                    provident voluptatem delectus dolor quidem autem excepturi ut quis nostrum tempora at. Aliquid, fugit!</p>
                    <button className={styles.primary-button add-to-cart}> 
                        <img className={styles.icon-carrito} src="https://image.flaticon.com/icons/png/512/107/107831.png" alt=""/>
                        Agregar al carrito    
                    </button>
            </div>
        </aside>
        </div>
    )
}

export default Product;