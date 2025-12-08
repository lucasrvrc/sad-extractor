import React, { useState } from 'react';
import { Stepper, ConfidenceBar, Pagination } from '../components/UIComponents';
import { UploadIcon, CheckCircleIcon, TrashIcon, AlertCircleIcon, XCircleIcon } from '../components/Icons';

// --- Upload Screen ---
export const UploadScreen = ({ setCurrentPage }) => {
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

// --- Edit Screen ---
export const EditScreen = ({ setCurrentPage, onValidate }) => {
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

// --- Export Screen ---
export const ExportScreen = ({ setCurrentPage }) => {
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