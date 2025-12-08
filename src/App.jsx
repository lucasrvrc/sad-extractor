import React, { useState, useEffect } from 'react';

// --- AJUSTE DE IMPORTAÇÕES (Baseado na sua imagem) ---

// Componentes (pasta components)
import { TopHeader, Footer, Header } from './components/UIComponents';

// Telas (pasta screens)
import { LoginScreen } from './screens/LoginScreen';
import { UploadScreen, EditScreen, ExportScreen } from './screens/ProcessScreens';
import { UserLogScreen, LaudoHistoryScreen, ConfigScreen, IndicatorsScreen } from './screens/DashboardScreens';

// Modais (pasta modals)
import { EditUserModal, ConfirmResendModal, ConfirmValidateModal } from './modals/Modals';

// --- FIM DOS AJUSTES DE IMPORTAÇÃO ---

// --- Dados Iniciais (Mock) ---
const INITIAL_USERS = [
  { id: '1', name: 'Ana Silva', email: 'ana.silva@sad.pe.gov.br', tipo: 'Cadastro', acesso: '18/07/2025', total: '05' },
  { id: '2', name: 'Carlos Souza', email: 'carlos.souza@sad.pe.gov.br', tipo: 'Gestão', acesso: '17/07/2025', total: '10' },
  { id: '3', name: 'Beatriz Costa', email: 'beatriz.costa@sad.pe.gov.br', tipo: 'Admin', acesso: '15/07/2025', total: '02' },
];

export default function App() {
  // --- Estados Globais ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('gestor'); // 'admin', 'gestor', 'cadastro'
  const [currentPage, setCurrentPage] = useState('upload');
  
  // --- Estados de Dados (Usuários) ---
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  // --- Estados dos Modais ---
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showConfirmResendModal, setShowConfirmResendModal] = useState(false);
  const [showConfirmValidateModal, setShowConfirmValidateModal] = useState(false);

  // --- Persistência (LocalStorage) ---
  useEffect(() => {
    const savedUsers = localStorage.getItem('app_users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      setUsers(INITIAL_USERS);
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('app_users', JSON.stringify(users));
    }
  }, [users]);

  // --- Handlers de Autenticação ---
  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    // Redirecionamento inicial baseado no perfil
    if (role === 'admin') setCurrentPage('config');
    else if (role === 'gestor') setCurrentPage('indicators');
    else setCurrentPage('upload');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setCurrentPage('login');
  };

  // --- Handlers CRUD (Usuários) ---
  const handleAddUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Date.now().toString(),
      acesso: new Date().toLocaleDateString('pt-BR'),
      total: '0'
    };
    setUsers([...users, userWithId]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
    closeEditModal();
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Tem certeza que deseja inativar este usuário?')) {
      setUsers(users.filter(u => u.id !== userId));
    }
  };

  // --- Controle de Modais ---
  const openEditModal = (user) => {
    setUserToEdit(user);
    setShowEditUserModal(true);
  };

  const closeEditModal = () => {
    setUserToEdit(null);
    setShowEditUserModal(false);
  };

  const handleValidationConfirm = () => {
    setShowConfirmValidateModal(false);
    setCurrentPage('export');
  };

  // --- Roteamento de Telas ---
  const renderPage = () => {
    switch (currentPage) {
      // Fluxo de Processo
      case 'upload':
        return <UploadScreen setCurrentPage={setCurrentPage} />;
      case 'edit':
        return (
          <EditScreen 
            setCurrentPage={setCurrentPage} 
            onValidate={() => setShowConfirmValidateModal(true)} 
          />
        );
      case 'export':
        return <ExportScreen setCurrentPage={setCurrentPage} />;
      
      // Dashboards e Logs
      case 'logs':
        return <LaudoHistoryScreen />;
      case 'user-logs':
        return <UserLogScreen />;
      case 'indicators':
        return <IndicatorsScreen />;
      
      // Configuração (Admin)
      case 'config':
        return (
          <ConfigScreen 
            users={users}
            onAddUser={handleAddUser}
            onEditUser={openEditModal}
            onDeleteUser={handleDeleteUser}
            onResend={() => setShowConfirmResendModal(true)} 
          />
        );
        
      default:
        return <UploadScreen setCurrentPage={setCurrentPage} />;
    }
  };

  // --- Renderização Principal ---
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        userRole={userRole}
        onLogout={handleLogout}
      />
      
      <main>
        {renderPage()}
      </main>

      {/* --- Modais Globais --- */}
      {showEditUserModal && (
        <EditUserModal 
          show={showEditUserModal} 
          onClose={closeEditModal}
          userToEdit={userToEdit}
          onSave={handleUpdateUser}
        />
      )}

      {showConfirmResendModal && (
        <ConfirmResendModal 
          show={showConfirmResendModal} 
          onClose={() => setShowConfirmResendModal(false)} 
        />
      )}

      {showConfirmValidateModal && (
        <ConfirmValidateModal 
          show={showConfirmValidateModal}
          onClose={() => setShowConfirmValidateModal(false)}
          onConfirm={handleValidationConfirm}
        />
      )}
    </div>
  );
}