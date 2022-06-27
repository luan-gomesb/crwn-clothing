import { useState } from "react"
import { createUserWithMailAndPass, saveLoginInfo } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const initialFields = {
  displayName: '', mail: '', password: '', confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFields);
  const { displayName, mail, password, confirmPassword } = formFields;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert('Passwords fields are different!');
      return false;
    }

    try {
      
   const userCredentialRes = await createUserWithMailAndPass(mail,password);
    if(userCredentialRes){
      const { user}  = userCredentialRes;
      
        saveLoginInfo(user, {displayName});
    }
   } catch (error) {
    console.log(error)  
    }
  
  }

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Sign Up with Email and Password</h1>
        <FormInput
          label='Display Name'
          type="text" required={true}
          name="displayName"
          id="displayName"
          value={displayName}
          onChange={handleFieldChange} />

        <FormInput 
          label="Email"
          type="mail" required={true}
          name="mail"
          id="mail"
          value={mail}
          onChange={handleFieldChange} />

        <FormInput
          label="Password"
          type="password" required={true}
          name="password"
          id="password"
          value={password}
          onChange={handleFieldChange} />

        <FormInput 
          label="Confirm Password"
          type="password" required={true}
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleFieldChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default SignUpForm;