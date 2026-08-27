import AboutNav from "@/components/AboutNav";

export default function AboutFundLayout({ children }) {
    return (
        <>
            <AboutNav />
            {children}
        </>
    );
}