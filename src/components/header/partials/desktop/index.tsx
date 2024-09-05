"use client";

import Link from "next/link";

export default function Desktop() {
  const navItems = [
    { id: 0, text: "INICIO", idLink: "/" },
    { id: 1, text: "NOSOTROS", idLink: "nosotros" },
    { id: 2, text: "SERVICIOS", idLink: "services" },
    { id: 3, text: "TESTIMONIOS", idLink: "testimonies" },
    { id: 4, text: "FAQ", idLink: "faq" },
    { id: 5, text: "CONTACTO", idLink: "contact" },
    { id: 6, text: "BLOG SEMANAL", idLink: "blog" },
  ];

  return (
    <div className="hidden lg:flex">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <ul key={item.id}>
            <li className="text-slate-50 hover:text-slate-300 transition duration-300">
              <Link href={item.idLink}>{item.text}</Link>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
