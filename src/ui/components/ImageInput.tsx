import type { Field, FormikFormProps, FormikProps } from 'formik';
import React from 'react';

type InputProps = {
  form: FormikProps<FormikFormProps>;
  field: typeof Field;
};

const ImageInput = ({ form, field }: InputProps) => {
  return (
    <input
      className="mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-orange-500 shadow outline-0 focus:outline-none"
      name={field.name}
      type="file"
      onChange={(e) => form.setFieldValue(field.name, e.target.files[0])}
    />
  );
};

export default ImageInput;
