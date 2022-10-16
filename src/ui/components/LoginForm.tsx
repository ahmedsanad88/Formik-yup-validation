import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface MyFormValues {
  username: string;
  password: string;
  gender: string;
  field: string[];
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('No Username provided.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])/, 'Password must contain one lowercase.')
    .matches(/^(?=.*[A-Z])/, 'Password must contain one uppercase.')
    .matches(/^(?=.*[0-9])/, 'Password must contain one number.')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'Password must contain one special case character.'
    ),
  gender: Yup.string().required('No gender provided.'),
  // field: Yup.string().required('No field provided.'),
  field: Yup.array()
    .of(Yup.string())
    .min(1)
    .required('Please choose at least one option.'),
});
export const LoginForm = () => {
  // const [file, setFile] = React.useState({} as File);
  // console.log(file);

  const initialValues: MyFormValues = {
    username: '',
    password: '',
    gender: '',
    field: [],
  };

  return (
    <div className="relative grid min-h-screen w-full place-items-center bg-gray-900">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <div className=" w-full max-w-xs">
            <Form className="mb-4  rounded-lg bg-white px-10 py-14 shadow-md ">
              <h1 className="mb-4 text-center text-2xl font-bold text-orange-500">
                Sign Up
              </h1>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-orange-500"
                  htmlFor="username"
                >
                  Username
                </label>
                <Field
                  className="mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-orange-500 shadow outline-0 focus:outline-none"
                  id="username"
                  name="username"
                  placeholder="Username"
                />
                {errors.username && touched.username ? (
                  <ErrorMessage
                    name="username"
                    className="text-base  text-red-500 "
                    component="div"
                  />
                ) : null}
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-orange-500"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className="mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-orange-500 shadow outline-0 focus:outline-none"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage
                    name="password"
                    className="text-base  text-red-500"
                    component="div"
                  />
                ) : null}
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-orange-500"
                  htmlFor="password"
                >
                  Choose Gender
                </label>
                <Field type="radio" name="gender" value="male" />{' '}
                <span className="mr-3">Male</span>
                <Field type="radio" name="gender" value="female" /> Female
                {errors.gender && touched.gender ? (
                  <ErrorMessage
                    name="gender"
                    className="text-base  text-red-500"
                    component="div"
                  />
                ) : null}
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-orange-500"
                  htmlFor="password"
                >
                  Choose Field
                </label>
                <Field type="checkbox" name="field" value="Front end" />{' '}
                <span className="mr-3">Front end</span>
                <Field
                  type="checkbox"
                  name="field"
                  value="Back end"
                  className="mr-1"
                />
                Back end
                {errors.field && touched.field ? (
                  <ErrorMessage
                    name="field"
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
