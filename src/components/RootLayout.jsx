"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import FadeIn from "./FadeIn";
import { NavList } from "../data/Links";
import Footer from "./Footer";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  return (
    <Container>
      <FadeIn>
        <div className="flex items-center justify-between ">
          <Link href={"/"} aria-label="Home">
            <Logo>
              <div
                className={clsx(
                  "profile-name text-xl font-medium capitalize text-neutral-950 dark:text-neutral-50",
                  {
                    "!text-neutral-50": expanded,
                    "text-neutral-950": !expanded,
                  }
                )}
              >
                Yunus YILMAZ
                <small className="text-sm block font-normal text-gray-500 dark:text-neutral-500 ">
                  full stack developer
                </small>
              </div>
            </Logo>
          </Link>

          <div className="flex items-center gap-x-8">
            <ThemeSwitch />
            <button
              ref={toggleRef}
              type="button"
              onClick={onToggle}
              aria-expanded={expanded.toString()}
              aria-controls={panelId}
              className={clsx("group -m-2.5 rounded-full p-2.5 transition")}
              aria-label="Toggle navigation"
            >
              <Icon
                className={clsx("h-6 w-6  transition-all duration-300 ", {
                  "fill-neutral-50 group-hover:fill-neutral-400": expanded,
                  "fill-neutral-850 group-hover:fill-neutral-700": !expanded,
                })}
              />
            </button>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};
const NavigationRow = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-bgBlack">
      <Container>
        <div className="grid grid-cols-1 ">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative isolate text-center hover:opacity-70 bg-bgBlack px-6 py-10 "
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="mt-px font-display text-4xl font-medium tracking-tight text-white bg-bgBlack">
      <NavigationRow>
        {NavList.map((item, index) => (
          <NavigationItem key={index} href={item.href}>
            {item.name}
          </NavigationItem>
        ))}
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? "" : undefined}
        >
          <Header
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : "0rem" }}
          className="relative z-50 overflow-hidden bg-bgBlack"
          aria-hidden={expanded ? undefined : "true"}
          inert={expanded ? undefined : ""}
        >
          <motion.div layout className="bg-bgBlack">
            <div ref={navRef} className="bg-bgBlack pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>

            <Navigation />
          </motion.div>
        </motion.div>
      </header>
      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
