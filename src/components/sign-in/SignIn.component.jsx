import {signInWithGooglePopup, saveLoginInfo  } from "../../utils/firebase.utils"

const SignIn = () => {
  const signinWithGoogle = async () => {
  const response = await signInWithGooglePopup(); 
  saveLoginInfo(response.user)
  console.log(response);
  }

  return (
  <div>
    <h1>Sign-In Page</h1>
    <button onClick={signinWithGoogle}>
      sign with google
    </button> 
  </div>
  );
}

export default SignIn;