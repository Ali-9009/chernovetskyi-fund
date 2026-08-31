"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What does the fund support?",
        answer:
            "We support vulnerable children, older adults, individuals facing serious illnesses, and families experiencing difficult circumstances. Our assistance may include healthcare, food, education, shelter, emergency support, and other essential needs.",
    },
    {
        question: "How can I make a donation?",
        answer:
            "You can make a donation through our website by selecting a project or donation amount and following the secure payment process.",
    },
    {
        question: "Where does my donation go?",
        answer:
            "Donations are directed toward approved programs and beneficiaries, including medical treatment, children's support, emergency assistance, community projects, and other essential services.",
    },
    {
        question: "Can I choose which project to support?",
        answer:
            "Yes. You can browse our available projects and choose the specific project or cause you would like your donation to support.",
    },
    {
        question: "Are donations secure?",
        answer:
            "Yes. We use trusted payment providers and secure technology to help protect your payment and personal information.",
    },
    {
        question: "Can I donate on behalf of someone else?",
        answer:
            "Yes. You may make a donation on behalf of another person, your family, an organization, or in memory of someone special.",
    },
    {
        question: "How do you select people who receive support?",
        answer:
            "Requests and cases are reviewed carefully based on need, available information, program requirements, and the resources available through the fund.",
    },
    {
        question: "Can organizations partner with the fund?",
        answer:
            "Yes. We welcome partnerships with healthcare providers, companies, community organizations, awareness partners, and other groups that share our mission.",
    },
    {
        question: "Can I become a volunteer?",
        answer:
            "Volunteer opportunities may be available depending on our current programs and projects. You can contact our team to learn about available opportunities.",
    },
    {
        question: "How can I contact the fund?",
        answer:
            "You can contact us through the contact page on our website. Our team will respond to your inquiry as soon as possible.",
    },
];

export default function FAQsPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="border-b border-neutral-100 py-16 md:py-20">
                <div className="mx-auto max-w-360 px-5 text-center md:px-8">
                    <span className="text-sm font-semibold text-[#f58a1f]">
                        Help Center
                    </span>

                    <h1 className="mt-3 text-4xl font-bold text-[#463e3b] md:text-5xl">
                        Frequently Asked Questions
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                        Find answers to common questions about donations, projects,
                        partnerships, and how your support helps people in need.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-20">
                <div className="mx-auto grid max-w-360 gap-12 px-5 md:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                    {/* Left */}
                    <aside>
                        <h2 className="text-3xl font-bold leading-tight text-[#463e3b]">
                            Have Questions?
                            <br />
                            We’re Here to Help.
                        </h2>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
                            Learn more about how donations work, where your support goes, and
                            how you can become part of our mission.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex items-center justify-center bg-[#f58a1f] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#df7718]"
                        >
                            Contact Us
                        </a>
                    </aside>

                    {/* Accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = activeIndex === index;

                            return (
                                <article
                                    key={faq.question}
                                    className={`overflow-hidden rounded-xl border transition ${isOpen
                                            ? "border-[#f58a1f] bg-white"
                                            : "border-neutral-200 bg-white"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                                    >
                                        <span className="text-base font-semibold text-[#302b29] md:text-lg">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={20}
                                            className={`shrink-0 text-[#f58a1f] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ${isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-5 pb-5 text-sm leading-6 text-neutral-500 md:px-6 md:pb-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="pb-16 md:pb-20">
                <div className="mx-auto max-w-360 px-5 md:px-8">
                    <div className="rounded-2xl bg-[#fff8f1] px-6 py-10 text-center md:px-10 md:py-14">
                        <h2 className="text-2xl font-bold text-[#463e3b] md:text-3xl">
                            Still Have a Question?
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500">
                            If you couldn’t find the information you need, contact our team
                            and we’ll be happy to assist you.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex bg-[#f58a1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#df7718]"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}