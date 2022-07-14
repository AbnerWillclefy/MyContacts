import { Container } from './styles';

import logo from '../../assets/images/logo.svg';
import darklogo from '../../assets/images/dark-logo.svg';

import { useTheme } from '../../contexts/ThemeContext';

import Switch from '../Switch';

export default function Header() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <Container>
      <img src={currentTheme === 'light' ? logo : darklogo} alt="MyContacts" width="201" />
      <Switch isOn={currentTheme === 'light'} toggle={toggleTheme} />
    </Container>
  );
}
