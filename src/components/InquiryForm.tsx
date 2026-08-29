import React, { useState } from 'react';
import { DIVISIONS } from '../data/siteData';
import { InquiryFormData } from '../types';
import { blogApi, BlogApiError } from '../lib/blogApi';

interface InquiryFormProps {
  initialDivision?: string;
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialDivision = '',
  onSuccess,
  title = 'Send an Inquiry',
  subtitle = 'Get In Touch'
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    division: initialDivision || '',
    program: '',
    userType: 'student',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const context = [
        `User type: ${formData.userType}`,
        `Division: ${formData.division}`,
        formData.program ? `Program: ${formData.program}` : '',
        '',
        formData.message,
      ].filter((value, index) => value || index === 3).join('\n').slice(0, 2000);
      await blogApi.contact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.phone.trim(),
        message: context,
      });

      setStatus('success');
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (reason) {
      setStatus('error');
      setErrorMessage(reason instanceof BlogApiError ? reason.message : 'Unable to submit your inquiry. Please try again.');
    }
  };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '35px 30px',
        boxShadow: '0 10px 35px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div style={{ marginBottom: '25px', textAlign: 'left' }}>
        <h6 style={{ color: '#2563eb', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: 700 }}>
          {subtitle}
        </h6>
        <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginTop: '6px' }}>
          {title}
        </h3>
      </div>

      {status === 'success' ? (
        <div
          style={{
            padding: '25px',
            background: '#edf9f0',
            border: '1px solid #c2ebd0',
            borderRadius: '12px',
            textAlign: 'center',
            color: '#1e7e34'
          }}
        >
          <div style={{ fontSize: '36px', marginBottom: '10px' }}>✓</div>
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
            Inquiry Received Successfully!
          </h4>
          <p style={{ fontSize: '14px', margin: 0 }}>
            Thank you, {formData.name}. An academic advisor from Future Edu Group will contact you shortly at {formData.phone || formData.email}.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setFormData({
                name: '',
                email: '',
                phone: '',
                division: initialDivision || '',
                program: '',
                userType: 'student',
                message: ''
              });
            }}
            className="main-gradient-button"
            style={{ marginTop: '20px', border: 'none', padding: '8px 20px', fontSize: '13px' }}
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <div style={{ padding: '10px', background: '#ffebee', color: '#c62828', borderRadius: '8px', fontSize: '13px', marginBottom: '15px' }}>
              {errorMessage}
            </div>
          )}

          <div className="row">
            <div className="col-md-6 mb-3">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px', display: 'block' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                required
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  padding: '0 16px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px', display: 'block' }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@example.com"
                required
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  padding: '0 16px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px', display: 'block' }}>
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  padding: '0 16px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px', display: 'block' }}>
                I am a *
              </label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  padding: '0 16px',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#fff'
                }}
              >
                <option value="student">Aspiring Student</option>
                <option value="working-professional">Working Professional</option>
                <option value="school-administrator">School Principal / Trustee</option>
                <option value="parent">Parent / Guardian</option>
              </select>
            </div>

            <div className="col-12 mb-3">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px', display: 'block' }}>
                Division of Interest *
              </label>
              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  height: '46px',
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  padding: '0 16px',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#fff'
                }}
              >
                <option value="">Select Division</option>
                {DIVISIONS.map((d) => (
                  <option key={d.id} value={d.title}>
                    {d.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 mb-3">
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', marginBottom: '6px', display: 'block' }}>
                Message or Specific Questions
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your educational background or institutional requirements..."
                rows={3}
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  padding: '12px 16px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              ></textarea>
            </div>

            <div className="col-12">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="main-gradient-button"
                style={{
                  width: '100%',
                  border: 'none',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: 700,
                  borderRadius: '10px',
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Inquiry'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
