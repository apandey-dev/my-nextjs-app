import { useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { Mail, Send, CheckCircle2, AlertCircle, RefreshCw, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address (e.g., name@domain.com).";
      }
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field if user fixes it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic async submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmittedData({ ...formData });
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setErrors({});
  };

  return (
    <Layout
      title="Contact — Monograph"
      description="Send an inquiry, feedback, or message through our validated contact form."
    >
      <div className="max-w-2xl mx-auto space-y-10">
        <PageHeader
          badge="Get In Touch"
          title="Send a message or inquiry."
          description="Have a question about frontend architecture, typography, or this Next.js project? Fill out the form below."
        />

        {isSuccess ? (
          <div
            className="p-6 sm:p-8 bg-surface border border-accent/30 rounded-2xl shadow-subtle space-y-5 animate-fadeIn"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-primary">Message validated &amp; received!</h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Thank you, <strong className="text-primary">{submittedData?.name}</strong>. Your message was successfully validated on the client side.
                </p>
              </div>
            </div>

            <div className="p-4 bg-surface-muted rounded-xl border border-border text-xs sm:text-sm text-secondary space-y-1.5">
              <p className="font-semibold text-primary">Submission Summary:</p>
              <p>
                <span className="text-muted">Sender Email:</span> {submittedData?.email}
              </p>
              <p>
                <span className="text-muted">Message Preview:</span> &ldquo;{submittedData?.message}&rdquo;
              </p>
              <p className="pt-2 text-xs text-muted border-t border-border-subtle">
                <strong>Notice:</strong> This is a frontend routing &amp; validation prototype (Assignment 1). No actual email was transmitted over SMTP.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-surface hover:bg-surface-muted text-primary text-xs sm:text-sm font-medium px-4 py-2 rounded-lg border border-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Send another message</span>
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-8 bg-surface border border-border rounded-2xl shadow-subtle space-y-6"
          >
            {/* Name Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-semibold text-primary"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full pl-10 pr-3.5 py-2.5 bg-surface text-primary text-sm rounded-lg border transition-all placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.name
                      ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                      : "border-border hover:border-border-strong focus:border-accent"
                  }`}
                />
              </div>
              {errors.name && (
                <p id="name-error" className="flex items-center gap-1 text-xs text-red-600 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-semibold text-primary"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full pl-10 pr-3.5 py-2.5 bg-surface text-primary text-sm rounded-lg border transition-all placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.email
                      ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                      : "border-border hover:border-border-strong focus:border-accent"
                  }`}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="flex items-center gap-1 text-xs text-red-600 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-semibold text-primary"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts, suggestions, or questions..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`w-full px-3.5 py-2.5 bg-surface text-primary text-sm rounded-lg border transition-all placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.message
                      ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                      : "border-border hover:border-border-strong focus:border-accent"
                  }`}
                />
              </div>
              {errors.message && (
                <p id="message-error" className="flex items-center gap-1 text-xs text-red-600 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-surface font-medium px-6 py-2.5 rounded-lg text-sm transition-all shadow-subtle disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Validating &amp; Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}
