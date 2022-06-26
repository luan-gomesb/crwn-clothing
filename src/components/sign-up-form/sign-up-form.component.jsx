import { useState } from "react"
const initialFields = {
  displayName:'', mail:'',password:'',confirmPassword:''
}
 const SignUpForm = () => {
  const [formFields,setFormFields] = useState(initialFields);
  const { displayName, mail, password, confirmPassword } = formFields;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);

  } 
  const handleFieldChange = (event) => {
    const {name,value} = event.target;
    setFormFields({...formFields,[name]:value});
  }
  return (

    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="displayName">Name</label>
        <input type="text"
        name="displayName" 
        id="displayName"
        value={displayName}
        onChange={handleFieldChange} />

        <label htmlFor="mail">Mail</label>
      <input type="mail"
        name="mail" 
        id="mail"
        value={mail}
        onChange={handleFieldChange} />

        <label htmlFor="password">Password</label>
      <input type="password"
        name="password" 
        id="password"
        value={password}
        onChange={handleFieldChange} />

        <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password"
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