// Menu.js
import React from 'react';
import clsx from 'clsx';
import { MdOutlineKeyboardArrowDown, MdPeopleAlt } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import cls from './Menu.module.css';

export const Menu = () => {
  return (
    <div className={cls.menuWrap}>
      <div className={cls.headerContainer}>
        <ul className={cls.menu}>
          <li className={cls.menuItem}>
            Меню <MdOutlineKeyboardArrowDown />
          </li>
          <li className={clsx(cls.menuItem, cls.menuItemActive)}>
            Акции и Скидки
          </li>
          <li className={cls.menuItem}>Доставка и оплата</li>
          <li className={cls.menuItem}>Новости</li>
          <li className={cls.menuItem}>Контакты</li>
          <li className={cls.menuItem}>
            <MdPeopleAlt className={cls.menuIcon} /> Кабинет
          </li>
          <li className={cls.menuItem}>
            <SlBasket className={cls.menuIcon} />
            Корзина{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};
