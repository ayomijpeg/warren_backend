import React from 'react';

const Index = () => {
    return (
        <div className="bg-gray-100">
            <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <h1 className="text-2xl font-bold">Warren and Company</h1>
                <div>
                    <a href="/login" className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login</a>
                    <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</a>
                </div>
            </nav>

            <header className="text-center py-16 bg-cover bg-center" style={{ backgroundImage: "url('assets/images/hero.jpg')" }}>
                <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
                    <h2 className="text-4xl font-bold text-white">Grow Your Wealth with Smart Investments</h2>
                    <p className="text-gray-300 mt-4">Join thousands of investors who trust Warren and Company for their financial growth.</p>
                    <a href="/signup" className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded text-lg hover:bg-yellow-600">Get Started Today</a>
                </div>
            </header>

            <section className="container mx-auto p-6 text-center">
                <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold">Secure Investments</h4>
                        <p className="text-gray-600 mt-2">Your investments are protected with industry-leading security measures.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold">High Returns</h4>
                        <p className="text-gray-600 mt-2">We provide market-leading returns on your investments.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold">Easy Management</h4>
                        <p className="text-gray-600 mt-2">Track and manage your investments with our intuitive dashboard.</p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">What Our Investors Say</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded shadow-md">
                            <p className="text-gray-700 italic">"Warren and Company has helped me secure my financial future with ease!"</p>
                            <h4 className="font-semibold mt-4">- Sarah J., Investor</h4>
                        </div>
                        <div className="bg-white p-6 rounded shadow-md">
                            <p className="text-gray-700 italic">"I've seen consistent returns, and their customer service is top-notch."</p>
                            <h4 className="font-semibold mt-4">- Michael T., Entrepreneur</h4>
                        </div>
                        <div className="bg-white p-6 rounded shadow-md">
                            <p className="text-gray-700 italic">"A simple, secure, and profitable investment platform. Highly recommended!"</p>
                            <h4 className="font-semibold mt-4">- Lisa K., Business Owner</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto p-6 text-center">
                <h3 className="text-3xl font-bold mb-6">How It Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold">1. Create an Account</h4>
                        <p className="text-gray-600 mt-2">Sign up in minutes and start investing immediately.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold">2. Choose Your Plan</h4>
                        <p className="text-gray-600 mt-2">Select from a variety of investment plans tailored to your needs.</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md">
                        <h4 className="text-lg font-semibold">3. Earn & Grow</h4>
                        <p className="text-gray-600 mt-2">Watch your investment grow with our expert-managed funds.</p>
                    </div>
                </div>
            </section>

            <footer className="bg-blue-600 text-white text-center p-6 mt-10">
                <p>&copy; 2025 Warren and Company. All rights reserved.</p>
                <p className="mt-2">Need help? <a href="contact.html" className="underline">Contact Us</a></p>
            </footer>
        </div>
    );
};

export default Index;