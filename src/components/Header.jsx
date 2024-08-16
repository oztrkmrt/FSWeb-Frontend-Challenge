import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {

    const { mockData } = useContext(LanguageContext)
    const { header } = mockData;

    const scroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="px-20 py-12 w-4/5 mx-auto flex text-black justify-between mt-4">
            <p className="text-[#7B61FF] font-bold py-3 px-4 rounded-full bg-[#EEEBFF]" style={{ transform: 'rotate(30deg)' }}>
                M
            </p>
            <nav className="flex items-center gap-20 text-lg text-[#6B7280] font-medium">
                <div className="cursor-pointer" onClick={() => scroll("skills")}>
                    {header.skills}
                </div>
                <div className="cursor-pointer" onClick={() => scroll("projects")}>
                    {header.projects}
                </div>
                <div className="text-[#3730A3] bg-white py-1 px-4 border border-[#3730A3] rounded dark:bg-[#E1E1FF] dark:text-black">
                    <a className="px-5 font-medium rounded " href="mailto:merttoztrk@gmail.com">
                        {header.hireMe}
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header;