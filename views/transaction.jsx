import React, { useEffect, useState } from 'react';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("You need to log in first!");
                window.location.href = "/login";
                return;
            }

            const response = await fetch("http://localhost:5000/transactions", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            const data = await response.json();

            if (response.ok) {
                setTransactions(data.transactions);
            } else {
                alert("Failed to load transactions");
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-blue-600 p-4 text-white flex justify-between">
                <h1 className="text-xl font-bold">Warren and Company</h1>
                <a href="/dashboard" className="bg-gray-300 text-black px-3 py-1 rounded">Back to Dashboard</a>
            </nav>
            
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
                <div className="bg-white p-6 rounded shadow-md">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Date</th>
                                <th className="border p-2">Investment</th>
                                <th className="border p-2">Amount</th>
                                <th className="border p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx, index) => (
                                <tr key={index}>
                                    <td className="border p-2">{new Date(tx.date).toLocaleDateString()}</td>
                                    <td className="border p-2">{tx.investmentName}</td>
                                    <td className="border p-2">${tx.amount}</td>
                                    <td className="border p-2">{tx.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transaction;