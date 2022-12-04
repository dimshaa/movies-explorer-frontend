import { useCallback, useState } from 'react';

export default function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isValidInputs, setIsValidInputs] = useState({});

  const handleChange = (e) => {
    const {value, name, validationMessage} = e.target;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: validationMessage});
    setIsValidInputs({...isValidInputs, [name]: e.target.closest('input').checkValidity()})
    setIsValid(e.target.closest('form').checkValidity());

    if (e.target.validity.patternMismatch) {
      if (name === 'email' ) {
        setErrors({...errors, [name]: 'Пожалуста, проверьте корректность email.'});
      } else if (name === 'name') {
        setErrors({...errors, [name]: 'Пожалуйста, используйте только кириллицу, латинницу, дефис или пробел.'});
      }
    };
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false, newIsValidInputs = {}) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValidInputs(newIsValidInputs);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid, setIsValidInputs]
  );

  return {values, errors, isValid, isValidInputs, setValues, handleChange, resetForm };
}
