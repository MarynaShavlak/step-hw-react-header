import cls from './Header.module.css';
import clsx from 'clsx';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import { MdPeopleAlt } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.headerContainer}>
        <div className={cls.headerContacts}>
          <img src={logo} alt="Logo" className={cls.logo} />
          <div className={cls.contactsInfo}>
            <span className={cls.contactsItem}>
              <IoLocationSharp />
              <a href="https://en.wikipedia.org/wiki/Kyiv" className={cls.link}>
                г.Киев
              </a>
            </span>
            <span className={cls.contactsItem}>
              <MdEmail />{' '}
              <a href="mailto:test@gmail.com" className={cls.link}>
                test@gmail.com
              </a>
            </span>
            <span className={cls.schedule}>
              <span>
                {' '}
                <a href="tel:+3808003332222" className={cls.link}>
                  +380 (800) 333 2 222
                </a>
              </span>
              <span>Работаем с 11.00 до 23.00</span>
            </span>
          </div>
          <button type="button" className={cls.callButton}>
            Обратный звонок
          </button>
        </div>
      </div>

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
    </div>
  );
};
