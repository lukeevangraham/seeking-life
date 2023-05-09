import classes from "./Input.module.scss";

const Input = ({ elementType, name, placeholder, required, type }) => {
  let inputElement = null;

  switch (elementType) {
    case "input":
      inputElement = (
        <>
          <input
            className={classes.Form__Group__Input}
            type={type}
            name={name}
            id={name}
            required={required ? true : false}
            placeholder={placeholder}
          />
          <label htmlFor={name} className={classes.Form__Group__Label}>
            {placeholder}
          </label>
        </>
      );
      break;
    case "textarea":
      inputElement = (
        <>
          <textarea
            className={classes.Form__Group__Input}
            cols="30"
            rows="10"
            type={type}
            name={name}
            id={name}
            required={required ? true : false}
            placeholder={placeholder}
          />
          <label htmlFor={name} className={classes.Form__Group__Label}>
            {placeholder}
          </label>
        </>
      );
      break;
    default:
      return null;
  }

  return <div className={classes.Form__Group}>{inputElement}</div>;
};

export default Input;
