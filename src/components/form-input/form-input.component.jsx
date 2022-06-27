import './form-input.styles.scss';
const FormInput = ({label,...otherOptions}) => {
  return (
    <div className="input-group">
      <input {...otherOptions} className="form-input" />
      <label 
      className={`${otherOptions.value.length ? 'shrink':''}
        form-input-label`}>
        {label}
      </label>
    </div>
  )
}
export default FormInput;