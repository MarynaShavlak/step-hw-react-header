import cls from './Header.module.css';
import { LogoAndContacts } from '../LogoAndContacts/LogoAndContacts';
import { Menu } from '../Menu/Menu';
import { Hero } from '../Hero/Hero';

export const Header = () => {
  return (
    <div className={cls.header}>
      <div className={cls.headerContainer}>
        <LogoAndContacts />
      </div>
      <Menu />
      <Hero />
    </div>
  );
};
