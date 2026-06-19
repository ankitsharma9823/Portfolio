"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions/sendEmail";
import { motion } from "framer-motion";
import { Send, Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full bg-emerald-600 text-white font-bold py-4 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest disabled:opacity-50"
    >
      {pending ? "INITIALIZING_SEND..." : "EXECUTE_SEND"} <Send className="w-4 h-4" />
    </button>
  );
}

const Contact = () => {
  const [state, action] = useFormState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Message successfully routed to inbox.");
    } else if (state?.error) {
      toast.error(`Error: ${state.error}`);
    }
  }, [state]);

  return (
    <section id="contact" className="py-24 container mx-auto px-6 bg-background text-foreground">
      <div className="mb-16 border-l-4 border-emerald-500 pl-6">
        <h2 className="text-sm font-mono text-emerald-600 dark:text-emerald-500 mb-2 flex items-center gap-2 uppercase tracking-widest">
          <Terminal className="w-4 h-4" /> System_Communication
        </h2>
        <h3 className="text-4xl font-bold tracking-tighter">GET_IN_TOUCH</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-12">
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Ready to start a new project? Reach out via the form or connect directly through my professional channels. 
            I typically respond within 24 hours.
          </p>

          <div className="space-y-6">
            <a href="mailto:rimalankush587@gmail.com" className="flex items-center gap-4 text-foreground hover:text-emerald-600 transition-colors group">
              <div className="p-3 border border-border group-hover:border-emerald-500 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-mono">rimalankush587@gmail.com</span>
            </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/ankitsharma9823" target="_blank" className="p-3 border border-border hover:border-emerald-500 transition-colors text-muted-foreground hover:text-emerald-600">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" className="p-3 border border-border hover:border-emerald-500 transition-colors text-muted-foreground hover:text-blue-600">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Adaptive Form */}
        <motion.form 
          action={action} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6 bg-card p-8 border border-border shadow-sm"
        >
          <div className="grid grid-cols-2 gap-6">
            <input name="name" placeholder="NAME" required className="bg-background border border-input p-4 w-full outline-none focus:border-emerald-500 font-mono text-sm transition-colors" />
            <input name="email" type="email" placeholder="EMAIL" required className="bg-background border border-input p-4 w-full outline-none focus:border-emerald-500 font-mono text-sm transition-colors" />
          </div>
          <textarea name="message" placeholder="MESSAGE" required rows={5} className="bg-background border border-input p-4 w-full outline-none focus:border-emerald-500 font-mono text-sm transition-colors" />
          
          <SubmitButton />
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;