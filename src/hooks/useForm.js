import { useCallback, useState } from "react";

export default function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const {value, name, validationMessage} = e.target;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: validationMessage});
    setIsValid(e.target.closest('form').checkValidity())
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {values, errors, isValid, handleChange, resetForm };
}
