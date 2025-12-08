import React, { useState, useEffect } from 'react';
import { Header } from './components/UIComponents';
import { LoginScreen } from './screens/LoginScreen';
import { UploadScreen, EditScreen, ExportScreen } from './screens/ProcessScreens';
import { UserLogScreen, LaudoHistoryScreen, ConfigScreen, IndicatorsScreen } from './screens/DashboardScreens';
import { EditUserModal, ConfirmResendModal, ConfirmValidateModal } from './modals/Modals';
import { useUserCRUD } from './hooks/useUserCRUD';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('gestor');
  const [currentPage, setCurrentPage] = useState('upload');
  
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showConfirmResendModal, setShowConfirmResendModal] = useState(false);
  const [showConfirmValidateModal, setShowConfirmValidateModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const { users, addUser, updateUser, deleteUser } = useUserCRUD();

  useEffect(() => {
    const savedLogin = localStorage.getItem('app_isLoggedIn');
    const savedRole = localStorage.getItem('app_userRole');
    if (savedLogin === 'true') {
      setIsLoggedIn(true);
      if (savedRole) setUserRole(savedRole);
    }
  }, []);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    localStorage.setItem('app_isLoggedIn', 'true');
    localStorage.setItem('app_userRole', role);
    if (role === 'admin') setCurrentPage('config');
    else if (role === 'gestor') setCurrentPage('indicators');
    else setCurrentPage('upload');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    setCurrentPage('login');
    localStorage.removeItem('app_isLoggedIn');
    localStorage.removeItem('app_userRole');
  };

  const openEditModal = (user) => {
    setUserToEdit(user);
    setShowEditUserModal(true);
  };

  const closeEditModal = () => {
    setUserToEdit(null);
    setShowEditUserModal(false);
  };

  const handleSaveEdit = (user) => {
    updateUser(user);
    closeEditModal();
  };

  const handleValidationConfirm = () => {
    setShowConfirmValidateModal(false);
    setCurrentPage('export');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'upload': return <UploadScreen setCurrentPage={setCurrentPage} />;
      case 'edit': return <EditScreen setCurrentPage={setCurrentPage} onValidate={() => setShowConfirmValidateModal(true)} />;
      case 'export': return <ExportScreen setCurrentPage={setCurrentPage} />;
      case 'logs': return <LaudoHistoryScreen />;
      case 'user-logs': return <UserLogScreen />;
      case 'indicators': return <IndicatorsScreen />;
      case 'config':
        return (
          <ConfigScreen 
            users={users}
            onAddUser={addUser}
            onEditUser={openEditModal}
            onDeleteUser={deleteUser}
            onResend={() => setShowConfirmResendModal(true)} 
          />
        );
      default: return <UploadScreen setCurrentPage={setCurrentPage} />;
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
        onLogout={handleLogout}
      />
      
      <main>
        {renderPage()}
      </main>

      {showEditUserModal && (
        <EditUserModal 
          show={showEditUserModal} 
          onClose={closeEditModal}
          userToEdit={userToEdit}
          onSave={handleSaveEdit}
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