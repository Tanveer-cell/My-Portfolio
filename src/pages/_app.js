import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import "katex/dist/katex.min.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import DnaHelixCanvas from "@/components/DnaHelixCanvas";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [ripples, setRipples] = useState([]);
  const [showDna, setShowDna] = useState(router.pathname === "/");
  const [showParticles, setShowParticles] = useState(router.pathname !== "/");
  const prevPathRef = useRef(router.pathname);

  useEffect(() => {
    const handleClick = (event) => {
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { id, x: event.clientX, y: event.clientY },
      ]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 900);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    let dnaTimer;
    let particleTimer;

    const handleStart = () => {};

    const handleDone = (url) => {
      const prevPath = prevPathRef.current;
      prevPathRef.current = url;

      if (url === "/") {
        dnaTimer = setTimeout(() => setShowDna(true), 900);
        particleTimer = setTimeout(() => setShowParticles(false), 900);
      } else if (prevPath === "/") {
        dnaTimer = setTimeout(() => setShowDna(false), 900);
        particleTimer = setTimeout(() => setShowParticles(true), 900);
      } else {
        setShowDna(false);
        setShowParticles(true);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleDone);
    router.events.on("routeChangeError", handleDone);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleDone);
      router.events.off("routeChangeError", handleDone);
      if (dnaTimer) clearTimeout(dnaTimer);
      if (particleTimer) clearTimeout(particleTimer);
    };
  }, [router.events]);
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Tanveer's Website" />
          <meta
            property="og:description"
            content="Welcome to my world of Technology and Science"
          />
          <meta
            property="og:image"
            content="/image.png"
          />
          <link rel="icon" href="/fav.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont w-full min-h-screen relative flex flex-col`}>
        {showDna ? <DnaHelixCanvas /> : null}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple-wave"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
        {showParticles ? (
          <div className="bio-particle-layer">
            <span className="bio-particle" style={{ left: "6%", top: "12%", animationDelay: "-0.2s", "--dx": "10px", "--dy": "-18px", "--dur": "4.6s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "14%", top: "24%", animationDelay: "-1.1s", "--dx": "-12px", "--dy": "-10px", "--dur": "3.8s" }} />
            <span className="bio-particle" style={{ left: "22%", top: "10%", animationDelay: "-0.6s", "--dx": "6px", "--dy": "-14px", "--dur": "4.2s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "30%", top: "28%", animationDelay: "-1.7s", "--dx": "-8px", "--dy": "-16px", "--dur": "5.1s" }} />
            <span className="bio-particle" style={{ left: "38%", top: "16%", animationDelay: "-0.9s", "--dx": "12px", "--dy": "-12px", "--dur": "3.9s" }} />
            <span className="bio-particle" style={{ left: "46%", top: "34%", animationDelay: "-1.4s", "--dx": "-10px", "--dy": "-18px", "--dur": "4.8s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "54%", top: "18%", animationDelay: "-0.4s", "--dx": "8px", "--dy": "-10px", "--dur": "4.0s" }} />
            <span className="bio-particle" style={{ left: "62%", top: "30%", animationDelay: "-1.9s", "--dx": "-6px", "--dy": "-14px", "--dur": "5.0s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "70%", top: "14%", animationDelay: "-0.8s", "--dx": "10px", "--dy": "-16px", "--dur": "4.3s" }} />
            <span className="bio-particle" style={{ left: "78%", top: "26%", animationDelay: "-1.3s", "--dx": "-9px", "--dy": "-12px", "--dur": "3.7s" }} />
            <span className="bio-particle" style={{ left: "86%", top: "16%", animationDelay: "-0.5s", "--dx": "7px", "--dy": "-18px", "--dur": "4.9s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "92%", top: "30%", animationDelay: "-1.6s", "--dx": "-11px", "--dy": "-10px", "--dur": "4.1s" }} />
            <span className="bio-particle" style={{ left: "10%", top: "50%", animationDelay: "-1.2s", "--dx": "12px", "--dy": "-14px", "--dur": "4.4s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "20%", top: "60%", animationDelay: "-0.7s", "--dx": "-8px", "--dy": "-16px", "--dur": "3.6s" }} />
            <span className="bio-particle" style={{ left: "32%", top: "54%", animationDelay: "-1.5s", "--dx": "6px", "--dy": "-12px", "--dur": "5.2s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "44%", top: "64%", animationDelay: "-0.3s", "--dx": "-10px", "--dy": "-18px", "--dur": "4.0s" }} />
            <span className="bio-particle" style={{ left: "56%", top: "52%", animationDelay: "-1.8s", "--dx": "9px", "--dy": "-10px", "--dur": "3.8s" }} />
            <span className="bio-particle" style={{ left: "68%", top: "62%", animationDelay: "-0.4s", "--dx": "-6px", "--dy": "-16px", "--dur": "4.7s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "80%", top: "56%", animationDelay: "-1.0s", "--dx": "11px", "--dy": "-12px", "--dur": "4.3s" }} />
            <span className="bio-particle" style={{ left: "90%", top: "66%", animationDelay: "-0.6s", "--dx": "-9px", "--dy": "-18px", "--dur": "3.9s" }} />
            <span className="bio-particle" style={{ left: "16%", top: "80%", animationDelay: "-1.6s", "--dx": "8px", "--dy": "-14px", "--dur": "4.6s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "28%", top: "84%", animationDelay: "-0.9s", "--dx": "-10px", "--dy": "-12px", "--dur": "3.7s" }} />
            <span className="bio-particle" style={{ left: "40%", top: "76%", animationDelay: "-1.3s", "--dx": "12px", "--dy": "-16px", "--dur": "4.8s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "52%", top: "86%", animationDelay: "-0.5s", "--dx": "-6px", "--dy": "-10px", "--dur": "4.1s" }} />
            <span className="bio-particle" style={{ left: "64%", top: "78%", animationDelay: "-1.1s", "--dx": "10px", "--dy": "-18px", "--dur": "5.0s" }} />
            <span className="bio-particle" style={{ left: "76%", top: "88%", animationDelay: "-0.7s", "--dx": "-8px", "--dy": "-14px", "--dur": "4.2s" }} />
            <span className="bio-particle bio-particle--blue" style={{ left: "88%", top: "80%", animationDelay: "-1.4s", "--dx": "6px", "--dy": "-12px", "--dur": "3.8s" }} />
          </div>
        ) : null}
        <div className="relative z-10 flex flex-col flex-1">
          <NavBar />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer/>
        </div>
      </main>
    </>
  );
}
