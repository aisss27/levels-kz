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
import FormHelperText from '@mui/material/FormHelperText';
import { addSalarySchema } from './AddSalarySchema';
import { InitialValues } from './InitialValues';
import { locationsApi } from '../../api/locations-api.ts';
import { specializationsApi } from '../../api/specializations-api.ts';
import { gradesApi } from '../../api/grades-api.ts';
import { companiesApi } from '../../api/companies-api.ts';
import { salaryApi } from '../../api/salary-api.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

interface Location {
  _id: string;
  name: string;
}

interface Company {
  _id: string;
  name: string;
  location: string;
}
interface SelectedValues {
  company: string;
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

const AddSalaryPage = () => {
  const { userEmail } = useSelector((state: RootState) => state.authReducer);

  const { palette } = useTheme();
  const isNonMobile = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme();

  const [selectedValues, setSelectedValues] = useState<SelectedValues>({
    company: '',
    location: '',
    specialization: '',
    grade: '',
  });
  const [yoe, setYoe] = useState(0);
  const [yac, setYac] = useState(0);
  const [base, setBase] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [specializations, setSpecializations] = useState<Location[]>([]);
  const [grades, setGrades] = useState([]);
  const [openCompany, setOpenCompany] = useState(false);
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
    setOpenCompany(false);
    setOpenGrade(false);
    setOpenSpecialization(false);
    setOpenLocation(false);
  };

  useEffect(() => {
    try {
      locationsApi.getLocations().then((res) => {
        setLocations(res.data);
      });

      specializationsApi.getAllSpecializations().then((res) => {
        setSpecializations(res.data);
      });

      companiesApi.getCompanies().then((res) => {
        setCompanies(res.data);
      });

      gradesApi.getGrades().then((res) => {
        setGrades(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleFormSubmit = async () => {
    try {
      const currentDate = new Date();
      const currentDateAsString = currentDate.toISOString();
      await salaryApi.createSalary(
        userEmail,
        { name: selectedValues.location },
        { name: selectedValues.specialization },
        { name: selectedValues.company },
        {
          base: base,
          bonus: bonus,
        },
        yoe,
        yac,
        selectedValues.grade,
        currentDateAsString
      );
    } catch (error) {
      console.error('Error creating salary:', error);
    }
  };

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
                <InputLabel id="demo-multiple-name-label">Company</InputLabel>
                <Select
                  open={openCompany}
                  onOpen={() => setOpenCompany(true)}
                  onClose={() => setOpenCompany(false)}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedValues.company}
                  onChange={(event) => handleSelectChange(event, 'company')}
                  input={<OutlinedInput label="Company" />}
                  MenuProps={MenuProps}
                  error={touched.company && !selectedValues.company}
                >
                  {companies.map((company) => (
                    <MenuItem
                      key={company._id}
                      value={company.name}
                      style={getStyles(company.name, ['aaa'], theme)}
                    >
                      {company.name}
                    </MenuItem>
                  ))}
                </Select>
                {companies && touched.company && !selectedValues.company && (
                  <FormHelperText>{errors.company}</FormHelperText>
                )}
              </FormControl>
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

export default AddSalaryPage;
