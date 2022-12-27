const Header = () => {
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col sm:flex-row sm:justify-between text-center py-3 items-center">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" placeholder="search" className="input-text"/>
                </div>

                <div className="shrink sm:order-2 w-80">
                    <a>Design</a>
                </div>

                <div className="w-96 flex order-3 justify-center">
                    <div className="flex gap-6">
                        <a>Facebook</a>
                        <a>Twitter</a>
                        <a>Youtube</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
