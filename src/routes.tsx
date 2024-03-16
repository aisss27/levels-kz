import { createBrowserRouter } from "react-router-dom";
import Form from "./components/AddSalaryPage/Form.tsx";
import { InitialValues } from "./components/AddSalaryPage/InitialValues.ts";
import { Home } from './pages/Home.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: "/addsalary",
    element: <Form initialValues={InitialValues}/>,
  },
]);