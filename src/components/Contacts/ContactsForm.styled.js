import styled from 'styled-components'
import { Form, Field } from 'formik';


export const WrapperForm = styled(Form)`

button{
    border-radius: 12px;
    padding:8px 12px;
    font-family:'Montserrat',
    sans-serif;border:2px solid #78788c;
    background:0;
    color:#5a5a6e;
    cursor:pointer;
}
`
export const CssInput = styled(Field)`
margin-top: 10px;
margin-bottom: 15px;
width:100%;
padding:10px;
box-sizing:border-box;
background:none;
outline:none;
resize:none;
border:0;
font-family:'Montserrat';
border-bottom:2px solid #bebed2;
`