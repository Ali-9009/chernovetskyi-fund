import Image from "next/image";
import {
    FaCcVisa,
    FaCcMastercard,
} from "react-icons/fa";

const amounts = ["$5", "$10", "$20", "$50", "$100"];

export default function ProjectDetails() {
    return (
        <section className="py-16 px-4">
            <div className="mx-auto grid max-w-360 lg:grid-cols-2 ">

                {/* LEFT */}
                <div className="border-r border-zinc-200">
                    <div className="relative h-125">
                        <Image
                            src="/assets/questionnaire-child.jpg"
                            alt="Child needing help"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="p-6 lg:p-8">
                        <div className="flex flex-wrap justify-between gap-3 text-xs text-zinc-500">
                            <span>
                                Main / Projects / Help your neighbour and get closer to God!
                            </span>

                            <span>
                                December 10, 2023
                            </span>
                        </div>

                        <h1 className="mt-7 text-2xl font-semibold text-zinc-900">
                            Help your neighbor and get closer to God!
                        </h1>

                        <p className="mt-4 text-sm leading-6 text-zinc-600">
                            By helping the poor, the sick and the unfortunate, you lend a helping hand not to them - but TO THE SON OF GOD! “For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in, I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me... Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.” (Matthew 25:35-36, 40)
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                aria-label="Visa"
                                className="flex h-11 min-w-20 items-center justify-center rounded bg-zinc-100 px-4"
                            >
                                <FaCcVisa className="text-3xl" />
                            </button>

                            <button
                                type="button"
                                aria-label="Mastercard"
                                className="flex h-11 min-w-20 items-center justify-center rounded bg-zinc-100 px-4"
                            >
                                <FaCcMastercard className="text-3xl" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <aside className="p-6 lg:p-8">
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="button"
                            className="bg-black py-3 text-xs font-semibold text-white"
                        >
                            I WANT TO HELP
                        </button>

                        <button
                            type="button"
                            className="bg-zinc-100 py-3 text-xs font-semibold text-zinc-700"
                        >
                            DONATE GOODS
                        </button>
                    </div>

                    {/* Donated */}
                    <div className="mt-6">
                        <p className="text-xs text-zinc-500">
                            Donated:
                        </p>

                        <div className="mt-1 flex items-end gap-2">
                            <strong className="text-3xl font-medium text-zinc-800">
                                $ 310,672
                            </strong>

                            <span className="mb-1 text-xs text-zinc-500">
                                30,050 donors
                            </span>
                        </div>
                    </div>

                    {/* Amount */}
                    <div className="mt-7">
                        <p className="mb-3 text-xs font-medium">
                            Select the amount
                        </p>

                        <div className="grid grid-cols-3 gap-2">
                            {amounts.map((amount) => (
                                <button
                                    key={amount}
                                    type="button"
                                    className="h-11 rounded bg-zinc-100 text-sm font-semibold transition hover:bg-zinc-200"
                                >
                                    {amount}
                                </button>
                            ))}

                            <button
                                type="button"
                                className="h-11 border border-zinc-200 text-xs"
                            >
                                OTHER AMOUNT
                            </button>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="mt-7">
                        <p className="mb-3 text-xs font-medium">
                            Payment method:
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                aria-label="Visa"
                                className="flex h-11 min-w-20 items-center justify-center rounded bg-zinc-100 px-4"
                            >
                                <FaCcVisa className="text-3xl" />
                            </button>

                            <button
                                type="button"
                                aria-label="Mastercard"
                                className="flex h-11 min-w-20 items-center justify-center rounded bg-zinc-100 px-4"
                            >
                                <FaCcMastercard className="text-3xl" />
                            </button>
                        </div>
                    </div>

                    {/* Agreement */}
                    <label className="mt-5 flex cursor-pointer items-center gap-2 text-xs">
                        <input
                            type="checkbox"
                            className="size-4"
                        />
                        I agree with rules for funds transfer
                    </label>

                    <button
                        type="button"
                        className="mt-4 w-full bg-black py-3 text-xs font-semibold text-white transition hover:bg-zinc-800"
                    >
                        DONATE
                    </button>

                    <p className="mt-5 text-xs text-zinc-600">
                        For regular payments, please{" "}
                        <a href="#" className="font-semibold underline">
                            LOG IN
                        </a>{" "}
                        or{" "}
                        <a href="#" className="font-semibold underline">
                            REGISTER
                        </a>
                    </p>

                    {/* Accounts */}
                    <div className="mt-6">
                        <p className="mb-4 text-xs font-medium">
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
        <div className="flex items-center justify-between gap-4 border-b border-zinc-200 py-3 text-xs">
            <strong>{bank}</strong>

            <span className="text-right text-zinc-600">
                {account}
            </span>
        </div>
    );
}