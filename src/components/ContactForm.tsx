import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("PS5ZiDDGa9vSZ-fer");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'findclickdeal@gmail.com',
        subject: formData.subject,
        message: formData.message,
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        'service_ba6ymnq',
        'template_dcehg6j',
        templateParams,
        'PS5ZiDDGa9vSZ-fer'
      );

      console.log('EmailJS response:', response);

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
          className="w-full min-h-[120px] sm:min-h-[150px]"
        />
      </div>

      <Button 
        type="submit" 
        disabled={status === 'loading'}
        className="w-full py-2 sm:py-3 text-base sm:text-lg"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 text-center text-sm sm:text-base">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center text-sm sm:text-base">{errorMessage}</p>
      )}
    </form>
  );
};

export default ContactForm; 