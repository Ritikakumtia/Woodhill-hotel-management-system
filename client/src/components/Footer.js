import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsArrowUp,
  BsChatDots,
} from "react-icons/bs";
import { useState } from "react";

export default function FooterC() {
  const [email, setEmail] = useState("");

  // ✅ MOVE FUNCTION INSIDE COMPONENT
  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    } else {
      alert("Chat not loaded yet");
    }
  };

  const handleSubscribe = async () => {
    if (!email) return alert("Enter email");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Subscribed!");
        setEmail("");
      }
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <Footer className="bg-[#0f172a] text-gray-300 border-t-4 border-orange-500 mt-16">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* BRAND */}
          <div>
            <h1 className="text-[30px] font-bold">
              <Link to="/">
                <span className="text-[rgb(221,158,3)]">Wood</span>
                <span className="text-[rgb(91,178,76)]">hill</span>
              </Link>
            </h1>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Experience luxury, comfort, and unforgettable hospitality.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400">→ Home</Link></li>
              <li><Link to="/rooms" className="hover:text-orange-400">→ Rooms</Link></li>
              <li><Link to="/booking" className="hover:text-orange-400">→ Book Now</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">→ About</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🏨 Luxury Rooms</li>
              <li>🍽 Fine Dining</li>
              <li>🎉 Event Booking</li>
              <li>🚗 Travel Assistance</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>

            <p className="text-sm text-gray-400 mb-3">
              📍 Haldwani, Uttarakhand <br />
              📞 +91 9876543210 <br />
              ✉ support@woodhill.com
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ritika Kumtia. All rights reserved.
          </p>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6 mt-4 sm:mt-0">

            {/* SOCIAL */}
            <div className="flex gap-5 text-lg">
              <a href="https://facebook.com" target="_blank" className="hover:text-orange-400"><BsFacebook /></a>
              <a href="https://instagram.com" target="_blank" className="hover:text-pink-400"><BsInstagram /></a>
              <a href="https://twitter.com" target="_blank" className="hover:text-blue-400"><BsTwitter /></a>
              <a href="https://github.com/Ritikakumtia" target="_blank" className="hover:text-gray-200"><BsGithub /></a>
            </div>

            {/* ✅ CHAT BUTTON ADDED */}
            <button
              onClick={openChat}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-green-500 text-white flex items-center gap-2 hover:scale-105 transition"
            >
              <BsChatDots />
              Chat
            </button>

            {/* SCROLL */}
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-green-500 hover:scale-110 transition"
            >
              <BsArrowUp />
            </button>

          </div>
        </div>
      </div>
    </Footer>
  );
}