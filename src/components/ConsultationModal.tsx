import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { ConsultationBooking } from '../types';
import { SERVICE_OFFERS } from '../data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [bookedDetails, setBookedDetails] = useState<ConsultationBooking | null>(null);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || selectedServices.length === 0) {
      setError('Please fill in all required fields and select at least one service.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/consultation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: fullName.trim(), email: email.trim(), phone: phone.trim(), services: selectedServices }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      const newBooking: ConsultationBooking = {
        id: 'book_' + Math.random().toString(36).substr(2, 9),
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        services: selectedServices,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      // Backup to localStorage
      const existing = JSON.parse(localStorage.getItem('nigel_consultations') || '[]');
      existing.push(newBooking);
      localStorage.setItem('nigel_consultations', JSON.stringify(existing));

      setBookedDetails(newBooking);
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setSelectedServices([]);
    setError('');
    setBookedDetails(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-navy/75 backdrop-blur-md">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low text-on-surface shadow-[0_0_50px_rgba(0,103,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
        id="scheduler-modal-dialog"
      >
        {/* Accent header bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary-container via-vibrant-cyan to-primary-container"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant px-6 py-4">
          <div>
            <h2 className="font-geist text-lg font-bold text-white tracking-tight">
              Book a Consultation
            </h2>
            <p className="text-xs text-on-surface-variant font-mono mt-0.5">
              Let's discuss your project
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-on-surface-variant hover:bg-surface-container-high hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {!bookedDetails ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error message */}
              {error && (
                <div className="rounded border border-red-500/40 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5 font-geist">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-white placeholder-on-surface-variant/40 focus:border-vibrant-cyan focus:outline-none focus:ring-1 focus:ring-vibrant-cyan transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5 font-geist">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="w-full rounded border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-white placeholder-on-surface-variant/40 focus:border-vibrant-cyan focus:outline-none focus:ring-1 focus:ring-vibrant-cyan transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-1.5 font-geist">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+233 55 123 4567"
                  className="w-full rounded border border-outline-variant bg-surface-container-lowest px-3 py-2.5 text-sm text-white placeholder-on-surface-variant/40 focus:border-vibrant-cyan focus:outline-none focus:ring-1 focus:ring-vibrant-cyan transition-colors"
                />
              </div>

              {/* Services – Multi-select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2 font-geist">
                  Services Needed <span className="text-red-400">*</span>
                </label>
                <div className="space-y-2">
                  {SERVICE_OFFERS.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center gap-3 rounded border px-4 py-3 cursor-pointer transition-colors ${
                        selectedServices.includes(service.title)
                          ? 'border-vibrant-cyan bg-vibrant-cyan/5'
                          : 'border-outline-variant bg-surface-container-lowest hover:border-outline'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.title)}
                        onChange={() => toggleService(service.title)}
                        className="h-4 w-4 accent-vibrant-cyan"
                      />
                      <div>
                        <span className="text-sm font-medium text-white">{service.title}</span>
                        <p className="text-xs text-on-surface-variant mt-0.5">{service.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-primary-container py-3 text-sm font-semibold text-white transition-all hover:bg-opacity-90 active:scale-[0.98] cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Send Consultation Request
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success screen */
            <div className="space-y-5 text-center py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-green/10 text-success-green">
                <CheckCircle className="h-8 w-8" />
              </div>

              <div>
                <h3 className="font-geist text-xl font-bold text-white tracking-tight">
                  Request Sent!
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  I'll get back to you shortly at <strong className="text-white">{bookedDetails.email}</strong>.
                </p>
              </div>

              <div className="rounded border border-dashed border-vibrant-cyan/30 bg-surface-container-lowest/80 p-5 text-left text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Name</span>
                  <span className="text-white">{bookedDetails.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Email</span>
                  <span className="text-white">{bookedDetails.email}</span>
                </div>
                {bookedDetails.phone && (
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Phone</span>
                    <span className="text-white">{bookedDetails.phone}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Services</span>
                  <span className="text-vibrant-cyan">{bookedDetails.services.join(', ')}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="rounded border border-outline px-6 py-2.5 text-sm font-semibold text-on-surface hover:text-white hover:border-white transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
