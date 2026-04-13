import { useEffect, useState } from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import { LuBadgeAlert } from "react-icons/lu";
import { GrStatusGood } from "react-icons/gr";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });
  useEffect(() => {
    if (submitStatus.message) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000); // 5000ms = 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }
  }, [submitStatus]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Regex Patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Only letters, 2-50 chars

    // 2. Perform Checks
    if (!nameRegex.test(formData.name)) {
      return setSubmitStatus({
        type: "error",
        message: "Please enter a valid name (letters only, min 2 characters).",
      });
    }

    if (!emailRegex.test(formData.email)) {
      return setSubmitStatus({
        type: "error",
        message: "Security Key (Email) format is invalid.",
      });
    }

    if (formData.message.length < 10) {
      return setSubmitStatus({
        type: "error",
        message: "Payload (Message) must be at least 10 characters long.",
      });
    }

    // If all checks pass, proceed to send...
    setIsLoading(true);
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="py-24 px-8 md:px-24 bg-surface" id="contact">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="font-headline text-5xl font-black uppercase mb-8">
            Secure A<br />
            <span className="text-primary">Connection</span>
          </h2>
          <p className="text-on-surface-variant mb-12 max-w-md">
            Currently available for full-time, remote opportunities worldwide.
            Based in Bournemouth, United Kingdom.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
              <span className="font-mono text-sm uppercase">
                Dorset, United Kingdom
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              <span className="font-mono text-sm lowercase">
                okharubelieve@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-surface-container p-8 rounded-lg border border-outline-variant/20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {submitStatus.type && (
              <div
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 animate-in fade-in slide-in-from-top-2 ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <GrStatusGood className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <LuBadgeAlert className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Name
                </label>
                <input
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded px-4 py-3 text-sm focus:border-primary/50 transition-all outline-none"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Security Key (Email)
                </label>
                <input
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded px-4 py-3 text-sm focus:border-primary/50 transition-all outline-none"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Payload (Message)
              </label>
              <textarea
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded px-4 py-3 text-sm focus:border-primary/50 transition-all outline-none"
                rows={3}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message..."
              ></textarea>
            </div>
            <Button
              className="text-sm flex justify-center items-center gap-2 w-full"
              disabled={isLoading}
            >
              {isLoading ? "Transmitting..." : "Initialize Transmission"}
              {!isLoading && (
                <span className="material-symbols-outlined">send</span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
