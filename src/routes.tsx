import Form from './components/AddSalaryPage/Form.tsx';
import { InitialValues } from './components/AddSalaryPage/InitialValues.ts';
import { Home } from './pages/Home/Home.tsx';
import { CompanyComparison } from './pages/CompanyComparison.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import CompaniesPage from './pages/CompaniesPage/CompaniesPage.tsx';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addsalary',
    element: <Form initialValues={InitialValues} />,
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
