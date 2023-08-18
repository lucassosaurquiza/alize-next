import { useState } from 'react'

export const useForm = (initialForm: any, validateForm: any) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e: any) => {
    handleChange(e);
    setErrors(validateForm(form));

  };
  const handleSubmit = (e: any) => { };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
}
