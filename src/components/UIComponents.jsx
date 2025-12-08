import React from 'react';

// --- Ícones Locais para UIComponents ---
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const ArrowDownIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

// --- Cabeçalho Simples (Login) ---
export const TopHeader = () => (
  <div className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
          SAD
        </div>
        <div>
          <h1 className="text-2xl font-bold text-blue-800">SAD Extractor</h1>
          <p className="text-sm text-gray-600">Sistema de Extração de dados imobiliários</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-right">
          <h3 className="text-sm font-medium text-gray-700">Secretaria de Administração</h3>
          <div className="flex items-center justify-end space-x-2">
            <span className="text-xs font-bold text-blue-800">GOVERNO DE</span>
            <span className="text-lg font-bold text-yellow-500">PERNAMBUCO</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Rodapé ---
export const Footer = () => (
  <footer className="w-full bg-blue-800 p-4 text-center text-white">
    ©Todos os direitos reservados à Secretaria de Administração de Pernambuco - 2025
  </footer>
);

// --- Cabeçalho com Navegação ---
export const Header = ({ currentPage, setCurrentPage, userRole }) => {
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
    <header className="bg-white shadow-md">
      {/* Reutiliza o TopHeader visualmente mas mantendo a estrutura */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
            SAD
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-800">SAD Extractor</h1>
            <p className="text-sm text-gray-600">Sistema de Extração de dados imobiliários</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <h3 className="text-sm font-medium text-gray-700">Secretaria de Administração</h3>
            <div className="flex items-center justify-end space-x-2">
              <span className="text-xs font-bold text-blue-800">GOVERNO DE</span>
              <span className="text-lg font-bold text-yellow-500">PERNAMBUCO</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-700">Olá, <span className="font-medium">Nome do usuário</span></span>
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
              TT
            </div>
          </div>
        </div>
      </div>
      
      {/* Navegação */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 flex items-center">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`py-4 px-4 text-sm font-medium ${
                currentPage === item.id
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-600 hover:text-blue-700'
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

// --- Stepper ---
export const Stepper = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Upload' },
    { id: 2, label: 'Edição' },
    { id: 3, label: 'Exportação' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.id <= currentStep ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step.id}
              </div>
              <span className={`mt-2 text-sm ${step.id <= currentStep ? 'text-green-600' : 'text-gray-500'}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-auto h-1 ${
                  step.id < currentStep ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// --- Barra de Confiabilidade ---
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

// --- Paginação ---
export const Pagination = ({ itemsPerPage, totalItems, onPageChange, onItemsPerPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <span className="text-sm text-gray-500">2 laudos selecionados</span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Itens por página:</span>
          <select 
            value={itemsPerPage} 
            onChange={(e) => onItemsPerPageChange(e.target.value)} 
            className="border border-gray-300 rounded-lg p-2 text-sm"
          >
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
          <button className="p-2 text-gray-600 hover:text-blue-600">3</button>
          <button className="p-2 text-gray-600 hover:text-blue-600">&gt;</button>
        </div>
      </div>
    </div>
  );
};

// --- Cards e Gráficos ---
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
  <svg viewBox="0 0 100 30" className="w-full h-10">
    <path
      d={data}
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BarChart = () => {
  const data = [
    { label: '1月', value: 780 },
    { label: '2月', value: 1050 },
    { label: '3月', value: 850 },
    { label: '4月', value: 420 },
    { label: '5月', value: 550 },
    { label: '6月', value: 400 },
    { label: '7月', value: 580 },
    { label: '8月', value: 410 },
    { label: '9月', value: 880 },
    { label: '10月', value: 820 },
    { label: '11月', value: 1100 },
    { label: '12月', value: 950 },
  ];
  const maxValue = 1200;

  return (
    <div className="w-full h-64 flex items-end justify-between space-x-2 pt-4 pr-4">
      {data.map(item => (
        <div key={item.label} className="flex-1 flex flex-col items-center">
          <div 
            className="w-full bg-blue-500 hover:bg-blue-700 rounded-t-lg"
            style={{ height: `${(item.value / maxValue) * 100}%` }}
            title={`${item.label}: ${item.value}`}
          ></div>
          <span className="text-xs text-gray-500 mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};