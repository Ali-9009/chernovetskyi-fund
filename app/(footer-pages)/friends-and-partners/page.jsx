import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";

const categories = [
    {
        title: "Healthcare Partners",
        description:
            "Hospitals, clinics, doctors, and healthcare professionals helping patients access quality treatment and medical care.",
    },
    {
        title: "Corporate Partners",
        description:
            "Businesses supporting our mission through funding, sponsorships, employee giving, and corporate responsibility programs.",
    },
    {
        title: "Community Partners",
        description:
            "Organizations and community groups helping us identify needs, reach vulnerable families, and deliver support.",
    },
    {
        title: "Awareness Partners",
        description:
            "Partners helping spread our mission through education and awareness to inspire more people to support the cause.",
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
                                Friends & Partners
                            </h2>

                            <p className="mt-4">
                                Our mission grows stronger through meaningful partnerships. We work alongside organizations, healthcare providers, businesses, and communities that share our commitment to helping children, patients, and families in need.
                            </p>

                            <PrimaryBtn href="#" className="mt-4">
                                Become a Partner
                            </PrimaryBtn>
                        </div>

                        <div>
                            <Image
                                src="/assets/f-9.jpg"
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

            <section className="bg-white py-14 md:py-16">
                <div className="mx-auto max-w-360 px-5 md:px-8">
                    <header className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-[#463e3b] md:text-3xl">
                            Partnership Categories
                        </h2>
                    </header>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {categories.map((category) => (
                            <article
                                key={category.title}
                                className="rounded-xl border border-neutral-100 bg-white px-5 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                            >
                                <h3 className="text-base font-semibold text-neutral-900">
                                    {category.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-neutral-500">
                                    {category.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="mx-auto max-w-360">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div>
                            <Image
                                src="/assets/f-10.jpg"
                                alt="Our mission"
                                loading="eager"
                                width={600}
                                height={450}
                                className="h-auto w-full"
                            />
                        </div>
                        <div>
                            <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                                Intro Section
                            </h2>

                            <p className="mt-4">
                                Real change is rarely achieved alone. Our friends and partners bring expertise, resources, networks, and compassion that help us reach more people and respond to their needs more effectively.
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
        </>
    )
}
