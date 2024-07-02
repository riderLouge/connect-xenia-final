import React, { useRef } from "react";
import ItemsContainer from "./itemsContainer";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }: any) => "black"};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }: any) => "black"};
  outline: none;
  font-size: 18px;
  color: ${({ theme }: any) => "black"};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }: any) => "black"};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }: any) => "black"};
  outline: none;
  font-size: 18px;
  color: ${({ theme }: any) => "black"};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }: any) => "black"};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }: any) => "black"};
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(135deg, #ffcc00 0%, #ffd700 50%, #ffcc00 100%);
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634, filter: brightness(1);
  }
`;


const Footer = () => {
  
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");
  const form = useRef<HTMLFormElement | null>(null); 
  const [messageType, setMessageType] = React.useState(""); 

  const Message = styled.div`
  color: ${(messageType === "success" ? "green" : "red")};
  font-size: 14px;
  margin-top: 5px;
`;


  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000); // Clear message after 5 seconds
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation checks
    if (!name.trim()) {
      setMessage("Please enter your name.");
      setMessageType("error")
      clearMessage();
      return;
    }

    if (!/^\d{10}$/.test(contact.trim())) {
      setMessage("Please enter a valid 10-digit contact number.");
      setMessageType("error")
      clearMessage();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      clearMessage();
      return;
    }

    if (!userMessage.trim()) {
      setMessage("Please enter your message.");
      setMessageType("error")
      clearMessage();
      return;
    }

    if (form.current) {
      // If all validations pass, proceed to send the email
      emailjs
        .sendForm("service_xk9p33h", "template_nsgaq8o", form.current, "MIIrx_7Qldynsuemr")
        .then(() => {
          setMessage("Email sent successfully!");
          setName("");
          setEmail("");
          setContact("");
          setUserMessage("");
          clearMessage();
          setMessageType("success")
        })
        .catch((error) => {
          setMessage("Failed to send email. Please try again later.");
          setMessageType("error")
          clearMessage();
        });
    } else {
      setMessage("Form not initialized properly. Please try again.");
      setMessageType("error")
      clearMessage();
    }
  };

  return (
    <footer className="bg-black text-black mt-44" id="contact">
      <div className="md:flex md:justify-between md:items-start sm:px-12 px-4 bg-orange-400 py-7">
        <div className="md:w-1/3">
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Get in Touch with us!</ContactTitle>
            <ContactInput
              placeholder="Your Name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ContactInput
              placeholder="Your Email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <ContactInput
              placeholder="Your Contact Number"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <ContactInputMessage
              placeholder="Message"
              rows={4}
              name="message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            {message && <Message>{message}</Message>}
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </div>
        <div className="md:w-2/3 pt-10" style={{ height: "29rem" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.2060723074195!2d-0.1715812411479645!3d50.827255783874016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758547d7c99c6d%3A0x9243c4c38f27dcee!2sGrosvenor%20Casino%2C%2028%20Fourth%20Ave%2C%20Brighton%20and%20Hove%2C%20Hove%20BN3%202PJ%2C%20UK!5e0!3m2!1sen!2sin!4v1719214875370!5m2!1sen!2sin" width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            ></iframe>
        </div>
      </div>
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2024. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/connectxenia?igsh=MmhwcGFtbzBidzFu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/connectxenia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61559394152025&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 duration-300"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
