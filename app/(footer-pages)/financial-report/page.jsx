import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";

const items = [
    {
        title: "Children’s Support",
        text: "Education, nutrition, healthcare, shelter, and child protection.",
        style: "bg-white border border-neutral-100",
    },
    {
        title: "Older Adult Care",
        text: "Medical support, food assistance, safe housing, and companionship programs.",
        style: "bg-[#f58a1f] text-white",
    },
    {
        title: "Health and Medical Aid",
        text: "Treatment, medication, rehabilitation, and emergency assistance.",
        style: "bg-white border border-neutral-100",
    },
    {
        title: "Community Programs",
        text: "Local outreach, awareness campaigns, and long-term support projects.",
        style: "bg-[#f58a1f] text-white",
    },
    {
        title: "Program Operations",
        text: "Monitoring, administration, fundraising, and responsible delivery of services.",
        style: "bg-white border border-[#f58a1f]",
    },
];
export default function page() {
    return (
        <>
            <section className="py-16 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid items-center gap-10 md:grid-cols-2">

                        <div>
                            <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                                Transparency You Can Trust
                            </h2>

                            <p className="mt-4">
                                Every donation represents trust, hope, and an opportunity to change someone’s life. We are committed to managing every contribution responsibly and ensuring that funds reach the children, older adults, and people living with illness who need them most.
                            </p>

                            <PrimaryBtn href="#" className="mt-4">
                                Get Report
                            </PrimaryBtn>
                        </div>

                        <div>
                            <Image
                                src="/assets/f-3.jpg"
                                alt="Our mission"
                                loading="eager"
                                width={600}
                                height={450}
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-5 md:px-8">
                    <header className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-[#463e3b] md:text-4xl">
                            How We Use Your Support
                        </h2>
                    </header>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                        {/* Top Row */}
                        <article
                            className={`rounded-lg p-6 shadow-sm lg:col-span-2 ${items[0].style}`}
                        >
                            <h3 className="text-lg font-semibold">{items[0].title}</h3>
                            <p className="mt-4 text-sm leading-6 text-neutral-400">
                                {items[0].text}
                            </p>
                        </article>

                        <article
                            className={`rounded-lg p-6 shadow-sm lg:col-span-2 ${items[1].style}`}
                        >
                            <h3 className="text-lg font-semibold">{items[1].title}</h3>
                            <p className="mt-4 text-sm leading-6 text-white/90">
                                {items[1].text}
                            </p>
                        </article>

                        <article
                            className={`rounded-lg p-6 shadow-sm lg:col-span-2 ${items[2].style}`}
                        >
                            <h3 className="text-lg font-semibold">{items[2].title}</h3>
                            <p className="mt-4 text-sm leading-6 text-neutral-400">
                                {items[2].text}
                            </p>
                        </article>

                        {/* Bottom Row */}
                        <article
                            className={`rounded-lg p-6 shadow-sm md:col-span-1 lg:col-span-2 lg:col-start-2 ${items[3].style}`}
                        >
                            <h3 className="text-lg font-semibold">{items[3].title}</h3>
                            <p className="mt-4 text-sm leading-6 text-white/90">
                                {items[3].text}
                            </p>
                        </article>

                        <article
                            className={`rounded-lg p-6 shadow-sm md:col-span-1 lg:col-span-2 ${items[4].style}`}
                        >
                            <h3 className="text-lg font-semibold text-neutral-900">
                                {items[4].title}
                            </h3>
                            <p className="mt-4 text-sm leading-6 text-neutral-400">
                                {items[4].text}
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="w-full py-8 md:py-10">
                <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-4 md:px-6">
                    {/* Mission */}
                    <article className="rounded-lg border border-neutral-200 px-6 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:px-10">
                        <h2 className="mb-3 text-3xl font-bold text-[#463e3b]">
                            Our Commitment to Accountability
                        </h2>

                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-800">
                            We follow clear financial procedures to ensure that donations are used responsibly and effectively. Our financial activities are regularly reviewed, documented, and monitored to maintain accuracy and accountability.
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid items-center gap-10 md:grid-cols-2">

                        <div>
                            <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                                Our Commitment to Accountability
                            </h2>

                            <p className="mt-4">
                                We follow clear financial procedures to ensure that donations are used responsibly and effectively. Our financial activities are regularly reviewed, documented, and monitored to maintain accuracy and accountability.
                            </p>

                        </div>

                        <div>
                            <Image
                                src="/assets/f-4.jpg"
                                alt="Our mission"
                                loading="eager"
                                width={600}
                                height={450}
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
