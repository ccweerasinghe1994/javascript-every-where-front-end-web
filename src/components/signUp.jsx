import React, { useEffect } from 'react';
// include the props passed to the component for later use
const SignUp = props => {
  useEffect(() => {
// update the document title
    document.title = 'Sign Up — Notedly';
  });
  return (
    <div>
      <p>Sign Up</p>
    </div>
  );
};
export default SignUp;