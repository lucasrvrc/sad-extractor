import React, { useState } from 'react';
import { Pagination, InfoCard, MiniLineChart, BarChart } from '../components/UIComponents';
import { ChevronsUpDownIcon, SearchIcon, CalendarIcon, TrashIcon } from '../components/icons';

export const UserLogScreen = () => {
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

export const LaudoHistoryScreen = () => {
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

export const ConfigScreen = ({ users, onAddUser, onEditUser, onDeleteUser, onResend }) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newEmail && newRole) {
      onAddUser({ name: newName, email: newEmail, tipo: newRole });
      setNewName('');
      setNewEmail('');
      setNewRole('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Configurações dos usuários</h2>
        <p className="text-gray-600 mb-6">Configurações e cadastros dos usuários no sistema</p>
        
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Novo usuário</h3>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end" onSubmit={handleSubmit}>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input 
                type="text" 
                placeholder="User_001" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white" 
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="email@sad.pe.gov.br" 
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white" 
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Função</label>
              <select 
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-500"
              >
                <option value="">Selecione o cargo</option>
                <option value="Cadastro">Cadastro</option>
                <option value="Gestão">Gestão</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-800">
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
                    <button onClick={() => onDeleteUser(user.id)} className="bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-md hover:bg-red-700">Inativar</button>
                    <button onClick={() => onEditUser(user)} className="bg-yellow-400 text-gray-800 text-xs font-semibold py-1 px-3 rounded-md hover:bg-yellow-500">Editar</button>
                    <button onClick={onResend} className="bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-md hover:bg-blue-700">Reenviar E-mail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <Pagination itemsPerPage={4} totalItems={users.length} onPageChange={() => {}} onItemsPerPageChange={() => {}} />

      </div>
    </div>
  );
};

export const IndicatorsScreen = () => {
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
              <button className="text-sm text-gray-500 hover:text-blue-600">All week</button>
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