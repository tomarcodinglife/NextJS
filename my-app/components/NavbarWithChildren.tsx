"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type NavChild =
  | { type: "link"; label: string; href: string }
  | {
      type: "product";
      title: string;
      description: string;
      href: string;
      image: string;
    };

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

// ─── Nav Data ────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    children: [
      {
        type: "product",
        title: "Analytics",
        description: "Real-time dashboards and custom reports for your team.",
        href: "/products/analytics",
        image: "https://assets.aceternity.com/manu.png",
      },
      {
        type: "product",
        title: "Automation",
        description: "Automate repetitive tasks and streamline workflows.",
        href: "/products/automation",
        image: "https://assets.aceternity.com/manu.png",
      },
      {
        type: "product",
        title: "Integrations",
        description: "Connect with 200+ tools your team already uses.",
        href: "/products/integrations",
        image: "https://assets.aceternity.com/manu.png",
      },
      {
        type: "product",
        title: "Security",
        description: "Enterprise-grade security with SSO and audit logs.",
        href: "/products/security",
        image: "https://assets.aceternity.com/manu.png",
      },
    ],
  },
  {
    label: "Solutions",
    children: [
      { type: "link", label: "For Startups", href: "/solutions/startups" },
      { type: "link", label: "For Enterprise", href: "/solutions/enterprise" },
      { type: "link", label: "For Agencies", href: "/solutions/agencies" },
      { type: "link", label: "For Developers", href: "/solutions/developers" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Book a call", href: "/book" },
];

// ─── ProductItem ─────────────────────────────────────────────────────────────

function ProductItem({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/10"
    >
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
          {title}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>
    </Link>
  );
}

// ─── Dropdown Panel ───────────────────────────────────────────────────────────

function DropdownPanel({ children }: { children: NavChild[] }) {
  const isProductGrid = children.some((c) => c.type === "product");

  return (
    <div
      className={`
        rounded-2xl border border-white/10 bg-neutral-900/80 p-4
        backdrop-blur-md shadow-xl shadow-black/40
        ${isProductGrid ? "grid grid-cols-2 gap-2 min-w-[440px]" : "flex flex-col gap-1 min-w-[200px]"}
      `}
    >
      {children.map((child, i) => {
        if (child.type === "product") {
          return (
            <ProductItem
              key={i}
              title={child.title}
              description={child.description}
              href={child.href}
              image={child.image}
            />
          );
        }
        return (
          <Link
            key={i}
            href={child.href}
            className="rounded-lg px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            {child.label}
          </Link>
        );
      })}
    </div>
  );
}

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

function DesktopNavItem({
  item,
  isActive,
  onEnter,
  onLeave,
}: {
  item: NavItem;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const hasChildren = !!item.children?.length;

  return (
    <div
      className="relative"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {item.href && !hasChildren ? (
        <Link
          href={item.href}
          className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
        >
          {item.label}
        </Link>
      ) : (
        <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white">
          {item.label}
          {hasChildren && (
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
            />
          )}
        </button>
      )}

      <AnimatePresence>
        {isActive && hasChildren && (
          <motion.div
            initial={{ opacity: 0, rotateX: -15, y: -8 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -15, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "top center", perspective: 800 }}
            className="absolute left-0 top-[calc(100%+8px)] z-50"
          >
            <DropdownPanel children={item.children!} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
          className="absolute inset-x-0 top-full z-40 mt-2 mx-4 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-md p-4 shadow-xl"
        >
          {NAV_ITEMS.map((item, i) => (
            <div key={i} className="mb-3">
              {item.href && !item.children ? (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <p className="mb-1 px-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {item.label}
                  </p>
                  {item.children?.map((child, j) => {
                    const href = child.type === "product" ? child.href : child.href;
                    const label = child.type === "product" ? child.title : child.label;
                    return (
                      <Link
                        key={j}
                        href={href}
                        onClick={onClose}
                        className="block rounded-xl px-4 py-2 text-sm text-neutral-300 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function NavbarWithChildren() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <header className="relative z-50">
      <nav
        ref={navRef}
        onMouseLeave={() => setActiveIndex(null)}
        className="relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/70 px-6 py-3 backdrop-blur-md shadow-lg shadow-black/20"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-white font-bold text-sm">
            D
          </div>
          <span className="text-sm font-bold text-white">DevStudio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item, i) => (
            <DesktopNavItem
              key={i}
              item={item}
              isActive={activeIndex === i}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-900/40 hover:bg-sky-400 transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-neutral-300 hover:text-white md:hidden transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
