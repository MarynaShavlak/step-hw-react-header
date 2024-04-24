import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import cls from './LogoAndContacts.module.css';
import logo from '../../images/logo.png';

export const LogoAndContacts = () => {
  return (
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
  );
};
