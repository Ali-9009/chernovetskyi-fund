import Image from "next/image";

const stats = [
    { value: "12,500+", label: "People Supported" },
    { value: "12,500+", label: "People Supported" },
    { value: "12,500+", label: "People Supported" },
    { value: "12,500+", label: "People Supported" },
];

const items = [
    {
        percentage: "45%",
        title: "Medical Treatment",
        description:
            "Supporting surgeries, medicines, hospital care, and ongoing treatment.",
    },
    {
        percentage: "30%",
        title: "Children & Families",
        description:
            "Helping vulnerable children and families meet essential needs.",
        featured: true,
    },
    {
        percentage: "15%",
        title: "Emergency Support",
        description:
            "Providing urgent assistance when families face unexpected crises.",
    },
];

export default function page() {
    return (
        <>
            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto grid max-w-360 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
                    {/* Left Content */}
                    <article>
                        <h2 className="text-3xl font-bold leading-tight text-[#463e3b] md:text-4xl">
                            Our Impact in
                            <br />
                            Numbers
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-700">
                            Every contribution creates a story of hope. Together with our
                            donors, volunteers, and partners, we’re helping children, families,
                            and people facing serious illnesses receive the care and support
                            they need.
                        </p>

                        <a
                            href="/statistics"
                            className="mt-5 inline-flex items-center justify-center bg-[#f58a1f] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#e77d16]"
                        >
                            Check Report
                        </a>
                    </article>

                    {/* Stats Box */}
                    <aside className="rounded-2xl border-4 border-[#f58a1f] bg-[#fafafa] p-5 sm:p-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {stats.map((stat, index) => {
                                const isLeft = index % 2 === 0;
                                const isTop = index < 2;

                                return (
                                    <div
                                        key={index}
                                        className={`
                    px-5 py-6 text-center
                    ${isLeft ? "sm:border-r sm:border-neutral-400" : ""}
                    ${isTop ? "border-b border-neutral-400" : ""}
                    ${index === 0
                                                ? "border-b sm:border-b"
                                                : index === 1
                                                    ? "border-b sm:border-b"
                                                    : index === 2
                                                        ? "border-b sm:border-b-0"
                                                        : ""
                                            }
                  `}
                                    >
                                        <strong className="block text-3xl font-medium text-black md:text-4xl">
                                            {stat.value}
                                        </strong>

                                        <span className="mt-4 block text-sm text-neutral-600">
                                            {stat.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </aside>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-360 px-5 md:px-8">
                    <header className="text-center">
                        <h2 className="text-3xl font-bold text-[#463e3b] md:text-4xl">
                            Where Your Support Goes
                        </h2>

                        <h3 className="mt-3 text-sm font-semibold text-[#463e3b]">
                            Every Donation Has a Purpose
                        </h3>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-400">
                            We work to ensure donations reach the areas where they can create
                            meaningful change.
                        </p>
                    </header>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {items.map((item) => (
                            <article
                                key={item.title}
                                className={`rounded-lg bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${item.featured
                                        ? "border border-[#f58a1f]"
                                        : "border border-transparent"
                                    }`}
                            >
                                <h3 className="text-lg font-semibold text-neutral-900">
                                    {item.percentage} — {item.title}
                                </h3>

                                <p className="mt-5 text-sm leading-6 text-neutral-400">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-8 md:py-10">
                <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-4 md:px-6">
                    {/* Mission */}
                    <article className="rounded-lg border border-neutral-200 px-6 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:px-10">
                        <h2 className="mb-3 text-3xl font-bold text-[#463e3b]">
                            Impact Over Time
                        </h2>

                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-800">
                            What started with a simple mission has grown into a community of people committed to helping others. Each year, more donors join us, more campaigns reach their goals, and more lives receive the support they deserve.
                        </p>
                    </article>
                </div>
            </section>

            <section className="w-full py-8 md:py-10">
                <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-4 md:px-6">
                    {/* Mission */}
                    <article className=" text-center">
                        <h2 className="mb-3 text-3xl font-bold text-[#463e3b]">
                            Success Rate
                        </h2>

                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-800">
                            Behind every successful campaign is a person, a family, and a community that chose to care.
                        </p>
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-800">
                            You could make 87% huge on the left and put a circular progress graphic on the right.
                        </p>
                        <div className="mt-6">
                            <Image
                                src="/assets/f-5.jpg"
                                alt="Our mission"
                                loading="eager"
                                width={600}
                                height={450}
                                className="h-auto w-full"
                            />
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}
