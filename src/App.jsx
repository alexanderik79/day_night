// src/App.jsx
import './App.css';
import { useSelector } from 'react-redux'; // Импортируем useSelector
import { selectCurrentTheme } from './features/theme/themeSlice'; // Импортируем наш селектор темы
import ThemeToggle from './components/ThemeToggle'; // Импортируем компонент ThemeToggle

function App() {
  // Получаем текущую тему из Redux стора с помощью селектора
  const theme = useSelector(selectCurrentTheme);

  return (
    // Применяем класс темы прямо к корневому div
    <div className={`app ${theme}`}>
      <h1>Redux Theme Toggle</h1>
      <ThemeToggle /> {/* ThemeToggle больше не принимает пропсы темы */}
      <p>
        Test of changing colors
      </p>
    </div>
  );
}

export default App;