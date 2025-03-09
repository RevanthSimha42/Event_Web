import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <motion.section
        ref={headerRef}
        className="relative py-20 bg-gradient-amber-pink text-white"
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: 'linear-gradient(to right, var(--color-amber-500), var(--color-pink-500))'
        }}
      >
        <div className="container text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md-text-5xl font-serif font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            We'd love to hear from you! Reach out to discuss your event needs or to schedule a consultation.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col lg-flex-row gap-12">
            {/* Contact Information */}
            <motion.div
              ref={formRef}
              initial={{ x: -50, opacity: 0 }}
              animate={formInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="lg-w-1/3"
            >
              <div className="bg-gradient-amber-pink-br text-white rounded-xl p-8 h-full"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, var(--color-amber-500), var(--color-pink-500))'
                }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-white opacity-80">
                        123 Event Street, Celebration City, 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-white opacity-80">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-white opacity-80">info@celebratingmoments.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-white opacity-80">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white/20 hover-bg-white-30 p-2 rounded-full transition-colors"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 hover-bg-white-30 p-2 rounded-full transition-colors"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 hover-bg-white-30 p-2 rounded-full transition-colors"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ x: 50, opacity: 0 }}
              animate={formInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="lg-w-2/3"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6"
                    style={{
                      backgroundColor: '#f0fdf4',
                      borderColor: '#bbf7d0',
                      color: '#15803d'
                    }}
                  >
                    <p className="font-medium">Thank you for contacting us!</p>
                    <p>We've received your message and will get back to you shortly.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input focus-ring-2 focus-ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input focus-ring-2 focus-ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input focus-ring-2 focus-ring-amber-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="form-label">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="form-input focus-ring-2 focus-ring-amber-500"
                      >
                        <option value="">Select Event Type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="form-label">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-input focus-ring-2 focus-ring-amber-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input focus-ring-2 focus-ring-amber-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary hover-shadow-lg hover-scale-105 flex items-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        ref={mapRef}
        initial={{ opacity: 0 }}
        animate={mapInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619826381244!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How far in advance should I book your services?",
                answer: "We recommend booking our services at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller events. However, we do accommodate last-minute bookings when possible."
              },
              {
                question: "Do you offer customized packages?",
                answer: "Yes, we offer fully customizable packages tailored to your specific needs and budget. We'll work with you to create a package that includes exactly the services you need for your event."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Our cancellation policy varies depending on the type and size of the event. Generally, cancellations made 30+ days before the event receive a full refund minus the deposit. Please contact us for specific details."
              },
              {
                question: "Do you travel for events?",
                answer: "Yes, we are available for events nationwide and internationally. Travel fees may apply depending on the location and duration of the event."
              },
              {
                question: "How do I get started with your services?",
                answer: "Simply fill out our contact form or give us a call to schedule a free consultation. We'll discuss your vision, needs, and budget to create a customized proposal for your event."
              }
            ].map((faq, index) => {
              const [faqRef, faqInView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={index}
                  ref={faqRef}
                  initial={{ y: 20, opacity: 0 }}
                  animate={faqInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6 border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;