"use client";
import Image from "next/image";
import { ThemeToggle } from "@/components/themeToggle";
import "@/styles/main.css";
import '@/styles/theme.css'
import { useEffect, useRef, useState } from "react";
import Link from "next/dist/client/link";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselInterval = useRef<NodeJS.Timeout | undefined>(undefined);
    const slides = [
      {
        image: "/b1.jpg",
      },
      {
        image: "/b2.jpg",
      },
      {
        image: "/b3.jpg",
      },
      {
        image: "/b4.jpg",
      },
    ];

  useEffect(() => {
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(carouselInterval.current);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="Top_Part">
          <div className="Logo">
            <Image src="/image.png" alt="Manthan School Logo" width={400} height={400} className="w-full h-full" />
          </div>
          <div className="Nav">
            <h1 className="text-6xl font-bold text-gradient animate-gradient mb-4">
              The Manthan School
            </h1>
            <h2>Greater Noida West, Affiliated to <b>CBSE</b></h2>
          </div>
        </div>
        <button className="btn-neon mt-8 px-6 py-3 text-lg font-semibold rounded">
          Login
        </button>
        <section className="carousel-section">
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="carousel-slide">
                  <Image 
                    src={slide.image} 
                    alt={`Slide ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <div className="carousel-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${currentSlide === i ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="Vision">
          <h1><b>Best</b> CBSE School in Greater Noida West</h1><br />
          <p>
            The Manthan School is all about INTERNATIONAL APPROACH WITH INDIAN Soch. There are numerous schools in Greater Noida & Delhi NCR that are excellent at imparting education of the highest order but very few that combine it with a stress on Indian culture & heritage, and Manthan is one of these few. With a vision to build safe, happy and protective learning spaces for students, we are providing the best of the best education to every child for many years. If you are a parent living in Greater Noida and searching for top CBSE school nearby, then we welcome you to the Manthan school. We aim to prepare the child in such a way that she/he can stand tall on her/his terms in this world.
          </p>
        </section>
        <div className="Theme_toggle">
          <ThemeToggle />
        </div>
        <div className="Last Part">
          <p className="text-sm text-muted">
            Join us in our mission to revolutionize the way we learn and grow together.
          </p>
          <p>COme ansd see</p>
        </div>
        <div className="Footer">
          <div className="Footer_part">
            <h1>
              Address:
            </h1>
            <p className="text-lg text-muted">
              The Manthan School, <br />
              Under the aegis of Mahagun Shiksha and Sewa Foundation, <br />
              Greater Noida West Campus, <br />
              Plot No. GH-04, Sec- 16c, Greater Noida West, <br />
              U.P. Pin - 201306
            </p>
          </div>
          <div className="Footer_part">
            <h1>
              Quick Links:
            </h1>
            <p className="text-lg text-muted">
              <br />
              <a href="/career" className="text-blue-500 hover:underline">
                Career
              </a>
              <br />
              <a href="/blog" className="text-blue-500 hover:underline">
                Blog
              </a>
              <br />
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact
              </a>
            </p>
          </div>
          <div className="Footer_part">
            <h1>
              Phone:
            </h1>
            <p>
              📞 0120-7133925<br />
              📱 +91-9999116600
            </p>
          </div>          
        </div>
      <section className="final-cta">
        <h2>Ready to go <span className="gradient-text">crazzzzzzzzy</span>?</h2>
        <Link href="auth" className="get-started-btn">
          Login
        </Link>
      </section>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Devs. All rights reserved.</p>
        <p>Made with crazzy ambition.</p>
      </footer>
    </main>
  )
}