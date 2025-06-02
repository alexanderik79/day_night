function ThemeToggle({ theme, toggleTheme }) {
  return (
    <>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}> {theme === 'light' ? 'Dark' : 'Light'} Mode </button>
    </>
  );
}
export default ThemeToggle;