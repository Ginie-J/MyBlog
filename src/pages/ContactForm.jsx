import React, {useState}from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const SERVICE_ID = '서비스아이디';
    const TEMPLATE_ID = '템플릿아이디';
    const ADMIN_EMAIL = 'kyuginie@gmail.com'
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: '',
        variant: ''
    });
    const handleChange = (e)=>{
        setFormData({
            ...formData, [e.target.name] : e.target.value
        });
    }

    const handleSubmit = (e)=>{
        setFormData({loading:true});
        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: ADMIN_EMAIL,
            message: formData.message
        }
        emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            alertmessage: '성공적으로 전송되었습니다.',
            variant: 'success',
            show: true
          })
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormData({
            alertmessage: `전송 도중 오류가 발생했습니다. (${error})`,
            variant: 'danger',
            show: true
          })
        },
      );
    }
  return (
    <div>
        <Alert variant={formData.variant}
                className={`rounded-0 co-alert ${formData.show? "d-block":"d-none"}`}>
        </Alert>
        <form action="">
            <Form.Control type='text'
                            name='name'
                            placeholder='이름'
                            className='mb-4 input-name'
                            onChange={handleChange}
                            value={formData.name || ""}
                            required />
            <Form.Control type='email'
                            name='email'
                            placeholder='이메일'
                            className='mb-4 input-email'
                            onChange={handleChange}
                            value={formData.email || ""}
                            required />
            <Form.Control as='textarea'
                            placeholder='메시지'
                            onChange={handleChange}
                            value={formData.message || ""}
                            style={{height: '100px'}} />
            <div className='text-center mt-5'>
                <Button variant='secondary' className='px-5 ms-4'>취소</Button>
                <Button variant='dark' className='px-5 ms-4'>전송</Button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm