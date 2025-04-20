import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent! (In a real app this would send your message.)");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="min-h-screen bg-green-800 py-20 px-6">
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl p-12 pt-20 pb-20 max-w-4xl w-full border border-green-300 mx-auto">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-4">
          How You Can Contact Me
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Feel free to reach out — I’m always open to connecting or just chatting!
        </p>
        <p className="text-lg text-black text-center">My email:</p>
        <p className="text-lg text-green-800 text-center mb-8">st167357@ucf.edu</p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border border-green-300 focus:outline-none"
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-xl border border-green-300 focus:outline-none"
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-xl border border-green-300 focus:outline-none"
          ></textarea>
          {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}

          <button
            type="submit"
            className="bg-green-800 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://github.com/sburbank22"
            target="_blank"
            rel="noreferrer"
            className="text-green-800 font-medium hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/stephanie-burbank-97832b1b8"
            target="_blank"
            rel="noreferrer"
            className="text-green-800 font-medium hover:underline"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-sm text-gray-600 mt-10 text-center italic">
          Thanks for visiting my portfolio — I’d love to hear from you!
        </p>
      </div>
    </section>
  );
}

export default Contact;
