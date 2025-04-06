'use client';

import { useState } from 'react';
import { Form, Input, Button, Textarea } from '@heroui/react';

export default function PricingPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTextareaChange = (value: string) => {
    setFormData(prev => ({ ...prev, message: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Colocar el valor de la API real
      console.log('Form data:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div>
    <div>
      <h1 className = "text-5xl text-black-950">Contacto</h1>
      <br />
    </div>
    <div className="bg-gray rounded-lg md:rounded-xl shadow-sm p-6 md:p-8 mb-8 md:mb-10 border border-gray-100 w-full">
    <br />
    <div className="flex flex-col md:flex-row justify-center gap-6 p-4">
    <div className="bg-gray p-6 max-w-md mx-auto text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black-800 mb-2">TORCHTONE</h2>
        <p className="text-black-600 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
          San Cristóbal 5001, Táchira, Venezuela</p>
        <p className="text-black-600 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
         TORCHTONE@gmail.com
        </p>
      </div>
    </div>
    <div className="bg-gray p-6 max-w-md mx-auto text-center">
        <div className="mb-6">
        <h2 className="text-2xl font-bold text-black-800 mb-2">Venezuela</h2>
        <p className="text-black-600 flex items-center">
            <svg className="w-5 h-5 mr-2 text-black-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +58 276 777 7777
          </p>
          <p className="text-black-600 flex items-center">
            <svg className="w-5 h-5 mr-2 text-black-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +58 276 777 7777
          </p>
        </div>
    </div>

    <div className="bg-gray p-6 max-w-md mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-black-800 mb-2">Soporte</h2>
          <p className="text-black-600 flex items-center">
          <svg className="w-5 h-5 mr-2 text-black-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +58 424 777 7777
        </p>  
        </div>
    </div>
    </div>
    </div>
    <br />
    <h1 className = "text-5xl text-Black-950">Escríbenos</h1>
    <br />
    <div className="bg-gray rounded-lg md:rounded-xl shadow-sm p-6 md:p-8 mb-8 md:mb-10 border border-gray-100 w-full">
        
        <h1 className = "text-2xl text-black-950">Nuestro equipo está a su disposición para responder todas sus inquietudes de manera eficiente y en el menor tiempo posible.</h1>
        <br />
        <Form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nombre"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
            <Textarea
              label="Mensaje"
              name="message"
              value={formData.message}
              //onChange={handleTextareaChange} -> Errores que me putiaron la madre (Si el codigo funciona dejelo así... jajs)
              required
              className="w-full"
              minRows={4}
            />


            {submitStatus === 'success' && (
              <div className="p-3 bg-white-100 text-black-800 rounded">
                ¡Mensaje enviado con éxito!
              </div>
            )}


            {submitStatus === 'error' && (
              <div className="p-3 bg-red-100 text-red-700 rounded">
                Error al enviar. Por favor intenta nuevamente.
              </div>
            )}


            <Button
              type="submit"
              //onPress={handleSubmit} -> Errores que me putiaron la madre (Si el codigo funciona dejelo así... jajs)
              isLoading={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white"
            >
              Enviar Mensaje
            </Button>
          </Form>
    </div>
</div>
  );
}