import React, { useState } from 'react';
import { TopHeader, Footer } from '../components/UIComponents';

export const LoginScreen = ({ onLogin }) => {
  const [role, setRole] = useState('gestor'); 

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(role); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopHeader />
      <main className="flex-grow flex items-center justify-center container mx-auto px-6 py-8">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Extractor - Acesso</h2>
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">E-mail</label>
              <select 
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-600"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin (admin@sad.pe.gov.br)</option>
                <option value="gestor">Gestor (gestor@sad.pe.gov.br)</option>
                <option value="cadastro">Cadastro (cadastro@sad.pe.gov.br)</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Senha</label>
              <input 
                type="password" 
                defaultValue="••••••••••"
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-600" 
              />
            </div>
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 text-lg"
              >
                Entrar
              </button>
            </div>
            <p className="text-center text-gray-600">
              Esqueceu a senha? <a href="#" className="text-blue-600">Clique aqui</a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};