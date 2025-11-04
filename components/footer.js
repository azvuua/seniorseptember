export default function Footer() {
    return (
        <footer className=" flex flex-col gap-6 mt-6 ">
            <div className="h-px w-full bg-white"></div>
            <div className="flex sm:flex-row gap-4 mb-8 justify-between">
                <div className="flex gap-12">
                    <h1 className="text-2xl font-bold">ACME STORE</h1>
                    <nav className="flex flex-col items-start text-sm gap-4 text-gray-400">
                        <a href="#" className="hover:text-white transition">Home</a>
                        <a href="#" className="hover:text-white transition">About</a>
                        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition">Shipping & Return Policy</a>
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">FAQ</a>
                    </nav>
                </div>
                <div className="flex h-fit">
                    <button className="border-gray-300 border rounded-l-md"><img src="/favicon.ico" className="size-6"></img></button>
                    <button className="border-gray-300 border border-l-0 rounded-r-md text-sm p-1">Deploy</button>
                </div>
            </div>
        </footer>
    )
}