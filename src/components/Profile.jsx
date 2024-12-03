import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Profile = () => {
    const { mockData } = useContext(LanguageContext);
    const { profile } = mockData;

    return (
        <section className="px-2 py-20">
            <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
            <div className="mx-auto py-10 px-4 rounded shadow-md bg-white dark:bg-[#202124] dark:text-white">
                <h2 className="text-black font-semibold text-4xl lg:text-5xl mb-6 text-start py-8 dark:text-[#AEBCCF]">
                    {profile.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#4338CA] font-medium text-xl md:text-2xl lg:text-3xl my-4 dark:text-[#B7AAFF]">
                            {profile.profileInformation.title}
                        </h3>
                        {profile.profileInformation.items.map((item, i) => (
                            <div key={i} className="flex mb-2">
                                <p className="w-1/2 font-semibold">{item.label}</p>
                                <p className="w-1/2 pr-6">{item.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pb-4">
                        <h3 className="text-[#4338CA] font-medium text-xl md:text-2xl lg:text-3xl my-2 dark:text-[#B7AAFF]">
                            {profile.aboutMe.title}
                        </h3>
                        <p className="text-base md:text-lg my-8">{profile.aboutMe.descriptions}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;