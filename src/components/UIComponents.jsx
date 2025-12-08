import React, { useState } from 'react';
import { ChevronsUpDownIcon, SearchIcon, CalendarIcon, TrashIcon } from './icons'; // Seus ícones

// Se você não tiver um arquivo icons.js separado para estes, defina-os aqui ou importe do local correto.
// Vou manter os ícones locais de Header/Card aqui para garantir que funcione:

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
);
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
);
const ArrowDownIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
);

export const TopHeader = () => (
  <div className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
          SAD
        </div>
        <div>
          <h1 className="text-2xl font-bold text-blue-800">SAD Extractor</h1>
          <p className="text-sm text-gray-600">Sistema de Extração de dados imobiliários</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <img src="/polilogo.png" alt="Logo Poli" className="h-12 object-contain" />
        <div className="h-10 w-px bg-gray-300"></div>
        <img src="/sadpe_logo.png" alt="Logo SAD PE" className="h-12 object-contain" />
      </div>
    </div>
  </div>
);

export const Header = ({ currentPage, setCurrentPage, userRole, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allNavItems = [
    { id: 'upload', label: 'Upload de documentos', roles: ['admin', 'cadastro', 'gestor'] },
    { id: 'edit', label: 'Editar dados', roles: ['admin', 'cadastro', 'gestor'] },
    { id: 'logs', label: 'Histórico de Laudos', roles: ['admin', 'cadastro', 'gestor'] },
    { id: 'user-logs', label: 'Histórico de usuários', roles: ['admin', 'gestor'] },
    { id: 'indicators', label: 'Indicadores', roles: ['admin', 'gestor'] },
    { id: 'config', label: 'Configurações', roles: ['admin'] },
  ];

  const navItems = allNavItems.filter(item => item.roles.includes(userRole));

  return (
    <header className="bg-white shadow-md relative z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
            SAD
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-800">SAD Extractor</h1>
            <p className="text-sm text-gray-600">Sistema de Extração de dados imobiliários</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 mr-4">
             <img src="/polilogo.png" alt="Logo Poli" className="h-10 object-contain" />
            <div className="h-8 w-px bg-gray-300"></div>
            <img src="/sadpe_logo.png" alt="Logo SAD PE" className="h-10 object-contain" />
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-3 pl-4 border-l border-gray-200 focus:outline-none hover:bg-gray-50 p-2 rounded-lg transition"
            >
              <div className="text-right hidden md:block">
                <p className="text-sm text-gray-700 font-medium">Usuário Logado</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200">
                U
              </div>
              <ChevronsUpDownIcon />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100 z-50">
                <div className="px-4 py-2 border-b border-gray-100 md:hidden">
                  <p className="text-sm font-medium text-gray-800">Usuário Logado</p>
                  <p className="text-xs text-gray-500">{userRole}</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                  <span>Sair do Sistema</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 flex items-center overflow-x-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`py-4 px-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                currentPage === item.id
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export const Footer = () => (
  <footer className="w-full bg-blue-800 p-4 text-center text-white">
    ©Todos os direitos reservados à Secretaria de Administração de Pernambuco - 2025
  </footer>
);

// --- Componentes Auxiliares ---
export const Stepper = ({ currentStep }) => {
  const steps = [ { id: 1, label: 'Upload' }, { id: 2, label: 'Edição' }, { id: 3, label: 'Exportação' } ];
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.id <= currentStep ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {step.id}
              </div>
              <span className={`mt-2 text-sm ${step.id <= currentStep ? 'text-green-600' : 'text-gray-500'}`}>{step.label}</span>
            </div>
            {index < steps.length - 1 && (<div className={`flex-auto h-1 ${step.id < currentStep ? 'bg-green-600' : 'bg-gray-300'}`} />)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const ConfidenceBar = ({ value }) => {
  let color = 'bg-green-500';
  if (value < 40) color = 'bg-red-500';
  else if (value < 80) color = 'bg-yellow-500';
  return (
    <div className="w-24 h-4 bg-gray-200 rounded-full overflow-hidden">
      <div className={`${color} h-4`} style={{ width: `${value}%` }}></div>
    </div>
  );
};

export const Pagination = ({ itemsPerPage, totalItems, onPageChange, onItemsPerPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <span className="text-sm text-gray-500">Visualizando dados</span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Itens por página:</span>
          <select value={itemsPerPage} onChange={(e) => onItemsPerPageChange(e.target.value)} className="border border-gray-300 rounded-lg p-2 text-sm">
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="10">10</option>
          </select>
        </div>
        <span className="text-sm text-gray-500">{`1-${itemsPerPage} de ${totalItems}`}</span>
        <div className="flex space-x-1">
          <button className="p-2 text-gray-400 hover:text-blue-600">&lt;</button>
          <button className="p-2 text-blue-600 font-medium">1</button>
          <button className="p-2 text-gray-600 hover:text-blue-600">2</button>
          <button className="p-2 text-gray-600 hover:text-blue-600">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export const InfoCard = ({ title, value, change, changeType, daily, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <InfoIcon />
    </div>
    <p className="text-3xl font-bold text-gray-800 mb-2">{value}</p>
    <div className="flex items-center space-x-2 text-xs mb-4">
      {changeType === 'up' && <ArrowUpIcon />}
      {changeType === 'down' && <ArrowDownIcon />}
      <span className={changeType === 'up' ? 'text-green-500' : 'text-red-500'}>{change}</span>
      <span className="text-gray-400">WoW Change 12%</span>
    </div>
    {children}
    <p className="text-xs text-gray-400 mt-4">{daily}</p>
  </div>
);

export const MiniLineChart = ({ data, color }) => (
  <svg viewBox="0 0 100 30" className="w-full h-10"><path d={data} stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const BarChart = () => {
  const data = [
    { label: 'Jan', value: 780 }, { label: 'Fev', value: 1050 }, { label: 'Mar', value: 850 }, { label: 'Abr', value: 420 },
    { label: 'Mai', value: 550 }, { label: 'Jun', value: 400 }, { label: 'Jul', value: 580 }, { label: 'Ago', value: 410 },
    { label: 'Set', value: 880 }, { label: 'Out', value: 820 }, { label: 'Nov', value: 1100 }, { label: 'Dez', value: 950 },
  ];
  const maxValue = 1200;
  return (
    <div className="w-full h-64 flex items-end justify-between space-x-2 pt-4 pr-4">
      {data.map(item => (
        <div key={item.label} className="flex-1 flex flex-col items-center">
          <div className="w-full bg-blue-500 hover:bg-blue-700 rounded-t-lg" style={{ height: `${(item.value / maxValue) * 100}%` }} title={`${item.label}: ${item.value}`}></div>
          <span className="text-xs text-gray-500 mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};