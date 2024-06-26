import { Route, Routes } from 'react-router-dom';
import { routes } from './routes.tsx';
import { Header } from './components/Header/Header.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
