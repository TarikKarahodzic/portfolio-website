'use client';

import React from 'react';
import { useState } from 'react';
import { ContactSchema } from '../lib/contactSchema';
import { treeifyError } from 'zod';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '', // Honeypot field
  });

  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate just this field
    const partial = { ...formData, [name]: value };
    const result = ContactSchema.safeParse(partial);

    if (!result.success) {
      const tree = treeifyError(result.error);
      const fieldErrors: Record<string, string> = {};

      if (tree.properties?.[name]?.errors?.length) {
        fieldErrors[name] = tree.properties[name].errors[0];
      }

      setErrors((prev) => ({ ...prev, ...fieldErrors }));
    } else {
      // Clear error when fixed
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = ContactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      const tree = treeifyError(result.error);

      if (tree.properties) {
        for (const key in tree.properties) {
          const child = tree.properties[key];
          if (child && child.errors && child.errors.length > 0) {
            fieldErrors[key] = child.errors[0];
          }
        }
      }
      setErrors(fieldErrors);
      setStatus('error');
      return;
    }

    setErrors({});

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '', phone: '' }); // Reset form
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Got a question or proposal? Send me a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto space-y-6">
        {/* 🛡️ Honeypot (hidden) */}
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Message
          </label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can I help?"
          />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {/* Feedback messages */}
        <p aria-live="polite" className="min-h-6">
          {status === 'sent' && (
            <span className="text-green-600 font-semibold">✅ Message sent successfully!</span>
          )}
          {status === 'error' && !Object.keys(errors).length && (
            <span className="text-red-600 font-semibold">❌ Something went wrong. Please try again.</span>
          )}
        </p>

      </form>
    </section>
  )
}