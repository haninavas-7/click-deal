import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
