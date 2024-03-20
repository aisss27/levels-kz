import { createBrowserRouter } from 'react-router-dom';
import Form from './pages/AddSalaryPage/AddSalaryPage.tsx';
import { Home } from './pages/Home/Home.tsx';
import { CompanyComparison } from './pages/CompanyComparison.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addsalary',
    element: <Form />,
  },
  {
    path: '/company-comparison',
    element: <CompanyComparison />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);
