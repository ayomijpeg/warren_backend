import React, { useState } from 'react';

const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ firstname, lastname, email, phone, password })
        });

        const data = await response.json();
        if (data.status === "success") {
            localStorage.setItem("token", data.token); // Store JWT token
            window.location.href = "/dashboard"; // Redirect to dashboard
        } else {
            alert("Signup failed: " + (data.message || "Unknown error"));
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <form id="signupForm" className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname" className="block text-sm font-medium">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    
                    <div>
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
                    
                    <div>
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
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
                </form>
                <p className="text-sm text-center mt-4">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a></p>
            </div>
        </div>
    );
};

export default Signup;