"use client";

import Image from "next/image";
import { useState } from "react";
import {
    FaCcMastercard,
    FaCcVisa,
} from "react-icons/fa";
import {
    ChevronDown,
    ChevronUp,
} from "lucide-react";

const goods = [
    {
        id: 1,
        title: "Hygiene products",
        image: "/assets/goods.jpg",
    },
    {
        id: 2,
        title: "Jacket",
        image: "/assets/goods.jpg",
    },
    {
        id: 3,
        title: "Clothes",
        image: "/assets/goods.jpg",
    },
    {
        id: 4,
        title: "Food",
        image: "/assets/goods.jpg",
    },
];

const accordions = [
    {
        id: "clothes",
        title: "CLOTHES AND SHOES",
    },
    {
        id: "food",
        title: "FOOD",
    },
    {
        id: "home",
        title: "HOUSE AND HOME",
    },
    {
        id: "hygiene",
        title: "HYGIENE & PERSONAL CARE",
    },
];

const amounts = ["$5", "$10", "$20", "$50", "$100"];

const periods = [
    "ONE-TIME",
    "WEEKLY",
    "MONTHLY",
];

const payments = [
    {
        id: "visa",
        label: "Visa",
    },
    {
        id: "mastercard",
        label: "Mastercard",
    },
    {
        id: "tbc",
        label: "TBC Pay",
    },
    {
        id: "bank",
        label: "Bank",
    },
];

export default function ProjectDonation() {
    const [activeTab, setActiveTab] = useState("goods");
    const [selectedGood, setSelectedGood] = useState(1);
    const [openAccordion, setOpenAccordion] = useState(null);

    const [selectedAmount, setSelectedAmount] = useState("$50");
    const [otherAmount, setOtherAmount] = useState("");

    const [selectedPeriod, setSelectedPeriod] =
        useState("MONTHLY");

    const [paymentMethod, setPaymentMethod] =
        useState("visa");

    const [agreed, setAgreed] = useState(false);

    function toggleAccordion(id) {
        setOpenAccordion((current) =>
            current === id ? null : id
        );
    }

    return (
        <section className="py-16 px-4 border border-zinc-200">
            <div className="mx-auto grid max-w-360 lg:grid-cols-2">

                {/* LEFT SIDE */}
                <article className="border-zinc-200 lg:border-r">
                    <div className="relative aspect-[1.15/1] w-full">
                        <Image
                            src="/assets/questionnaire-child.jpg"
                            alt="Child"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="py-8">
                        <h1 className="text-xl font-bold uppercase text-zinc-900">
                            Beneficiary&apos;s story
                        </h1>

                        <div className="mt-6 space-y-5 text-md leading-7 text-zinc-700">
                            <p>
                                Dear friends! This misfortune of the family,
                                sickness and hardship cannot leave anyone
                                indifferent.
                            </p>

                            <p>
                                Every child deserves a happy childhood, warmth,
                                care and an opportunity to live a normal life.
                                Unfortunately, some families have to fight every
                                single day just to survive.
                            </p>

                            <p>
                                It is very painful when children suffer because
                                their parents cannot provide everything they need.
                            </p>

                            <p>
                                Georgian families who find themselves in difficult
                                circumstances need our help and support. Even the
                                smallest contribution can make a real difference.
                            </p>

                            <p>
                                Your kindness can give them hope. Together we can
                                provide food, clothes, medicine and other
                                necessities that will make their lives a little
                                easier.
                            </p>

                            <p>
                                Friends, helping people in need is one of the most
                                important things we can do. Let&apos;s not leave
                                these families alone with their problems.
                            </p>
                        </div>
                    </div>
                </article>

                {/* RIGHT SIDE */}
                <aside className="px-5 py-6 md:px-8">

                    {/* MAIN TABS */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => setActiveTab("help")}
                            className={`h-11 text-xs font-bold uppercase transition ${activeTab === "help"
                                    ? "bg-black text-white"
                                    : "bg-zinc-100 text-zinc-800"
                                }`}
                        >
                            I want to help
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("goods")}
                            className={`h-11 text-xs font-bold uppercase transition ${activeTab === "goods"
                                    ? "bg-black text-white"
                                    : "bg-zinc-100 text-zinc-800"
                                }`}
                        >
                            Donate goods
                        </button>
                    </div>

                    <p className="mt-8 text-sm leading-5 text-zinc-600">
                        Already picked a good donation? Add it as a gift and
                        help someone who really needs it.
                    </p>

                    {/* TYPE */}
                    <div className="mt-6 flex gap-8 border-b border-zinc-200">
                        <button
                            type="button"
                            className="border-b-2 border-black pb-3 text-xs font-bold"
                        >
                            KIT
                        </button>
                    </div>

                    {/* SELECT GOODS */}
                    <div className="mt-6">
                        <h2 className="text-sm font-bold uppercase">
                            Select necessary goods
                        </h2>

                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {goods.slice(0, 3).map((good) => {
                                const selected = selectedGood === good.id;

                                return (
                                    <button
                                        key={good.id}
                                        type="button"
                                        onClick={() => setSelectedGood(good.id)}
                                        className="text-left"
                                    >
                                        <div
                                            className={`relative aspect-square overflow-hidden border-2 ${selected
                                                    ? "border-(--primary-color)"
                                                    : "border-transparent"
                                                }`}
                                        >
                                            <Image
                                                src={good.image}
                                                alt={good.title}
                                                fill
                                                sizes="150px"
                                                className="object-cover"
                                            />

                                            {selected && (
                                                <span className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                                                    ✓
                                                </span>
                                            )}
                                        </div>

                                        <p className="mt-2 text-xs font-medium uppercase">
                                            {good.title}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedGood(4)}
                            className="mt-5 block w-[32%] text-left"
                        >
                            <div
                                className={`relative aspect-square overflow-hidden border-2 ${selectedGood === 4
                                        ? "border-(--primary-color)"
                                        : "border-transparent"
                                    }`}
                            >
                                <Image
                                    src={goods[3].image}
                                    alt={goods[3].title}
                                    fill
                                    sizes="150px"
                                    className="object-cover"
                                />

                                {selectedGood === 4 && (
                                    <span className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                                        ✓
                                    </span>
                                )}
                            </div>

                            <p className="mt-2 text-xs font-medium uppercase">
                                {goods[3].title}
                            </p>
                        </button>
                    </div>

                    {/* ACCORDIONS */}
                    <div className="mt-7 border-t border-zinc-200">
                        {accordions.map((item) => {
                            const opened = openAccordion === item.id;

                            return (
                                <div
                                    key={item.id}
                                    className="border-b border-zinc-200"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(item.id)}
                                        className="flex w-full items-center justify-between py-4 text-left text-xs font-bold"
                                    >
                                        {item.title}

                                        {opened ? (
                                            <ChevronUp className="size-4" />
                                        ) : (
                                            <ChevronDown className="size-4" />
                                        )}
                                    </button>

                                    {opened && (
                                        <div className="pb-4 text-xs leading-5 text-zinc-500">
                                            Select the goods you would like to donate
                                            from this category.
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* NOTICE */}
                    <div className="mt-7 border-l-4 border-yellow-400 bg-yellow-50 px-4 py-4">
                        <p className="text-xs leading-5 text-zinc-700">
                            Your help matters. Even a small contribution can
                            provide essential support to someone in need.
                        </p>
                    </div>

                    {/* AMOUNT */}
                    <div className="mt-8">
                        <p className="mb-3 text-xs font-semibold">
                            Select the amount
                        </p>

                        <div className="grid grid-cols-5 gap-2">
                            {amounts.map((amount) => (
                                <button
                                    key={amount}
                                    type="button"
                                    onClick={() => {
                                        setSelectedAmount(amount);
                                        setOtherAmount("");
                                    }}
                                    className={`h-10 border text-xs font-semibold transition ${selectedAmount === amount
                                            ? "border-zinc-900 bg-white"
                                            : "border-transparent bg-zinc-100"
                                        }`}
                                >
                                    {amount}
                                </button>
                            ))}
                        </div>

                        <input
                            type="number"
                            value={otherAmount}
                            onChange={(e) => {
                                setOtherAmount(e.target.value);
                                setSelectedAmount("");
                            }}
                            placeholder="OTHER AMOUNT"
                            className={`mt-2 h-10 w-full border px-3 text-xs outline-none ${otherAmount
                                    ? "border-zinc-900"
                                    : "border-zinc-200"
                                }`}
                        />
                    </div>

                    {/* PERIOD */}
                    <div className="mt-7">
                        <p className="mb-3 text-xs font-semibold">
                            Select the period
                        </p>

                        <div className="grid grid-cols-3 gap-2">
                            {periods.map((period) => (
                                <button
                                    key={period}
                                    type="button"
                                    onClick={() => setSelectedPeriod(period)}
                                    className={`h-10 border text-[11px] font-semibold ${selectedPeriod === period
                                            ? "border-zinc-900 bg-white"
                                            : "border-transparent bg-zinc-100"
                                        }`}
                                >
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PAYMENT */}
                    <div className="mt-7">
                        <p className="mb-3 text-xs font-semibold">
                            Payment method:
                        </p>

                        <div className="grid grid-cols-4 gap-2">
                            {payments.map((payment) => (
                                <button
                                    key={payment.id}
                                    type="button"
                                    onClick={() =>
                                        setPaymentMethod(payment.id)
                                    }
                                    aria-label={payment.label}
                                    className={`flex h-11 items-center justify-center border bg-zinc-50 ${paymentMethod === payment.id
                                            ? "border-zinc-900"
                                            : "border-transparent"
                                        }`}
                                >
                                    {payment.id === "visa" && (
                                        <FaCcVisa className="text-3xl text-blue-700" />
                                    )}

                                    {payment.id === "mastercard" && (
                                        <FaCcMastercard className="text-3xl" />
                                    )}

                                    {payment.id === "tbc" && (
                                        <span className="text-[10px] font-bold text-sky-500">
                                            TBC PAY
                                        </span>
                                    )}

                                    {payment.id === "bank" && (
                                        <span className="text-[10px] font-bold text-orange-500">
                                            BANK
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* AGREEMENT */}
                    <label className="mt-6 flex cursor-pointer items-center gap-2 text-xs">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="size-4"
                        />

                        I agree with rules for funds transfer
                    </label>

                    {/* DONATE */}
                    <button
                        type="button"
                        disabled={!agreed}
                        className="mt-4 h-11 w-full bg-black text-xs font-bold uppercase text-white transition disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Donate
                    </button>

                    <p className="mt-6 text-xs text-zinc-500">
                        For regular payments, please{" "}
                        <a
                            href="#"
                            className="font-semibold text-zinc-900 underline"
                        >
                            LOG IN
                        </a>{" "}
                        or{" "}
                        <a
                            href="#"
                            className="font-semibold text-zinc-900 underline"
                        >
                            REGISTER
                        </a>
                    </p>

                    {/* BANK ACCOUNTS */}
                    <div className="mt-8">
                        <p className="mb-3 text-xs font-semibold">
                            Our Fund&apos;s accounts in:
                        </p>

                        <BankRow
                            bank="Bank of Georgia"
                            account="GE84BG0000000470458000"
                        />

                        <BankRow
                            bank="TBC Bank"
                            account="GE15TB7194330800100003"
                        />

                        <BankRow
                            bank="Liberty Bank"
                            account="GE42LB0115113036865000"
                        />
                    </div>
                </aside>
            </div>
        </section>
    );
}

function BankRow({ bank, account }) {
    return (
        <div className="flex items-center justify-between gap-4 border-b border-zinc-200 py-4 text-xs">
            <strong className="text-zinc-800">
                {bank}
            </strong>

            <span className="text-right text-zinc-500">
                {account}
            </span>
        </div>
    );
}