/* import React, {useState} from 'react'; */
import { Box, useTheme, useMediaQuery, TextField, Button, Typography, InputAdornment } from '@mui/material';
/* import { Link, useNavigate } from "react-router-dom" */
import { Formik } from "formik";
import { object, string, number, date, InferType } from 'yup';
import { InitialValues } from './InitialValues';
const addSalarySchema = object({
    company: string().required("Company name is required"), // Add validation message
    totalExperience: number().typeError("Must be a number").required("Total experience is required"),
    companyExperience: number().typeError("Must be a number").required("Company experience is required"),
    location: string().typeError("Must be a string").required("Location is required"),
    baseSalary: number().typeError("Must be a number").required("Base salary is required"),
    bonus: number().typeError("Must be a number").required("Bonus is required"),
    createdOn: date().default(() => new Date()),
    specialization: string().required("Specialization is required"),
})

/* const salary = await addSalarySchema.validate(await fetchSalary()); */

export type AddSalary = InferType<typeof addSalarySchema>;

interface FormProps {
    initialValues: typeof InitialValues;
}


const Form = ({ initialValues }: FormProps) => {
    const { palette } = useTheme();
    const isNonMobile = useMediaQuery("(mid-width: 1000px)");
    const theme = useTheme()

    /* const [company, setCompany] = useState("");
    const [totalExperience, setTotalExperience] = useState("");
    const [companyExperience, setCompanyExperience] = useState("");
    const [location, setLocation] = useState("");
    const [baseSalary, setBaseSalary] = useState("");
    const [bonus, setBonus] = useState("");
    const [createdOn, setCreatedOn] = useState("");
    const [specialization, setSpecialization] = useState(""); */
    const handleFormSubmit = () => {

    }
    return (
        <Box
            sx={{
                width: isNonMobile ? "50%" : "93%",
                p: "2rem",
                m: "2rem auto",
                borderRadius: "1.5rem",
                backgroundColor: theme.palette.background.default,

            }}
        >
            <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
                Welcome to Levels
            </Typography>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={addSalarySchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    resetForm,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(2, minmax(0, 1fr)"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                label="Company"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.company}
                                name="company"
                                error={
                                    Boolean(touched.company) && Boolean(errors.company)
                                }
                                helperText={touched.company && errors.company}
                                sx={{ gridColumn: "span 8" }}
                            />
                            <TextField
                                label="Total Work Experience (in years)"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.totalExperience}
                                name="totalExperience"
                                error={Boolean(touched.totalExperience) && Boolean(errors.totalExperience)}
                                helperText={touched.totalExperience && errors.totalExperience}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                label="Experience in this company (in years)"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.companyExperience}
                                name="companyExperience"
                                error={Boolean(touched.companyExperience) && Boolean(errors.companyExperience)}
                                helperText={touched.companyExperience && errors.companyExperience}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                label="Location (city)"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                name="location"
                                error={
                                    Boolean(touched.location) && Boolean(errors.location)
                                }
                                helperText={touched.location && errors.location}
                                sx={{ gridColumn: "span 8" }}
                            />
                            <TextField
                                label="Base Salary (a year)"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.baseSalary}
                                name="baseSalary"
                                error={
                                    Boolean(touched.baseSalary) && Boolean(errors.baseSalary)
                                }
                                helperText={touched.baseSalary && errors.baseSalary}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                label="Bonus (a year)"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.bonus}
                                name="bonus"
                                error={
                                    Boolean(touched.bonus) && Boolean(errors.bonus)
                                }
                                helperText={touched.bonus && errors.bonus}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                label="Specialization"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.specialization}
                                name="specialization"
                                error={
                                    Boolean(touched.specialization) && Boolean(errors.specialization)
                                }
                                helperText={touched.specialization && errors.specialization}
                                sx={{ gridColumn: "span 8" }}
                            />

                        </Box>
                        {/* Buttons */}
                        <Box>
                            <Button
                                fullWidth
                                onClick={() => resetForm()}
                                type="submit"
                                sx={{
                                    m: "2rem 0",
                                    p: "1rem",
                                    backgroundColor: palette.primary.main,
                                    color: theme.palette.background.default,
                                    "&:hover": { color: palette.primary.main },
                                }}
                            >
                                Add Salary
                            </Button>

                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;