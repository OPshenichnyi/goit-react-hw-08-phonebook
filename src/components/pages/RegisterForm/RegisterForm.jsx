import { Formik, Form, ErrorMessage } from "formik";
import { FiledStyle, RegistrFormStyle } from "./RegisterForm.styled";
export const RegisterForm = () => {
  return (
    <RegistrFormStyle>
          <h1>Login</h1>
     <Formik
       initialValues={{ email: '', password: '', name: '' }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
                      <label htmlFor="firstName">First Name</label>
                      <br />
           <FiledStyle type="name" name="name" />
           <ErrorMessage name="name" component="div" />
           
                      <br />
                      <label htmlFor="firstName">Email</label>
                      <br />
                      <FiledStyle type="email" name="email" />
                      <ErrorMessage name="email" component="div" />
                      <br />
                      <label htmlFor="firstName">Pasword</label>
                      <br />
                      <FiledStyle type="password" name="password" />
                      <ErrorMessage name="password" component="div" />
                      <br />
                      <button type="submit" disabled={isSubmitting}>
                          Submit
                      </button>
         </Form>
       )}
     </Formik>
   </RegistrFormStyle>
  )
}
