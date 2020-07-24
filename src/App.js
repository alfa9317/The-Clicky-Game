import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './components/ui/Theme';
import Header from './components/ui/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      The Clicky Game
    </ThemeProvider>
  );
}

export default App;
