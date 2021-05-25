import React from 'react';
import { useField } from 'formik';
import { FormField, Label } from 'semantic-ui-react';

export default function MyTextInput(allProps) {
  const { label, ...props } = allProps;
  debugger
  const [field, meta] = useField(props);
  console.log("🚀 ~ file: MyTextInput.jsx ~ line 9 ~ MyTextInput ~ field", field)
  return (  
    <FormField error={meta.touched && !!meta.error}>
      <label htmlFor=''>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
