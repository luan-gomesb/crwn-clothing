import { getRedirectResult } from "firebase/auth"
import {signInWithGooglePopup,signInWithGoogleRedirect, saveLoginInfo, auth  } from "../../utils/firebase.utils"
import   {useEffect} from 'react';
const SignIn = () => {
  useEffect(() => {
    const getLoginResponse =  async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if(response){
        const {user} = response;
        saveLoginInfo(user);
      }
    }
    getLoginResponse();
  
  }, [])
  
  const signinWithGoogle = async () => {
    const response = await signInWithGooglePopup(); 
    saveLoginInfo(response.user)
  }

  return (
  <div>
    <h1>Sign-In Page</h1>
    <button onClick={signinWithGoogle}>
      sign with PopUp
    </button> 
    <button onClick={signInWithGoogleRedirect}>
    Sign with redirect
    </button> 
  </div>
  );
}

export default SignIn;