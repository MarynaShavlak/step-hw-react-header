import cls from './Hero.module.css';
import discountImg from '../../images/action.png';

export const Hero = () => {
  return (
    <div className={cls.hero}>
      <div className={cls.headerContainer}>
        <div className={cls.heroWrap}>
          <h1 className={cls.title}>Счастливые часы</h1>
          <p className={cls.text}>с 11:00 до 16:00 в будние дни</p>
          <button className={cls.heroBtn} type="button">
            Подробнее
          </button>
        </div>
        <img className={cls.discount} src={discountImg} />
      </div>
    </div>
  );
};
