import { useEffect, useState } from 'react';
import {
  Box,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
  Theme,
} from '@mui/material';
import { Formik } from 'formik/dist';
import { InferType } from 'yup';
import { InitialValues } from './InitialValues';
import { addSalarySchema } from './AddSalarySchema';
import { companiesApi, setAuthToken } from '../../api/companies-api';
import FormHelperText from '@mui/material/FormHelperText';
export type AddSalary = InferType<typeof addSalarySchema>;

interface Location {
  _id: string;
  name: string;
}

interface SelectedValues {
  location: string;
  specialization: string;
  grade: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, selectedValues: string[], theme: Theme) {
  return {
    fontWeight:
      selectedValues.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Form = () => {
  const { palette } = useTheme();
  const isNonMobile = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme();

  const [selectedValues, setSelectedValues] = useState<SelectedValues>({
    location: '',
    specialization: '',
    grade: '',
  });
  const [yoe, setYoe] = useState(0);
  const [yac, setYac] = useState(0);
  const [base, setBase] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [locations, setLocations] = useState<Location[]>([]);
  const [specializations, setSpecializations] = useState<Location[]>([]);
  const [grades, setGrades] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [openLocation, setOpenLocation] = useState(false);
  const [openSpecialization, setOpenSpecialization] = useState(false);
  const [openGrade, setOpenGrade] = useState(false);
  const handleSelectChange = (
    event: SelectChangeEvent<string | number>,
    type: keyof SelectedValues
  ) => {
    const {
      target: { value },
    } = event;

    setSelectedValues((prevState) => ({
      ...prevState,
      [type]: value as string | number,
    }));

    setOpenGrade(false);
    setOpenSpecialization(false);
    setOpenLocation(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = '';
        setAuthToken(token);

        const [locationsData, specializationsData, gradesData] =
          await Promise.all([
            companiesApi.getLocations(),
            companiesApi.getAllSpecializations(),
            companiesApi.getGrades(),
          ]);

        setLocations(locationsData.data);
        setSpecializations(specializationsData.data);
        setGrades(gradesData.data);
        console.log(specializations, locations);
      } catch (error) {
        setError('Error fetching locations');
        console.log('Error fetching locations:', error);
      }
    };

    fetchData();
    console.log(error);
  });

  const handleFormSubmit = () => {};
  return (
    <Box
      sx={{
        width: isNonMobile ? '50%' : '93%',
        p: '2rem',
        m: '2rem auto',
        borderRadius: '1.5rem',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
        Welcome to Levels
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={InitialValues}
        validationSchema={addSalarySchema}
      >
        {({ errors, touched, handleBlur, handleSubmit, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns={
                isNonMobile ? 'repeat(2, minmax(0, 1fr)' : 'repeat(1, 1fr)'
              }
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                label="Total Work Experience (in years)"
                onBlur={handleBlur}
                onChange={(e) => setYoe(Number(e.target.value))}
                value={yoe}
                type="number"
                name="totalExperience"
                error={Boolean(touched.yoe) && Boolean(errors.yoe)}
                helperText={touched.yoe && errors.yoe}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                label="Experience in this company (in years)"
                onBlur={handleBlur}
                onChange={(e) => setYac(Number(e.target.value))}
                value={yac}
                type="number"
                name="companyExperience"
                error={Boolean(touched.yac) && Boolean(errors.yac)}
                helperText={touched.yac && errors.yac}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                label="Base Salary (a year)"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">KZT</InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={(e) => setBase(Number(e.target.value))}
                value={base}
                name="baseSalary"
                error={
                  Boolean(touched.salary && touched.salary.base) &&
                  Boolean(errors.salary && errors.salary.base)
                }
                helperText={
                  touched &&
                  touched.salary &&
                  touched.salary.base &&
                  errors.salary &&
                  errors.salary.base
                }
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                label="Bonus (a year)"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">KZT</InputAdornment>
                  ),
                }}
                onBlur={handleBlur}
                onChange={(e) => setBonus(Number(e.target.value))}
                value={bonus}
                name="bonus"
                error={
                  Boolean(touched.salary) &&
                  Boolean(errors.salary && errors.salary.bonus)
                }
                helperText={
                  touched &&
                  touched.salary &&
                  touched.salary.bonus &&
                  errors.salary &&
                  errors.salary.bonus
                }
                sx={{ gridColumn: 'span 2' }}
              />
              <FormControl sx={{ gridColumn: 'span 4' }}>
                <InputLabel id="demo-multiple-name-label">Location</InputLabel>
                <Select
                  open={openLocation}
                  onOpen={() => setOpenLocation(true)}
                  onClose={() => setOpenLocation(false)}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedValues.location}
                  onChange={(event) => handleSelectChange(event, 'location')}
                  input={<OutlinedInput label="Location" />}
                  MenuProps={MenuProps}
                  error={touched.location && !selectedValues.location}
                >
                  {locations.map((location) => (
                    <MenuItem
                      key={location._id}
                      value={location.name}
                      style={getStyles(location.name, ['aaa'], theme)}
                    >
                      {location.name}
                    </MenuItem>
                  ))}
                </Select>
                {locations && touched.location && !selectedValues.location && (
                  <FormHelperText>{errors.location}</FormHelperText>
                )}
              </FormControl>
              <FormControl sx={{ gridColumn: 'span 4' }}>
                <InputLabel id="demo-multiple-name-label">
                  Specialization
                </InputLabel>
                <Select
                  open={openSpecialization}
                  onOpen={() => setOpenSpecialization(true)}
                  onClose={() => setOpenSpecialization(false)}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedValues.specialization}
                  onChange={(event) =>
                    handleSelectChange(event, 'specialization')
                  }
                  input={<OutlinedInput label="Sepcialization" />}
                  MenuProps={MenuProps}
                  error={
                    touched.specialization && !selectedValues.specialization
                  }
                >
                  {specializations.map((spec) => (
                    <MenuItem
                      key={spec.name}
                      value={spec.name}
                      style={getStyles(spec.name, ['aaa'], theme)}
                    >
                      {spec.name}
                    </MenuItem>
                  ))}
                </Select>
                {specializations &&
                  touched.specialization &&
                  !selectedValues.specialization && (
                    <FormHelperText>{errors.specialization}</FormHelperText>
                  )}
              </FormControl>
              <FormControl sx={{ gridColumn: 'span 4' }}>
                <InputLabel id="demo-multiple-name-label">Grade</InputLabel>
                <Select
                  open={openGrade}
                  onOpen={() => setOpenGrade(true)}
                  onClose={() => setOpenGrade(false)}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedValues.grade}
                  onChange={(event) => handleSelectChange(event, 'grade')}
                  input={<OutlinedInput label="Grade" />}
                  MenuProps={MenuProps}
                  error={touched.grade && !selectedValues.grade}
                >
                  {grades.map((gr, ind) => (
                    <MenuItem
                      key={ind}
                      value={gr}
                      style={getStyles(gr, ['aaa'], theme)}
                    >
                      {gr}
                    </MenuItem>
                  ))}
                </Select>
                {grades && touched.grade && !selectedValues.grade && (
                  <FormHelperText>{errors.grade}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Button
              fullWidth
              onClick={() => resetForm()}
              type="submit"
              sx={{
                m: '2rem 0',
                p: '1rem',
                backgroundColor: palette.primary.main,
                color: theme.palette.background.default,
                '&:hover': { color: palette.primary.main },
              }}
            >
              Add Salary
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
