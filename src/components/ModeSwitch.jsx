import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { data } from "autoprefixer";

const ModeSwitch = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { mockData, toggleLanguage } = useContext(LanguageContext);

    const { modeswitch } = mockData;

    return (
        <div className="px-6 py-12 w-full mx-auto flex text-black md:justify-end mt-4">
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
                <span className="pl-4 text-[#777777] font-semibold dark:text-[#D9D9D9]">{theme === "dark" ? modeswitch.lightMode : modeswitch.darkMode}</span>
            </div>
            <span className="px-2 font-semibold dark:text-[#D9D9D9]">|</span>
            <span>
                <span className="text-[#6B7280] font-semibold dark:text-[#D9D9D9]">{modeswitch.languagePrefix}</span>
                <span className="text-[#4338CA] font-semibold cursor-pointer dark:text-[#BAB2E7]" onClick={toggleLanguage}>{modeswitch.language}</span>
                <span className="text-[#6B7280] font-semibold dark:text-[#D9D9D9]">{modeswitch.languageSuffix}</span>
            </span>
        </div>
    )
}

export default ModeSwitch;