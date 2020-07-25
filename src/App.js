import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import './App.css';
import theme from './components/ui/Theme';
import Header from './components/ui/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
    </ThemeProvider>
  );
}

export default App;
