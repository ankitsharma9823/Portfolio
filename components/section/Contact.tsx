"use client";

import { useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold py-3.5 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Sending Message...
        </span>
      ) : (
        <>
          <span>Send Message</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </>
      )}
    </button>
  );
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useActionState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Message sent! I'll get back to you shortly.");
      formRef.current?.reset();
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-background text-foreground overflow-hidden"
    >
      {/* Background Lighting Elements */}
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-emerald-500/[0.07] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-teal-500/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-medium mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3 shadow-sm shadow-emerald-500/50" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Let's talk about your project
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you have a product idea, want to collaborate on software, or just want to connect—my inbox is always open.
              </p>
            </div>

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-card border border-border/80 text-xs font-mono text-muted-foreground shadow-sm">
              <Clock className="w-4 h-4 text-emerald-500 animate-pulse" />
              <span>Response time: <strong className="text-foreground font-semibold">Under 24 hours</strong></span>
            </div>

            {/* Interactive Channels List */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card */}
              <a
                href="mailto:rimalankush587@gmail.com"
                className="group flex items-center justify-between p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-500/[0.03] transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-medium text-foreground group-hover:text-emerald-500 transition-colors">
                      rimalankush587@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub & LinkedIn Row */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/ankitsharma9823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-500/[0.03] transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground block">GitHub</span>
                      <span className="text-xs font-mono font-bold text-foreground">ankitsharma</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankit-sharma-1aa523386/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-500/[0.03] transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <FaLinkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground block">LinkedIn</span>
                      <span className="text-xs font-mono font-bold text-foreground">Connect</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border-2 border-border/80 bg-card/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
            >
              {/* Card Accent */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>Send A Direct Message</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                  Secure Action
                </span>
              </div>

              <form ref={formRef} action={action} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block font-semibold">
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl bg-background/80 border border-border/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block font-semibold">
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl bg-background/80 border border-border/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, ideas, or timeline..."
                    className="w-full rounded-xl bg-background/80 border border-border/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>

                <SubmitButton />
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;