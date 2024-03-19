import { createBrowserRouter } from 'react-router-dom';
import Form from './components/AddSalaryPage/Form.tsx';
import { InitialValues } from './components/AddSalaryPage/InitialValues.ts';
import { Home } from './pages/Home/Home.tsx';
import { CompanyComparison } from './pages/CompanyComparison.tsx';

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
    path: '/company-comparison',
    element: <CompanyComparison />,
  },
]);
