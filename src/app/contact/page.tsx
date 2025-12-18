import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: 'Contact Us | Anjum Furnitures',
  description: 'Get in touch with us for inquiries, custom orders, or to visit our showroom.',
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-neutral-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">Get In Touch</h1>
        <p className="text-neutral-300 max-w-2xl mx-auto font-light text-lg">
          Whether you have a question about our products, need a custom quote, or anything else, our team is ready to answer all your questions.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-full">
                   <MapPin className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-lg mb-1">Visit Our Showroom</h3>
                  <p className="text-neutral-600">123 Luxury Lane, Design District<br />New York, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-full">
                   <Clock className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-lg mb-1">Opening Hours</h3>
                  <p className="text-neutral-600">Mon - Sat: 10:00 AM - 8:00 PM<br />Sun: 11:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-full">
                   <Phone className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-lg mb-1">Phone & WhatsApp</h3>
                  <p className="text-neutral-600 mb-2">+1 (555) 123-4567</p>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-full">
                   <Mail className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-neutral-600">hello@anjumfurnitures.com</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-80 bg-neutral-100 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 border border-neutral-100 shadow-xl rounded-sm">
            <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">Send us a Message</h2>
            <EnquiryForm type="contact" />
          </div>
        </div>
      </section>
    </main>
  );
}
