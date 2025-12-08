import React, { useState } from 'react';
import { Pagination, InfoCard, MiniLineChart } from '../components/UIComponents';
import { ChevronsUpDownIcon, SearchIcon, CalendarIcon, TrashIcon } from '../components/icons';

// IMPORTAÇÃO DOS WIDGETS SEPARADOS
import { RealEstateChart, rankingMunicipios } from '../components/DashboardWidgets';

// --- User Log Screen ---
export const UserLogScreen = () => {
  // Mock atualizado com tema real
  const logData = [
    { user: 'Ana Silva', action: 'Validou Extração', laudo: 'LA 2025/001-Recife', date: '18/07/2025 14:30' },
    { user: 'Carlos Souza', action: 'Upload em Lote', laudo: 'Lote_Olinda_01.pdf', date: '18/07/2025 10:15' },
    { user: 'Sistema', action: 'Erro na leitura OCR', laudo: 'LA 2025/099-Caruaru', date: '18/07/2025 09:00' },
    { user: 'Beatriz Costa', action: 'Exportou Relatório', laudo: 'Relatorio_Mensal.xlsx', date: '17/07/2025 18:00' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Histórico de Auditoria</h2>
        <p className="text-gray-600 mb-6">Log das ações dos usuários ativos</p>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4"><div className="flex items-center space-x-1"><span>Usuário</span><ChevronsUpDownIcon /></div></th>
                <th className="p-4"><div className="flex items-center space-x-1"><span>Ação</span><ChevronsUpDownIcon /></div></th>
                <th className="p-4"><div className="flex items-center space-x-1"><span>Alvo/Documento</span><ChevronsUpDownIcon /></div></th>
                <th className="p-4"><div className="flex items-center space-x-1"><span>Data</span><ChevronsUpDownIcon /></div></th>
              </tr>
            </thead>
            <tbody>
              {logData.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-blue-800">{item.user}</td>
                  <td className="p-4">{item.action}</td>
                  <td className="p-4 text-gray-500">{item.laudo}</td>
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

// --- Laudo History Screen ---
export const LaudoHistoryScreen = () => {
  const mockData = [
    { id: 'LA 102/2025', endereco: 'Av. Boa Viagem, 1000 - Recife', coordS: "-8.123", coordW: "-34.900", estado: 'Validado', valor: 'R$ 1.250.000,00', data: '18/07/2025' },
    { id: 'LA 103/2025', endereco: 'Rua do Sol, 45 - Olinda', coordS: "-8.001", coordW: "-34.850", estado: 'Pendente', valor: 'R$ 450.000,00', data: '18/07/2025' },
    { id: 'LA 104/2025', endereco: 'Rodovia BR-101, Km 20 - Paulista', coordS: "-7.950", coordW: "-34.900", estado: 'Revisão', valor: 'R$ 3.000.000,00', data: '17/07/2025' },
    { id: 'LA 105/2025', endereco: 'Centro, Rua 10 - Caruaru', coordS: "-8.280", coordW: "-35.970", estado: 'Validado', valor: 'R$ 850.000,00', data: '17/07/2025' },
  ];

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case 'Validado': return <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Validado</span>;
      case 'Pendente': return <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">Pendente</span>;
      case 'Revisão': return <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">Revisão</span>;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Histórico de Laudos</h2>
        <p className="text-gray-600 mb-6">Visualização de todos os laudos que foram extraídos.</p>
        
        {/* Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">N° do documento</label>
            <div className="relative"><input type="text" placeholder="Pesquisar" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" /><SearchIcon /></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
            <div className="relative"><input type="text" placeholder="Pesquisar" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" /><SearchIcon /></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Coordenadas</label>
            <div className="relative"><input type="text" placeholder="Pesquisar" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" /><SearchIcon /></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data da Extração</label>
            <div className="relative"><input type="text" placeholder="00/00/0000" className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-lg" /><CalendarIcon /></div>
          </div>
        </div>
        <div className="text-right mb-8">
          <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800">Pesquisar</button>
        </div>

        {/* Tabela */}
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 w-12"><input type="checkbox" defaultChecked /></th>
                <th className="p-4">N° do documento</th>
                <th className="p-4">Endereço</th>
                <th className="p-4">Coord (S)</th>
                <th className="p-4">Coord (W)</th>
                <th className="p-4">Status</th>
                <th className="p-4">Valor</th>
                <th className="p-4">Data</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4"><input type="checkbox" defaultChecked={index !== 1} /></td>
                  <td className="p-4 font-medium text-blue-600">{item.id}</td>
                  <td className="p-4">{item.endereco}</td>
                  <td className="p-4">{item.coordS}</td>
                  <td className="p-4">{item.coordW}</td>
                  <td className="p-4">{getEstadoBadge(item.estado)}</td>
                  <td className="p-4 font-semibold">{item.valor}</td>
                  <td className="p-4">{item.data}</td>
                  <td className="p-4 cursor-pointer text-gray-400 hover:text-red-600"><TrashIcon /></td>
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

// --- Config Screen (CRUD) ---
export const ConfigScreen = ({ users, onAddUser, onEditUser, onDeleteUser, onResend }) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newEmail && newRole) {
      onAddUser({ name: newName, email: newEmail, tipo: newRole });
      setNewName(''); setNewEmail(''); setNewRole('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Gerenciamento de Usuários</h2>
        <p className="text-gray-600 mb-6">Controle de acesso ao SAD Extractor</p>
        
        <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-bold text-blue-800 mb-4">Cadastrar Novo Usuário</h3>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end" onSubmit={handleSubmit}>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: Maria Silva" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500" placeholder="@sad.pe.gov.br" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nível de Acesso</label>
              <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Selecione...</option>
                <option value="Cadastro">Cadastro</option>
                <option value="Gestão">Gestão</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800 transition">Adicionar</button>
            </div>
          </form>
        </div>

        <div className="border rounded-lg overflow-hidden shadow-sm">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 border-b font-semibold text-gray-700">
              <tr>
                <th className="p-4">Nome</th>
                <th className="p-4">E-mail</th>
                <th className="p-4">Perfil</th>
                <th className="p-4">Último Acesso</th>
                <th className="p-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan="5" className="p-6 text-center text-gray-500">Nenhum usuário encontrado.</td></tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">{user.name}</td>
                    <td className="p-4 text-gray-500">{user.email}</td>
                    <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${user.tipo === 'Admin' ? 'bg-purple-100 text-purple-700' : user.tipo === 'Gestão' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                            {user.tipo}
                        </span>
                    </td>
                    <td className="p-4 text-gray-500">{user.acesso}</td>
                    <td className="p-4 flex justify-center space-x-2">
                      <button onClick={() => onEditUser(user)} className="text-yellow-600 hover:text-yellow-800 font-medium text-xs border border-yellow-200 bg-yellow-50 px-3 py-1 rounded">Editar</button>
                      <button onClick={() => onDeleteUser(user.id)} className="text-red-600 hover:text-red-800 font-medium text-xs border border-red-200 bg-red-50 px-3 py-1 rounded">Excluir</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination itemsPerPage={4} totalItems={users.length} onPageChange={() => {}} onItemsPerPageChange={() => {}} />
      </div>
    </div>
  );
};

// --- Indicators Screen (MODIFICADA PARA IMPORTAR WIDGETS) ---
export const IndicatorsScreen = () => {
  const [activeTab, setActiveTab] = useState('volume'); // 'volume' ou 'valor'

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-2xl font-semibold text-gray-800">Painel de Indicadores</h2>
            <p className="text-gray-600">Visão geral da extração de dados imobiliários (SAD-PE)</p>
        </div>
        <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm border">
            <CalendarIcon />
            <span className="text-sm font-medium text-gray-600">Ano Fiscal: 2025</span>
        </div>
      </div>

      {/* Cards de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <InfoCard title="Total de Laudos" value="4.562" change="15%" changeType="up" daily="Hoje: +42 laudos" />
        <InfoCard title="Valor Avaliado" value="R$ 845 Mi" change="8%" changeType="up" daily="Média: R$ 185k/imóvel">
          <MiniLineChart data="M0 25 Q 25 10, 50 20 Q 75 5, 100 15" color="#059669" />
        </InfoCard>
        <InfoCard title="Taxa OCR" value="98.2%" change="2%" changeType="up" daily="Falhas: 12 laudos">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div className="bg-green-600 h-2.5 rounded-full" style={{width: '98%'}}></div>
          </div>
        </InfoCard>
        <InfoCard title="Economia" value="1.200h" change="Auto vs Manual" changeType="up" daily="~40h esta semana" />
      </div>

      {/* Seção Principal de Gráficos */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-4">
          <div className="flex space-x-6">
            <button className={`text-lg font-semibold pb-1 transition-colors ${activeTab === 'volume' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-400 hover:text-gray-600'}`} onClick={() => setActiveTab('volume')}>
              Volume de Extração
            </button>
            <button className={`text-lg font-semibold pb-1 transition-colors ${activeTab === 'valor' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-400 hover:text-gray-600'}`} onClick={() => setActiveTab('valor')}>
              Valores Totais (R$)
            </button>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-wide px-3 py-1 bg-gray-100 rounded">Dados em Tempo Real</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gráfico de Barras IMPORTADO */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-6">
                {activeTab === 'volume' ? 'Laudos processados por mês' : 'Montante avaliado por mês (Milhões)'}
            </h4>
            <div className="relative w-full h-80">
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 font-mono" style={{height: 'calc(100% - 1.5rem)'}}>
                <span>MAX</span><span>75%</span><span>50%</span><span>25%</span><span>0</span>
              </div>
              <div className="pl-10 h-full">
                <RealEstateChart type={activeTab} />
              </div>
            </div>
          </div>

          {/* Ranking Lateral IMPORTADO */}
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-6">Top Municípios (Vol)</h4>
            <div className="space-y-4">
              {rankingMunicipios.map((item, index) => (
                <div key={index} className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center space-x-3">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shadow-sm ${index < 3 ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 border'}`}>
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700 font-medium group-hover:text-blue-700 transition">{item.name}</span>
                  </div>
                  <span className="text-sm text-gray-900 font-bold bg-white px-2 py-1 rounded border shadow-sm">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-4 border-t text-center">
                <button className="text-sm text-blue-600 font-semibold hover:underline">Ver ranking completo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};