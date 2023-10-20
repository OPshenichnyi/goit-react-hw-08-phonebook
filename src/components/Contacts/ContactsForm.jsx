import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { WrapperForm, CssInput } from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'components/OperationContacts/selectors';
import { addContactApi } from 'components/OperationContacts/operation';



const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Must be string')
    .min(3, 'Must be at least 3 characters long')
    .required('Required'),
  number: Yup.number().required('Required'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch()
  const phoneList = useSelector(selectAllContacts)

  function chekContact(value) {
    const checkNameUser = phoneList.some(user =>
      user.name.toLowerCase() === value.name.toLowerCase())
    if (checkNameUser) {
      alert(`${value.name} is already in contacts`)
      return
    }
    dispatch(addContactApi(value))
  }

  return (
    <Formik
      validationSchema={SignupSchema}

      initialValues={{
        name: "",
        number: ""
      }}

      onSubmit={(values, actions) => {
        chekContact(values)
        actions.resetForm(true)
      }}
    >
      <WrapperForm>
        <label htmlFor="name">Name</label>
        <br />
        <CssInput id="name" name="name" placeholder="Name" />
        <br />
        <ErrorMessage name="name" />
        <br />
        <label htmlFor="number">Number</label>
        <CssInput id="number" name="number" placeholder="Phone" />
        <br />
        <ErrorMessage name="number" />
        <br />
        <button type="submit">Submit</button>
      </WrapperForm>
    </Formik>
  )
}
