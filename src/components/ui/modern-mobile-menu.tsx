"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Building2,
  Home,
  Images,
  Info,
  MessageCircle,
  MoreHorizontal,
  Phone,
  Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";

type IconComponentType = React.ElementType<{ className?: string }>;

export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
  href?: string;
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[];
  accentColor?: string;
  className?: string;
  onItemSelect?: (item: InteractiveMenuItem, index: number) => void;
}

export interface ModernMobileMenuProps {
  onEnquire: () => void;
  className?: string;
}

const defaultItems: InteractiveMenuItem[] = [
  { label: "Home", icon: Home, href: "/" },
  { label: "About", icon: Info, href: "/about" },
  { label: "Gallery", icon: Images, href: "/gallery" },
  { label: "Properties", icon: Building2, href: "/properties" },
  { label: "Services", icon: Wrench, href: "/management" },
  { label: "Contact", icon: Phone, href: "/contact" },
];

const defaultAccentColor = "var(--component-active-color-default)";

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  items,
  accentColor,
  className,
  onItemSelect,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const finalItems = useMemo(() => {
    const isValid = items && Array.isArray(items) && items.length >= 2 && items.length <= 6;
    if (!isValid) {
      if (items) {
        console.warn("InteractiveMenu: 'items' prop is invalid. Using default items.", items);
      }
      return defaultItems;
    }
    return items;
  }, [items]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!pathname) return;
    const matchedIndex = finalItems.findIndex((item) => {
      if (!item.href) return false;
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    });
    if (matchedIndex >= 0) setActiveIndex(matchedIndex);
  }, [pathname, finalItems]);

  useEffect(() => {
    if (activeIndex >= finalItems.length) setActiveIndex(0);
  }, [finalItems, activeIndex]);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[activeIndex];
      const activeTextElement = textRefs.current[activeIndex];

      if (activeItemElement && activeTextElement) {
        const textWidth = activeTextElement.offsetWidth;
        activeItemElement.style.setProperty("--lineWidth", `${textWidth}px`);
      }
    };

    setLineWidth();
    window.addEventListener("resize", setLineWidth);
    return () => window.removeEventListener("resize", setLineWidth);
  }, [activeIndex, finalItems]);

  const navStyle = useMemo(() => {
    const activeColor = accentColor || defaultAccentColor;
    return { ["--component-active-color" as never]: activeColor } as React.CSSProperties;
  }, [accentColor]);

  return (
    <nav
      className={cn(
        "flex w-[min(34rem,calc(100vw-1.5rem))] items-end justify-between gap-1 rounded-2xl border border-[color:var(--component-shadow)] bg-[color:var(--component-bg)] p-2 shadow-lg backdrop-blur",
        className,
      )}
      role="navigation"
      style={navStyle}
    >
      {finalItems.map((item, index) => {
        const isActive = index === activeIndex;
        const IconComponent = item.icon;

        return (
          <button
            key={item.label}
            type="button"
            className={cn(
              "relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] font-semibold tracking-wide transition-colors",
              "text-[color:var(--component-inactive-color)] hover:text-[color:var(--component-active-color)]",
              isActive && "bg-[color:var(--component-active-bg)] text-[color:var(--component-active-color)]",
            )}
            onClick={() => {
              setActiveIndex(index);
              onItemSelect?.(item, index);
              if (item.href) router.push(item.href);
            }}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            style={{ ["--lineWidth" as never]: "0px" } as React.CSSProperties}
          >
            <div className="grid place-items-center">
              <IconComponent
                className={cn(
                  "h-5 w-5",
                  isActive && "animate-[iconBounce_0.6s_ease-in-out]",
                )}
              />
            </div>

            <strong
              className="max-w-full truncate"
              ref={(el) => {
                textRefs.current[index] = el;
              }}
            >
              {item.label}
            </strong>

            <span
              aria-hidden
              className={cn(
                "mt-1 h-0.5 rounded-full transition-[width,background-color] duration-200",
                isActive
                  ? "bg-[color:var(--component-active-color)]"
                  : "bg-[color:var(--component-line-inactive-color)] opacity-70",
              )}
              style={{ width: isActive ? ("var(--lineWidth)" as never) : ("0px" as never) }}
            />
          </button>
        );
      })}
    </nav>
  );
};

export { InteractiveMenu };

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const ModernMobileMenu: React.FC<ModernMobileMenuProps> = ({ onEnquire, className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement | null>(null);

  const moreItems = useMemo(
    () => [
      { label: "About", icon: Info, href: "/about" },
      { label: "Services", icon: Wrench, href: "/management" },
      { label: "Contact", icon: Phone, href: "/contact" },
    ],
    [],
  );

  const homeActive = pathname ? isActivePath(pathname, "/") : false;
  const galleryActive = pathname ? isActivePath(pathname, "/gallery") : false;
  const propertiesActive = pathname ? isActivePath(pathname, "/properties") : false;

  useEffect(() => {
    if (!moreOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };

    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (moreMenuRef.current && !moreMenuRef.current.contains(target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [moreOpen]);

  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur lg:hidden",
          "pb-[env(safe-area-inset-bottom)]",
          className,
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="relative mx-auto flex h-16 w-full items-center px-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-1 items-center justify-around pr-12">
              <button
                type="button"
                onClick={() => router.push("/")}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-xs font-semibold transition-colors",
                  homeActive ? "text-green-600" : "text-gray-700 hover:text-green-600",
                )}
              >
                <Home className="h-5 w-5" />
                <span className="leading-none">Home</span>
              </button>

              <button
                type="button"
                onClick={() => router.push("/gallery")}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-xs font-semibold transition-colors",
                  galleryActive ? "text-green-600" : "text-gray-700 hover:text-green-600",
                )}
              >
                <Images className="h-5 w-5" />
                <span className="leading-none">Gallery</span>
              </button>
            </div>

          {/* Center */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[32%]">
            <button
              type="button"
              onClick={onEnquire}
              className={cn(
                "pointer-events-auto grid h-14 w-14 place-items-center rounded-full",
                "bg-green-600 text-white shadow-lg ring-4 ring-white",
                "transition-transform active:scale-95",
              )}
              aria-label="Enquire"
            >
              <MessageCircle className="h-6 w-6" />
            </button>
          </div>

            <div className="flex flex-1 items-center justify-around pl-12">
              <button
                type="button"
                onClick={() => router.push("/properties")}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-xs font-semibold transition-colors",
                  propertiesActive ? "text-green-600" : "text-gray-700 hover:text-green-600",
                )}
              >
                <Building2 className="h-5 w-5" />
                <span className="leading-none">Properties</span>
              </button>

          <button
            type="button"
            onClick={() => setMoreOpen((prev) => !prev)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 rounded-lg py-2 text-xs font-semibold transition-colors",
              moreOpen ? "text-green-600" : "text-gray-700 hover:text-green-600",
            )}
            aria-haspopup="dialog"
            aria-expanded={moreOpen}
          >
            <MoreHorizontal className="h-5 w-5" />
            <span className="leading-none">More</span>
          </button>
            </div>
          </div>

          {moreOpen ? (
            <div
              ref={moreMenuRef}
              className={cn(
                "absolute bottom-[calc(100%+10px)] right-3 w-52 rounded-2xl border border-gray-200 bg-white shadow-xl",
                "animate-fade-in",
              )}
              role="dialog"
              aria-label="More menu"
            >
              <div className="relative p-2">
                <div className="grid">
                  {moreItems.map((item) => {
                    const Icon = item.icon;
                    const active = pathname ? isActivePath(pathname, item.href) : false;

                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          setMoreOpen(false);
                          router.push(item.href);
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition-colors",
                          active ? "bg-green-50 text-green-700" : "hover:bg-gray-50",
                        )}
                      >
                        <span
                          className={cn(
                            "grid h-9 w-9 place-items-center rounded-lg",
                            active ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800",
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tail */}
                <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-gray-200 bg-white" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export { ModernMobileMenu };
