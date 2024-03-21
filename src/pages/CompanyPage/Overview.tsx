import { Box, Paper, Typography } from '@mui/material';

export const Overview = () => {
  return (
    <Box sx={{ width: '80vw', height: '80vh', paddingTop: '10px' }}>
      <Paper
        elevation={3}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          flexGrow: 1,
          borderEndStartRadius: '0px',
          padding: 20,
          height: '70vh',
        }}
      >
        <Typography variant="h5">About</Typography>
      </Paper>
    </Box>
  );
};
