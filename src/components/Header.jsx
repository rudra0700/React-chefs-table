

const Header = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
                <div>
                    <h3 className="text-2xl font-bold">Chefs Table</h3>
                </div>
                <div>
                    <ul className="flex gap-4 font-semibold">
                        <li className="text-gray-500">Home</li>
                        <li className="text-gray-500">Recepie</li>
                        <li className="text-gray-500">About</li>
                        <li className="text-gray-500">Search</li>
                    </ul>
                </div>
                <div>
                    <div className="flex gap-4 items-center">
                        < input type="text" placeholder="search" className="p-2 outline-none border border-gray-300"/>
                        <i className="fa-solid fa-user p-2 rounded-full bg-green-500 text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;