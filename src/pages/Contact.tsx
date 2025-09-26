
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const Contact = () => {
  return (
    <div style={{ backgroundColor: "#f5d3f2ff", minHeight: "100vh" }}>
        <Header />
        <h1 style={{ color: "#6a3866ff", textAlign: "center", padding: "2rem" }} className="text-4xl font-bold">
            Contact Us
        </h1>
        <p style={{ color: "#455ba4ff", textAlign: "center", padding: "0 2rem 2rem 2rem" }} className="text-lg opacity-90">
            We'd love to hear from you! Whether you have questions about our courses, pricing, or anything else, feel free to reach out.
        </p>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
            <form className="space-y-4">
                <div>
                    <label style={{ color: "#1a0218ff" }} className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        style={{ backgroundColor: "#ffffff", borderColor: "#be89baff", color: "#1a0218ff" }}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div>
                    <label style={{ color: "#1a0218ff" }} className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={{ backgroundColor: "#ffffff", borderColor: "#be89baff", color: "#1a0218ff" }}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div>
                    <label style={{ color: "#1a0218ff" }} className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        style={{ backgroundColor: "#ffffff", borderColor: "#be89baff", color: "#1a0218ff" }}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        style={{ backgroundColor: "#be89baff", color: "#1a0218ff" }}
                        className="w-full py-2 px-4 rounded-md font-semibold hover:bg-primary transition-smooth"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  );
}
export default Contact;
