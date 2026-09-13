const Footer = () => {
    return (
        <footer className="bg-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* 1st Div - Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">
                                    DS
                                </span>
                            </div>

                            <h2 className="text-xl font-semibold text-gray-800">
                                Dev <span className="text-pink-500">Stack</span>
                            </h2>
                        </div>

                        <p className="text-gray-400 text-sm leading-6 max-w-sm">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex gap-6 mt-7">
                            <a
                                href="#"
                                className="text-gray-700 text-sm font-medium hover:text-purple-600"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-gray-700 text-sm font-medium hover:text-purple-600"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-gray-700 text-sm font-medium hover:text-purple-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* 2nd Div - Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-6">
                            Product
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd Div - Company */}
                    
                    {/* 4th Div - Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-6">
                            Legal
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-gray-700"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    {/* Privacy & Terms */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
                        >
                            Terms
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;