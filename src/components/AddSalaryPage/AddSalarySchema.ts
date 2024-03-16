import { object, string, number } from 'yup';
export const addSalarySchema = object({
    company: string().required("Company name is required"), // Add validation message
    totalExperience: number().typeError("Must be a number").required("Total experience is required"),
    companyExperience: number().typeError("Must be a number").required("Company experience is required"),
    location: string().typeError("Must be a string").required("Location is required"),
    baseSalary: number().typeError("Must be a number").required("Base salary is required"),
    bonus: number().typeError("Must be a number").required("Bonus is required"),
    specialization: string().required("Specialization is required"),
})