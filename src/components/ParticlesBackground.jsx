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
              mode: "attract", // More elegant than repulse
              parallax: { enable: true, smooth: 10, force: 30 },
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 150,
              duration: 0.3,
              factor: 1,
            },
          },
        },
        particles: {
          number: {
            value: 90,
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#3b82f6", "#6366f1", "#0ea5e9", "#a855f7"], // cool tailwind shades
          },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 130,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: { enable: true, minimumValue: 0.3 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
