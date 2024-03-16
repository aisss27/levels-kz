import { createBrowserRouter } from "react-router-dom";
import { Home } from './components/Home.tsx';
import Form from "./components/AddSalaryPage/Form.tsx";
import { InitialValues } from "./components/AddSalaryPage/InitialValues.tsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addsalary",
    element: <Form initialValues={InitialValues}/>,
  },
]);