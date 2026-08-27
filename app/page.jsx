import GeorgiaPoverty from "@/components/GeorgiaPoverty";
// import GeorgiaPovertyMap from "@/components/GeorgiaPoverty";
import HeroSlider from "@/components/HeroSlider";
import PrimaryBtn from "@/components/PrimaryBtn";
import { Mail, MailBadge, MapPin, Phone, Play } from "lucide-react";

import Image from "next/image";


const banks = [
  {
    logo: "/assets/bank-1.jpg",
    name: "Bank code: BAGAGE22",
    iban: "GE84BG0000000470458000",
  },
  {
    logo: "/assets/bank-2.jpg",
    name: "Bank code: TBCBGE22",
    iban: "GE15TB7194330800100003",
  },
  {
    logo: "/assets/bank-3.jpg",
    name: "Bank code: LBRTGE22",
    iban: "GE42LB0115113036865000",
  },
];

const paymentLogos = [
  "/assets/bank-4.jpg",
  "/assets/bank-5.jpg",
  "/assets/bank-6.jpg",
  "/assets/bank-7.jpg",
  "/assets/bank-8.jpg",
  "/assets/bank-9.jpg",
  "/assets/bank-10.jpg",
  "/assets/bank-1.jpg",
  "/assets/bank-2.jpg",
  "/assets/bank-3.jpg",
];

const helpItems = [
  {
    title: "Children",
    image: "/assets/help-1.jpg",
  },
  {
    title: "Large families",
    image: "/assets/help-2.jpg",
  },
  {
    title: "Low-income families",
    image: "/assets/help-3.jpg",
  },
  {
    title: "Elderly",
    image: "/assets/help-4.jpg",
  },
  {
    title: "People living alone",
    image: "/assets/help-5.jpg",
  },
];

const stories = [
  {
    image: "/assets/story-1.jpg",
    title: "The Lord is our witness to how we will deal with the old and the sick",
    text: `Friends, let me introduce them - these are our mothers and grandmothers!
It so happened that in old age, we have become sick people, and our
children either starve or just left us to die.We have only sickness! But we
have a heart and soul, and we will pray for everyone who will lend us a
helping hand! We suffer a lot, and we’re not guilty of anything We are the
closest to God among all your acquaintances because God says that when
we are old, he will take care of us through good people.He will hear our
prayers! Please help us and be blessed!!!`,
    button: "More About Our Care",
  },
  {
    image: "/assets/story-2.jpg",
    title: "Children's wishes",
    text: `We are little Georgian citizens. We are the children of Georgia, and we
want to live like children, eat like children, eat sweets at least sometimes,
play with toys, roller-skate and bike, go to school not dressed in rags, but
well-dressed like all other Georgian children. We are good! It is true! When
we grow up, we will help you too. We are kind...! And we believe in God!`,
    button: "More From Their Life",
  },
  {
    image: "/assets/story-3.jpg",
    title: "The place where the dreams of little angels come true",
    text: `The goal of the program is to involve all of Georgia in helping people who
have faced terrible diseases that they cannot cope with on their own.`,
    button: "See More",
  },
  {
    image: "/assets/story-4.jpg",
    title: "They will perish without our help",
    text: "Together we can provide the support, care and resources these families desperately need.",
    button: "Help Them Now",
  },
  {
    image: "/assets/story-5.jpg",
    title: "Needs of beneficiaries",
    text: "Our beneficiaries need everyday essentials, medical support and help to improve their living conditions.",
    button: "Learn More",
  },
];

const stats = [
  {
    value: "102 903",
    label: "beneficiaries have trusted us",
  },
  {
    value: "6 166 551",
    suffix: "$",
    label: "were spent on charity",
  },
  {
    value: "2012",
    suffix: "year",
    label: "How the Chernobylsky Fund started working in Georgia",
  },
];

const projects = [
  {
    image: "/assets/help-1.jpg",
    category: "Ill children",
    title: "Then doctors urgently flew me...",
  },
  {
    image: "/assets/help-2.jpg",
    category: "Ill children",
    title: "During the seizure, little hoseb's...",
  },
  {
    image: "/assets/help-3.jpg",
    category: "Low-income families",
    title: "Consider, dear friends, that these are our...",
  },
  {
    image: "/assets/help-4.jpg",
    category: "Ill children",
    title: "When bones are burning!",
  },
];

const people = [
  {
    image: "/assets/help-person-1.jpg",
    alt: "Child needing help",
  },
  {
    image: "/assets/help-person-2.jpg",
    alt: "Elderly woman needing help",
  },
  {
    image: "/assets/help-person-3.jpg",
    alt: "Elderly woman in her home",
  },
];

export default function Home() {

  const total = "169098";

  return (
    <>
      <HeroSlider />

      <section className="py-16 px-4">
        <div className="mx-auto max-w-360">
          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>
              <Image
                src="/assets/home-s.jpg"
                alt="Our mission"
                loading="eager"
                width={600}
                height={450}
                className="h-auto w-full"
              />
            </div>

            <div>
              <h2 className="md:text-4xl text-3xl max-w-xl font-bold">
                Help your neighbor and
                get closer to God
              </h2>

              <p className="mt-4">
                Friend, lend a helping hand to your neighbor and the Lord will see your
                soul, He will never leave you in difficult times. These are not just words!
                The proof of this is everything that I received as a gift from God!
              </p>

              <p className="mt-4 font-bold">Leonid Chernovetskyi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-16 px-4">
        <div className="mx-auto max-w-360">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            How can I make a donation?
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {banks.map((bank) => (
              <div
                key={bank.iban}
                className="border border-orange-200 bg-white px-5 py-4 text-center"
              >
                <Image
                  src={bank.logo}
                  alt="Bank logo"
                  width={100}
                  height={35}
                  className="mx-auto h-8 w-auto object-contain"
                />

                <p className="mt-2 text-md font-semibold">
                  {bank.name}
                </p>

                <p className="mt-1 text-sm text-(--primary-color) underline">
                  {bank.iban}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3">
            {paymentLogos.slice(0, 6).map((logo) => (
              <div key={logo} className="flex justify-center">
                <Image
                  src={logo}
                  alt="Payment method"
                  width={130}
                  height={55}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <p className="mx-auto my-8 max-w-5xl text-center text-md leading-5 text-zinc-600">
            TBC Bank/TBC pay, Bank of Georgia/ExpressPay and other payment
            methods are available 24 hours a day, all around Georgia.
          </p>

          <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-5">
            {paymentLogos.slice(5).map((logo) => (
              <div key={logo} className="flex justify-center">
                <Image
                  src={logo}
                  alt="Payment method"
                  width={120}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--primary-color) py-10">
        <div className="flex flex-wrap items-center justify-center gap-3 px-4 text-white">
          <span className="font-semibold text-3xl">
            We have provided help to
          </span>

          <div className="flex overflow-hidden rounded-sm border-2 border-yellow-300">
            {total.split("").map((digit, index) => (
              <span
                key={index}
                className="flex h-12 w-8 items-center justify-center border-r border-gray-300 bg-white text-lg font-bold text-black last:border-r-0"
              >
                {digit}
              </span>
            ))}
          </div>

          <span className="font-semibold text-3xl">
            beneficiaries since 2012
          </span>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-360">
          <h2 className="md:text-4xl text-3xl font-bold text-center">
            To whom do we help?
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {helpItems.map((item, index) => (
              <div
                key={item.title}
                className={`relative h-80 overflow-hidden ${index === helpItems.length - 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-1/2"
                  : ""
                  }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />

                <span className="absolute left-2 top-2 z-10 bg-(--primary-color) px-2 py-1 text-xs text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-360">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Fund Project
          </h2>

          <div className="mt-8 space-y-10">
            {stories.map((story, index) => (
              <div
                key={story.title}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-10"
              >
                <div
                  className={`relative h-94 ${index % 2 !== 0 ? "md:order-2" : ""
                    }`}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {story.title}
                  </h3>

                  <p className="mt-3 whitespace-pre-line leading-7 text-zinc-600">
                    {story.text}
                  </p>

                  <div className="mt-5">
                    <PrimaryBtn href="#">
                      {story.button}
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-4 py-12">
        <div className="mx-auto grid max-w-360 items-center gap-10 md:grid-cols-2">

          <div>
            <h2 className="max-w-md text-3xl font-bold text-zinc-800">
              If you know about the misfortune of a neighbor or friend
            </h2>

            <p className="mt-5 text-sm font-semibold text-zinc-700">
              Do a godly deed,{" "}
              <a
                href="mailto:office-fsp@fsp.ge"
                className="text-(--primary-color) underline"
              >
                drop us an email
              </a>{" "}
              or{" "}
              <a
                href="tel:+995322193321"
                className="text-(--primary-color) underline"
              >
                call
              </a>{" "}
              our toll-free hot line
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <a
              href="mailto:office-fsp@fsp.ge"
              className="flex items-center gap-3 border border-orange-300 bg-white px-6 py-4"
            >
              <Mail className="size-5 text-(--primary-color)" />
              <span>office-fsp@fsp.ge</span>
            </a>

            <a
              href="tel:+995322193321"
              className="mt-3 flex items-center gap-3 border border-orange-300 bg-white px-6 py-4"
            >
              <Phone className="size-5 text-(--primary-color)" />
              <span>+995 322 19 33 21</span>
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {["f", "in", "ig", "yt", "x"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex size-8 items-center justify-center rounded-full border border-(--primary-color) text-xs font-semibold text-(--primary-color) transition hover:bg-(--primary-color) hover:text-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Our help
          </h2>

          <div className="mt-8 grid gap-8 text-center md:grid-cols-3 md:text-left">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="flex items-end justify-center gap-2 md:justify-start">
                  <span className="text-4xl font-bold text-(--primary-color) sm:text-5xl">
                    {stat.value}
                  </span>

                  {stat.suffix && (
                    <span className="mb-1 font-semibold text-(--primary-color)">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs text-zinc-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-360">
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold md:text-4xl">
            Please{" "}
            <span className="text-red-600">repost</span>{" "}
            this good man! Let your friends take part in the work of mercy too!
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-zinc-200 bg-white"
              >
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />

                  <span className="absolute left-0 top-0 bg-(--primary-color) px-2 py-1 text-xs text-white">
                    {project.category}
                  </span>

                  {/* <button
                    type="button"
                    aria-label={`Play ${project.title}`}
                    className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white"
                  >
                    <Play className="size-5 fill-current" />
                  </button> */}
                </div>

                <div className="bg-red-600 py-1 text-center text-xs text-white">
                  Urgent help needed
                </div>

                <div className="p-3">
                  <h3 className="min-h-12 font-semibold leading-5 text-zinc-800">
                    {project.title}
                  </h3>

                  <a
                    href="#"
                    className="mt-3 flex w-full items-center justify-center gap-2 bg-[#4267B2] py-3 text-sm text-white"
                  >

                    Facebook
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="px-4 py-8">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            How to contact us quickly
          </h2>
        </div>

        <div className="bg-(--primary-color) px-4 py-10 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:gap-14">

            <div>
              <div className="flex items-center gap-2 border-b border-white/40 pb-3">
                <MapPin className="size-4" />
                <span className="text-sm font-semibold">Address</span>
              </div>

              <p className="mt-4 text-sm leading-6">
                11 Besarion Jgenti St., Tbilisi,
                <br />
                Georgia
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 border-b border-white/40 pb-3">
                <Phone className="size-4" />
                <span className="text-sm font-semibold">Phone</span>
              </div>

              <a
                href="tel:+995322193321"
                className="mt-4 inline-block text-sm"
              >
                +995 322 19 33 21
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 border-b border-white/40 pb-3">
                <MailBadge className="size-4" />
                <span className="text-sm font-semibold">Email</span>
              </div>

              <a
                href="mailto:office-fsp@fsp.ge"
                className="mt-4 inline-block text-sm underline"
              >
                office-fsp@fsp.ge
              </a>
            </div>

          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28957.99814942785!2d67.08301781809082!3d24.872394608255366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ec87cf69b6b%3A0xdaa3cdbc1a7de74!2sM1%20Bus%20Stop!5e0!3m2!1sen!2s!4v1787838626409!5m2!1sen!2s"
          title="Our location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-90 w-full border-0"
          allowFullScreen
        />
      </section>

      <GeorgiaPoverty />

      <section>
        {/* Help cards */}
        <div className="px-4 py-16">
          <div className="mx-auto max-w-360">
            <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-zinc-800 md:text-4xl">
              The life of these unfortunates goes on, friends! They need help
              permanently! The Lord wants us to take care of such people
              constantly. Choose what is after your own heart and do not leave
              them to their fate.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {people.map((person, index) => (
                <article key={index}>
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3">
                    <PrimaryBtn href="#">
                      I want to help
                    </PrimaryBtn>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-zinc-100 px-4 py-10">
          <div className="mx-auto max-w-360">
            <h3 className="max-w-3xl text-lg font-bold text-zinc-800 md:text-xl">
              Let&apos;s help all the people of Georgia to open their souls and
              get closer to God by helping their neighbors
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              We will send you the most important news by e-mail
            </p>

            <form className="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
              <input
                type="text"
                placeholder="Your Name"
                className="h-12 border border-zinc-200 bg-white px-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your e-mail"
                className="h-12 border border-zinc-200 bg-white px-4 outline-none"
              />

              <button
                type="submit"
                className="h-12 bg-(--primary-color) px-8 text-sm font-semibold text-white"
              >
                Signature
              </button>
            </form>

          </div>
        </div>
      </section>

    </>
  );
}