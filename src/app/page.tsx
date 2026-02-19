"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const videos = ["https://990-agency.b-cdn.net/work_1.mp4", "https://990-agency.b-cdn.net/work_2.mp4"];

export default function Home() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const key = "qhp_video_index";
    const stored = sessionStorage.getItem(key);
    const index = stored ? (parseInt(stored, 10) + 1) % videos.length : 0;
    sessionStorage.setItem(key, String(index));
    setVideoSrc(videos[index]);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Background video */}
      {videoSrc && (
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/logo.png"
          alt="Quality Home Protection"
          width={260}
          height={260}
          priority
          className="mb-8"
        />

        <div className="mb-6 h-px w-16 bg-amber-500" />

        <p className="mb-2 text-lg font-semibold uppercase tracking-widest text-amber-400">
          Website Under Construction
        </p>
        <p className="max-w-md text-slate-300">
          We&apos;re building something great. Our new website is on its way. In
          the meantime, give us a call for all your roofing needs.
        </p>
        <br />
        <p className="text-slate-300">
          Call us at <a href="tel:412-999-9999">412-999-9999</a>
        </p>
        <p className="text-slate-300">
          Or email us at <a href="mailto:admin@qualityhome.co">admin@qualityhome.co</a>
        </p>

        <div className="mt-10 text-sm text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} Quality Home Protection LLC
          </span>
        </div>
      </div>
    </div>
  );
}
