import { useState, useEffect } from "react";

const SLIDES = [
  {
    title: "Nexus water tanks",
    subtitle: "",
    image: "/images/slideshow/nx1.png",
    tag: "",
  },
  {
    title: "Nexus water tanks",
    subtitle: "",
    image: "/images/slideshow/nx2.png",
    tag: "",
  },
  {
    title: "Nexus water tanks",
    subtitle: "",
    image: "/images/slideshow/nx3.png",
    tag: "",
  },
  {
    title: "Nexus water tanks",
    subtitle: "",
    image: "/images/slideshow/nx4.png",
    tag: "",
  },
  {
    title: "Nexus water tanks",
    subtitle: "",
    image: "/images/slideshow/nx5.png",
    tag: "",
  },
  {
    title: "Nexus water tanks",
    subtitle: "",
    image: "/images/slideshow/nx6.png",
    tag: "",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index) => {
    if (transitioning || index === current) return;
    setPrev(current);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setPrev(null);
      setTransitioning(false);
    }, 500);
  };

  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => goTo((current + 1) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(goNext, 2500);
    return () => clearInterval(timer);
  }, [current, transitioning]);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-transparent">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-contain"
          />

        </div>
      ))}

      {/* Prev arrow */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-black/20 text-white text-2xl flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next arrow */}
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-black/20 text-white text-2xl flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-black"
                : "w-2.5 h-2.5 bg-black/50 hover:bg-black/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}