// src/features/theme/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 1. Определяем начальное состояние для нашей темы.
// Попробуем загрузить его из localStorage, иначе по умолчанию будет 'light'.
const getInitialTheme = () => {
  if (typeof window !== 'undefined') { // Проверяем, что код выполняется в браузере
    const savedTheme = localStorage.getItem('appTheme');
    return savedTheme ? savedTheme : 'light';
  }
  return 'light'; // Для серверного рендеринга или других случаев, где localStorage недоступен
};

const initialState = {
  currentTheme: getInitialTheme(),
};

// 2. Создаем "срез" (slice) с помощью createSlice
const themeSlice = createSlice({
  name: 'theme', // Имя этого среза. Используется как префикс для типов экшенов.
  initialState, // Начальное состояние, которое мы определили выше
  reducers: {
    // 3. Определяем редьюсеры для нашего состояния.
    // Redux Toolkit использует библиотеку Immer, которая позволяет "мутировать" состояние
    // внутри редьюсеров, но на самом деле она создает новую неизменяемую копию.
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      // Сохраняем новое состояние темы в localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('appTheme', state.currentTheme);
      }
    },
    // Можно добавить другие редьюсеры, например, для установки конкретной темы
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('appTheme', state.currentTheme);
      }
    },
  },
});

// 4. Экспортируем экшен-креаторы, которые createSlice сгенерировал автоматически.
// Они позволяют нам создавать экшены, например: dispatch(toggleTheme())
export const { toggleTheme, setTheme } = themeSlice.actions;

// 5. Экспортируем сам редьюсер, который будет добавлен в Redux-стор.
export default themeSlice.reducer;

// 6. Опционально: Экспортируем селекторы. Селекторы - это функции, которые
// позволяют удобно извлекать данные из состояния стора.
export const selectCurrentTheme = (state) => state.theme.currentTheme;