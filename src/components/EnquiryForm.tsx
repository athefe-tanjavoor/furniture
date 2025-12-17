'use client';

import { useState } from 'react';
import { Upload, Send, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface EnquiryFormProps {
  type: 'contact' | 'custom';
  className?: string;
  prefilledMessage?: string;
}

export default function EnquiryForm({ type, className, prefilledMessage = '' }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY'; // User needs to replace this
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={clsx('space-y-6', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-neutral-900">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            placeholder="John Doe"
            className="w-full bg-neutral-50 border border-neutral-200 p-3 text-sm focus:border-neutral-900 focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-900">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            placeholder="john@example.com"
            className="w-full bg-neutral-50 border border-neutral-200 p-3 text-sm focus:border-neutral-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-neutral-900">Phone</label>
        <input 
          type="tel" 
          name="phone" 
          id="phone" 
          placeholder="+1 (555) 000-0000"
          className="w-full bg-neutral-50 border border-neutral-200 p-3 text-sm focus:border-neutral-900 focus:outline-none transition-colors"
        />
      </div>

      {type === 'custom' && (
         <div className="space-y-2">
           <label className="text-sm font-medium text-neutral-900">Upload Sketch / Room Image</label>
           <div className="relative border-2 border-dashed border-neutral-200 bg-neutral-50 p-6 text-center hover:border-neutral-400 transition-colors cursor-pointer">
             <input type="file" name="attachment" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" />
             <Upload className="w-6 h-6 mx-auto text-neutral-400 mb-2" />
             <span className="text-sm text-neutral-500">Click to upload or drag and drop</span>
             <p className="text-xs text-neutral-400 mt-1">JPG, PNG, PDF up to 5MB</p>
           </div>
         </div>
      )}

      {type === 'contact' && (
         <div className="space-y-2">
           <label htmlFor="category" className="text-sm font-medium text-neutral-900">Interested Product / Category (Optional)</label>
           <input 
             type="text" 
             name="subject" 
             id="category" 
             placeholder="e.g. Modular Sofas"
             className="w-full bg-neutral-50 border border-neutral-200 p-3 text-sm focus:border-neutral-900 focus:outline-none transition-colors"
           />
         </div>
      )}

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-900">Message</label>
        <textarea 
          name="message" 
          id="message" 
          required 
          rows={5}
          defaultValue={prefilledMessage}
          placeholder="Tell us about your requirements..."
          className="w-full bg-neutral-50 border border-neutral-200 p-3 text-sm focus:border-neutral-900 focus:outline-none transition-colors"
        ></textarea>
      </div>
      
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-neutral-900 text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </button>

      {success && (
        <div className="p-4 bg-green-50 text-green-800 text-sm rounded-sm">
          Thank you! Your enquiry has been received. We will get back to you shortly.
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-50 text-red-800 text-sm rounded-sm">
          Something went wrong. Please try again or contact us directly via WhatsApp.
        </div>
      )}
    </form>
  );
}
