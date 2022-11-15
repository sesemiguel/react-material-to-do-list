import React from 'react';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';
import List from './components/List';

function App() {

  // Hooks
  const [isDarkMode, setIsDarkMode] = React.useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode,
    },
  });

  const handleDarkModeChange = () => {
    setIsDarkMode(prevState => {
      return (
        prevState === 'dark' ? 'light' : 'dark'
      )
    })
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <>
        <NavBar 
          changeFunction={handleDarkModeChange}
          currentMode={isDarkMode}
        />
        <List />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
