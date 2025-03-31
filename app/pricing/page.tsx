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
    {/*titulo*/}
    <h1 className = "text-5xl text-blue-950">Escríbenos</h1>
    <br />
  </div>
    {/* Mensaje */}
    <h1 className = "text-3xl">Nuestro equipo está a su disposición para responder todas sus inquietudes de manera eficiente y en el menor tiempo posible.</h1>
    <br />
    
    <div className="bg-white rounded-lg md:rounded-xl shadow-sm p-6 md:p-8 mb-8 md:mb-10 border border-gray-100 w-full">
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
          <div className="p-3 bg-green-100 text-green-700 rounded">
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