/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert('Passwords do not match');
      return null;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // eslint-disable-next-line no-unused-vars
      await createUserDocumentFromAuth(user, {
        displayName,
      });

      resetFormFields();

      // eslint-disable-next-line no-alert
      alert(`User ${displayName} successfully created`);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log(`email and password sign up error: ${error}`);
      }
    }

    return null;
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign up with email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="display-name"
          type="text"
          required
          onChange={onChange}
          name="displayName"
          value={displayName}
          autoComplete="username"
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          required
          onChange={onChange}
          name="email"
          value={email}
          autoComplete="email"
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          required
          onChange={onChange}
          name="password"
          value={password}
          autoComplete="new-password"
        />
        <FormInput
          label="Confirm password"
          id="confirm-password"
          type="password"
          required
          onChange={onChange}
          name="confirmPassword"
          value={confirmPassword}
          autoComplete="new-password"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
