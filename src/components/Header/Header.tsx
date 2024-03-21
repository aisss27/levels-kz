import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import styles from './Header.module.css';
import { companies } from '../Dashboard/data.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { logout } from '../../store/slices/authSlice.ts';

export function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authReducer
  );

  const filterOptions = createFilterOptions({
    limit: 5,
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.header}>
        <NavLink to="/" className={styles.appLogo}>
          <div className={styles.logo}>
            <img
              className={styles.logo_image}
              src="https://www.pngall.com/wp-content/uploads/2017/01/Growth-Chart.png"
              alt="logo"
            />
            <span className={styles.logo_text}>Levels</span>
          </div>
        </NavLink>
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
          {isAuthenticated ? (
            <p className={styles.link} onClick={handleLogout}>
              Logout
            </p>
          ) : (
            <NavLink className={styles.link} to="/login">
              Login
            </NavLink>
          )}
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
  );
}
