import React, { useState } from 'react';

// --- Ícones SVG ---
// Usando SVGs inline para manter em um único arquivo
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

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
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

// --- Componentes Principais ---

// Cabeçalho e Navegação
const Header = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'upload', label: 'Upload de documentos' },
    { id: 'edit', label: 'Editar dados' },
    { id: 'logs', label: 'Histórico de Laudos' },
    { id: 'user-logs', label: 'Histórico de usuários' },
    { id: 'indicators', label: 'Indicadores' },
    { id: 'config', label: 'Configurações' },
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Barra Superior */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Placeholder para o Logo SAD */}
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
            {/* Placeholder para logo Pernambuco */}
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
      
      {/* Barra de Navegação */}
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

// Stepper para o processo de Upload/Edição/Exportação
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

// Tela 1: Upload de Documentos
const UploadScreen = ({ setCurrentPage }) => {
  const [files, setFiles] = useState([]);

  const handleAddFiles = () => {
    // Simula adição de arquivos
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

// Componente de Barra de Confiabilidade
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

// Tela 2: Edição de Dados
const EditScreen = ({ setCurrentPage }) => {
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
        {/* Paginação e Ações */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-500">2 laudos selecionados</span>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Itens por página: 4</span>
            <span className="text-sm text-gray-500">1-4 de 300</span>
            {/* Paginação simples */}
            <div className="flex space-x-1">
              <button className="p-2 text-gray-400">&lt;</button>
              <button className="p-2 text-blue-600 font-medium">1</button>
              <button className="p-2 text-gray-600">2</button>
              <button className="p-2 text-gray-600">3</button>
              <button className="p-2 text-gray-600">&gt;</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button onClick={() => setCurrentPage('export')} className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
            Validar Dados
          </button>
        </div>
      </div>
    </div>
  );
};

// Tela 3: Exportação de Laudos
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
        {/* Paginação e Ações */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-500">2 laudos selecionados</span>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Itens por página: 2</span>
            <span className="text-sm text-gray-500">1-2 de 300</span>
            {/* Paginação simples */}
            <div className="flex space-x-1">
              <button className="p-2 text-gray-400">&lt;</button>
              <button className="p-2 text-blue-600 font-medium">1</button>
              <button className="p-2 text-gray-600">2</button>
              <button className="p-2 text-gray-600">3</button>
              <button className="p-2 text-gray-600">&gt;</button>
            </div>
          </div>
        </div>
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

// Tela: Histórico de Usuários
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

// Tela: Configurações (Gestão de Usuários)
const ConfigScreen = ({ onEdit, onResend }) => {
  const users = [
    { id: 1, name: 'User_01', email: 'user_01@sad.pe.gov.br', role: 'Usuário Administrador' },
    { id: 2, name: 'User_02', email: 'user_02@sad.pe.gov.br', role: 'Usuário Gestor' },
    { id: 3, name: 'User_03', email: 'user_03@sad.pe.gov.br', role: 'Usuário Cadastral' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Configurações</h2>
        <p className="text-gray-600 mb-6">Gestão de usuários do sistema</p>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4">Nome</th>
                <th className="p-4">E-mail</th>
                <th className="p-4">Função</th>
                <th className="p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="bg-white border-b">
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4 flex space-x-4">
                    <button onClick={onEdit} className="text-blue-600 font-medium hover:underline">Editar</button>
                    <button onClick={onResend} className="text-yellow-600 font-medium hover:underline">Reenviar Senha</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Tela Placeholder
const PlaceholderScreen = ({ title }) => (
  <div className="container mx-auto px-6 py-8">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-4">Esta página está em construção.</p>
    </div>
  </div>
);

// --- Modais ---

// Modal: Editar Usuário
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

// Modal: Confirmar Reenvio
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


// --- Componente App Principal ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('upload'); // 'upload', 'edit', 'export', 'user-logs', 'config', etc.
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showConfirmResendModal, setShowConfirmResendModal] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'upload':
        return <UploadScreen setCurrentPage={setCurrentPage} />;
      case 'edit':
        return <EditScreen setCurrentPage={setCurrentPage} />;
      case 'export':
        return <ExportScreen setCurrentPage={setCurrentPage} />;
      case 'user-logs':
        return <UserLogScreen />;
      case 'config':
        return <ConfigScreen 
                  onEdit={() => setShowEditUserModal(true)} 
                  onResend={() => setShowConfirmResendModal(true)} 
                />;
      case 'logs':
        return <PlaceholderScreen title="Histórico de Laudos" />;
      case 'indicators':
        return <PlaceholderScreen title="Indicadores" />;
      default:
        return <UploadScreen setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>

      {/* Gerenciamento de Modais */}
      <EditUserModal 
        show={showEditUserModal} 
        onClose={() => setShowEditUserModal(false)} 
      />
      <ConfirmResendModal 
        show={showConfirmResendModal} 
        onClose={() => setShowConfirmResendModal(false)} 
      />
    </div>
  );
}