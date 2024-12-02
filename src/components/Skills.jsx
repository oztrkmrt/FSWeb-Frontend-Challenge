import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Skills = () => {

    const { mockData } = useContext(LanguageContext)
    const { skills } = mockData

    return (
        <div id="skills" className="p-20 w-4/5 mx-auto">
            <h2 className="text-black font-semibold text-5xl mb-4 text-start py-8 dark:text-[#AEBCCF]">{skills.title}</h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-10">
                {skills.items.map((item, i) => {
                    return (
                        <div key={i} className="pr-16">
                            <h3 className="text-[#4338CA] font-medium text-3xl mb-10 dark:text-[#B7AAFF]">{item.name}</h3>
                            <p className="text-[#6B7280] dark:text-white">
                                {item.description}
                            </p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Skills;