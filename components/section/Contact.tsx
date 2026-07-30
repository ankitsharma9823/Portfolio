"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium py-3.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        "Sending..."
      ) : (
        <>
          Send Message
          <Send className="w-4 h-4" />
        </>
      )}
    </button>
  );
}

const Contact = () => {
  const [state, action] = useFormState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Message sent successfully.");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-emerald-500/[0.05] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-mono text-emerald-500 tracking-widest uppercase">
              05
            </span>
            <span className="h-px w-8 bg-border" />
            <span className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info */}
          <div className="space-y-8">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Have a project in mind or just want to say hi?  
              Send a message and I’ll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:rimalankush587@gmail.com"
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl border border-border/70 bg-card/40 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm font-mono text-foreground/80 group-hover:text-emerald-500 transition-colors">
                  rimalankush587@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/ankitsharma9823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border/70 bg-card/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-border/70 bg-card/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <motion.form
            action={action}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block">
                  Name
                </label>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl bg-background/60 border border-border/70 px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-background/60 border border-border/70 px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-background/60 border border-border/70 px-4 py-3 text-sm outline-none focus:border-emerald-500/50 transition-colors resize-none"
              />
            </div>

            <SubmitButton />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;