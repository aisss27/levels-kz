import { createBrowserRouter } from 'react-router-dom';
import Form from './components/AddSalaryPage/Form.tsx';
import { InitialValues } from './components/AddSalaryPage/InitialValues.ts';
import { Home } from './pages/Home/Home.tsx';
import { CompanyPage } from './pages/CompanyPage/CompanyPage.tsx';
import { CompaniesPage } from './pages/AllCompaniesPage/CompaniesPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addsalary',
    element: <Form initialValues={InitialValues} />,
  },
  {
    path: '/submittedsalaries',
    element: <CompanyPage />,
  },
  {
    path: '/companies',
    element: <CompaniesPage />,
  },
]);
