import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";

const posts = [
    {
        image: "/assets/blog-1.jpg",
        category: "Technology",
        title:
            "The Impact of Technology on the Workplace: How Technology is Changing",
        author: "Tracey Wilson",
        date: "August 20, 2022",
        avatar: "/assets/avatar-1.jpg",
    },
    {
        image: "/assets/blog-2.jpg",
        category: "Technology",
        title:
            "The Impact of Technology on the Workplace: How Technology is Changing",
        author: "Jason Francisco",
        date: "August 20, 2022",
        avatar: "/assets/avatar-2.jpg",
    },
    {
        image: "/assets/blog-3.jpg",
        category: "Technology",
        title:
            "The Impact of Technology on the Workplace: How Technology is Changing",
        author: "Elizabeth Slavin",
        date: "August 20, 2022",
        avatar: "/assets/avatar-3.jpg",
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
                                Children wishes
                            </h2>

                            <p className="mt-4">
                                Every successful campaign, completed treatment, and helping hand gives us another reason to believe in the power of community. Discover the latest good news made possible by our supporters.
                            </p>

                            <PrimaryBtn href="#" className="mt-4">
                                News
                            </PrimaryBtn>
                        </div>

                        <div>
                            <Image
                                src="/assets/f-13.jpg"
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
                    <header className="mb-7">
                        <h2 className="text-xl font-bold text-[#2d2929] md:text-2xl">
                            Latest Post
                        </h2>
                    </header>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article
                                key={post.title + post.author}
                                className="rounded-xl border border-neutral-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <figure className="overflow-hidden rounded-lg">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={600}
                                        height={380}
                                        className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                </figure>

                                <div className="px-1 pb-2 pt-4">
                                    <span className="inline-block rounded-md bg-[#f3f0ff] px-2 py-1 text-xs font-medium text-[#7c63ff]">
                                        {post.category}
                                    </span>

                                    <h3 className="mt-3 text-lg font-bold leading-snug text-[#222]">
                                        {post.title}
                                    </h3>

                                    <footer className="mt-5 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={post.avatar}
                                                alt={post.author}
                                                width={32}
                                                height={32}
                                                className="h-8 w-8 rounded-full object-cover"
                                            />

                                            <span className="text-xs text-neutral-500">
                                                {post.author}
                                            </span>
                                        </div>

                                        <time className="text-xs text-neutral-400">
                                            {post.date}
                                        </time>
                                    </footer>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
