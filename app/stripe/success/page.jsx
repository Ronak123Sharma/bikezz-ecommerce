"use client"; // Add this line at the top

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Confetti from "react-confetti";

const SuccessPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-72">
      <div className="container mx-auto">
        {showConfetti && <Confetti />}
        <h3 className="text-center mb-4">
          Your Payment was successful! Thank You
        </h3>
        <Link href="/">
          <button className="btn btn-accent mx-auto">
            Back to the homepage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
