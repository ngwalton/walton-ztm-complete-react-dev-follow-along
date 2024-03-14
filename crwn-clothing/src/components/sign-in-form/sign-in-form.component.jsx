/* eslint-disable no-alert */
/* eslint-disable no-console */
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    document.activeElement.blur();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();

      await signInUserWithEmailAndPassword(email, password);

      alert(`User successfully logged in`);
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('Incorrect email or password');
        console.log(error);
      } else {
        console.log(`There was an error logging in: ${error}`);
      }
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="sign-in-email"
          type="email"
          required
          onChange={onChange}
          name="email"
          value={email}
          autoComplete="email"
        />
        <FormInput
          label="Password"
          id="sign-in-password"
          type="password"
          required
          onChange={onChange}
          name="password"
          value={password}
          autoComplete="new-password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
