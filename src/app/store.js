// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice'; // Импортируем наш редьюсер темы

export const store = configureStore({
  reducer: {
    // Здесь мы определяем, как наше общее состояние Redux будет выглядеть.
    // 'theme' будет ключом в глобальном состоянии,
    // а themeReducer будет управлять состоянием, связанным с темой.
    theme: themeReducer,
    // Если у вас появятся другие "срезы" состояния (например, для пользователей, товаров, корзины),
    // вы будете добавлять их здесь под другими ключами:
    // users: usersReducer,
    // products: productsReducer,
  },
});