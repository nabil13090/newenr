"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq/questions";

type Props = { items: FaqItem[] };

export default function FaqAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="faq-list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="faq-item__q"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              {item.question}
              <span className="faq-item__icon" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="faq-item__a">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
