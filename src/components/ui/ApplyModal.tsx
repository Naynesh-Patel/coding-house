import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, FileText, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
  rolesList?: string[];
}

export function ApplyModal({
  isOpen,
  onClose,
  initialRole = 'Full-Stack Engineer',
  rolesList = [
    'Full-Stack Engineer',
    'Frontend Engineer (React)',
    'DevOps Engineer',
    'UI/UX Designer',
    'QA Automation Engineer',
    'Digital Marketing',
    'Other / General Internship',
  ],
}: ApplyModalProps) {
  const [role, setRole] = useState(initialRole);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [description, setDescription] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update role when initialRole changes
  useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  // Lock body scroll when modal is open & listen for Escape
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !loading) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, loading, onClose]);

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setPortfolio('');
    setDescription('');
    setResumeFile(null);
    setLoading(false);
    setSubmitted(false);
    setErrorMsg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    if (loading) return;
    onClose();
    setTimeout(() => {
      resetForm();
    }, 200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 10MB limit check
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('File size exceeds 10MB limit. Please upload a smaller PDF or DOC document.');
      return;
    }

    setErrorMsg(null);
    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!resumeFile) {
      setErrorMsg('Please upload your resume (PDF or DOC/DOCX).');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', fullName.trim());
      formData.append('email', email.trim());
      formData.append('phone', phone.trim());
      formData.append('applied_role', role);
      formData.append('type', 'Internship');
      formData.append('portfolio_or_github', portfolio.trim() || 'N/A');
      formData.append('description_message', description.trim());
      formData.append('attachment', resumeFile);

      // FormSubmit config fields
      formData.append('_subject', `New Internship Application: ${fullName.trim()} — ${role}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/support@codinghouse.in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          // Do NOT set Content-Type header so the browser sets multipart/form-data boundary automatically
        },
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success !== 'false') {
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Server error while sending application.');
      }
    } catch (err: any) {
      console.error('Internship application error:', err);
      setErrorMsg(
        'Could not send your application automatically. Please email your resume directly to support@codinghouse.in or WhatsApp us at +91 97236 78848.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-paper-50 border border-ink-900/10 shadow-2xl p-5 sm:p-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-9 w-9 items-center justify-center rounded-xl text-ink-400 hover:text-ink-900 hover:bg-paper-200 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="py-6 sm:py-8 text-center animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink-950">
              Application Submitted!
            </h3>
            <p className="mt-2 text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-ink-900">{fullName}</strong>. Your resume and application for the{' '}
              <strong className="text-volt-700">{role} (Intern)</strong> position have been sent to{' '}
              <strong className="text-ink-900">support@codinghouse.in</strong>.
            </p>
            <p className="mt-2 text-xs text-ink-400">
              Our engineering & talent team will review your application and reach out to you via email or WhatsApp soon.
            </p>

            <div className="mt-8 flex justify-center">
              <Button onClick={handleClose} variant="primary" size="lg">
                Done
              </Button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <div>
            <div className="pr-8">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-volt-100 text-volt-800">
                Internship Application
              </span>
              <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-ink-950">
                Apply for {role}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-ink-500">
                Submit your resume and contact information. All details are sent directly to{' '}
                <strong className="text-ink-700">support@codinghouse.in</strong>.
              </p>
            </div>

            {errorMsg && (
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <p>{errorMsg}</p>
                  <a
                    href={`mailto:support@codinghouse.in?subject=Internship Application: ${role}`}
                    className="mt-1 inline-block font-semibold underline"
                  >
                    Click here to email support@codinghouse.in directly
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5" htmlFor="apply-name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="apply-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Patel"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input-base text-sm"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5" htmlFor="apply-email">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apply-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-base text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5" htmlFor="apply-phone">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="apply-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-base text-sm"
                  />
                </div>
              </div>

              {/* Role Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5" htmlFor="apply-role">
                  Position Applied For <span className="text-red-500">*</span>
                </label>
                <select
                  id="apply-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="input-base text-sm"
                >
                  {rolesList.map((r) => (
                    <option key={r} value={r}>
                      {r} (Intern)
                    </option>
                  ))}
                </select>
              </div>

              {/* Resume / CV Upload */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                  Resume / CV (PDF, DOC, DOCX) <span className="text-red-500">*</span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="apply-resume-file"
                />

                {resumeFile ? (
                  <div className="flex items-center justify-between rounded-xl border border-volt-300 bg-volt-50/50 p-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-volt-500 text-white">
                        <FileText className="h-5 w-5" />
                      </span>
                      <div className="overflow-hidden text-left">
                        <p className="truncate text-xs font-semibold text-ink-950">{resumeFile.name}</p>
                        <p className="text-2xs text-ink-500">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="ml-2 text-xs font-medium text-red-600 hover:text-red-800 hover:underline shrink-0"
                    >
                      Change
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="apply-resume-file"
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-ink-900/15 bg-paper-100/60 p-4 sm:p-5 text-center cursor-pointer hover:border-volt-400 hover:bg-paper-100 transition-colors"
                  >
                    <Upload className="h-6 w-6 text-volt-600" />
                    <p className="mt-1 text-xs font-medium text-ink-900">
                      Click to upload your resume
                    </p>
                    <p className="text-2xs text-ink-400 mt-0.5">
                      PDF, DOC or DOCX (Max 10MB)
                    </p>
                  </label>
                )}
              </div>

              {/* Portfolio / GitHub (Optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5" htmlFor="apply-portfolio">
                  Portfolio / GitHub / LinkedIn (Optional)
                </label>
                <input
                  id="apply-portfolio"
                  type="url"
                  placeholder="https://github.com/username or LinkedIn"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  className="input-base text-sm"
                />
              </div>

              {/* Description / Cover Note */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5" htmlFor="apply-desc">
                  About You & Skills / Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="apply-desc"
                  required
                  rows={3}
                  placeholder="Briefly describe your background, technical skills, projects, and why you would like to join Coding House..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input-base text-sm leading-relaxed"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  onClick={handleClose}
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Sending Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
