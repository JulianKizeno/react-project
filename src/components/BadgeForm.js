import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'

import './styles/BadgeForm.css'


function BadgeForm (props){

    const handleClick = e =>{
        console.log({e},'Button was clicked')
    }

    // handleSubmit = e =>{
    //     e.preventDefault()
    //     console.log({e},'Form was submitted')
    //     console.log(this.state)
    // }

    
        return(
           
            <Container className="formContainer">
                <div className="formContainer__content">
                    <h2 className="formContainer__content--title-new-card">
                        {props.titleCreate ? 'New Card': 'Edit Card'}
                    </h2>
                    <Form action="" className="formContainer__content--form" onSubmit={props.onSubmit}>
                        <Form.Group >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" className="formInput"  name="firstName" value={props.formValues.firstName} onChange={props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" className="formInput"  name="lastName" value={props.formValues.lastName} onChange={props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email (Gravatar)</Form.Label>
                            <Form.Control type="email" className="formInput"  name="email" value={props.formValues.email} onChange={props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control type="text" className="formInput"  name="linkedin" value={props.formValues.linkedin} onChange={props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>GitHub</Form.Label>
                            <Form.Control type="text" className="formInput"  name="gitHub" value={props.formValues.gitHub} onChange={props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" className="formInput"  name="jobTitle" value={props.formValues.jobTitle} onChange={props.onChange} required/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Cover Letter (few words)</Form.Label>
                            <Form.Control as="textarea" className="textarea "  name="coverLetter" value={props.formValues.coverLetter} onChange={props.onChange} required/>
                        </Form.Group>
                        <Button className="formContainer__content--Button" onClick={handleClick} type="submit">
                            {props.titleCreate ? 'Create Card': 'Save Changes'}
                        </Button>
                    </Form>
                    {props.error && <p className='text-danger'>{props.error.message}</p>}
                </div>
            </Container>
        
        )
    
}

export default BadgeForm
