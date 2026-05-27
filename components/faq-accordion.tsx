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
    <div className="divide-y divide-[color:var(--line)] rounded-sm border border-[color:var(--line)] bg-[color:var(--surface)]">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-5 p-6 text-left"
              aria-expanded={open}
            >
              <span className="font-semibold">{item.q}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm border border-[color:var(--line)] text-[color:var(--accent)]">
                {open ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-7 text-[color:var(--muted)]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
