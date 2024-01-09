"use client";

import AddEmail from "@/components/AddEmail";
import Arrivals from "@/components/Arrivals";
import Brands from "@/components/Brands";
import Favorite from "@/components/Favorite";
import Hero from "@/components/Hero";
import Payday from "@/components/Payday";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="">
      <Hero />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1rem 2rem",
          fontSize: "20px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#0C9",
          color: "#fff",
          textAlign: "center",
          zIndex: 999999,
        }}
      >
        Scroll to top
      </button>
      <Brands />
      <Arrivals />
      <Payday />
      <Favorite />
      <AddEmail />
    </main>
  );
}
