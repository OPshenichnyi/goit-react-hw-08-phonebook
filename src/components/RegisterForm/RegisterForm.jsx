import { Formik, Form, ErrorMessage } from "formik";
import { FiledStyle, RegistrFormStyle } from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { registration } from "components/authorization/operationAuth";


export const RegisterForm = () => {
  const dispatch = useDispatch() 
  return (
    <RegistrFormStyle>
          <h1>Register</h1>
     <Formik
       initialValues={{ email: '', password: '', name: '' }}
        onSubmit={(values, actions) => {
         dispatch( registration(values))
          actions.resetForm(true)
       }}
     >
       {({ isSubmitting }) => (
         <Form>
                      <label htmlFor="firstName">First Name</label>
                      <FiledStyle type="name" name="name" placeholder="Jane" />
                      <ErrorMessage name="name" component="div" />
           
                      <label htmlFor="firstName">Email</label>
                      <FiledStyle type="email" name="email" placeholder="test@gmail.com" />
                      <ErrorMessage name="email" component="div" />
                     
                      <label htmlFor="firstName">Pasword</label>
                      <FiledStyle type="password" name="password" placeholder="Input your pasword" />
                      <ErrorMessage name="password" component="div" />
                      <button type="submit" disabled={isSubmitting}>
                          Submit
                      </button>
         </Form>
       )}
     </Formik>
   </RegistrFormStyle>
  )
}
