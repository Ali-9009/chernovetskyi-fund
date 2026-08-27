"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "About Fund", href: "/about-fund" },
    { label: "Our Mission", href: "/about-fund/mission" },
    { label: "Reports", href: "/about-fund/reports" },
    { label: "Partners", href: "/about-fund/partners" },
    { label: "Contacts", href: "/about-fund/contacts" },
];

export default function AboutNav() {
    const pathname = usePathname();

    return (
        <nav className="border-b border-zinc-200">
            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6 px-4 py-4 text-sm">
                {links.map((link) => {
                    const active = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                active
                                    ? "font-semibold text-(--primary-color)"
                                    : "text-zinc-600 hover:text-(--primary-color)"
                            }
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}