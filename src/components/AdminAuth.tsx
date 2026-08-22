import React, { useState } from 'react';

interface AdminAuthProps {
  onLogin: () => void;
}

export const AdminAuth: React.FC<AdminAuthProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'snhubinternational@gmail.com' && password === 'Kausthu@7') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Admin Login</h2>
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm font-medium">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm text-slate-900 focus:bg-white focus:border-indigo-600 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded shadow-md transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
