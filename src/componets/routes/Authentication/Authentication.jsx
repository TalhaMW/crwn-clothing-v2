import SignInForm from '../../sign-in-form/sign-in-form.component';
import SignUpForm from '../../signup-form/SignupForm';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
