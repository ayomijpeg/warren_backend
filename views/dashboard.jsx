import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        const fetchInvestments = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("You are not logged in!");
                window.location.href = "/admin-login";
                return;
            }

            const response = await fetch("http://localhost:5000/dashboard", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            const data = await response.json();

            if (response.ok) {
                setInvestments(data.investments);
            } else {
                alert("Failed to load investments");
            }
        };

        fetchInvestments();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/admin-login";
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-blue-600 p-4 text-white flex justify-between">
                <h1 className="text-xl font-bold">Warren and Company</h1>
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </nav>
            
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
                <p>Here you can track your investments and account details.</p>

                <div className="bg-white p-6 mt-4 rounded shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Your Investments</h3>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Investment</th>
                                <th className="border p-2">Amount</th>
                                <th className="border p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {investments.map((inv, index) => (
                                <tr key={index}>
                                    <td className="border p-2">{inv.name}</td>
                                    <td className="border p-2">${inv.amount}</td>
                                    <td className="border p-2">{inv.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;