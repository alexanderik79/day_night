// i hope it stateless )))
function ThemeToggle({ theme, toggleTheme }) {

  return (
    <>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}> {theme === 'light' ? 'dark' : 'light'} Mode
      </button>
    </>
  );
}

export default ThemeToggle;