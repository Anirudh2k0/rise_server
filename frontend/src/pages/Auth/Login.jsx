import { useLazyLoginUserQuery } from '@/api-services/authService';
import FormCard from '@/components/Common/FormCard';
import { login } from '@/utils/authUtils';
import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';

function Login() {
  const [alertMsg, setAlertMsg] = useState();
  const [loginUser] = useLazyLoginUserQuery();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async () => {
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      try {
        const jwtToken = await loginUser({ email, password }).unwrap();
        login(jwtToken);
      } catch (error) {
        setAlertMsg(error?.data);
      }
    }
  };

  return (
    <FormCard
      title='Login'
      navigateToURL='/register'
      navigateToLabel='Click here to register'
      onSubmit={handleLogin}
      alertMsg={alertMsg}
      setAlertMsg={setAlertMsg}
    >
      <TextField
        label='Email'
        inputRef={emailRef}
        type='email'
        required
        fullWidth
      />
      <TextField
        label='Password'
        inputRef={passwordRef}
        type='password'
        required
        fullWidth
      />
    </FormCard>
  );
}

export default Login;
