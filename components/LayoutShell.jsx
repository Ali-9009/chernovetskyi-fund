"use client";

import "@/app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutShell({ children }) {
    return (
        <>
            <Header />

            <main>{children}</main>

            <Footer />
        </>
    );
}