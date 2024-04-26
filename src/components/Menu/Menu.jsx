// Menu.js
import React, { useState } from 'react';
import clsx from 'clsx';
import { MdOutlineKeyboardArrowDown, MdPeopleAlt } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import cls from './Menu.module.css';
import { Modal } from 'antd';
import { LoginForm } from '../LoginForm/LoginForm';

export const Menu = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false);
  }
  function openModal() {
    setModal(true);
  }
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
          <li className={cls.menuItem} onClick={openModal}>
            <MdPeopleAlt className={cls.menuIcon} /> Кабинет
          </li>
          <li className={cls.menuItem}>
            <SlBasket className={cls.menuIcon} />
            Корзина{' '}
          </li>
        </ul>
      </div>
      <Modal open={modal} onCancel={closeModal} footer={null}>
        <LoginForm isAuth={isAuth} setIsAuth={setIsAuth} />
      </Modal>
    </div>
  );
};
