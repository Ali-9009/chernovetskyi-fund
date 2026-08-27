"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import PrimaryBtn from "@/components/PrimaryBtn";

import projects from "../../data/projects"

export default function ProjectsPage() {
    const [projectType, setProjectType] = useState("");
    const [city, setCity] = useState("");
    const [beneficiary, setBeneficiary] = useState("");
    const [sort, setSort] = useState("newest");

    const filteredProjects = useMemo(() => {
        let result = [...projects];

        if (projectType) {
            result = result.filter(
                (project) => project.type === projectType
            );
        }

        if (city) {
            result = result.filter(
                (project) => project.city === city
            );
        }

        if (beneficiary) {
            result = result.filter(
                (project) => project.beneficiary === beneficiary
            );
        }

        if (sort === "donated") {
            result.sort(
                (a, b) =>
                    Number(b.donated) - Number(a.donated)
            );
        }

        if (sort === "supporters") {
            result.sort(
                (a, b) => b.supporters - a.supporters
            );
        }

        return result;
    }, [projectType, city, beneficiary, sort]);

    return (
        <main className="px-4 py-12">
            <div className="mx-auto max-w-7xl">

                <h1 className="text-center text-4xl font-bold text-zinc-800">
                    Projects
                </h1>

                {/* FILTERS */}
                <div className="mt-10 grid gap-3 md:grid-cols-4">
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="h-11 border border-zinc-200 bg-white px-3 text-sm outline-none"
                    >
                        <option value="newest">Sort by: Create date</option>
                        <option value="donated">Most donated</option>
                        <option value="supporters">Most supporters</option>
                    </select>

                    <select
                        value={projectType}
                        onChange={(e) =>
                            setProjectType(e.target.value)
                        }
                        className="h-11 border border-zinc-200 bg-white px-3 text-sm outline-none"
                    >
                        <option value="">Project Type</option>
                        <option value="Medical">Medical</option>
                        <option value="Family Support">
                            Family Support
                        </option>
                    </select>

                    <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="h-11 border border-zinc-200 bg-white px-3 text-sm outline-none"
                    >
                        <option value="">City</option>
                        <option value="Tbilisi">Tbilisi</option>
                        <option value="Batumi">Batumi</option>
                        <option value="Kutaisi">Kutaisi</option>
                    </select>

                    <select
                        value={beneficiary}
                        onChange={(e) =>
                            setBeneficiary(e.target.value)
                        }
                        className="h-11 border border-zinc-200 bg-white px-3 text-sm outline-none"
                    >
                        <option value="">Beneficiary</option>
                        <option value="Child">Child</option>
                        <option value="Family">Family</option>
                    </select>
                </div>

                <h2 className="mt-10 text-center text-2xl font-bold text-zinc-800">
                    All Projects ({filteredProjects.length})
                </h2>

                {/* PROJECT CARDS */}
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="flex h-full flex-col border border-zinc-200 bg-white"
                        >
                            {/* IMAGE */}
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />

                                <span className="absolute left-0 top-0 bg-(--primary-color) px-2 py-1 text-xs text-white">
                                    {project.category}
                                </span>

                                <button
                                    type="button"
                                    aria-label={`Play ${project.title}`}
                                    className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white"
                                >
                                    <Play className="size-5 fill-current" />
                                </button>
                            </div>

                            {project.urgent && (
                                <div className="bg-red-600 py-1 text-center text-xs text-white">
                                    Urgent help needed
                                </div>
                            )}

                            {/* CONTENT */}
                            <div className="flex flex-1 flex-col p-4">
                                <h3 className="text-lg font-bold leading-6 text-zinc-800">
                                    {project.title}
                                </h3>

                                <p className="mt-3 line-clamp-4 text-sm leading-6 text-zinc-600">
                                    {project.description}
                                </p>

                                {/* STATS */}
                                <div className="mt-6 grid grid-cols-2 border-t border-zinc-200 pt-4 text-center">
                                    <div className="border-r border-zinc-200">
                                        <p className="text-xs text-zinc-500">
                                            Donated
                                        </p>

                                        <strong className="mt-1 block text-sm text-zinc-800">
                                            {project.donated}
                                        </strong>
                                    </div>

                                    <div>
                                        <p className="text-xs text-zinc-500">
                                            supporters
                                        </p>

                                        <strong className="mt-1 block text-sm text-zinc-800">
                                            {project.supporters}
                                        </strong>
                                    </div>
                                </div>

                                <div className="mt-5 text-center">
                                    <PrimaryBtn href={project.href}>
                                        I want to help
                                    </PrimaryBtn>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="py-16 text-center text-zinc-500">
                        No projects found.
                    </p>
                )}
            </div>
        </main>
    );
}