import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Users from './Users';
import Investments from './Investments';
import Settings from './Settings';
import AdminLogin from './AdminLogin';
import Confirm from './confirm';
import Index from './index';
import Invest from './invest';
import Login from './login';
import Payment from './payment';
import Profile from './profile';
import Signup from './signup';
import Transaction from './transaction';

const App = () => {
    const [activeSection, setActiveSection] = useState('index');

    const renderSection = () => {
        switch (activeSection) {
            case 'index':
                return <Index />;
            case 'dashboard':
                return <Dashboard />;
            case 'users':
                return <Users />;
            case 'investments':
                return <Investments />;
            case 'settings':
                return <Settings />;
            case 'login':
                return <AdminLogin />;
            case 'confirm':
                return <Confirm />;
            case 'invest':
                return <Invest />;
            case 'payment':
                return <Payment />;
            case 'profile':
                return <Profile />;
            case 'signup':
                return <Signup />;
            case 'transaction':
                return <Transaction />;
            default:
                return <Index />;
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar setActiveSection={setActiveSection} />
            <main className="flex-1 p-6">
                {renderSection()}
            </main>
        </div>
    );
};

export default App;