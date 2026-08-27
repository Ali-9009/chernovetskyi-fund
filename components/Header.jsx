"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    ChevronDown,
    Globe2,
    Menu,
    UserRound,
    X,
} from "lucide-react";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";

const navigation = [
    { label: "I need help", href: "/i-need-help", highlighted: true },
    { label: "Projects", href: "/projects" },
    { label: "Fund’s good news", href: "/news" },
    { label: "About the Fund", href: "/about-fund" },
    { label: "Reports", href: "/reports" },
    { label: "Acknowledgments", href: "/acknowledgments" },
];

function Selector({ children, icon }) {
    return (
        <button
            type="button"
            className="inline-flex h-10 items-center gap-1.5 rounded-md px-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
        >
            {icon}
            {children}
            <ChevronDown className="size-3.5" />
        </button>
    );
}

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => setMobileOpen(false), [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header
            id="site-header"
            className="sticky top-0 z-9 w-full border-b border-zinc-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-360 items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-3">
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt="Company Logo"
                        width={180}
                        height={50}
                        priority
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                <Image
                    src="/assets/header.png"
                    alt="Company Logo"
                    width={180}
                    height={50}
                    priority
                    className="h-12 w-auto object-contain hidden lg:flex"
                />

                <div className="hidden shrink-0 items-center gap-1 md:flex">
                    <Selector>USD</Selector>
                    <Selector icon={<Globe2 className="size-4 text-blue-600" />}>EN</Selector>
                    <Link
                        href="/sign-in"
                        className="ml-2 inline-flex h-10 items-center border border-red-300 px-4 text-xs font-medium text-(--primary-color) transition hover:border-(--primary-color) hover:bg-red-50"
                    >
                        Sign in
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    className="grid size-11 shrink-0 place-items-center rounded-md border border-zinc-200 text-zinc-800 transition hover:bg-zinc-50 md:hidden"
                    aria-label="Open navigation"
                    aria-expanded={mobileOpen}
                >
                    <Menu className="size-6" />
                </button>
            </div>

            <div className="hidden border-t border-zinc-200 lg:block">
                <div className="mx-auto flex min-h-16 max-w-360 items-center gap-3 px-6 lg:px-8">
                    <nav className="flex min-w-0 flex-1 items-stretch justify-between gap-1">
                        {navigation.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex min-h-10 flex-1 items-center justify-center px-2 text-center text-sm font-medium leading-[1.05] transition-colors ${item.highlighted
                                        ? "border border-emerald-500 text-emerald-700 hover:bg-emerald-50"
                                        : active
                                            ? "text-(--primary-color)"
                                            : "text-zinc-700 hover:text-(--primary-color)"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex shrink-0 items-center gap-3">
                        <PrimaryBtn href="/i-want-help">
                            I want to help
                        </PrimaryBtn>
                        <PrimaryBtn href="/donate-goods">
                            Donate goods
                        </PrimaryBtn>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-10 bg-black/45 transition-opacity duration-300 md:hidden ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
            />

            <aside
                className={`fixed right-0 top-0 z-11 flex h-dvh w-[min(88vw,380px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                aria-label="Mobile navigation"
            >
                <div className="flex h-18 items-center justify-between border-b border-zinc-200 px-5">
                    <span className="text-sm font-bold text-[#e32020]">MENU</span>
                    <button type="button" onClick={() => setMobileOpen(false)} className="grid size-10 place-items-center rounded-full bg-zinc-100" aria-label="Close navigation">
                        <X className="size-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-5">
                    <nav className="space-y-1">
                        {navigation.map((item) => (
                            <Link key={item.href} href={item.href} className={`flex min-h-12 items-center border-b border-zinc-100 px-2 text-sm font-semibold transition ${pathname === item.href ? "text-orange-600" : "text-zinc-800 hover:text-orange-600"}`}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-6 grid grid-cols-2 gap-2 border-t border-zinc-200 pt-5">
                        <Selector>USD</Selector>
                        <Selector icon={<Globe2 className="size-4 text-blue-600" />}>EN</Selector>
                    </div>
                </div>

                <div className="grid gap-3 border-t border-zinc-200 bg-zinc-50 p-5">
                    <PrimaryBtn href="#">
                        I want to help
                    </PrimaryBtn>
                    <PrimaryBtn href="#">
                        Donate goods
                    </PrimaryBtn>
                    <Link href="/sign-in" className="inline-flex h-11 items-center justify-center gap-2 border border-red-300 text-sm font-medium text-red-600">
                        <UserRound className="size-4" /> Sign in
                    </Link>
                </div>
            </aside>
        </header>
    );
}
