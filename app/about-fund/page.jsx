import Image from "next/image";

export default function AboutFundPage() {
    return (
        <main className="px-4 py-12">
            <div className="mx-auto max-w-5xl">

                <h1 className="text-center text-4xl font-bold text-zinc-800">
                    About Fund
                </h1>

                {/* Intro */}
                <div className="mt-10 space-y-5 text-lg leading-7 text-zinc-700">
                    <p>
                        The Foundation was established on April 16, 2012, with the purpose
                        of involving all citizens of Georgia in the issues and honorable
                        causes – to help socially vulnerable citizens of Georgia in all
                        their problems they have!
                    </p>

                    <p>
                        Large families
                        <br />
                        Orphans
                        <br />
                        Bedridden seniors
                    </p>
                </div>

                {/* Directions */}
                <section className="mt-10">
                    <h2 className="text-xl font-bold text-zinc-900">
                        Directions
                    </h2>

                    <p className="mt-4 text-lg leading-7 text-zinc-700">
                        People with disabilities.
                    </p>
                </section>

                {/* Priorities */}
                <section className="mt-8">
                    <h2 className="text-xl font-bold text-zinc-900">
                        Priorities and activities
                    </h2>

                    <p className="mt-4 text-lg leading-7 text-zinc-700">
                        In the first years of its operation, the Foundation already
                        provided assistance to more than 2,000 beneficiaries, including
                        elderly people, orphaned families and children.
                    </p>

                    <p className="mt-4 text-lg leading-7 text-zinc-700">
                        The Foundation operates over the entire territory of Georgia and
                        continues developing charitable projects aimed at supporting
                        people who need assistance most.
                    </p>
                </section>

                {/* Chart */}
                <section className="mt-10">
                    <div className="mx-auto max-w-3xl">
                        <Image
                            src="/assets/chart.jpg"
                            alt="Foundation assistance statistics"
                            width={1000}
                            height={650}
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </section>

                {/* More content */}
                <section className="mt-10 space-y-5 text-lg leading-7 text-zinc-700">
                    <p>
                        Some fragments of the effective and efficient activity are
                        depicted in the photos.
                    </p>

                    <p>
                        In particular, the Foundation carried out a complete rehabilitation
                        of charitable facilities which were in a state of destruction and
                        helped create more comfortable conditions for beneficiaries.
                    </p>

                    <p>
                        Projects of the Foundation are implemented throughout Georgia with
                        the support of donors, volunteers and partner organizations.
                    </p>
                </section>

                {/* Activities */}
                <section className="mt-10">
                    <h2 className="text-xl font-bold text-zinc-900">
                        Projects of the Foundation
                    </h2>

                    <ul className="mt-5 space-y-3 text-lg leading-7 text-zinc-700">
                        <li>
                            • Rehabilitation and support of charitable institutions.
                        </li>

                        <li>
                            • Assistance to elderly people, children and socially vulnerable
                            families.
                        </li>

                        <li>
                            • Providing food, clothing, medicines and other essential needs.
                        </li>

                        <li>
                            • Supporting people with disabilities and those requiring
                            medical assistance.
                        </li>

                        <li>
                            • Development of new charitable and social support programs.
                        </li>
                    </ul>
                </section>

            </div>
        </main>
    );
}