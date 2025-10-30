"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpotifyPlayer from "@/components/SpotifyPlayer";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1200, easing: "ease-out-quart" });
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 16px",
        gap: "32px",
      }}
    >
      <section data-aos="fade-down" style={{ textAlign: "center", maxWidth: 900 }}>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            color: "#e272a3",
            fontStyle: "italic",
            margin: 0,
            textShadow: "0 2px 12px rgba(200,150,250,0.25)",
            lineHeight: 1.2,
          }}
        >
          "Todo lo que puedas imaginar es real."
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            marginTop: 16,
            color: "#6d7a84",
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            maxWidth: 760,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Un espacio suave y minimalista para acompañar tu escrito con música.
        </p>
      </section>

      <section data-aos="zoom-in" style={{ width: "100%", maxWidth: 800 }}>
        <SpotifyPlayer />
      </section>

      <section
        data-aos="fade-up"
        data-aos-offset="120"
        style={{
          maxWidth: 900,
          marginTop: 24,
          textAlign: "center",
          color: "#5b6a72",
          fontSize: "clamp(1rem, 2vw, 1.1rem)",
        }}
      >
        <p>
          Desliza para sentir el ritmo del color y la música.
        </p>
      </section>
    </main>
  );
}

