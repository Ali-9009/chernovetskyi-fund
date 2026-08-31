import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const footerLinks = {
        Product: [
            { label: "About Social Partnership", href: "/about-social-partnership" },
            { label: "Financial report", href: "/financial-report" },
            { label: "Statistics", href: "/statistics" },
            { label: "Acknowledgments", href: "/acknowledgments" },
            { label: "Friends and partners", href: "/friends-and-partners" },
            { label: "Fund's good news", href: "/fund-good-news" },
            { label: "FAQs", href: "/faqs" },
            { label: "If you ne­­ed help", href: "/i-need-help" },
        ],

        Resources: [
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Elderly wishes", href: "/elderly-wishes" },
            { label: "Children's wishes", href: "/children-wishes" },
        ],

        Company: [
            { label: "About", href: "/about" },
            { label: "Careers", href: "/careers" },
        ],
    };

    return (
        <footer
            id="site-footer"
            className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-360 px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="lg:col-span-2">
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

                        <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                            Track global markets, crypto, commodities and
                            economic indicators through one clean and
                            powerful trading platform.
                        </p>

                        {/* Socials */}
                        <div className="mt-6 flex items-center gap-2">
                            <a
                                href="#"
                                aria-label="X"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                            >
                                <i className="ri-twitter-x-line text-lg" />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                            >
                                <i className="ri-linkedin-line text-lg" />
                            </a>

                            <a
                                href="#"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                            >
                                <i className="ri-github-line text-lg" />
                            </a>

                            <a
                                href="#"
                                aria-label="Discord"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                            >
                                <i className="ri-discord-line text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Footer links */}
                    {Object.entries(footerLinks).map(
                        ([title, links]) => (
                            <div key={title}>
                                {/* <h3 className="text-sm font-semibold text-slate-950">
                                    {title}
                                </h3> */}

                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="group inline-flex items-center gap-1 text-sm text-slate-500 transition hover:text-slate-950"
                                            >
                                                {link.label}

                                                <i className="ri-arrow-right-up-line translate-y-0.5 text-xs opacity-0 transition-all group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    )}
                </div>

                {/* Risk notice */}
                <div className="mt-12 flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm">
                        <i className="ri-information-line text-lg" />
                    </div>

                    <p className="text-xs leading-5 text-slate-500">
                        Market information displayed on TradeFlow is
                        provided for informational purposes only and
                        should not be considered financial or investment
                        advice. Market prices may be delayed depending on
                        the data provider. Always perform your own
                        research before making investment decisions.
                    </p>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} TradeFlow. All rights
                        reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <Link
                            href="/privacy-policy"
                            className="text-xs text-slate-500 transition hover:text-slate-950"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-and-conditions"
                            className="text-xs text-slate-500 transition hover:text-slate-950"
                        >
                            Terms and Condition
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}