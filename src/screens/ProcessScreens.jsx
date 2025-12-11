import React, { useState } from 'react';
// IMPORTAÇÕES DE ICONES REMOVIDAS. TODOS OS ICONES ESTÃO INCLUÍDOS COMO SVGs MOCK ABAIXO.

// --- Dependências Mock e Ícones Nativos SVG (MOCKADOS PELO USUÁRIO) ---

// Ícone de Lixeira (TrashIcon)
const TrashIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M2 6h20"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  </svg>
);

// Ícone de Alerta (AlertCircleIcon)
const AlertCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
  </svg>
);

// Ícone de X (XCircleIcon)
const XCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
  </svg>
);

// Ícone de Check (CheckCircleIcon)
const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
  </svg>
);

// Ícone de Upload (UploadIcon)
const UploadIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
  </svg>
);

// Ícone de Edição (EditIcon)
const EditIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

// Ícone de Seta Esquerda (ArrowLeftIcon)
const ArrowLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
  </svg>
);

// Ícone de Arquivo de Texto (FileTextIcon) - NOVO ÍCONE NECESSÁRIO
const FileTextIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
    </svg>
);

// Ícone de Salvar (SaveIcon) - NOVO ÍCONE NECESSÁRIO
const SaveIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
    </svg>
);

// Ícone de Dólar (DollarSignIcon) - NOVO ÍCONE NECESSÁRIO
const DollarSignIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
);

// Ícone de Casa (HomeIcon) - NOVO ÍCONE NECESSÁRIO
const HomeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
);

// Ícone de Pesquisa (SearchIcon) - NOVO ÍCONE NECESSÁRIO
const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/>
    </svg>
);


// Componente Stepper Mock
const Stepper = ({ currentStep }) => (
  <div className="flex justify-between items-center mb-10 max-w-4xl mx-auto">
    {[1, 2, 3].map((step) => (
      <div key={step} className={`flex flex-col items-center ${step <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step === currentStep ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white font-medium'}`}>
          {step}
        </div>
        <span className="mt-2 text-sm">Passo {step}</span>
      </div>
    ))}
  </div>
);

// Componente ConfidenceBar Mock
const ConfidenceBar = ({ value }) => {
  const color = value < 50 ? 'bg-red-500' : value < 80 ? 'bg-yellow-500' : 'bg-green-500';
  return (
    <div className="w-24 bg-gray-200 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${value}%` }}></div>
    </div>
  );
};

// Componente Pagination Mock
const Pagination = ({ itemsPerPage, totalItems }) => (
  <div className="flex justify-between items-center mt-6 p-4 border-t border-gray-200">
    <span className="text-sm text-gray-600">Mostrando {itemsPerPage} de {totalItems} itens</span>
    <div className="flex space-x-2">
      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Anterior</button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700">1</button>
      <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Próximo</button>
    </div>
  </div>
);

// --- Componente Utilidades ---

/**
 * Componente Botão Customizado
 */
const CustomButton = ({ onClick, children, className = '' }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] ${className}`}
    >
      {children}
    </button>
);

/**
 * Componente de Input de Formulário
 */
const FormInput = ({ label, id, type = 'text', value, onChange, placeholder, icon: Icon, isTextArea = false }) => (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 flex items-center">
        {Icon && <Icon className="w-4 h-4 mr-2 text-indigo-500" />}
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          name={id}
          rows="4"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-y"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
        />
      )}
    </div>
);


// --- NOVO MODAL DE EDIÇÃO DE DETALHES DO LAUDO ---

// Dados simulados do Laudo (relatório) refletindo a estrutura da imagem
const initialDetailData = {
    fileName: 'Laudo_xxx.pdf',
    // Dados sobre endereço
    rua: 'Rua xxxxxxxxxxxxxxxxxxxxxxxx',
    numero: '000',
    bairro: 'XXXXX',
    cidade: 'Recife/PE',
    // Dados financeiros
    areaM2: '120.5',
    valorImovel: 'R$ 350.000,00',
    // Campos extraídos genéricos
    tituloA1: 'XXXXXXX*', // Campo abaixo de Cidade
    tituloA2: 'Não encontrado', // Título abaixo da Área
    tituloA3: 'Não encontrado', // Título abaixo do Valor
    tituloB1: 'Não encontrado', // Categoria XXX / Título 1
    tituloB2: 'Não encontrado', // Categoria XXX / Título 2
    tituloC1: 'Não encontrado', // Categoria XXX / Título 3
    tituloC2: 'Não encontrado', // Categoria XXX / Título 4
};


/**
 * Modal de Edição de Detalhes do Laudo (Tela de Endereço/Financeiro)
 */
const ReportDetailModal = ({ isOpen, onClose, initialItem, onSaveDetails }) => {
    // Usamos um estado interno para gerenciar os dados detalhados que o usuário edita
    const [formData, setFormData] = useState(initialDetailData); // Dados detalhados mock

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Neste ponto, você atualizaria os dados globais ou faria uma chamada de API.
        // Simulamos o salvamento aqui.
        onSaveDetails(initialItem.id, formData);
        onClose();
    };
    
    // Design do modal baseado no layout de 3 colunas da imagem
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="flex justify-between items-center p-5 bg-white border-b shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                <FileTextIcon className="w-6 h-6 text-indigo-600" />
                <span>Detalhes do Arquivo <span className="font-mono text-indigo-600">{initialItem.name}</span></span>
            </h2>
            <CustomButton onClick={onClose} className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 text-sm">
                <ArrowLeftIcon className="w-4 h-4" />
                Voltar
            </CustomButton>
            </div>
            <p className="px-6 pt-4 text-sm text-gray-600">
                Informações que o sistema conseguiu extrair do documento.
            </p>

            {/* Content Body - Layout em colunas */}
            <div className="p-6 space-y-6 overflow-y-auto">
            
            <div className="border border-gray-200 rounded-xl p-4 md:p-6 bg-white shadow-inner">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Coluna 1: Dados de Endereço e Financeiros */}
                <div className="lg:col-span-1 space-y-6 pr-6 lg:border-r border-gray-100">
                    
                    {/* Dados sobre endereço */}
                    <div className="space-y-4">
                    <h3 className="text-sm font-bold text-indigo-600 uppercase mb-2">Dados sobre endereço</h3>
                    
                    <FormInput label="Endereço (Rua)" id="rua" name="rua" value={formData.rua} onChange={handleChange} icon={EditIcon} />
                    <div className="grid grid-cols-2 gap-4">
                        <FormInput label="Nº" id="numero" name="numero" value={formData.numero} onChange={handleChange} icon={EditIcon} />
                        <FormInput label="Bairro" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} icon={EditIcon} />
                    </div>
                    <FormInput label="Cidade/PE" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} icon={EditIcon} />
                    
                    <FormInput label="Título XXXXXXX*" id="tituloA1" name="tituloA1" value={formData.tituloA1} onChange={handleChange} placeholder="Valor editado pelo usuário" icon={EditIcon} />
                    </div>

                    {/* Dados financeiros */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-green-600 uppercase mb-2">Dados financeiros</h3>
                    
                    <FormInput label="Área (m2)" id="areaM2" name="areaM2" value={formData.areaM2} onChange={handleChange} icon={HomeIcon} />
                    <FormInput label="Valor do Imóvel" id="valorImovel" name="valorImovel" value={formData.valorImovel} onChange={handleChange} icon={DollarSignIcon} />
                    
                    <FormInput label="Título (Não encontrado)" id="tituloA2" name="tituloA2" value={formData.tituloA2} onChange={handleChange} placeholder="Não encontrado" icon={SearchIcon} />
                    <FormInput label="Título (Não encontrado)" id="tituloA3" name="tituloA3" value={formData.valorImovel} onChange={handleChange} placeholder="Não encontrado" icon={SearchIcon} />
                    </div>
                    <p className="text-xs text-red-600 italic mt-4">* Campos editáveis</p>
                </div>

                {/* Coluna 2 e 3: Categoria XXX */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Categoria XXX - Bloco Esquerdo */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">Categoria XXX</h3>
                        <FormInput label="Título 1" id="tituloB1" name="tituloB1" value={formData.tituloB1} onChange={handleChange} placeholder="Não encontrado" icon={SearchIcon} />
                        <FormInput label="Título 2" id="tituloB2" name="tituloB2" value={formData.tituloB2} onChange={handleChange} placeholder="Não encontrado" icon={SearchIcon} />
                        <FormInput label="Título 3" id="tituloB3" name="tituloB3" value={"Não encontrado"} onChange={()=>{}} placeholder="Não encontrado" icon={SearchIcon} />
                        <FormInput label="Título 4" id="tituloB4" name="tituloB4" value={"Não encontrado"} onChange={()=>{}} placeholder="Não encontrado" icon={SearchIcon} />
                    </div>
                    
                    {/* Categoria XXX - Bloco Direito */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">Categoria XXX</h3>
                        <FormInput label="Título 5" id="tituloC1" name="tituloC1" value={formData.tituloC1} onChange={handleChange} placeholder="Não encontrado" icon={SearchIcon} />
                        <FormInput label="Título 6" id="tituloC2" name="tituloC2" value={formData.tituloC2} onChange={handleChange} placeholder="Não encontrado" icon={SearchIcon} />
                        <FormInput label="Título 7" id="tituloC3" name="tituloC3" value={"Não encontrado"} onChange={()=>{}} placeholder="Não encontrado" icon={SearchIcon} />
                        <FormInput label="Título 8" id="tituloC4" name="tituloC4" value={"Não encontrado"} onChange={()=>{}} placeholder="Não encontrado" icon={SearchIcon} />
                    </div>
                </div>
                
                </div>
                
            </div>
            </div>

            {/* Footer - Ação de salvar */}
            <div className="p-4 bg-gray-100 border-t flex justify-end">
            <CustomButton 
                onClick={handleSave} 
                className="bg-green-600 text-white hover:bg-green-700"
            >
                <SaveIcon className="w-5 h-5" />
                Salvar Alterações
            </CustomButton>
            </div>
        </div>
        </div>
    );
};

// --- MODAL DE EDIÇÃO SIMPLES (EXISTENTE) ---
const EditModal = ({ item, onClose, onSave }) => {
  // ... CÓDIGO DO SEU MODAL DE EDIÇÃO SIMPLES EXISTENTE
  // Estado para armazenar os dados editáveis
  const [editedData, setEditedData] = useState({
    extracted: item.extracted,
    percent: item.percent,
    confidence: item.confidence,
    action: item.action,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(item.id, editedData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300">
        
        {/* Header do Modal */}
        <div className="px-6 py-4 bg-blue-700 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">Editar Laudo: {item.name}</h3>
          <button onClick={onClose} className="text-white hover:text-blue-200">
            <XCircleIcon size={24} />
          </button>
        </div>

        {/* Formulário de Edição */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status Atual:</label>
            <span className={`inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full ${
                item.status === 'danger' ? 'bg-red-100 text-red-800' :
                item.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
            }`}>
              {item.status === 'danger' ? 'Descartado' : item.status === 'review' ? 'Revisão Necessária' : 'Sucesso'}
            </span>
          </div>

          <div>
            <label htmlFor="extracted" className="block text-sm font-medium text-gray-700 mb-1">Dados Extraídos (Ex: 12/30)</label>
            <input
              type="text"
              id="extracted"
              name="extracted"
              value={editedData.extracted}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="confidence" className="block text-sm font-medium text-gray-700 mb-1">Nível de Confiabilidade (%)</label>
            <input
              type="number"
              id="confidence"
              name="confidence"
              value={editedData.confidence}
              onChange={handleChange}
              min="0"
              max="100"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="action" className="block text-sm font-medium text-gray-700 mb-1">Ação Sugerida</label>
            <select
              id="action"
              name="action"
              value={editedData.action}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 bg-white rounded-lg shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="Revisar Campos">Revisar Campos</option>
              <option value="Prosseguir">Prosseguir</option>
              <option value="Descartado">Descartado</option>
              <option value="Manualmente Corrigido">Manualmente Corrigido</option>
            </select>
          </div>

          {/* Footer do Modal */}
          <div className="flex justify-end pt-4 border-t mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-3 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-150"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-150"
            >
              Salvar Alterações
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};


// --- Edit Screen ---
export const EditScreen = ({ setCurrentPage, onValidate }) => {
  const initialData = [
    { id: 1, name: 'Laudo_xxx.pdf', extracted: '12/30', percent: 40, confidence: 40, action: 'Revisar Campos', status: 'review' },
    { id: 2, name: 'Laudo_yyy.pdf', extracted: '30/30', percent: 100, confidence: 100, action: 'Prosseguir', status: 'success' },
    { id: 3, name: 'Laudo_zzz.pdf', extracted: '21/30', percent: 70, confidence: 70, action: 'Prosseguir', status: 'success' },
    { id: 4, name: 'Laudo_aaa.pdf', extracted: '03/30', percent: 10, confidence: 10, action: 'Descartado', status: 'danger' },
  ];
  
  const [data, setData] = useState(initialData);
  const [editingItemSimple, setEditingItemSimple] = useState(null); // Para modal simples (existente)
  const [editingItemDetail, setEditingItemDetail] = useState(null); // Para o NOVO modal de detalhes
  
  // Função para abrir o NOVO modal de detalhes
  const handleOpenDetailModal = (item) => {
    setEditingItemDetail(item);
  };
    // Função para fechar o NOVO modal de detalhes
    const handleCloseDetailModal = () => {
        setEditingItemDetail(null);
    };

    // Função para salvar os detalhes do novo modal
    const handleSaveDetails = (id, newDetailData) => {
        // Logar os novos dados detalhados. Como é um mock, não alteramos a tabela principal
        console.log(`Detalhes do Laudo ${id} (Tabela Simples) atualizados:`, newDetailData);
        // Se fosse real, você também atualizaria o estado `data` aqui com base nos novos detalhes, 
        // mas para manter a tabela simples funcionando, apenas logamos.
    };

  // Função para salvar as edições (modal simples)
  const handleSaveEditSimple = (id, newValues) => {
    setData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          // Calcula a nova porcentagem (simplificado para fins de mock)
          const [extractedCount, total] = newValues.extracted.split('/').map(Number);
          const newPercent = total ? Math.round((extractedCount / total) * 100) : 0;
          
          // Define o novo status baseado na confiabilidade e ação
          let newStatus = 'review';
          if (newValues.action === 'Descartado') {
            newStatus = 'danger';
          } else if (newPercent >= 100 && newValues.confidence >= 90) {
            newStatus = 'success';
          }
          
          return {
            ...item,
            ...newValues,
            percent: newPercent,
            status: newStatus
          };
        }
        return item;
      })
    );
    setEditingItemSimple(null); // Fecha o modal
  };
  
  // Funções de Status
  const getStatusRowClass = (status) => {
    if (status === 'danger') return 'bg-red-50 border-b';
    return 'bg-white border-b';
  };

  const getStatusIcon = (status) => {
    if (status === 'review') return <AlertCircleIcon className="text-yellow-600" size={18} />;
    if (status === 'success') return <CheckCircleIcon className="text-green-600" size={18} />;
    if (status === 'danger') return <XCircleIcon className="text-red-600" size={18} />;
    return null;
  };

  // Ícone de Lixo (Deletar)
  const handleDelete = (id) => {
    console.log(`Tentativa de deletar item: ${id}`);
    setData(prevData => prevData.filter(item => item.id !== id));
  };


  return (
    <div className="container mx-auto px-6 py-8">
      <Stepper currentStep={2} />
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800">Edição e Revisão dos Laudos</h2>
        <p className="text-gray-600 mb-6">Revise o resumo dos dados extraídos a partir dos laudos. Use o botão **Editar** para ajustar manualmente os campos de extração.</p>
        
        <div className="border rounded-lg overflow-hidden shadow-lg">
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
                <th className="p-4 w-12 text-center"></th> 
                <th className="p-4 w-12 text-center"></th> 
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id} className={getStatusRowClass(item.status) + ' hover:bg-gray-50 transition duration-150'}>
                  <td className="p-4"><input type="checkbox" defaultChecked={item.status === 'success'} /></td>
                  <td className="p-4">{item.id}</td>
                  <td className={`p-4 font-medium ${item.status === 'danger' ? 'text-red-600' : 'text-blue-600'}`}>
                    {item.name}
                    {/* NOVO BOTÃO DE DETALHES - ACIONA O NOVO MODAL */}
                    <button 
                        onClick={() => handleOpenDetailModal(item)} 
                        className="ml-2 text-indigo-500 hover:text-indigo-700 text-xs font-semibold underline"
                        title="Ver e editar detalhes do laudo"
                    >
                        [Detalhes]
                    </button>
                  </td>
                  <td className="p-4">{item.extracted}</td>
                  <td className="p-4">{item.percent}%</td>
                  <td className="p-4"><ConfidenceBar value={item.confidence} /></td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(item.status)}
                      <span className={item.status === 'danger' ? 'text-red-600' : ''}>{item.action}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => setEditingItemSimple(item)} className="text-blue-600 hover:text-blue-800 transition duration-150">
                        <EditIcon size={18} title="Abrir edição simples" />
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button onClick={() => handleDelete(item.id)} className="text-gray-400 hover:text-red-500 transition duration-150">
                      <TrashIcon size={18} title="Excluir laudo" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <Pagination itemsPerPage={4} totalItems={300} onPageChange={() => {}} onItemsPerPagePerPageChange={() => {}} />

        <div className="flex justify-between items-center mt-12 border-t pt-6">
            {/* NOVO BOTÃO DE VOLTAR */}
            <button onClick={() => setCurrentPage('upload')} className="flex items-center space-x-2 text-gray-600 font-semibold py-3 px-6 rounded-lg border border-gray-300 shadow-md hover:bg-gray-100 transition duration-300">
                <ArrowLeftIcon size={20} />
                <span>Voltar ao Upload</span>
            </button>

            {/* BOTÃO DE AVANÇAR */}
            <button onClick={onValidate} className="bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg shadow-xl hover:bg-blue-800 transition duration-300 transform hover:scale-105">
                Finalizar Revisão e Validar Dados
            </button>
        </div>
      </div>
      
      {/* Renderiza o modal simples se houver um item em edição */}
      {editingItemSimple && (
        <EditModal 
          item={editingItemSimple} 
          onClose={() => setEditingItemSimple(null)} 
          onSave={handleSaveEditSimple} 
        />
      )}

      {/* Renderiza o NOVO modal de detalhes se houver um item em edição detalhada */}
      {editingItemDetail && (
          <ReportDetailModal
              isOpen={!!editingItemDetail}
              onClose={handleCloseDetailModal}
              initialItem={editingItemDetail}
              onSaveDetails={handleSaveDetails}
          />
      )}

    </div>
  );
};


// --- Upload Screen (Mantida) ---
export const UploadScreen = ({ setCurrentPage }) => {
  const [files, setFiles] = useState([]);

  const handleAddFiles = () => {
    setFiles([
      { id: 1, name: 'Laudo_xxx.pdf' },
      { id: 2, name: 'Laudo_yyy.pdf' },
      { id: 3, name: 'Laudo_zzz.pdf' },
      { id: 4, name: 'Laudo_aaa.pdf' },
    ]);
  };

  const handleClearFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <Stepper currentStep={1} />
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Upload dos Documentos</h2>
        <p className="text-gray-600 mb-6">Faça Upload de arquivos PDF para extrair automaticamente os dados dos laudos desejados.</p>
        
        <div className="border-2 border-dashed border-blue-400 bg-blue-50 rounded-xl p-16 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-100 transition duration-300">
          <UploadIcon size={48} className="text-blue-500"/>
          <p className="mt-4 text-lg text-gray-700">
            Arraste os arquivos aqui ou <span className="text-blue-600 font-bold hover:text-blue-700 underline" onClick={(e) => { e.stopPropagation(); handleAddFiles(); }}>clique para selecionar</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">Formatos suportados: PDF, DOCx. Máx. 10MB</p>
        </div>

        {files.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Arquivos prontos para processamento ({files.length})</h3>
            <div className="space-y-3">
              {files.map(file => (
                <div key={file.id} className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon size={20} className="text-green-600"/>
                    <span className="text-gray-700 font-medium">{file.name}</span>
                  </div>
                  <button onClick={() => handleClearFile(file.id)} className="text-red-500 text-sm font-medium hover:text-red-700 transition duration-150">
                    <TrashIcon size={18} />
                  </button>
                </div>
              ))}
            </div>
            <div className="text-right mt-8">
              <button onClick={() => setCurrentPage('edit')} className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-blue-800 transition duration-300 transform hover:scale-105">
                Carregar Dados e Iniciar Edição
              </button>
            </div>
          </div>
        )}
        {files.length === 0 && (
          <div className="text-right mt-8">
            <button disabled className="bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg shadow-xl cursor-not-allowed">
              Carregar Dados e Iniciar Edição
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Export Screen ---
export const ExportScreen = ({ setCurrentPage }) => {
  const mockData = [
    { id: 2, name: 'Laudo_yyy.pdf', extracted: '17/17', percent: 100, confidence: 100, action: 'Prosseguir' },
    { id: 3, name: 'Laudo_zzz.pdf', extracted: '12/17', percent: 70, confidence: 70, action: 'Prosseguir' },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <Stepper currentStep={3} />
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800">Exportação dos Laudos Validados</h2>
        <p className="text-gray-600 mb-6">Exporte os dados que foram validados no formato que desejar</p>
        
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 w-12 text-center"><input type="checkbox" defaultChecked /></th>
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
                <tr key={item.id} className="bg-white border-b hover:bg-gray-50 transition duration-150">
                  <td className="p-4 text-center"><input type="checkbox" defaultChecked /></td>
                  <td className="p-4">{item.id}</td>
                  <td className="p-4 font-medium text-blue-600">{item.name}</td>
                  <td className="p-4">{item.extracted}</td>
                  <td className="p-4">{item.percent}%</td>
                  <td className="p-4"><ConfidenceBar value={item.confidence} /></td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircleIcon size={18} className="text-green-600"/>
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
            <select className="border border-gray-300 rounded-lg p-2 text-gray-600 focus:ring-blue-500 focus:border-blue-500">
              <option>Selecionar formato</option>
              <option>CSV</option>
              <option>XLSX</option>
              <option>JSON</option>
            </select>
          </div>
          <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl hover:bg-blue-800 transition duration-300 transform hover:scale-105">
            Baixar Laudos Selecionados
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Componente Principal (App.jsx) ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('upload');
  
  // Função de validação mock (simplesmente avança para export)
  const handleValidate = () => {
    setCurrentPage('export');
  };

  const renderScreen = () => {
    switch (currentPage) {
      case 'upload':
        return <UploadScreen setCurrentPage={setCurrentPage} />;
      case 'edit':
        return <EditScreen setCurrentPage={setCurrentPage} onValidate={handleValidate} />;
      case 'export':
        return <ExportScreen setCurrentPage={setCurrentPage} />;
      default:
        return <UploadScreen setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {renderScreen()}
      <footer className="text-center text-gray-500 text-xs py-4">
        Fluxo de Processamento de Laudos &copy; 2024
      </footer>
    </div>
  );
};

export default App;