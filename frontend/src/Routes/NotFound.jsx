import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      display='flex'
      height='calc(100vh - 175px)'
      alignItems='center'
      justifyContent='center'
    >
      <Typography variant='h5'>404 - Not Found</Typography>
    </Box>
  );
};

export default NotFound;
