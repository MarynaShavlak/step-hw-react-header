import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Laugh } from 'lucide-react';
import cls from './LoginForm.module.css';

export const LoginForm = ({ isAuth, setIsAuth }) => {
  const correctAuthData = {
    login: 'maryna@gmail.com',
    name: 'Maryna Shavlak',
    password: 'marynatest28',
  };
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = data => {
    if (data.login !== correctAuthData.login) {
      setLoginError('Неправильный логин');
      return;
    } else {
      setLoginError('');
    }

    if (data.password !== correctAuthData.password) {
      setPasswordError('Неправильный пароль');
      return;
    } else {
      setPasswordError('');
    }

    console.log('Authentication successful');
    setIsAuth(true);
    reset();
  };

  const onLogout = () => {
    setIsAuth(false);
  };

  if (isAuth) {
    return (
      <div className={cls.content}>
        <p className={cls.message}>
          <span className={cls.name}>{correctAuthData.name}</span>, добро
          пожаловать в личный кабинет!{' '}
        </p>
        <Laugh className={cls.icon} size={100} color={'#84c603'} />
        <button className={cls.actionButton} type="button" onClick={onLogout}>
          Выйти
        </button>
      </div>
    );
  }
  return (
    <div className={cls.content}>
      <h2 className={cls.title}>Войти в личный кабинет</h2>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.inputWrap}>
          <input
            className={cls.input}
            placeholder="Введите логин"
            type="text"
            {...register('login', {
              required: 'Это поле обязательное',
            })}
          />
          {errors.login && (
            <span className={cls.error}>{errors.login.message}</span>
          )}
          {loginError && <span className={cls.error}>{loginError}</span>}
        </div>
        <div className={cls.inputWrap}>
          <input
            className={cls.input}
            placeholder="Введите пароль"
            type="password" // Change type to password for password field
            {...register('password', {
              required: 'Это поле обязательное',
            })}
          />
          {errors.password && (
            <span className={cls.error}>{errors.password.message}</span>
          )}
          {passwordError && <span className={cls.error}>{passwordError}</span>}
        </div>

        <button className={cls.actionButton} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
