import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuDesktop from '@components/MenuDesktop';
import ShoppingCart from '@containers/ShoppingCart';
import MenuMobile from '@containers/MenuMobile';
import AppContext from '@context/AppContext';
//Importar Imagenes
import shopping_cart from '@icons/shopping_cart.png';
import menu from '@icons/icon_menu.png';
import logo from '@logos/logoTienda.png';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const { state, openWindows } = useContext(AppContext);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleOrdes = () => {
    openWindows();
    setToggle(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    openWindows();
  };

  return (
    <div className={styles['header']}>
      <nav className={styles['Header']}>
        <Image
          className={styles['menu']}
          src={menu}
          alt="icono-menu"
          onClick={() => handleToggleMenu()}
          width={25}
          height={25}
        />
        <div className={styles['left-nav']}>
          <Link href="/">
            <Image className={styles['logo-nav']} src={logo} alt="logo" 
            height={50}
            width={165}/>
          </Link>
          <ul className={styles['categorias']}>
            <li>
              <a href="">Todas</a>
            </li>
            <li>
              <a href="">Vintage</a>
            </li>
            <li>
              <a href="">Cat</a>
            </li>
            <li>
              <a href="">Aviador</a>
            </li>
            <li>
              <a href="">Clásica</a>
            </li>
            <li>
              <a href="">Lentes de Sol</a>
            </li>
          </ul>
        </div>
        <div className={styles['right-nav']}>
          <ul>
            <li className={styles['email']} onClick={handleToggle}>
              craken@example.com
            </li>
            <li
              className={styles['nav-shopping-cart']}
              onClick={handleToggleOrdes}
            >
              <Image
                className={styles['shopping-car']}
                src={shopping_cart}
                alt=""
                width={22}
                height={22}
              />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
      </nav>
      {toggle && <MenuDesktop />}
      {state.windows && <ShoppingCart />}
      {toggleMenu && <MenuMobile />}
    </div>
  );
};

export default Header;
