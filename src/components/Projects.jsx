const Projects = () => {
    return (

        <div className="p-10 w-4/5 mx-auto" >
            <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full mx-auto my-8" />
            <h2 className="text-black font-semibold text-5xl mb-6 text-start p-10">Projects</h2>
            <div className="flex flex-row justify-between p-10 items-center gap-8" >
                <div className="flex flex-col w-3/5 gap-2">
                    <div>
                        <img src="../../public/project1.png" alt="" />
                        <h3 className="text-[#4338CA] font-medium text-3xl my-2">Workintech</h3>
                        <p className="text-[#6B7280] text-s">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
                            This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes
                            any type of customization to code and themes possible.</p>
                    </div>
                    <div className="flex justify-between">
                        <a className="text-[#3730A3] font-semibold underline" href="https://github.com/oztrkmrt">Github</a>
                        <a className="text-[#3730A3] font-semibold underline" href="#">View Site</a>
                    </div>
                </div>
                <div className="flex flex-col w-3/5 gap-2">
                    <div>
                        <img src="../../public/project2.png" alt="" />
                        <h3 className="text-[#4338CA] font-medium text-3xl my-2">Random Jokes</h3>
                        <p className="text-[#6B7280] text-s">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
                            This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes
                            any type of customization to code and themes possible.</p>
                    </div>
                    <div className="flex justify-between">
                        <a className="text-[#3730A3] font-semibold underline" href="https://github.com/oztrkmrt">Github</a>
                        <a className="text-[#3730A3] font-semibold underline" href="#">View Site</a>
                    </div>
                </div>
                <div className="flex flex-col w-3/5 gap-2">
                    <div>
                        <img src="../../public/project3.png" alt="" />
                        <h3 className="text-[#4338CA] font-medium text-3xl my-2">Workintech</h3>
                        <p className="text-[#6B7280] text-s">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.
                            This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes
                            any type of customization to code and themes possible.</p>
                    </div>
                    <div className="flex justify-between">
                        <a className="text-[#3730A3] font-semibold underline" href="https://github.com/oztrkmrt">Github</a>
                        <a className="text-[#3730A3] font-semibold underline" href="#">View Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;