import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/header/Header';
import Login from './components/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import Board from './pages/board/Board';
import Detail from './pages/detail/Detail';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Wrong from './pages/wrong/Wrong';
import MovePage from './components/MovePage';
import { createTheme, ThemeProvider } from '@mui/material';
import GlobalStyle from './styles/GlobalStyle';

const theme = createTheme({
  palette: {
    success: {
      main: '#000000',
    },
  },
});

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <RecoilRoot>
          <MovePage />
          <Login />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/board' element={<Board />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/write' element={<Write />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<Wrong />} />
          </Routes>
          <Header />
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default Router;
