import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

import ImageInput from './ImageInput';

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const loginSchema = Yup.object().shape({
  image: Yup.mixed()
    .required('Please upload your image.')
    .test('fileSize', 'Your image is too big ☹', (value) => {
      console.log(value && value.size);

      return !value || (value && value.size <= FILE_SIZE);
    })
    .test(
      'fileFormat',
      'Unsupported Format',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});

export const ImageUpload = () => {
  return (
    <div className="relative grid min-h-screen w-full place-items-center bg-gray-900">
      <Formik
        initialValues={{ image: null }}
        validationSchema={loginSchema}
        onSubmit={(values) => console.log(values)}
        // validationSchema={loginSchema}
        // onSubmit={(values, actions) => {
        //   actions.setSubmitting(false);
        //   console.log(values);
        //   console.log('submit');
        //   alert(JSON.stringify(values, null, 2));
        // }}
      >
        {({ errors, touched }) => (
          <div className=" w-full max-w-xs">
            <Form className="mb-4  rounded-lg bg-white px-10 py-14 shadow-md ">
              <h1 className="mb-4 text-center text-2xl font-bold text-orange-500">
                Sign Up
              </h1>
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-orange-500"
                  htmlFor="password"
                >
                  Upload Image
                </label>
                <Field name="image" component={ImageInput} />
                {errors.image && touched.image ? (
                  <ErrorMessage
                    name="image"
                    className="text-base  text-red-500"
                    component="div"
                  />
                ) : null}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="rounded bg-orange-500 py-2 px-4 font-bold text-white outline-0  focus:outline-none"
                  type="submit"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline text-sm font-bold text-orange-500 hover:text-white"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
