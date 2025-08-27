import React, { useContext } from 'react'
import { assets } from '../../assets/assests'
import { AppContext } from '../../context/AppContext'
import { PhoneCall, Mail, MapPin } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2" id='footer'>
      <div className="h-9 w-9 overflow-hidden rounded-xl bg-white shadow ring-1 ring-black/10">
        <img
          src={assets.inprep}
          alt="InPrep"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="text-lg font-extrabold">
        <span className="text-[#FE7E1D]">In</span>
        <span className="text-[#008F3F]">Prep</span>
      </div>
    </div>
  );
}

const Footer = () => (
  <footer className="border-t border-black/5 bg-[#0A0A0B] py-8 text-white">
    <div className="mx-auto grid w-full gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div className="space-y-3">
        <Logo />
        <p className="text-sm text-white/70">
          <span className="text-[#FE7E1D]">In</span>
          <span className="text-[#008F3F]">Prep</span> 
          &nbsp; by BeyondStudy — a leading online learning platform
          delivering NCERT-based courses <br />from Class 1 to 12.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Company</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Support</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <a href="/refunds">Refund Policy</a>
          </li>
          <li>
            <a href="/terms">Terms & Privacy</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold">Contact</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          <li className="flex items-center gap-2">
            <PhoneCall className="h-4 w-4" /> +91 6387 992259
          </li>
          <li className="flex items-center gap-2">
            <PhoneCall className="h-4 w-4" /> +91 8899 056475
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> contactinprep@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> India
          </li>
        </ul>
      </div>
    </div>
    <div className="mx-auto mt-5 max-w-7xl px-4 text-center text-xs text-white/60 lg:px-8">
      © {new Date().getFullYear()} <span className="text-[#FE7E1D]">In</span>
          <span className="text-[#008F3F]">Prep</span> by BeyondStudy. All rights reserved.
    </div>
  </footer>
);

export default Footer;