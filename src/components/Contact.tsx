"use client";
import { useState } from "react";
import { siteConfig } from "@/config";
import { useLanguage } from "@/context/LanguageContext";
import { SectionLabel } from "./About";

export default function Contact() {
  const { social, contact: contactShared } = siteConfig;
  const { t } = useLanguage();
  const { contact } = t;
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field: "name" | "email" | "message", value: string): string | undefined => {
    const v = contact.form.validation;
    if (field === "name") return value.trim() ? undefined : v.nameRequired;
    if (field === "email") {
      if (!value.trim()) return v.emailRequired;
      return EMAIL_RE.test(value.trim()) ? undefined : v.emailInvalid;
    }
    return value.trim() ? undefined : v.messageRequired;
  };

  const handleBlur = (field: "name" | "email" | "message", value: string) => {
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = {
      name: validateField("name", name),
      email: validateField("email", email),
      message: validateField("message", message),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) return;

    const subject = encodeURIComponent(
      contact.form.emailSubjectTemplate.replace("{name}", name.trim())
    );
    const body = encodeURIComponent(
      contact.form.emailBodyTemplate
        .replace("{name}", name.trim())
        .replace("{email}", email.trim())
        .replace("{message}", message.trim())
    );
    const a = document.createElement("a");
    a.href = `mailto:${contactShared.toEmail}?subject=${subject}&body=${body}`;
    a.click();
    setName(""); setEmail(""); setMessage("");
    setErrors({});
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const channels = [
    social.email && {
      label: t.social.aria.email,
      value: social.email,
      href: `mailto:${social.email}`,
      icon: "mail",
    },
    social.linkedin && {
      label: contact.channels.linkedin.label,
      value: social.handles.linkedin,
      href: social.linkedin,
      icon: "linkedin",
    },
    social.github && {
      label: contact.channels.github.label,
      value: social.handles.github,
      href: social.github,
      icon: "github",
    },
  ].filter(Boolean) as { label: string; value: string; href: string; icon: string }[];

  const inputCls = (hasError: boolean) =>
    `w-full bg-neutral-50 dark:bg-neutral-900 border rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-colors duration-200 ${
      hasError
        ? "border-red-500 dark:border-red-500 focus:border-red-500"
        : "border-neutral-200 dark:border-neutral-700 focus:border-[var(--accent-color)]"
    }`;
  const labelCls = "text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400";
  const errorCls = "flex items-center gap-1.5 text-xs font-medium text-red-500 dark:text-red-400";

  const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{contact.sectionTitle}</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-name" className={labelCls}>{contact.form.nameLabel}</label>
                <input
                  id="cf-name"
                  type="text"
                  value={name}
                  onChange={e => { setName(e.target.value); if (errors.name) setErrors(prev => ({ ...prev, name: undefined })); }}
                  onBlur={e => handleBlur("name", e.target.value)}
                  placeholder={contact.form.namePlaceholder}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cf-name-error" : undefined}
                  className={inputCls(!!errors.name)}
                />
                {errors.name && <p id="cf-name-error" className={errorCls}><ErrorIcon />{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-email" className={labelCls}>{contact.form.emailLabel}</label>
                <input
                  id="cf-email"
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(prev => ({ ...prev, email: undefined })); }}
                  onBlur={e => handleBlur("email", e.target.value)}
                  placeholder={contact.form.emailPlaceholder}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "cf-email-error" : undefined}
                  className={inputCls(!!errors.email)}
                />
                {errors.email && <p id="cf-email-error" className={errorCls}><ErrorIcon />{errors.email}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-message" className={labelCls}>{contact.form.messageLabel}</label>
                <textarea
                  id="cf-message"
                  value={message}
                  onChange={e => { setMessage(e.target.value); if (errors.message) setErrors(prev => ({ ...prev, message: undefined })); }}
                  onBlur={e => handleBlur("message", e.target.value)}
                  rows={5}
                  placeholder={contact.form.messagePlaceholder}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "cf-message-error" : undefined}
                  className={`${inputCls(!!errors.message)} resize-none`}
                />
                {errors.message && <p id="cf-message-error" className={errorCls}><ErrorIcon />{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
                style={{ backgroundColor: "var(--accent-color)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 14l11-11" /><path d="M21 3l-6.5 18a.55.55 0 0 1-1 0l-3.5-7-7-3.5a.55.55 0 0 1 0-1l18-6.5" />
                </svg>
                {sent ? contact.form.sentConfirmation : contact.form.submitButton}
              </button>
            </form>

            {/* Info */}
            <div className="flex flex-col gap-6">
              {/* Availability */}
              <div className="flex flex-col gap-2">
                <span className={labelCls}>{contact.labels.availability}</span>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-semibold"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--accent-color) 10%, transparent)",
                      color: "var(--accent-color)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent-color)" }} />
                    {contact.availability.status}
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-2xl text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                    {contact.availability.workMode}
                  </span>
                </div>
              </div>

              {/* Response time */}
              <div className="flex flex-col gap-1.5">
                <span className={labelCls}>{contact.labels.responseTime}</span>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{contact.responseTime}</p>
              </div>

              {/* Timezone */}
              <div className="flex flex-col gap-1.5">
                <span className={labelCls}>{contact.labels.timezone}</span>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{contact.timezone}</p>
              </div>

              {/* Domains */}
              <div className="flex flex-col gap-2">
                <span className={labelCls}>{contact.labels.domains}</span>
                <div className="flex flex-wrap gap-2">
                  {contact.domains.map((d) => (
                    <span key={d} className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-medium">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Channels */}
              <div className="flex flex-col gap-2">
                <span className={labelCls}>{contact.labels.channels}</span>
                <ul className="flex flex-col gap-2">
                  {channels.map((ch) => (
                    <li key={ch.href}>
                      <a
                        href={ch.href}
                        target={ch.icon !== "mail" ? "_blank" : undefined}
                        rel={ch.icon !== "mail" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                      >
                        <span
                          className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "color-mix(in srgb, var(--accent-color) 10%, transparent)" }}
                        >
                          {ch.icon === "mail" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-color)" }} aria-hidden="true">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" /><path d="M3 7l9 6 9-6" />
                            </svg>
                          )}
                          {ch.icon === "linkedin" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-color)" }} aria-hidden="true">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 0 0-4 0" /><rect x="4" y="4" width="16" height="16" rx="2" />
                            </svg>
                          )}
                          {ch.icon === "github" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-color)" }} aria-hidden="true">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                            </svg>
                          )}
                        </span>
                        <span className="truncate">{ch.value}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
