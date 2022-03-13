import React, { useState } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert/>}
        <FormRow
          text='text'
          value={values.name}
          name='name'
          handleChange={handleChange}
        />
        <FormRow
          text='email'
          value={values.email}
          name='email'
          handleChange={handleChange}
        />
        <FormRow
          text='password'
          value={values.password}
          name='password'
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
