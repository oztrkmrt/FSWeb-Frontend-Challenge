import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Skills = () => {
    const { mockData } = useContext(LanguageContext);
    const { skills } = mockData;

    return (
        <section id="skills" className="px-4 py-20">
            <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
            <h2 className="text-black font-semibold text-4xl lg:text-5xl mb-4 text-start px-2 py-8 dark:text-[#AEBCCF]">
                {skills.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.items.map((item, i) => (
                    <div key={i} className="flex flex-col gap-4 p-4 bg-white rounded shadow-md dark:bg-[#202124] dark:text-white">
                        <h3 className="text-[#4338CA] font-medium text-xl md:text-2xl lg:text-3xl dark:text-[#B7AAFF]">
                            {item.name}
                        </h3>
                        <p className="text-base md:text-lg">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;