import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const ModeSwitch = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { mockData, toggleLanguage } = useContext(LanguageContext);

    const dataModeSwitch = mockData.modeswitch;

    return (
        <div className="px-20 py-12 w-4/5 mx-auto flex text-black justify-end mt-4">
            <div className="flex">
                <div className="flex items-center justify-center">
                    <button
                        onClick={toggleTheme}
                        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${theme === "dark" ? 'bg-[#3A3A3A]' : 'bg-[#4731D3]'
                            }`}
                    >
                        <div
                            className={`w-4 h-4 rounded-full transition transform ${theme === "dark"
                                ? 'bg-[#FFE86E] translate-x-5'
                                : 'bg-[#FFE86E] shadow-md'
                                }`}

                        />
                    </button>
                </div>
                <span className="pl-2">DARK MODE</span>
            </div>
            <span className="px-2">|</span>
            <span>
                <span className="text-[#4338CA] cursor-pointer" onClick={toggleLanguage}>TÜRKÇE</span>
                <span className="text-[#6B7280] ">'YE GEÇ</span>
            </span>
        </div>
    )
}

export default ModeSwitch;