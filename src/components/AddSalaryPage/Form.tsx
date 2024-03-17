
import { Box, useTheme, useMediaQuery, TextField, Button, Typography, InputAdornment } from '@mui/material';
import { Formik } from "formik/dist";
import { InferType } from 'yup';
import { InitialValues } from './InitialValues';
import { addSalarySchema } from './AddSalarySchema';
import InfiniteScroller from '../InfiniteScroller/InfiniteScroller';


export type AddSalary = InferType<typeof addSalarySchema>;

interface FormProps {
    initialValues: typeof InitialValues;
}


const Form = ({ initialValues }: FormProps) => {
    const { palette } = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const theme = useTheme()
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
            <InfiniteScroller />
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
                            gridTemplateColumns={isNonMobile ? "repeat(2, minmax(0, 1fr)" : "repeat(1, 1fr)"}
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
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                label="Total Work Experience (in years)"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.totalExperience}
                                name="totalExperience"
                                error={Boolean(touched.totalExperience) && Boolean(errors.totalExperience)}
                                helperText={touched.totalExperience && errors.totalExperience}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                label="Experience in this company (in years)"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.companyExperience}
                                name="companyExperience"
                                error={Boolean(touched.companyExperience) && Boolean(errors.companyExperience)}
                                helperText={touched.companyExperience && errors.companyExperience}
                                sx={{ gridColumn: "span 2" }}
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
                                sx={{ gridColumn: "span 4" }}
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
                                sx={{ gridColumn: "span 2" }}
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
                                sx={{ gridColumn: "span 2" }}
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
                                sx={{ gridColumn: "span 4" }}
                            />

                        </Box>
                        {/* Buttons */}
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
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;