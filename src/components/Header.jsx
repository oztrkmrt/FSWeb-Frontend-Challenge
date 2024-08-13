const Header = () => {
    return (
        <div className="px-20 py-12 w-4/5 mx-auto flex text-black justify-between mt-4">
            <p className="text-[#7B61FF] font-bold py-3 px-4 rounded-full bg-[#EEEBFF]" style={{ transform: 'rotate(30deg)' }}>
                M
            </p>
            <nav className="flex items-center gap-20 text-lg text-[#6B7280] font-medium">
                <div className="cursor-pointer">
                    Skills
                </div>
                <div className="cursor-pointer">
                    Projects
                </div>
                <div className="text-[#3730A3] bg-white py-1 px-4 border border-[#3730A3] rounded ">
                    <a className="px-5 text-[#3730A3] bg-white font-medium rounded" href="mailto:merttoztrk@gmail.com">
                        Hire Me
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header;