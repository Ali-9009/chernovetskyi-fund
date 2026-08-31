import PrimaryBtn from "@/components/PrimaryBtn";
import Image from "next/image";

const items = [
  {
    title: "Children",
    description:
      "We help children access education, nutritious food, safe living conditions, healthcare, and opportunities for a brighter future.",
  },
  {
    title: "Older Adults",
    description:
      "We support older people who may be living alone, experiencing financial hardship, or struggling to access essential care and services.",
  },
  {
    title: "People Living With Illness",
    description:
      "We provide assistance to individuals and families facing serious or long-term health challenges, helping them manage medical and everyday living expenses.",
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
                Together, We Can Change Lives
              </h2>

              <p className="mt-4">
                Social Partnership is a nonprofit initiative dedicated to supporting children, older adults, and people living with illness. We connect compassionate individuals, organizations, and communities with those who need care, protection, and financial assistance.
              </p>

              <p className="mt-4">
                We believe meaningful change happens when people work together. Every donation, partnership, and act of kindness can give someone hope and help them build a safer, healthier future.
              </p>

              <PrimaryBtn href="#" className="mt-4">
                Become a Partner
              </PrimaryBtn>
            </div>

            <div>
              <Image
                src="/assets/f-1.jpg"
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
        <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
          {/* Mission */}
          <article className="rounded-lg border border-neutral-200 px-6 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:px-10">
            <h2 className="mb-3 text-3xl font-bold text-[#463e3b]">
              Our Mission
            </h2>

            <p className="mx-auto max-w-lg text-sm leading-relaxed text-neutral-800">
              Our mission is to improve the lives of vulnerable people by providing
              access to essential support, including healthcare, education, food,
              shelter, and daily care.
            </p>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-800">
              We work to ensure that every person receives help with dignity,
              compassion, and respect.
            </p>
          </article>

          {/* Vision */}
          <article className="px-6 py-8 text-center md:px-10">
            <h2 className="mb-3 text-3xl font-bold text-[#463e3b]">
              Our Vision
            </h2>

            <p className="mx-auto max-w-lg text-sm leading-relaxed text-neutral-800">
              We envision a world where no child is left without opportunity, no
              older person feels forgotten, and no one has to face illness alone.
            </p>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-800">
              Through trusted partnerships and community support, we aim to create
              lasting positive change for people when they need it most.
            </p>
          </article>
        </div>
      </section>

      <section className=" py-16 md:py-20">
        <div className="mx-auto max-w-360 px-5 md:px-8">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-2">
            <header className="self-start">
              <h2 className="text-3xl font-bold text-[#463e3b] md:text-4xl">
                Who We Support
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim.
              </p>
            </header>

            {items.map((item) => (
              <article
                key={item.title}
                className={`rounded-xl border border-neutral-100 bg-white p-7 shadow-[0_12px_35px_rgba(0,0,0,0.07)] ${item.className}`}
              >
                <h3 className="text-lg font-semibold text-[#292323]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#838099]">
                  {item.description}
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
              <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                How We Create an Impact
              </h2>

              <p className="mt-4">
                We identify urgent needs, collaborate with trusted partners, and direct support toward programs and individuals where it can make the greatest difference. We also keep our supporters informed so they can understand how their contributions are helping real people.
              </p>

              <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                Become Part of the Change
              </h2>

              <p className="mt-4">
                Whether you donate, volunteer, fund a program, or become an organizational partner, your support matters. Together, we can protect vulnerable people, restore hope, and create stronger communities.
              </p>

            </div>

            <div>
              <Image
                src="/assets/f-2.jpg"
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
