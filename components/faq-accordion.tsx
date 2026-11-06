"use client";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.q} className="py-2">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-5 py-5 text-left"
              aria-expanded={open}
            >
              <span className="text-base sm:text-lg font-medium tracking-tight text-slate-900">
                {item.q}
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-slate-200/90 bg-white text-slate-800 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                {open ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
