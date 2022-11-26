import Header from "../components/Header";

export function About() {
    return (
        <>
            <div>
                <Header />
            </div>
            <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
                <div className="container mx-auto px-6">

                    <div className="sm:flex sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-700 uppercase mb-2">About</span>
                                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:underline hover:text-blue-500">Company</a></span>
                                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:underline hover:text-blue-500">Products</a></span>
                                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:underline hover:text-blue-500">Staffs</a></span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Projetcts</span>
                                <span className="my-2"><a href="#" className="text-blue-700 text-md hover:underline hover:text-blue-500">link 1</a></span>
                                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:underline hover:text-blue-500">link 1</a></span>
                                <span className="my-2"><a href="#" className="text-blue-700 text-md hover:underline hover:text-blue-500">link 1</a></span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Contact</span>
                                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:underline hover:text-blue-500">Twitter</a></span>
                                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:underline hover:text-blue-500">Email</a></span>
                                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:underline hover:text-blue-500">Instagram</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm text-blue-700 font-bold mb-2">
                                © {new Date().getFullYear()} by Maccuci Interprise
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}