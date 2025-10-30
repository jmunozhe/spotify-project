import React from "react";

export default function SpotifyPlayer(): JSX.Element {
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
        background: "rgba(255, 255, 255, 0.6)",
      }}
    >
      <iframe
        src="https://open.spotify.com/embed/playlist/0PU8OYe9WMuinKHC1IjoCt?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        style={{ border: "none" }}
      />
    </div>
  );
}

