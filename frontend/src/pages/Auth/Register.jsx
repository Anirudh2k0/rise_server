import { useLazyRegisterUserQuery } from '@/api-services/authService';
import { TextField } from '@mui/material';
import { useRef, useState } from 'react';
import FormCard from '@/components/Common/FormCard';
import { login } from '@/utils/authUtils';

function Register() {
  const [alertMsg, setAlertMsg] = useState();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [registerUser] = useLazyRegisterUserQuery();

  const handleRegister = async () => {
    let name = nameRef.current;
    let email = emailRef.current;
    let password = passwordRef.current;
    let confirmPassword = confirmPasswordRef.current;
    if (name && email && password && confirmPassword) {
      name = name.value;
      email = email.value;
      password = password.value;
      confirmPassword = confirmPassword.value;
      if (password !== confirmPassword) {
        return setAlertMsg('Passwords mismatch');
      }
      try {
        const jwtToken = await registerUser({ name, email, password }).unwrap();
        login(jwtToken);
      } catch (error) {
        setAlertMsg(error?.data);
      }
    }
  };

  return (
    <FormCard
      title='Register'
      navigateToURL='/login'
      navigateToLabel='Already registered? Click here to login'
      alertMsg={alertMsg}
      setAlertMsg={setAlertMsg}
      onSubmit={handleRegister}
    >
      <TextField label='Full Name' inputRef={nameRef} required fullWidth />
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
      <TextField
        label='Confirm Password'
        inputRef={confirmPasswordRef}
        type='password'
        required
        fullWidth
      />
    </FormCard>
  );
}

export default Register;
