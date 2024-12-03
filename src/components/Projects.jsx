import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Projects = () => {
    const { mockData } = useContext(LanguageContext);
    const { projects } = mockData;

    return (
        <div className="p-4 md:p-2 w-full mx-auto">
            <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
            <h2 className="text-black font-semibold text-5xl mb-6 text-start py-8 px-4 dark:text-[#AEBCCF]">
                {projects.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.items.map((item, i) => (
                    <div key={i} className="project-card rounded-lg shadow-md overflow-hidden">
                        <a
                            href={item.links.viewSite}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-110"
                            />
                        </a>
                        <div className="p-4">
                            <h3 className="text-[#4338CA] font-medium text-xl mb-2 dark:text-[#CFCBFF]">
                                {item.title}
                            </h3>
                            <p className="text-[#6B7280] text-sm mb-4 dark:text-white">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((t, i) => (
                                    <p
                                        key={i}
                                        className="text-[#3730A3] text-xs font-medium bg-[#F5F5F5] border border-[#3730A3] py-1 px-2 rounded-full mr-2 mb-2 dark:text-[#8F88FF] dark:bg-transparent dark:border-[#8F88FF]"
                                    >
                                        {t}
                                    </p>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href={item.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#3730A3] font-semibold underline dark:text-[#E1E1FF]"
                                >
                                    {item.github}
                                </a>
                                <a
                                    href={item.links.viewSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#3730A3] font-semibold underline dark:text-[#E1E1FF]"
                                >
                                    {item.viewSite}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;