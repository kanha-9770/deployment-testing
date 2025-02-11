"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<string | null>(null);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <nav
      onMouseLeave={() => {
        setActive(null);
        setPosition({ left: 0, width: 0, opacity: 0 });
      }}
      className="mx-auto px-4 flex w-fit rounded-full border-1 bg-white"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          setActive,
          active,
          setPosition,
        })
      )}
      <Cursor position={position} />
    </nav>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  setPosition,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  children?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseEnter = () => {
      if (!ref?.current) return;

      const { width } = ref.current.getBoundingClientRect();

      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });

      setActive(item);
    };

    const element = ref.current;
    element.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [ref, setActive, setPosition, item]);

  return (
    <div
      ref={ref}
      className="z-10 cursor-pointer px-3 font-montserrat py-2 text-white  md:px-3 md:py-2 md:text-base "
    >
      <motion.p className="text-black">
        {item}
      </motion.p>
      {active === item && (
        <motion.div className="absolute top-[calc(100%_-_1.0rem)] left-3 pt-4">
          <motion.div
            transition={{ duration: 0.3 }}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
          >
            <motion.div layout className="w-max h-full p-0">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.div
      animate={{
        ...position,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      className="absolute z-0 mt-1 h-4 rounded-full bg-[#eaeaea] md:h-8"
    />
  );
};
