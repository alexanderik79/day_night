import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Импортируем наш Redux Store, который мы только что создали
import { store } from './app/store.js';

// Импортируем компонент Provider из react-redux
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Оборачиваем все наше приложение (App) в компонент Provider */}
    {/* И передаем ему наш Redux Store через пропс 'store' */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
