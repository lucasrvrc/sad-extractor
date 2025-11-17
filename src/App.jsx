import React, { useState } from 'react';

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 cursor-pointer hover:text-red-800">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronsUpDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 absolute right-3 top-1/2 -translate-y-1/2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

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

const TopHeader = () => {
  {/* --- CORREÇÃO DE IMAGEM --- */}
  {/* Removida a lógica 'new URL' que causou o aviso. */}
  {/* Agora, as imagens serão carregadas a partir da pasta 'public'. */}
  {/* Veja as instruções no final. */}
  {/* const sadLogoUrl = new URL('./assets/sadpe logo.png', import.meta.url).href; */}
  {/* const poliLogoUrl = new URL('./assets/polilogo.png', import.meta.url).href; */}

  return (
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
        
        <div className="flex items-center space-x-4">
          <img src="/sadpe logo.png" alt="Logo Secretaria de Administração PE" className="h-12" />
          <img src="/polilogo.png" alt="Logo POLI" className="h-12" />
        </div>

      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="w-full bg-blue-800 p-4 text-center text-white">
    ©Todos os direitos reservados à Secretaria de Administração de Pernambuco - 2025
  </footer>
);

const Header = ({ currentPage, setCurrentPage, userRole }) => {
  const allNavItems = [
    { id: 'upload', label: 'Upload de documentos', roles: ['admin', 'cadastro', 'gestor'] },
    { id: 'edit', label: 'Editar dados', roles: ['admin', 'cadastro', 'gestor'] },
    { id: 'logs', label: 'Histórico de Laudos', roles: ['admin', 'cadastro', 'gestor'] },
    { id: 'user-logs', label: 'Histórico de usuários', roles: ['admin', 'gestor'] },
    { id: 'indicators', label: 'Indicadores', roles: ['admin', 'gestor'] },
    { id: 'config', label: 'Configurações', roles: ['admin'] },
  ];

  const navItems = allNavItems.filter(item => item.roles.includes(userRole));
  
  {/* --- CORREÇÃO DE IMAGEM --- */}
  {/* Removida a lógica 'new URL'. */}
  {/* const sadLogoUrl = new URL('./assets/sadpe logo.png', import.meta.url).href; */}
  {/* const poliLogoUrl = new URL('./assets/polilogo.png', import.meta.url).href; */}

  return (
    <header className="bg-white shadow-md">
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

        <div className="flex items-center space-x-4">
          <img src="/sadpe logo.png" alt="Logo Secretaria de Administração PE" className="h-12" />
          <img src="/polilogo.png" alt="Logo POLI" className="h-12" />
        </div>
      </div>
      
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>
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

          <div className="flex items-center space-x-3">
            <span className="text-gray-700">Olá, <span className="font-medium">Nome do usuário</span></span>
            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">
              TT
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Stepper = ({ currentStep }) => {
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

const ConfidenceBar = ({ value }) => {
  let color = 'bg-green-500';
  if (value < 40) color = 'bg-red-500';
  else if (value < 80) color = 'bg-yellow-500';
  
  return (
    <div className="w-24 h-4 bg-gray-200 rounded-full overflow-hidden">
      <div className={`${color} h-4`} style={{ width: `${value}%` }}></div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, onPageChange, onItemsPerPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = 1; 

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

const MiniLineChart = ({ data, color }) => (
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

const BarChart = () => {
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

const LoginScreen = ({ onLogin }) => {
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

const UploadScreen = ({ setCurrentPage }) => {
  const [files, setFiles] = useState([]);

  const handleAddFiles = () => {
    setFiles([
      { id: 1, name: 'Laudo_xxx.pdf' },
      { id: 2, name: 'Laudo_xxx.pdf' },
      { id: 3, name: 'Laudo_xxx.pdf' },
      { id: 4, name: 'Laudo_xxx.pdf' },
    ]);
  };

  const handleClearFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <Stepper currentStep={1} />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800">Upload dos documentos</h2>
        <p className="text-gray-600 mb-6">Faça Upload de arquivos PDF para extrair automaticamente os dados dos laudos desejados.</p>
        
        <div className="border-2 border-dashed border-blue-400 bg-blue-50 rounded-lg p-16 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100">
          <UploadIcon />
          <p className="mt-4 text-lg text-gray-700">
            Arraste os arquivos aqui ou <span className="text-blue-600 font-medium" onClick={(e) => { e.stopPropagation(); handleAddFiles(); }}>clique para selecionar</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">Formatos suportados: PDF, DOCx</p>
        </div>

        {files.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Nomes dos arquivos</h3>
            <div className="space-y-3">
              {files.map(file => (
                <div key={file.id} className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon />
                    <span className="text-gray-700">{file.name}</span>
                  </div>
                  <button onClick={() => handleClearFile(file.id)} className="text-blue-600 text-sm font-medium hover:underline">
                    Limpar
                  </button>
                </div>
              ))}
            </div>
            <div className="text-right mt-8">
              <button onClick={() => setCurrentPage('edit')} className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
                Carregar Dados
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EditScreen = ({ setCurrentPage, onValidate }) => {
  const mockData = [
    { id: 1, name: 'Laudo_xxx.pdf', extracted: '12/30', percent: 40, confidence: 40, action: 'Revisar Campos', status: 'review' },
    { id: 2, name: 'Laudo_xxx.pdf', extracted: '30/30', percent: 100, confidence: 100, action: 'Prosseguir', status: 'success' },
    { id: 3, name: 'Laudo_xxx.pdf', extracted: '21/30', percent: 70, confidence: 70, action: 'Prosseguir', status: 'success' },
    { id: 4, name: 'Laudo_xxx.pdf', extracted: '03/30', percent: 10, confidence: 10, action: 'Descartado', status: 'danger' },
  ];
  
  const getStatusRowClass = (status) => {
    if (status === 'danger') return 'bg-red-50 border-b';
    return 'bg-white border-b';
  };

  const getStatusIcon = (status) => {
    if (status === 'review') return <AlertCircleIcon />;
    if (status === 'success') return <CheckCircleIcon />;
    if (status === 'danger') return <XCircleIcon />;
    return null;
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <Stepper currentStep={2} />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-xl font-semibold text-gray-800">Edição dos dados extraídos</h2>
        <p className="text-gray-600 mb-6">Revise o resumo dos dados extraídos a partir dos laudos</p>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 w-12"><input type="checkbox" /></th>
                <th className="p-4">ID</th>
                <th className="p-4">Nome do arquivo</th>
                <th className="p-4">Dados extraídos</th>
                <th className="p-4">%</th>
                <th className="p-4">Confiabilidade</th>
                <th className="p-4">Ação recomendada</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {mockData.map(item => (
                <tr key={item.id} className={getStatusRowClass(item.status)}>
                  <td className="p-4"><input type="checkbox" defaultChecked={item.status === 'success'} /></td>
                  <td className="p-4">{item.id}</td>
                  <td className={`p-4 font-medium ${item.status === 'danger' ? 'text-red-600' : 'text-blue-600'}`}>{item.name}</td>
                  <td className="p-4">{item.extracted}</td>
                  <td className="p-4">{item.percent}%</td>
                  <td className="p-4"><ConfidenceBar value={item.confidence} /></td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(item.status)}
                      <span className={item.status === 'danger' ? 'text-red-600' : ''}>{item.action}</span>
                    </div>
                  </td>
                  <td className="p-4"><TrashIcon /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <Pagination itemsPerPage={4} totalItems={300} onPageChange={() => {}} onItemsPerPageChange={() => {}} />

        <div className="text-center mt-8">
          <button onClick={onValidate} className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
            Validar Dados
          </button>
        </div>
      </div>
    </div>
  );
};

const ExportScreen = ({ setCurrentPage }) => {
  const mockData = [
    { id: 2, name: 'Laudo_xxx.pdf', extracted: '17/17', percent: 100, confidence: 100, action: 'Prosseguir' },
    { id: 3, name: 'Laudo_xxx.pdf', extracted: '12/17', percent: 70, confidence: 70, action: 'Prosseguir' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <Stepper currentStep={3} />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-xl font-semibold text-gray-800">Exportação dos Laudos validados</h2>
        <p className="text-gray-600 mb-6">Exporte os dados que foram validados no formato que desejar</p>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 w-12"><input type="checkbox" defaultChecked /></th>
                <th className="p-4">ID</th>
                <th className="p-4">Nome do arquivo</th>
                <th className="p-4">Dados extraídos</th>
                <th className="p-4">%</th>
                <th className="p-4">Confiabilidade</th>
                <th className="p-4">Ação recomendada</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map(item => (
                <tr key={item.id} className="bg-white border-b">
                  <td className="p-4"><input type="checkbox" defaultChecked /></td>
                  <td className="p-4">{item.id}</td>
                  <td className="p-4 font-medium text-blue-600">{item.name}</td>
                  <td className="p-4">{item.extracted}</td>
                  <td className="p-4">{item.percent}%</td>
                  <td className="p-4"><ConfidenceBar value={item.confidence} /></td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon />
                      <span>{item.action}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <Pagination itemsPerPage={2} totalItems={300} onPageChange={() => {}} onItemsPerPageChange={() => {}} />

        <div className="flex justify-between items-center mt-12 border-t pt-6">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Opções para exportação dos laudos:</span>
            <select className="border border-gray-300 rounded-lg p-2 text-gray-600">
              <option>Selecionar formato</option>
              <option>CSV</option>
              <option>XLSX</option>
              <option>JSON</option>
            </select>
          </div>
          <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
            Baixar laudos
          </button>
        </div>
      </div>
    </div>
  );
};

const UserLogScreen = () => {
  const logData = [
    { user: 'User_01', action: 'Editou laudo', laudo: 'LA 000 SAD/XXX', date: '18/07/2025' },
    { user: 'User_02', action: 'Extraiu novo laudo', laudo: 'LA 000 SAD/XXX', date: '17/07/2025' },
    { user: 'User_03', action: 'Excluiu laudo', laudo: 'LA 000 SAD/XXX', date: '18/07/2025' },
    { user: 'User_02', action: 'Editou laudo', laudo: 'LA 000 SAD/XXX', date: '17/07/2025' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Histórico dos usuários</h2>
        <p className="text-gray-600 mb-6">Log das ações dos usuários ativos</p>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4">
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span>Usuário</span>
                    <ChevronsUpDownIcon />
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span>Ação</span>
                    <ChevronsUpDownIcon />
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span>Nome do laudo</span>
                    <ChevronsUpDownIcon />
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span>Data da modificação</span>
                    <ChevronsUpDownIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {logData.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="p-4 font-medium">{item.user}</td>
                  <td className="p-4">{item.action}</td>
                  <td className="p-4">{item.laudo}</td>
                  <td className="p-4">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const LaudoHistoryScreen = () => {
  const mockData = [
    { id: 'LA 000 SAD/XXX', endereco: 'Rua XXXX XXXX', coordS: "0°00'00.0\"S", coordW: "0°00'00.0\"W", estado: 'red', valor: 'R$ x.xxx.xxx,xx', data: 'XX/XX/2025' },
    { id: 'LA 000 SAD/XXX', endereco: 'Rua XXXX XXXX', coordS: "0°00'00.0\"S", coordW: "0°00'00.0\"W", estado: 'light-red', valor: 'R$ x.xxx.xxx,xx', data: 'XX/XX/2025' },
    { id: 'LA 000 SAD/XXX', endereco: 'Rua XXXX XXXX', coordS: "0°00'00.0\"S", coordW: "0°00'00.0\"W", estado: 'yellow', valor: 'R$ x.xxx.xxx,xx', data: 'XX/XX/2025' },
    { id: 'LA 000 SAD/XXX', endereco: 'Rua XXXX XXXX', coordS: "0°00'00.0\"S", coordW: "0°00'00.0\"W", estado: 'light-blue', valor: 'R$ x.xxx.xxx,xx', data: 'XX/XX/2025' },
  ];

  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'red': return 'bg-red-500';
      case 'light-red': return 'bg-red-200';
      case 'yellow': return 'bg-yellow-300';
      case 'light-blue': return 'bg-blue-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Histórico de Laudos</h2>
        <p className="text-gray-600 mb-6">Visualização de todos os laudos que foram extraídos ao longo do tempo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">N° do documento</label>
            <div className="relative">
              <input type="text" placeholder="Pesquisar" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" />
              <SearchIcon />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
            <div className="relative">
              <input type="text" placeholder="Pesquisar" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" />
              <SearchIcon />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Coordenadas</label>
            <div className="relative">
              <input type="text" placeholder="Pesquisar" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" />
              <SearchIcon />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data da Extração</label>
            <div className="relative">
              <input type="text" placeholder="00/00/0000" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" />
              <CalendarIcon />
            </div>
          </div>
        </div>
        <div className="text-right mb-8">
          <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800">
            Pesquisar
          </button>
        </div>

        <h3 className="text-lg font-semibold text-gray-700 mb-4">Visualização dos dados que foram extraídos</h3>
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 w-12"><input type="checkbox" defaultChecked /></th>
                <th className="p-4">N° do documento</th>
                <th className="p-4">Endereço</th>
                <th className="p-4">Coordenada geográfica (S)</th>
                <th className="p-4">Coordenada geográfica (W)</th>
                <th className="p-4">Estado de Conservação</th>
                <th className="p-4">Valor do Imóvel</th>
                <th className="p-4">Data da Extração</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="p-4"><input type="checkbox" defaultChecked={index !== 1} /></td>
                  <td className="p-4 font-medium text-blue-600">{item.id}</td>
                  <td className="p-4">{item.endereco}</td>
                  <td className="p-4">{item.coordS}</td>
                  <td className="p-4">{item.coordW}</td>
                  <td className="p-4">
                    <div className={`w-24 h-4 rounded-full ${getEstadoColor(item.estado)}`}></div>
                  </td>
                  <td className="p-4">{item.valor}</td>
                  <td className="p-4">{item.data}</td>
                  <td className="p-4"><TrashIcon /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <Pagination itemsPerPage={4} totalItems={300} onPageChange={() => {}} onItemsPerPageChange={() => {}} />
        
        <div className="flex justify-between items-center mt-12 border-t pt-6">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Opções para exportação dos laudos:</span>
            <select className="border border-gray-300 rounded-lg p-2 text-gray-600">
              <option>Selecionar formato</option>
              <option>CSV</option>
              <option>XLSX</option>
              <option>JSON</option>
            </select>
          </div>
          <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800">
            Baixar laudos
          </button>
        </div>
      </div>
    </div>
  );
};

const ConfigScreen = ({ onEdit, onResend }) => {
  const users = [
    { id: '04', name: 'Nome e sobrenome', email: 'email@sad.pe.gov.br', tipo: 'Cadastro', acesso: '10/07/2025', total: '05' },
    { id: '03', name: 'Nome e sobrenome', email: 'email@sad.pe.gov.br', tipo: 'Gestão', acesso: '17/07/2025', total: '10' },
    { id: '02', name: 'Nome e sobrenome', email: 'email@sad.pe.gov.br', tipo: 'Cadastro', acesso: '15/07/2025', total: '02' },
    { id: '01', name: 'Nome e sobrenome', email: 'email@sad.pe.gov.br', tipo: 'Cadastro', acesso: '18/07/2025', total: '10' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Configurações dos usuários</h2>
        <p className="text-gray-600 mb-6">Configurações e cadastros dos usuários no sistema</p>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Novo usuário</h3>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input type="text" placeholder="User_001" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="email@sad.pe.gov.br" className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Função</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                <option>Selecione o cargo</option>
                <option>Cadastro</option>
                <option>Gestão</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <button className="w-full bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800">
                Criar
              </button>
            </div>
          </form>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nome</th>
                <th className="p-4">E-mail</th>
                <th className="p-4">Tipo</th>
                <th className="p-4">Último acesso</th>
                <th className="p-4">Total de acessos</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="bg-white border-b">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.tipo}</td>
                  <td className="p-4">{user.acesso}</td>
                  <td className="p-4">{user.total}</td>
                  <td className="p-4 flex space-x-2">
                    <button className="bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-md hover:bg-red-700">Inativar</button>
                    <button onClick={onEdit} className="bg-yellow-400 text-gray-800 text-xs font-semibold py-1 px-3 rounded-md hover:bg-yellow-500">Editar</button>
                    <button onClick={onResend} className="bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-md hover:bg-blue-700">Reenviar E-mail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <Pagination itemsPerPage={4} totalItems={300} onPageChange={() => {}} onItemsPerPageChange={() => {}} />

      </div>
    </div>
  );
};

const InfoCard = ({ title, value, change, changeType, daily, children }) => (
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

const IndicatorsScreen = () => {
  const [activeTab, setActiveTab] = useState('sales'); 
  const salesRanking = [
    { name: 'Gongzhuan No.1 shop', value: '323,234' },
    { name: 'Gongzhuan No.2 shop', value: '323,234' },
    { name: 'Gongzhuan No.3 shop', value: '323,234' },
    { name: 'Gongzhuan No.4 shop', value: '323,234' },
    { name: 'Gongzhuan No.5 shop', value: '323,234' },
    { name: 'Gongzhuan No.6 shop', value: '323,234' },
    { name: 'Gongzhuan No.7 shop', value: '323,234' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Painel de Indicadores</h2>
      <p className="text-gray-600 mb-8">Principais metricas e acompanhamentos sobre os dados extraídos dos laudos</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <InfoCard 
          title="Total Sales" 
          value="¥ 126,560" 
          change="12%" 
          changeType="up" 
          daily="Daily Sales: ¥ 12,423"
        />
        <InfoCard 
          title="Visits" 
          value="8,846" 
          change="12%" 
          changeType="down" 
          daily="Daily Visits: 1,234"
        >
          <MiniLineChart data="M0 20 Q 20 5, 40 15 Q 60 30, 80 10 Q 90 5, 100 20" color="#8B5CF6" />
        </InfoCard>
        <InfoCard 
          title="Payments" 
          value="6,560" 
          change="12%" 
          changeType="down" 
          daily="Conversion Rate: 60%"
        >
          <div className="flex items-end h-10 space-x-1">
            <div className="w-2 bg-blue-500" style={{height: '40%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '60%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '30%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '80%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '50%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '70%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '40%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '90%'}}></div>
            <div className="w-2 bg-blue-500" style={{height: '60%'}}></div>
          </div>
        </InfoCard>
        <InfoCard 
          title="Operational Effect" 
          value="78%" 
          change="12%" 
          changeType="up" 
          daily="DoD Change"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button 
              className={`text-lg font-semibold ${activeTab === 'sales' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('sales')}
            >
              Sales
            </button>
            <button 
              className={`text-lg font-semibold ${activeTab === 'visits' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('visits')}
            >
              Visits
            </button>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex space-x-2">
              <button className="text-sm text-gray-500 hover:text-blue-600">All day</button>
              <button className="text-sm text-gray-500 hover:text-blue-6D00">All week</button>
              <button className="text-sm text-gray-500 hover:text-blue-600">All month</button>
              <button className="text-sm text-blue-600 font-medium">All year</button>
            </div>
            <div className="relative">
              <input type="text" placeholder="Start date - End date" className="w-64 p-2 border border-gray-300 rounded-lg text-sm" />
              <CalendarIcon />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h4 className="text-md font-semibold text-gray-700 mb-4">Stores Sales Trend</h4>
            <div className="relative w-full h-80">
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400" style={{height: 'calc(100% - 1.5rem)'}}>
                <span>1200</span>
                <span>1000</span>
                <span>800</span>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>
              <div className="pl-8 h-full">
                <BarChart />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h4 className="text-md font-semibold text-gray-700 mb-4">Sales Ranking</h4>
            <div className="space-y-4">
              {salesRanking.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span 
                      className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
                        index < 3 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlaceholderScreen = ({ title }) => (
  <div className="container mx-auto px-6 py-8">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-4">Esta página está em construção.</p>
    </div>
  </div>
);

const EditUserModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">Editar Usuário</h2>
        <div className="border-b-2 border-blue-700 w-24 mx-auto mb-8"></div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Nome</label>
            <input 
              type="text" 
              defaultValue="User_xxx"
              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-600" 
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Senha</label>
            <input 
              type="text" 
              readOnly
              defaultValue="User_xxx@sad.pe.gov.br"
              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed" 
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Função</label>
            <select className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-600 appearance-none">
              <option>Selecione o cargo</option>
              <option>Usuário Cadastral</option>
              <option>Usuário Gestor</option>
              <option>Usuário Administrador</option>
            </select>
          </div>
          
          <div className="pt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="w-full bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 text-lg"
            >
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ConfirmResendModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden">
        <div className="bg-blue-700 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Confirmar Ação</h2>
          <button onClick={onClose}><XIcon /></button>
        </div>
        <div className="p-8">
          <p className="text-xl text-gray-800 text-center mb-4">
            Tem certeza que deseja reenviar o e-mail para este usuário?
          </p>
          <p className="text-lg text-red-600 text-center mb-8">
            Isso irá gerar uma nova senha temporária e invalidar a senha atual.
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={onClose}
              className="bg-gray-400 text-white font-semibold py-3 px-10 rounded-lg hover:bg-gray-500 transition duration-300 text-lg"
            >
              Cancelar
            </button>
            <button 
              onClick={onClose}
              className="bg-red-600 text-white font-semibold py-3 px-10 rounded-lg hover:bg-red-700 transition duration-300 text-lg"
            >
              Sim, Reenviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfirmValidateModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden">
        <div className="bg-blue-700 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Confirmar Ação</h2>
          <button onClick={onClose}><XIcon /></button>
        </div>
        <div className="p-8">
          <p className="text-xl text-gray-800 text-center mb-4">
            Tem certeza que deseja validar os dados dos laudos?
          </p>
          <p className="text-lg text-red-600 text-center mb-8">
            Uma vez validado não será possível editar o laudo
          </p>
          <div className="flex justify-center">
            <button 
              onClick={onConfirm}
              className="bg-blue-700 text-white font-semibold py-3 px-16 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 text-lg"
            >
              Validar Dados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userRole, setUserRole] = useState('gestor'); 
  const [currentPage, setCurrentPage] = useState('upload'); 
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showConfirmResendModal, setShowConfirmResendModal] = useState(false);
  const [showConfirmValidateModal, setShowConfirmValidateModal] = useState(false);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    if (role === 'admin') {
      setCurrentPage('config');
    } else if (role === 'gestor') {
      setCurrentPage('indicators'); 
    } else {
      setCurrentPage('upload');
    }
  };

  const handleValidationConfirm = () => {
    setShowConfirmValidateModal(false);
    setCurrentPage('export');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'upload':
        return <UploadScreen setCurrentPage={setCurrentPage} />;
      case 'edit':
        return <EditScreen 
                  setCurrentPage={setCurrentPage} 
                  onValidate={() => setShowConfirmValidateModal(true)} 
                />;
      case 'export':
        return <ExportScreen setCurrentPage={setCurrentPage} />;
      case 'logs':
        return <LaudoHistoryScreen />;
      case 'user-logs':
        return <UserLogScreen />;
      case 'config':
        return <ConfigScreen 
                  onEdit={() => setShowEditUserModal(true)} 
                  onResend={() => setShowConfirmResendModal(true)} 
                />;
      case 'indicators':
        return <IndicatorsScreen />; 
      default:
        if(userRole === 'gestor') {
          setCurrentPage('indicators');
          return <IndicatorsScreen />;
        }
        return <UploadScreen setCurrentPage={setCurrentPage} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        userRole={userRole} 
      />
      <main>
        {renderPage()}
      </main>

      <EditUserModal 
        show={showEditUserModal} 
        onClose={() => setShowEditUserModal(false)} 
      />
      <ConfirmResendModal 
        show={showConfirmResendModal} 
        onClose={() => setShowConfirmResendModal(false)} 
      />
      <ConfirmValidateModal 
        show={showConfirmValidateModal}
        onClose={() => setShowConfirmValidateModal(false)}
        onConfirm={handleValidationConfirm}
      />
    </div>
  );
}