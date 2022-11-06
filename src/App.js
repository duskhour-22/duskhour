import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { path } from './pages/router';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { light, night } from './assets/styles/theme';
import Loading from './components/common/Loading';
import { getFromLocalStorage } from './lib/localStorage';
const Layout = React.lazy(() => import('./pages/Layout'));
const Error = React.lazy(() => import('./pages/Error'));
const Landing = React.lazy(() => import('./pages/Landing'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Login = React.lazy(() => import('./pages/Login'));
const Main = React.lazy(() => import('./pages/Main'));
const Book = React.lazy(() => import('./pages/Book'));
const BookList = React.lazy(() => import('./pages/BookList'));
const Diary = React.lazy(() => import('./pages/Diary'));
const MakeBook = React.lazy(() => import('./pages/MakeBook'));
const WriteDiary = React.lazy(() => import('./pages/WriteDiary'));
const Userpage = React.lazy(() => import('./pages/Userpage'));
const People = React.lazy(() => import('./pages/People'));
const EditDiary = React.lazy(() => import('./pages/EditDiary'));
const EditBook = React.lazy(() => import('./pages/EditBook'));
const Theme = React.lazy(() => import('./pages/Theme'));

function App() {
  const [themeMode, setMode] = useTheme();
  const [theme, setTheme] = useState(light);
  const [isvisitor, setIsvisitor] = useState(false);
  const customTheme = getFromLocalStorage('custom');
  const { pathname } = useLocation();

  useEffect(() => {
    const isvisitor = getFromLocalStorage('/main');
    setIsvisitor(isvisitor);
  }, [pathname]);

  useEffect(() => {
    if (themeMode === 'night') setTheme(night);
    if (themeMode === 'light') setTheme(light);
    if (themeMode === 'custom') setTheme(customTheme);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="*"
            element={
              <Layout>
                <Error />
              </Layout>
            }
          ></Route>

          <Route
            path={path.signUp}
            element={
              <Layout hasCommon={false}>
                <Signup />
              </Layout>
            }
          ></Route>
          <Route
            path={path.logIn}
            element={
              <Layout hasCommon={false}>
                <Login />
              </Layout>
            }
          ></Route>
          <Route
            path={path.main}
            element={
              <Layout>
                <Main />
              </Layout>
            }
          ></Route>
          <Route
            path={path.root}
            element={
              isvisitor ? (
                <Layout>
                  <Main />
                </Layout>
              ) : (
                <Layout hasCommon={false}>
                  <Landing />
                </Layout>
              )
            }
          ></Route>
          <Route
            path={path.bookList}
            element={
              <Layout>
                <BookList />
              </Layout>
            }
          ></Route>
          <Route
            path={path.book}
            element={
              <Layout>
                <Book />
              </Layout>
            }
          ></Route>
          <Route
            path={path.makeBook}
            element={
              <Layout>
                <MakeBook />
              </Layout>
            }
          ></Route>
          <Route
            path={path.editBook}
            element={
              <Layout>
                <EditBook />
              </Layout>
            }
          ></Route>

          <Route
            path={path.diary}
            element={
              <Layout>
                <Diary />
              </Layout>
            }
          ></Route>
          <Route
            path={path.writeDiary}
            element={
              <Layout>
                <WriteDiary />
              </Layout>
            }
          ></Route>
          <Route
            path={path.editDiary}
            element={
              <Layout>
                <EditDiary />
              </Layout>
            }
          ></Route>
          <Route
            path={path.userpage}
            element={
              <Layout>
                <Userpage />
              </Layout>
            }
          ></Route>
          <Route
            path={path.people}
            element={
              <Layout>
                <People />
              </Layout>
            }
          ></Route>
          <Route
            path={path.theme}
            element={
              <Layout>
                <Theme theme={theme} setTheme={setTheme} setMode={setMode} />
              </Layout>
            }
          ></Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
