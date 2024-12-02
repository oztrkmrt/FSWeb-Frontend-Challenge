import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {

    const { mockData } = useContext(LanguageContext);
    const { footer } = mockData;

    return (
        <div className="dark:bg-[#252128] bg-[#F9F9F9]">
            <div className="p-20 w-4/5 mx-auto">
                <h2 className="w-2/5 text-black font-semibold text-4xl mb-6 text-start dark:text-[#AEBCCF]">{footer.title}</h2>
                <div className="font-semibold flex justify-between my-20">
                    <div className="flex">
                        <img src={footer.image} alt="" />
                        <a className="text-[#AF0C48] ml-2 underline dark:text-[#BAB2E7]" href={"mailto:merttoztrk@gmail.com"}>{footer.mail}</a>
                    </div>
                    <div className="flex">
                        <a className="text-[#0A0A14] ml-8 dark:text-[#E1E1FF]" href={footer.links.personalBlog}>{footer.personalBlog}</a>
                        <a className="text-[#00AB6B] ml-8 dark:text-[#17D18B]" href={footer.links.github}>{footer.github}</a>
                        <a className="text-[#0077B5] ml-8 dark:text-[#0BA6F6]" href={footer.links.linkedin}>{footer.linkedin}</a>
                        <a className="text-[#0077B5] ml-8 dark:text-[#0BA6F6]" href={footer.links.CV}>{footer.CV}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;