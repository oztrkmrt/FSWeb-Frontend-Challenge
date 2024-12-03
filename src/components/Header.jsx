import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
    const { mockData } = useContext(LanguageContext);
    const { header } = mockData;

    const scroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center md:px-6">
            <p className="text-[#7B61FF] font-bold mb-2 py-2 px-4 rounded-full bg-[#EEEBFF] self-start md:self-auto transform rotate-30">
                M
            </p>
            <nav className="flex flex-col gap-4 md:flex-row md:gap-20 text-lg text-[#6B7280] font-medium">
                <div className="cursor-pointer" onClick={() => scroll("skills")}>
                    {header.skills}
                </div>
                <div className="cursor-pointer" onClick={() => scroll("projects")}>
                    {header.projects}
                </div>
                <div className="flex sm:justify-between md:justify-start">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-1 text-white bg-[#3730A3] font-semibold rounded mb-4 md:mb-0 dark:bg-[#E1E1FF] dark:text-black"
                        href="mailto:merttoztrk@gmail.com"
                    >
                        {header.hireMe}
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;