"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export interface EnquirySelectOption {
  value: string;
  label: string;
}

export interface EnquiryTypeSelectProps {
  name?: string;
  options: EnquirySelectOption[];
  value: string;
  placeholder?: string;
  onValueChange: (value: string) => void;
  className?: string;
  triggerClassName?: string;
}

export function EnquiryTypeSelect({
  name = "inquiryType",
  options,
  value,
  placeholder = "Select inquiry type",
  onValueChange,
  className,
  triggerClassName,
}: EnquiryTypeSelectProps) {
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const selectedLabel = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [options, value],
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: MouseEvent | PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-md border border-gray-300 bg-white px-3 py-2 text-left",
          triggerClassName,
          "transition-colors duration-300 hover:border-green-500",
          "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
      >
        <span className={cn("truncate", value ? "text-gray-900" : "text-gray-500")}>
          {selectedLabel ?? placeholder}
        </span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {open ? (
        <div
          id={listboxId}
          role="listbox"
          className={cn(
            "absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-md border border-gray-200 bg-white shadow-xl",
          )}
        >
          <div className="max-h-64 overflow-auto p-1">
            {options.map((option) => {
              const selected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onValueChange(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium",
                    "transition-colors focus:outline-none",
                    selected
                      ? "bg-green-600 text-white"
                      : "text-gray-900 hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white",
                  )}
                >
                  <span className="truncate">{option.label}</span>
                  {selected ? <Check className="h-4 w-4 shrink-0" /> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
