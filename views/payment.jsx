import React, { useEffect, useState } from 'react';

const Payment = () => {
    const [investmentPlan, setInvestmentPlan] = useState('');
    const [investmentAmount, setInvestmentAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('usdt');
    const [transactionId, setTransactionId] = useState('');
    const [cryptoAddress, setCryptoAddress] = useState('');

    useEffect(() => {
        setInvestmentPlan(localStorage.getItem("investmentPlan") || "N/A");
        setInvestmentAmount(localStorage.getItem("investmentAmount") || "0");
        updateCryptoAddress();
    }, []);

    const updateCryptoAddress = () => {
        if (paymentMethod === "usdt") {
            setCryptoAddress("USDT (TRC20) Address: TAbc123xyz456...");
        } else if (paymentMethod === "btc") {
            setCryptoAddress("BTC Address: bc1qxyzabc123...");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to log in first!");
            window.location.href = "/login";
            return;
        }

        const response = await fetch("http://localhost:5000/api/payment/submit-payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ investmentPlan, investmentAmount, paymentMethod, transactionId })
        });

        const result = await response.json();
        if (response.ok) {
            alert("Payment submitted! Awaiting admin verification.");
            window.location.href = "/dashboard";
        } else {
            alert("Payment failed: " + result.error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-blue-600 p-4 text-white flex justify-between">
                <h1 className="text-xl font-bold">Warren and Company</h1>
                <a href="/invest" className="bg-gray-300 text-black px-3 py-1 rounded">Back to Investment</a>
            </nav>

            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Crypto Payment</h2>

                <div className="bg-white p-6 rounded shadow-md">
                    <p className="text-lg"><strong>Investment Plan:</strong> {investmentPlan}</p>
                    <p className="text-lg mt-2"><strong>Amount:</strong> ${investmentAmount}</p>
                </div>

                <h2 className="text-2xl font-bold mt-6">Choose Cryptocurrency</h2>
                <form id="paymentForm" className="bg-white p-6 rounded shadow-md mt-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium">Payment Method</label>
                        <select
                            id="paymentMethod"
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={paymentMethod}
                            onChange={(e) => {
                                setPaymentMethod(e.target.value);
                                updateCryptoAddress();
                            }}
                        >
                            <option value="usdt">USDT (TRC20)</option>
                            <option value="btc">Bitcoin (BTC)</option>
                        </select>
                    </div>

                    <div id="cryptoDetails" className="mt-4 bg-gray-100 p-4 rounded">
                        <p className="text-lg font-bold">Send Payment to:</p>
                        <p id="cryptoAddress" className="text-sm font-mono">{cryptoAddress}</p>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="transactionId" className="block text-sm font-medium">Transaction Hash (TxID)</label>
                        <input
                            type="text"
                            id="transactionId"
                            name="transactionId"
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 mt-4">Submit Payment</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;