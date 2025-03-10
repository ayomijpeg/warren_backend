import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        loadInvestmentHistory();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You need to log in first!");
            window.location.href = "/login";
            return;
        }

        const response = await fetch("http://localhost:5000/update-profile", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
            body: JSON.stringify({ name, email, phone })
        });

        const result = await response.json();
        if (response.ok) {
            alert("Profile updated successfully!");
        } else {
            alert("Update failed: " + result.error);
        }
    };

    const loadInvestmentHistory = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch("http://localhost:5000/investments", {
            headers: { "Authorization": `Bearer ${token}` }
        });
        const investments = await response.json();
        setInvestments(investments);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-blue-600 p-4 text-white flex justify-between">
                <h1 className="text-xl font-bold">Warren and Company</h1>
                <a href="/dashboard" className="bg-gray-300 text-black px-3 py-1 rounded">Back to Dashboard</a>
            </nav>
            
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
                
                <div className="bg-white p-6 rounded shadow-md">
                    <form id="profileForm" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className="mt-4">
                            <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 mt-4">Update Profile</button>
                    </form>
                </div>

                <h2 className="text-2xl font-bold mt-6">Investment History</h2>
                <div className="bg-white p-6 rounded shadow-md mt-4">
                    <table className="w-full border-collapse border border-gray-300" id="investmentHistory">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Plan</th>
                                <th className="border border-gray-300 p-2">Amount</th>
                                <th className="border border-gray-300 p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {investments.length === 0 ? (
                                <tr>
                                    <td className="border border-gray-300 p-2">Loading...</td>
                                    <td className="border border-gray-300 p-2">-</td>
                                    <td className="border border-gray-300 p-2">-</td>
                                </tr>
                            ) : (
                                investments.map((inv, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2">{inv.plan}</td>
                                        <td className="border border-gray-300 p-2">${inv.amount}</td>
                                        <td className="border border-gray-300 p-2">{new Date(inv.date).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;