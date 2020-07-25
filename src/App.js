import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import theme from './components/ui/Theme';
import Header from './components/ui/Header';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route path={process.env.PUBLIC_URL + '/about'} component={Home} />
        </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
