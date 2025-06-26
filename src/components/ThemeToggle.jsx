// src/components/ThemeToggle.jsx
import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки
import { toggleTheme, selectCurrentTheme } from '../features/theme/themeSlice'; // Импортируем экшен и селектор

function ThemeToggle() {
  // Получаем текущую тему из Redux стора
  const theme = useSelector(selectCurrentTheme);
  // Получаем функцию dispatch для отправки экшенов
  const dispatch = useDispatch();

  // Обработчик нажатия кнопки, который отправляет экшен toggleTheme
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <h2>Theme Toggle</h2>
      <button onClick={handleToggle}>
        {theme === 'light' ? 'Dark' : 'Light'} theme
      </button>
    </>
  );
}

export default ThemeToggle;