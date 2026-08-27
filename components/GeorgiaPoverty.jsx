"use client";

import { useEffect, useRef, useState } from "react";

const regions = {
    GEAB: {
        name: "Abkhazia",
        level: "occupied",
        projects: 0,
    },
    GESZ: {
        name: "Samegrelo-Zemo Svaneti",
        level: "high",
        projects: 8,
    },
    GESK: {
        name: "Shida Kartli",
        level: "poor",
        projects: 5,
    },
    GERL: {
        name: "Racha-Lechkhumi-Kvemo Svaneti",
        level: "moderate",
        projects: 3,
    },
    GEMM: {
        name: "Mtskheta-Mtianeti",
        level: "poor",
        projects: 4,
    },
    GEKA: {
        name: "Kakheti",
        level: "poor",
        projects: 7,
    },
    GESJ: {
        name: "Samtskhe-Javakheti",
        level: "moderate",
        projects: 4,
    },
    GEAJ: {
        name: "Ajaria",
        level: "poor",
        projects: 6,
    },
    GEKK: {
        name: "Kvemo Kartli",
        level: "poor",
        projects: 5,
    },
    GEGU: {
        name: "Guria",
        level: "high",
        projects: 4,
    },
    GETB: {
        name: "Tbilisi",
        level: "moderate",
        projects: 10,
    },
    GEIM: {
        name: "Imereti",
        level: "moderate",
        projects: 9,
    },
};

const colors = {
    occupied: "#d4d4d4",
    high: "#f7931e",
    poor: "#f9c98f",
    moderate: "#fff0c7",
};

const levelNames = {
    occupied: "Occupied territories",
    high: "High-poverty areas",
    poor: "Poor areas",
    moderate: "Moderately poor areas",
};

export default function GeorgiaMap() {
    const mapRef = useRef(null);

    const [svg, setSvg] = useState("");
    const [activeRegion, setActiveRegion] = useState("GESZ");
    const [hoveredRegion, setHoveredRegion] = useState(null);

    useEffect(() => {
        fetch("/assets/georgia-map.svg")
            .then((res) => res.text())
            .then((data) => setSvg(data));
    }, []);

    useEffect(() => {
        if (!mapRef.current || !svg) return;

        Object.entries(regions).forEach(([id, region]) => {
            const path = mapRef.current.querySelector(`#${id}`);

            if (!path) return;

            path.style.fill =
                id === activeRegion
                    ? "#443a37"
                    : colors[region.level];

            path.style.cursor = "pointer";
            path.style.stroke = "#fff";
            path.style.strokeWidth = "1";
            path.style.transition =
                "fill 180ms ease, opacity 180ms ease";
        });
    }, [svg, activeRegion]);

    function handleMouseOver(event) {
        const path = event.target.closest("#features path");

        if (!path || !regions[path.id]) return;

        setHoveredRegion(path.id);

        path.style.opacity = "0.75";
    }

    function handleMouseOut(event) {
        const path = event.target.closest("#features path");

        if (!path || !regions[path.id]) return;

        path.style.opacity = "1";

        setHoveredRegion(null);
    }

    function handleClick(event) {
        const path = event.target.closest("#features path");

        if (!path || !regions[path.id]) return;

        setActiveRegion(path.id);
    }

    const currentRegion =
        regions[hoveredRegion || activeRegion];

    return (
        <section className="px-4 py-16">
            <div className="mx-auto max-w-7xl">

                <h2 className="text-center text-3xl font-bold md:text-4xl">
                    Social vulnerability in Georgia
                </h2>

                <p className="mt-5 text-center font-semibold">
                    Choose a region, find someone who is next to you!
                </p>

                {/* Legend */}
                <div className="mt-8 flex flex-wrap justify-center gap-8">
                    {Object.entries(levelNames).map(([level, label]) => (
                        <div
                            key={level}
                            className="flex items-center gap-3"
                        >
                            <span
                                className="size-8 rounded-full"
                                style={{
                                    backgroundColor: colors[level],
                                }}
                            />

                            <span className="text-sm font-semibold">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="relative mt-10">

                    {/* Tooltip */}
                    {currentRegion && (
                        <div className="absolute left-1/2 top-0 z-1 -translate-x-1/2 bg-(--primary-color) px-6 py-3 text-center text-sm font-semibold shadow-lg">
                            <p>
                                {currentRegion.name} -{" "}
                                {levelNames[currentRegion.level]}
                            </p>

                            <p>
                                Projects: {currentRegion.projects}
                            </p>
                        </div>
                    )}

                    {/* Real Interactive SVG */}
                    <div
                        ref={mapRef}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleClick}
                        dangerouslySetInnerHTML={{ __html: svg }}
                        className="
              [&_svg]:h-auto
              [&_svg]:w-full
              [&_#points]:hidden
              [&_#label_points]:hidden
            "
                    />

                </div>
            </div>
        </section>
    );
}