import React, { useState } from 'react';

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const showSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-700 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <button onClick={() => showSection('dashboard')} className="block w-full text-left p-2 hover:bg-blue-800 rounded">
                                Dashboard
                            </button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => showSection('users')} className="block w-full text-left p-2 hover:bg-blue-800 rounded">
                                Users
                            </button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => showSection('investments')} className="block w-full text-left p-2 hover:bg-blue-800 rounded">
                                Investments
                            </button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => showSection('settings')} className="block w-full text-left p-2 hover:bg-blue-800 rounded">
                                Settings
                            </button>
                        </li>
                        <li>
                            <a href="/admin" className="block p-2 bg-red-500 hover:bg-red-600 rounded">Logout</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Dashboard Section */}
                {activeSection === 'dashboard' && (
                    <section id="dashboard" className="section">
                        <h1 className="text-3xl font-bold mb-6">Welcome, Admin</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded shadow-md text-center">
                                <h3 className="text-xl font-bold">Total Users</h3>
                                <p className="text-3xl text-blue-700 mt-2">120</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-md text-center">
                                <h3 className="text-xl font-bold">Total Investments</h3>
                                <p className="text-3xl text-green-700 mt-2">$50,000</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow-md text-center">
                                <h3 className="text-xl font-bold">Pending Approvals</h3>
                                <p className="text-3xl text-yellow-600 mt-2">5</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Users Management Section */}
                {activeSection === 'users' && (
                    <section id="users" className="section">
                        <h2 className="text-2xl font-bold mb-4">User Management</h2>
                        <table className="w-full bg-white rounded shadow-md">
                            <thead>
                                <tr className="bg-blue-700 text-white">
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3">1</td>
                                    <td className="p-3">John Doe</td>
                                    <td className="p-3">john@example.com</td>
                                    <td className="p-3">
                                        <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                )}

                {/* Investments Management Section */}
                {activeSection === 'investments' && (
                    <section id="investments" className="section">
                        <h2 className="text-2xl font-bold mb-4">Investments Management</h2>
                        <table className="w-full bg-white rounded shadow-md">
                            <thead>
                                <tr className="bg-blue-700 text-white">
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Investor</th>
                                    <th className="p-3">Amount</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3">1</td>
                                    <td className="p-3">Jane Smith</td>
                                    <td className="p-3">$5,000</td>
                                    <td className="p-3 text-green-600">Approved</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                )}

                {/* Settings Section */}
                {activeSection === 'settings' && (
                    <section id="settings" className="section">
                        <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
                        <p className="text-gray-700">Settings options will be available here.</p>
                    </section>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;