import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";

const stats = [
    { value: "12,500+", label: "People Supported" },
    { value: "12,500+", label: "People Supported" },
    { value: "12,500+", label: "People Supported" },
    { value: "12,500+", label: "People Supported" },
];

export default function page() {
    return (
        <>
            <section className="py-16 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid items-center gap-10 md:grid-cols-2">

                        <div>
                            <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                                Together, We Make Hope Possible
                            </h2>

                            <p className="mt-4">
                                Every life touched, every treatment supported, and every family given hope is made possible by people who choose to care.
                            </p>

                            <PrimaryBtn href="#" className="mt-4">
                                Thank You for Standing With Us
                            </PrimaryBtn>
                        </div>

                        <div>
                            <Image
                                src="/assets/f-6.jpg"
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

            <section className="w-full py-8 md:py-10">
                <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-4 md:px-6">
                    {/* Mission */}
                    <article className="rounded-lg border border-neutral-200 px-6 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:px-10">
                        <h2 className="mb-3 text-3xl font-bold text-[#463e3b]">
                            A Message of Gratitude
                        </h2>

                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-800">
                            We extend our heartfelt gratitude to every individual, organization, volunteer, healthcare professional, and partner who has contributed to our mission.
                        </p>
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-800">
                            Whether through a donation, a few hours of volunteering, professional expertise, or simply sharing a campaign, every contribution has helped bring hope closer to someone who needed it.
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <Image
                                src="/assets/f-7.jpg"
                                alt="Our mission"
                                loading="eager"
                                width={600}
                                height={450}
                                className="h-auto w-full"
                            />
                        </div>
                        <div>
                            <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                                Our Donors
                            </h2>

                            <p className="mt-4">
                                Every donation represents an act of kindness. From small individual contributions to major gifts, your generosity helps children and patients access essential treatment, care, and support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid items-center gap-10 md:grid-cols-2">

                        <div>
                            <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                                Our Partners
                            </h2>

                            <p className="mt-4">
                                We proudly acknowledge the hospitals, healthcare providers, nonprofit organizations, businesses, and community groups that work alongside us.
                            </p>

                            <p className="mt-4">
                                Their expertise, resources, and commitment allow us to reach more people and respond where help is needed most.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="/assets/f-8.jpg"
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
                <div className="mx-auto grid max-w-360 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
                    {/* Left Content */}
                    <article>
                        <h2 className="text-3xl font-bold leading-tight text-[#463e3b] md:text-4xl">
                            Volunteers
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-700">
                            From organizing campaigns and supporting families to raising awareness and coordinating community initiatives, their dedication keeps our mission moving forward.
                        </p>
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
        </>
    )
}
