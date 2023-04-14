import { Button, Col, Label, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../../sitemisc/validateContactForm";
import { postContact } from "./contactSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        const contact = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            country: values.country,
            date: new Date(Date.now()).toDateString(),
            feedback: values.feedback
        }

        console.log('form values:', values);
        console.log('JSON format:', JSON.stringify(values));
        dispatch(postContact(contact));
        setTimeout(() => {
            alert(`Your Contact info and Feedback has been recieved`);
        }, 2500);
        resetForm();
    };


    //****Button Text****     
    const [buttonText, setButtonText] = useState("Send Feedback");
    const useActive = () => {
        const onClick = () => {
            setButtonText('Submitting...');
            setTimeout(() => {
                setButtonText("Send Feedback");
            }, 700);
        }
        return { onClick }
    }

     const active = useActive();


    return <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            country: '',
            feedback: ''
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}

    >
        <Form color="aqua">
            <FormGroup row className="formgroup">
                <Label className="label-text" htmlFor='firstName' md='3'>
                    First Name
                </Label>
                <Col md='12'>
                    <Field style={{backgroundColor: '#111115'}} className='form-control' name='firstName' placeholder='FirstName' />
                    <ErrorMessage name='firstName'>
                        {(msg) => <p className="error-text">{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row  className="formgroup">
                <Label  className="label-text" htmlFor='lastName' md='3'>
                    Last Name
                </Label>
                <Col md='12'>
                    <Field style={{backgroundColor: '#111115'}} className='form-control' name='lastName' placeholder='LastName' />
                    <ErrorMessage name='lastName'>
                        {(msg) => <p className="error-text">{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row className="formgroup">
                <Label className="label-text" htmlFor='email' md='3'>
                    Email
                </Label>
                <Col md='12'>
                    <Field style={{backgroundColor: '#111115'}} className='form-control' name='email' placeholder='Email' />
                    <ErrorMessage name='email'>
                        {(msg) => <p className="error-text">{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row className="formgroup">
                <Label className="label-text" htmlFor='country' md='3'>
                    Country
                </Label>
                <Col md='12'>
                    <Field  style={{backgroundColor: '#111115'}} className='form-control' name='country' placeholder='country' />
                    <ErrorMessage name='country'>
                        {(msg) => <p className="error-text">{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row className="formgroup">
                <Label className="label-text" htmlFor='feedback' md='4'>
                    Feedback
                </Label>
                <Col color='aqua' md='12'>
                    <Field  style={{backgroundColor: '#111115'}} className='form-control' name='feedback' placeholder='We appreciate your feedback' as='textarea' rows='4' />
                    <ErrorMessage name='feedback'>
                        {(msg) => <p className="error-text">{msg}</p>}
                    </ErrorMessage>
                </Col>
            </FormGroup>
            <FormGroup row className="formgroup">
                <Col md={{ size: 10, offset: 0 }}>
                    <Button className="button"
                        {...active}
                        type="submit"
                    >{buttonText}
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    </Formik>
};

export default ContactForm;