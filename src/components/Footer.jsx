import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
    const { mockData } = useContext(LanguageContext);
    const { footer } = mockData;

    return (
        <div
            className={`dark:bg-[#252128] bg-[#F9F9F9] flex flex-col justify-center md:flex-row md:justify-between rounded-lg`}
        >
            <div className="w-full md:w-2/5 text-center md:text-left mx-2 py-10">
                <h2 className="text-black font-semibold text-4xl mb-6 dark:text-[#AEBCCF]">
                    {footer.title}
                </h2>
                <div className="flex items-center mb-20">
                    <img src={footer.image} alt="" className="mr-4" />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AF0C48] underline dark:text-[#BAB2E7]"
                        href={"mailto:merttoztrk@gmail.com"}
                    >
                        {footer.mail}
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap justify-between md:justify-start gap-4 mx-4 py-12">
                <a
                    className="text-[#0A0A14] dark:text-[#E1E1FF]"
                    href={footer.links.personalBlog}
                >
                    {footer.personalBlog}
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00AB6B] dark:text-[#17D18B]"
                    href={footer.links.github}
                >
                    {footer.github}
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077B5] dark:text-[#0BA6F6]"
                    href={footer.links.linkedin}
                >
                    {footer.linkedin}
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#640D5F] dark:text-[#8866AA]"
                    href={footer.links.CV}
                >
                    {footer.CV}
                </a>
            </div>
        </div>
    );
};

export default Footer;