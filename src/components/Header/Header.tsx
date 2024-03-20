import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { companies } from '../Dashboard/data.ts';

export function Header() {
  const filterOptions = createFilterOptions({
    limit: 5,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          <div className={styles.logo}>
            <img
              className={styles.logo_image}
              src="https://www.pngall.com/wp-content/uploads/2017/01/Growth-Chart.png"
              alt="logo"
            />
            <span className={styles.logo_text}>Levels</span>
          </div>
          <ul className={styles.links}>
            <NavLink className={styles.link} to="/addsalary">
              Add
            </NavLink>
            <NavLink className={styles.link} to="/companies">
              Companies
            </NavLink>
            <NavLink className={styles.link} to="/company-comparison">
              Company comparison
            </NavLink>
            <NavLink className={styles.link} to="/login">
              Login
            </NavLink>
          </ul>

          <Autocomplete
            className={styles.MuiAutocomplete}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            filterOptions={filterOptions}
            options={companies.map((option) => option.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  startAdornment: <SearchIcon className={styles.iconColor} />,
                }}
                className={styles.MuiInputBaseRoot}
              />
            )}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}