import React, { useEffect, useState } from 'react';

const Confirm = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            const token = localStorage.getItem("adminToken");
            if (!token) {
                alert("Admin login required!");
                window.location.href = "/admin-login";
                return;
            }

            const response = await fetch("http://localhost:5000/pending-payments", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            const payments = await response.json();
            setPayments(payments);
        };

        fetchPayments();
    }, []);

    const confirmPayment = async (paymentId) => {
        const token = localStorage.getItem("adminToken");
        const response = await fetch(`http://localhost:5000/confirm-payment/${paymentId}`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` }
        });
        if (response.ok) {
            alert("Payment confirmed!");
            setPayments(payments.filter(payment => payment.id !== paymentId));
        } else {
            alert("Failed to confirm payment.");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-blue-600 p-4 text-white flex justify-between">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <a href="/dashboard" className="bg-gray-300 text-black px-3 py-1 rounded">Back to Dashboard</a>
            </nav>

            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Pending Payments</h2>

                <div className="bg-white p-6 rounded shadow-md">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">User</th>
                                <th className="border border-gray-300 p-2">Plan</th>
                                <th className="border border-gray-300 p-2">Amount</th>
                                <th className="border border-gray-300 p-2">Payment Method</th>
                                <th className="border border-gray-300 p-2">Transaction ID</th>
                                <th className="border border-gray-300 p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map(payment => (
                                <tr key={payment.id}>
                                    <td className="border p-2">{payment.user}</td>
                                    <td className="border p-2">{payment.plan}</td>
                                    <td className="border p-2">${payment.amount}</td>
                                    <td className="border p-2">{payment.paymentMethod}</td>
                                    <td className="border p-2">{payment.transactionId}</td>
                                    <td className="border p-2">
                                        <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => confirmPayment(payment.id)}>Confirm</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Confirm;