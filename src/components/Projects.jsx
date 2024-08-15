import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Projects = () => {

    const { mockData } = useContext(LanguageContext);
    const { projects } = mockData;

    return (

        <div id="projects" className="p-10 w-4/5 mx-auto" >
            <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
            <h2 className="text-black font-semibold text-5xl mb-6 text-start p-10 dark:text-[#AEBCCF]">{projects.title}</h2>
            <div className="flex flex-row justify-between p-10 items-center gap-8" >
                {projects.items.map((item, i) => {
                    return (
                        <div key={i} className="flex flex-col w-3/5 gap-2">
                            <div>
                                <img src={item.image} alt="" />
                                <h3 className="text-[#4338CA] font-medium text-3xl my-6 dark:text-[#CFCBFF]">{item.title}</h3>
                                <p className="text-[#6B7280] text-s dark:text-white">{item.description}</p>
                            </div>
                            <div className="flex justify-start gap-4 my-4">
                                {item.technologies.map((t, i) => {
                                    return (
                                        <p key={i} className="text-[#3730A3] text-xs font-medium border border-[#3730A3] py-1 px-2 rounded dark:text-[#8F88FF] dark:border-[#8F88FF]">
                                            {t}
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="flex justify-between">
                                <a className="text-[#3730A3] font-semibold underline dark:text-[#E1E1FF]" href={item.links.github}>{item.github}</a>
                                <a className="text-[#3730A3] font-semibold underline dark:text-[#E1E1FF]" href={item.links.viewSite}>{item.viewSite}</a>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Projects;