import { getUser } from '@/utils/authUtils';
import { Alert, Box, Button, Collapse, Paper, Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

function FormCard({
  title,
  children,
  navigateToLabel,
  navigateToURL,
  onSubmit,
  alertMsg,
  setAlertMsg,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  if (Boolean(getUser())) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Box
      component={Paper}
      height='calc(100vh - 120px)'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        component='form'
        display='flex'
        alignItems='center'
        flexDirection='column'
        justifyContent='space-between'
        gap={3}
        minWidth='40vw'
        onSubmit={handleSubmit}
      >
        <Collapse in={Boolean(alertMsg)} sx={{ width: '100%' }}>
          <Alert severity='error' onClose={() => setAlertMsg(false)}>
            {alertMsg}
          </Alert>
        </Collapse>
        <Typography variant='h5' align='center' letterSpacing={5}>
          {title}
        </Typography>
        {children}
        <Button variant='contained' type='submit' color='secondary' fullWidth>
          {title}
        </Button>
        <Link to={navigateToURL}>{navigateToLabel}</Link>
      </Box>
    </Box>
  );
}

export default FormCard;
