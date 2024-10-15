import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    feedback: string;
    name: string;
    user_profile_url: string;
    rating: number;
    profession: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed]
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 md:max-w-7xl overflow-hidden", // Adjust max width for mobile
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div className="max-w-md mx-auto md:max-w-none"> {/* Container for mobile */}
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap md:gap-2", // Adjust gap for mobile
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className={cn(
                "w-[240px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-500 px-4 py-4 md:w-[350px] md:px-8 md:py-6", // Adjust card width and padding for mobile
                "md:gap-4" // Adjust gap for mobile
              )}
              style={{ background: "rgb(255, 255, 255)" }}
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className=" relative z-20 text-sm leading-[1.6] text-[#212121] font-normal">
                  " {item?.feedback} "
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-row items-center gap-3">
                    <img src={item.user_profile_url}   className="size-[40px] rounded-full object-fit"/>
                    <div className="flex flex-col  px-1">
                    <span className=" text-sm leading-[1.6] font-nn font-[600] text-[#212121] ">
                      {item.name}
                    </span>
                    <span className=" text-sm leading-[1.6] text-[#212121] font-normal">
                      {item.profession}
                    </span>
                    </div>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};