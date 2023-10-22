import { useDispatch } from "react-redux";
import { RegistrFormStyle, FiledStyle } from "./LoginForm.styled";
import { Formik, Form, ErrorMessage } from "formik";
import { logIn } from "components/authorization/operationAuth";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email()
});

export const LoginForm = () => {
  const dispatch = useDispatch()
  return (
    <RegistrFormStyle>
      <h1>Login</h1>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{ email: '', password: ''}}
        onSubmit={(values, actions) => {
          dispatch(logIn(values))
          actions.resetForm(true)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">Email</label>
            <FiledStyle type="email" name="email" placeholder="test@gmail.com" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="firstName">Pasword</label>
            <FiledStyle type="password" name="password" placeholder="Input your pasword" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </RegistrFormStyle>
  )
}
