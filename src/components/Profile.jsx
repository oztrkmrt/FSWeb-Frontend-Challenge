const Profile = () => {
    return (
        <div className="p-10 w-4/5 mx-auto">
            <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
            <div className="mx-auto flex flex-col p-10">
                <h2 className="text-black font-semibold text-5xl mb-6 text-start py-8">Profile</h2>
                <div className="flex items-center gap-10">
                    <div className="flex flex-col gap-2  w-3/5">
                        <h3 className="text-[#4338CA] font-medium text-3xl my-2">Profile</h3>
                        <div className="flex">
                            <div>
                                <h4 className="font-semibold text-xl mb-3 mt-1.5">Doğum Tarihi</h4>
                                <h4 className="font-semibold text-xl mb-3">İkamet Şehri</h4>
                                <h4 className="font-semibold text-xl mb-3">Eğitim Durumu</h4>
                                <h4 className="font-semibold text-xl mb-3">Tercih Ettiği Rol</h4>
                            </div>
                            <div className="flex flex-col justify-around pl-4">
                                <p>12.04.1993</p>
                                <p>İstanbul</p>
                                <p>Yıldız Teknik Ünv. Harita Mühendisliği, 2017</p>
                                <p className="pb-1.5">Frontend, UI</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <h3 className="text-[#4338CA] font-medium text-3xl my-4">About Me</h3>
                        <p className="text-[#6B7280] my-8">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                        </p>
                        <p className="text-[#6B7280]">
                            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;