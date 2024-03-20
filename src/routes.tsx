import { Home } from './pages/Home/Home.tsx';
import { CompanyComparison } from './pages/CompanyComparison.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage.tsx';
import AddSalaryPage from './pages/AddSalaryPage/AddSalaryPage.tsx';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addsalary',
    element: <AddSalaryPage />,
  },
  {
    path: '/company-comparison',
    element: <CompanyComparison />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/companies',
    element: <CompaniesPage />,
  },
];
