import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="not-found-marker hidden" />

            <main className="flex min-h-screen items-center justify-center px-4">
                <div className="text-center">

                    <h1 className="mt-4 text-7xl font-bold tracking-tight text-slate-950 sm:text-8xl">
                        404
                    </h1>

                    <h2 className="mt-5 text-2xl font-semibold text-slate-950">
                        Page not found
                    </h2>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                        The page you&apos;re looking for doesn&apos;t exist or may have
                        been moved.
                    </p>

                    <Link
                        href="/"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        <i className="ri-arrow-left-line text-base" />
                        Back to home
                    </Link>
                </div>
            </main>
        </>
    );
}