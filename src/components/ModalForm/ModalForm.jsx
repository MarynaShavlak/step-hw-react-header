import cls from './ModalForm.module.css';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { Laugh } from 'lucide-react';

export const ModalForm = ({ name, setName }) => {
  const [data, setLocalData] = useState(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: 'onChange' });

  const onSubmit = data => {
    console.log(data);
    setLocalData(data);
    setName(data.name);
    reset();
  };

  if (name) {
    return (
      <div className={cls.content}>
        <p className={cls.message}>
          <span className={cls.name}>{data.name}</span>, мы обязательно Вам
          перезвоним!{' '}
        </p>
        <Laugh className={cls.icon} size={100} color={'#84c603'} />
      </div>
    );
  }

  return (
    <div className={cls.content}>
      {!name && (
        <h2 className={cls.title}>Оставьте свой номер и мы Вам перезвоним!</h2>
      )}
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.inputWrap}>
          <input
            className={cls.input}
            placeholder="Введите имя"
            type="text"
            {...register('name', {
              required: 'Это поле обязательное',
              minLength: {
                value: 2,
                message: 'Имя должно содержать минимум 2 символа',
              },
              maxLength: {
                value: 20,
                message: 'Имя должно содержать максимум 20 символов',
              },
              pattern: {
                value: /^[A-Za-zА-Яа-яЁёЇїІіЄє ]+$/,
                message: 'Имя должно содержать только буквы и пробелы',
              },
            })}
          />
          {errors.name && (
            <span className={cls.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={cls.inputWrap}>
          <input
            className={cls.input}
            placeholder="Введите номер телефона"
            type="text"
            {...register('phone', {
              required: true,
              pattern: {
                value: /^[0-9]{10}$/,
                message:
                  'Номер телефона должен содержать 10 цифр и начинаться с 0',
              },
            })}
          />
          {errors.phone && (
            <span className={cls.error}>{errors.phone.message}</span>
          )}{' '}
        </div>

        <button className={cls.callButton} type="submit">
          Перезвоните мне
        </button>
      </form>
    </div>
  );
};
