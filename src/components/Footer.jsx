const Footer = () => {
    return (
        <div className="bg-[#F9F9F9]">
            <div className="p-20 w-4/5 mx-auto">
                <h2 className="text-black font-semibold text-4xl mb-6 text-start">Let’s work together on <br /> your next product</h2>
                <div className="font-semibold flex justify-between my-20">
                    <div className="flex">
                        <img src="../../public/mail-logo.png" alt="" />
                        <a className="text-[#AF0C48] ml-2 underline" href="mailto:merttoztrk@gmail.com">merttoztrk@gmail.com</a>
                    </div>
                    <div className="flex">
                        <a className="text-[#0A0A14] ml-8" href="#">Personal Blog</a>
                        <a className="text-[#00AB6B] ml-8" href="https://github.com/oztrkmrt">Github</a>
                        <a className="text-[#0077B5] ml-8" href="https://www.linkedin.com/in/mert-%C3%B6zt%C3%BCrk-864693b8/">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;