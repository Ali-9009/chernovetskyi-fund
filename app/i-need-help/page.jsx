import Image from "next/image";

export default function QuestionnaireSection() {
    return (
        <section className="py-16 px-4">
            <div className="mx-auto grid max-w-360 gap-8 lg:grid-cols-2 lg:gap-10">

                {/* Image */}
                <div className="relative min-h-105 overflow-hidden">
                    <Image
                        src="/assets/questionnaire-child.jpg"
                        alt="Child"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Form */}
                <div>
                    <h2 className="text-2xl font-semibold text-zinc-900">
                        Questionnaire
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                        Indicate your Facebook link and phone number. If you want to help
                        somebody, indicate his/her phone number together with yours.
                    </p>

                    <form className="mt-6 space-y-4">
                        <input
                            type="tel"
                            placeholder="PHONE NUMBER"
                            className="w-full border border-zinc-300 px-4 py-3 text-sm outline-none"
                        />

                        <input
                            type="tel"
                            placeholder="PHONE NUMBER OF THE PERSON WHO NEEDS HELP"
                            className="w-full border border-zinc-300 px-4 py-3 text-sm outline-none"
                        />

                        <input
                            type="url"
                            placeholder="LINK TO YOUR FACEBOOK PAGE"
                            className="w-full border border-zinc-300 px-4 py-3 text-sm outline-none"
                        />

                        <textarea
                            rows={6}
                            maxLength={250}
                            placeholder="Comment"
                            className="w-full resize-none border border-zinc-300 px-4 py-3 text-sm outline-none"
                        />

                        <div>
                            <p className="text-sm text-zinc-600">
                                Do people in need for assistance agree to creation and
                                publication of photo and video materials in social networks
                                and the mass media?
                            </p>

                            <div className="mt-3 flex gap-6 text-sm">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="permission" value="yes" />
                                    Yes
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="radio" name="permission" value="no" />
                                    No
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black px-6 py-3 text-sm font-semibold text-white"
                        >
                            SEND PROFILE
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}