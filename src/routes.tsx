import { Home } from './pages/Home/Home.tsx';
import { CompanyComparison } from './pages/CompanyComparison.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage.tsx';
import AddSalaryPage from './pages/AddSalaryPage/AddSalaryPage.tsx';
import { CompanyPage } from './pages/CompanyPage/CompanyPage.tsx';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add-salary',
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
  {
    path: '/company-page/:id',
    element: <CompanyPage />,
  },
];
