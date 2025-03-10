import React from 'react';

const Invest = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const investmentName = event.target.investmentName.value;

        localStorage.setItem("investmentPlan", investmentName);
        localStorage.setItem("investmentAmount", investmentName.match(/\$(\d+)/)[1]); // Extract amount from selection
        window.location.href = "payment.html";
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-blue-600 p-4 text-white flex justify-between">
                <h1 className="text-xl font-bold">Warren and Company</h1>
                <a href="/dashboard" className="bg-gray-300 text-black px-3 py-1 rounded">Back to Dashboard</a>
            </nav>
            
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Investment Plans</h2>
                
                <div className="bg-white p-6 rounded shadow-md">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Plan</th>
                                <th className="border border-gray-300 p-2">ROI</th>
                                <th className="border border-gray-300 p-2">Duration</th>
                                <th className="border border-gray-300 p-2">Status</th>
                                <th className="border border-gray-300 p-2">Amount ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">Stocks</td>
                                <td className="border border-gray-300 p-2">8% daily</td>
                                <td className="border border-gray-300 p-2">1 Month</td>
                                <td className="border border-gray-300 p-2">Open</td>
                                <td className="border border-gray-300 p-2">$15</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Crypto</td>
                                <td className="border border-gray-300 p-2">8% daily</td>
                                <td className="border border-gray-300 p-2">1 Month</td>
                                <td className="border border-gray-300 p-2">Open</td>
                                <td className="border border-gray-300 p-2">$45</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Real Estate</td>
                                <td className="border border-gray-300 p-2">8% daily</td>
                                <td className="border border-gray-300 p-2">1 Month</td>
                                <td className="border border-gray-300 p-2">Open</td>
                                <td className="border border-gray-300 p-2">$100</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Gold Investment</td>
                                <td className="border border-gray-300 p-2">9% daily</td>
                                <td className="border border-gray-300 p-2">1 Month</td>
                                <td className="border border-gray-300 p-2 text-red-500 font-bold">Locked</td>
                                <td className="border border-gray-300 p-2">$200</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Platinum Fund</td>
                                <td className="border border-gray-300 p-2">10% daily</td>
                                <td className="border border-gray-300 p-2">1 Month</td>
                                <td className="border border-gray-300 p-2 text-red-500 font-bold">Locked</td>
                                <td className="border border-gray-300 p-2">$500</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Diamond Elite</td>
                                <td className="border border-gray-300 p-2">12% daily</td>
                                <td className="border border-gray-300 p-2">1 Month</td>
                                <td className="border border-gray-300 p-2 text-red-500 font-bold">Locked</td>
                                <td className="border border-gray-300 p-2">$1000</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">VIP Executive</td>
                                <td className="border border-gray-300 p-2">13% daily</td>
                                <td className="border border-gray-300 p-2">1 Month</td>
                                <td className="border border-gray-300 p-2 text-red-500 font-bold">Locked</td>
                                <td className="border border-gray-300 p-2">$1500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-6">Make an Investment</h2>
                <form id="investmentForm" className="bg-white p-6 rounded shadow-md mt-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="investmentName" className="block text-sm font-medium">Investment Plan</label>
                        <select id="investmentName" name="investmentName" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                            <option value="Stocks">$15 - Stocks (8% daily)</option>
                            <option value="Crypto">$45 - Crypto (8% daily)</option>
                            <option value="Real Estate">$100 - Real Estate (8% daily)</option>
                            <option value="Gold Investment">$200 - Gold Investment (9% daily) [Locked]</option>
                            <option value="Platinum Fund">$500 - Platinum Fund (10% daily) [Locked]</option>
                            <option value="Diamond Elite">$1000 - Diamond Elite (12% daily) [Locked]</option>
                            <option value="VIP Executive">$1500 - VIP Executive (13% daily) [Locked]</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 mt-4">Invest</button>
                </form>
            </div>
        </div>
    );
};

export default Invest;