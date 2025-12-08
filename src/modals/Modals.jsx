import React, { useState, useEffect } from 'react';
import { XIcon } from '../components/icons';

export const EditUserModal = ({ show, onClose, userToEdit, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // Este useEffect é CRUCIAL: Preenche os dados quando o usuário muda
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setRole(userToEdit.tipo);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      onSave({ 
        ...userToEdit, // Mantém o ID e outros dados
        name, 
        email, 
        tipo: role 
      });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-blue-800 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Editar Usuário</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <XIcon />
          </button>
        </div>
        
        <form className="p-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Função</label>
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Cadastro">Cadastro</option>
              <option value="Gestão">Gestão</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          
          <div className="pt-4 flex space-x-3">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="flex-1 bg-blue-700 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const ConfirmResendModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Confirmar Ação</h2>
          <button onClick={onClose}><XIcon /></button>
        </div>
        <div className="p-8 text-center">
          <p className="text-lg text-gray-800 mb-2">Reenviar e-mail de acesso?</p>
          <p className="text-sm text-gray-500 mb-6">Isso invalidará a senha atual do usuário.</p>
          <div className="flex justify-center space-x-4">
            <button onClick={onClose} className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300">Cancelar</button>
            <button onClick={onClose} className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConfirmValidateModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-green-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Validar Laudos</h2>
          <button onClick={onClose}><XIcon /></button>
        </div>
        <div className="p-8 text-center">
          <p className="text-lg text-gray-800 mb-2">Confirmar validação dos dados?</p>
          <p className="text-sm text-gray-500 mb-6">Esta ação não pode ser desfeita.</p>
          <div className="flex justify-center space-x-4">
            <button onClick={onClose} className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300">Voltar</button>
            <button onClick={onConfirm} className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700">Validar</button>
          </div>
        </div>
      </div>
    </div>
  );
};