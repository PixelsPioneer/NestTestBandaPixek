import React, { useEffect } from 'react';
import styles from './header.module.css';

interface HeaderProps {
  toggleComponent: (componentName: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  isDarkTheme: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleComponent, isDarkTheme, setTheme }) => {

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add(styles['dark-theme']);
      document.body.classList.remove(styles['light-theme']);
    } else {
      document.body.classList.add(styles['light-theme']);
      document.body.classList.remove(styles['dark-theme']);
    }
  }, [isDarkTheme]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>My App</div>
      <div className={styles['theme-toggle-container']} onClick={toggleTheme}>
        <div
          className={`${styles['theme-toggle']} ${isDarkTheme ? styles.dark : styles.light}`}
        >
          <span className={styles.label}>light</span>
          <span className={styles.label}>dark</span>
          <div className={styles.slider}></div>
        </div>
      </div>
    </header>
  );
};
