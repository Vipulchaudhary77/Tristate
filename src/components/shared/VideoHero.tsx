"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type VideoHeroProps = {
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
};

const DEFAULT_VIDEO = "/videos/hero.mp4";
const DEFAULT_POSTER = "/videos/hero-poster.jpg";
const FALLBACK_VIDEO =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

export function VideoHero({
  videoSrc = DEFAULT_VIDEO,
  posterSrc = DEFAULT_POSTER,
  className,
  overlayClassName,
  children,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);
  const [activeSrc, setActiveSrc] = useState(videoSrc);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setUseVideo(false);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const play = async () => {
      try {
        await video.play();
      } catch {
        setUseVideo(false);
      }
    };

    play();
  }, [activeSrc]);

  const handleError = () => {
    if (activeSrc !== FALLBACK_VIDEO) {
      setActiveSrc(FALLBACK_VIDEO);
      return;
    }
    setUseVideo(false);
  };

  return (
    <div className={cn("absolute inset-0", className)}>
      {useVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          onError={handleError}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={activeSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={posterSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className={cn("absolute inset-0 bg-black/60", overlayClassName)} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      {children}
    </div>
  );
}
