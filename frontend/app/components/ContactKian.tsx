'use client';

import { useState } from 'react';

export default function ContactKianButton() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => setShowContact(!showContact)}
        aria-expanded={showContact}
        aria-controls="contact-info"
      >
        Contact Me
      </button>

      {showContact && (
        <div
          id="contact-info"
          className="mt-2 p-3 border rounded bg-gray-50 text-gray-800 max-w-xs"
        >
          <p>Email: <a href="mailto:kianwheeler2004@gmail.com" className="text-blue-600 underline">kianwheeler2004@gmail.com</a></p>
          <p>Phone: <a href="tel:+18503710863" className="text-blue-600 underline">+1 (850) 371-0863</a></p>
        </div>
      )}
    </div>
  );
}
