import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import darkTheme from '../../assets/styles/themes/dark';

import Header from '../Header';
import Routes from '../../Routes';

import { Container } from './styles';

import ToastContainer from '../Toast/ToastContainer';

import { useTheme } from '../../contexts/ThemeContext';

function App() {
  const { currentTheme } = useTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme === 'light' ? defaultTheme : darkTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
