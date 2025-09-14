'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { ContactSchema } from '../lib/contactSchema';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type FormData = z.infer<typeof ContactSchema>;
type FieldName = keyof FormData;

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    phone: '', // honeypot
  });

  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validate exactly ONE field on change (mobile-friendly + no sticky errors)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: FieldName; value: string };

    setFormData(prev => ({ ...prev, [name]: value }));

    // single-field validation using zod pick
    const single = (ContactSchema as z.ZodObject<any>)
      .pick({ [name]: true } as any)
      .safeParse({ [name]: value });

    setErrors(prev => {
      const next = { ...prev };
      if (!single.success) {
        const msg = single.error.issues[0]?.message ?? 'Invalid value';
        next[name] = msg;
      } else {
        delete next[name]; // clear THIS field’s error even if others still fail
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // full-form validation
    const parsed = ContactSchema.safeParse(formData);
    if (!parsed.success) {
      const flat = parsed.error.flatten();
      const next: Record<string, string> = {};
      for (const key in flat.fieldErrors) {
        const k = key as FieldName;
        const msg = flat.fieldErrors[k]?.[0];
        if (msg) next[k] = msg;
      }
      setErrors(next);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.error || 'Failed to send');

      setStatus('sent');
      setFormData({ name: '', email: '', message: '', phone: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-moss rounded-2xl px-6 md:px-20 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>
        <p className="mt-4 text-white/80">
          Got a question or proposal? Send me a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mx-auto mt-10 max-w-2xl space-y-6">
        {/* 🛡️ Honeypot (hidden) */}
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-2 block text-lg font-medium text-white/80">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:bg-gray-800 dark:text-white dark:border-gray-600
              ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Doe"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-lg font-medium text-white/80">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:bg-gray-800 dark:text-white dark:border-gray-600
              ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="john@example.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="mb-2 block text-lg font-medium text-white/80">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:bg-gray-800 dark:text-white dark:border-gray-600
              ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="How can I help?"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-lg bg-accent py-3 font-semibold text-moss transition-colors duration-300 hover:bg-accent/80 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {/* Feedback */}
        <p aria-live="polite" className="min-h-6">
          {status === 'sent' && (
            <span className="font-semibold text-green-500">✅ Message sent successfully!</span>
          )}
          {status === 'error' && !Object.keys(errors).length && (
            <span className="font-semibold text-red-500">❌ Something went wrong. Please try again.</span>
          )}
        </p>
      </form>
    </section>
  );
}
