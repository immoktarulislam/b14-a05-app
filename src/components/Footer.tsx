const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
                                DS
                            </div>

                            <h2 className="text-xl font-bold">
                                Dev <span className="text-pink-500">Stack</span>
                            </h2>
                        </div>

                        <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex gap-7 text-sm font-medium text-gray-600">
                            <a href="#" className="transition hover:text-purple-500">
                                GitHub
                            </a>

                            <a href="#" className="transition hover:text-purple-500">
                                Twitter
                            </a>

                            <a href="#" className="transition hover:text-purple-500">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                            Product
                        </h3>

                        <ul className="mt-6 space-y-4 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                            Company
                        </h3>

                        <ul className="mt-6 space-y-4 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                            Legal
                        </h3>

                        <ul className="mt-6 space-y-4 text-sm text-gray-400">
                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-gray-700">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Border */}
                <div className="mt-16 border-t border-gray-100 pt-8">
                    <div className="flex flex-col gap-4 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">

                        <p>
                            © 2026 Dev Stack. All rights reserved.
                        </p>

                        <a href="#" className="hover:text-gray-700">
                            Privacy
                        </a>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;