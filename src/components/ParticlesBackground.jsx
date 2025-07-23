import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
<Particles
  id="tsparticles"
  init={particlesInit}
  className="absolute inset-0 w-full h-full"
  options={{
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "attract",
          parallax: { enable: true, smooth: 10, force: 30 },
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 150,
          duration: 0.3,
          factor: 1,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      number: {
        value: 100,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#3b82f6", "#6366f1", "#0ea5e9", "#a855f7"],
      },
      links: {
        enable: true,
        color: "#60a5fa",
        distance: 130,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 1.5 },
        outModes: { default: "bounce" },
        direction: "none",
        random: true,
        straight: false,
      },
      shape: {
        type: ["circle", "triangle", "polygon", "star"],
      },
      opacity: {
        value: 0.5,
        random: { enable: true, minimumValue: 0.3 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.2,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
          sync: false,
        },
      },
      shadow: {
        enable: true,
        color: "#000000",
        blur: 2,
      },
      // ✅ Twinkle goes here
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.005,
          color: "#facc15",
        },
      },
    },
    detectRetina: true,
  }}
/>
  );
}
