import React from 'react';
import { XIcon } from '../components/Icons';

export const EditUserModal = ({ show, onClose }) => {
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

export const ConfirmResendModal = ({ show, onClose }) => {
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

export const ConfirmValidateModal = ({ show, onClose, onConfirm }) => {
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