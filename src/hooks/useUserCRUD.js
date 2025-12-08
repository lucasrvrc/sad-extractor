import { useState, useEffect } from 'react';

// Dados iniciais (Mock)
const INITIAL_USERS = [
  { id: '1', name: 'Ana Silva', email: 'ana.silva@sad.pe.gov.br', tipo: 'Cadastro', acesso: '18/07/2025', total: '05' },
  { id: '2', name: 'Carlos Souza', email: 'carlos.souza@sad.pe.gov.br', tipo: 'Gestão', acesso: '17/07/2025', total: '10' },
];

export const useUserCRUD = () => {
  const [users, setUsers] = useState([]);

  // 1. Carregar do LocalStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem('app_users');
    if (saved) {
      setUsers(JSON.parse(saved));
    } else {
      setUsers(INITIAL_USERS);
    }
  }, []);

  // 2. Salvar no LocalStorage sempre que a lista mudar
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('app_users', JSON.stringify(users));
    }
  }, [users]);

  // --- Ações ---

  const addUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: Date.now().toString(),
      acesso: 'Nunca',
      total: '0'
    };
    setUsers([...users, userWithId]);
    alert('Usuário criado com sucesso!');
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
  };

  const deleteUser = (id) => {
    if (window.confirm("Tem certeza que deseja remover este usuário?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  // Retorna os dados e as funções para quem quiser usar
  return {
    users,
    addUser,
    updateUser,
    deleteUser
  };
};