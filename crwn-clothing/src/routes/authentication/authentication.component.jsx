// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

function Authentication() {
  // useEffect(() => {
  //   async function dummy() {
  //     // get the response for the redirect that just happened
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       // eslint-disable-next-line no-unused-vars
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   dummy();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser} type="button">
        Sing in with Google Popup
      </button>
      {/* <button onClick={signInWithGoogleRedirect} type="button">
        Sing in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
}

export default Authentication;
