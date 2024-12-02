import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Profile = () => {

    const { mockData } = useContext(LanguageContext);
    const { profile } = mockData;

    return (
        <div className="p-10 w-4/5 mx-auto dark:text-white">
            <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
            <div className="mx-auto flex flex-col p-10">
                <h2 className="text-black font-semibold text-5xl mb-6 text-start py-8 dark:text-[#AEBCCF]">{profile.title}</h2>
                <div className="flex items-center gap-20">
                    <div className="flex flex-col gap-2  w-2/5">
                        <h3 className="text-[#4338CA] font-medium text-3xl my-4 dark:text-[#B7AAFF]">{profile.profileInformation.title}</h3>

                        {profile.profileInformation.items.map((item, i) => {
                            return (
                                <div key={i} className="flex">
                                    <p className="w-1/2 font-semibold">{item.label}</p>
                                    <p className="w-1/2 pr-6">{item.value}</p>
                                </div>
                            )
                        })}

                    </div>
                    <div className="pb-4 w-3/5">
                        <h3 className="text-[#4338CA] font-medium text-3xl my-2 dark:text-[#B7AAFF]">{profile.aboutMe.title}</h3>
                        <p className="text-[#6B7280] my-8 dark:text-white">
                            {profile.aboutMe.descriptions}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile;