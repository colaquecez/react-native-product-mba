import MainRoute from 'src/shared/routes/Auth.route';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { colors } from 'src/styles/theme';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <Provider store={store}>
        <MainRoute />
      </Provider>
    </ThemeProvider>
  );
}
