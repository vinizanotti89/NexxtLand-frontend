"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Button";

export default function BrokerForm() {
  const [form, setForm] = useState({
    atuacao: "",
    nome: "",
    nomeImobiliaria: "",
    telefone: "",
    email: "",
    perfilCliente: "",
    jaVendeuImovelInternacional: "",
    clientesPotenciais: "",
    desejaTreinamento: "",
    cnpj: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Função para mapear valores do form para o formato esperado pelo banco
  const mapFormDataToAPI = (formData: typeof form) => {
    // Mapeamento para TipoAtuacao (bit: 1=independente, 0=vinculado)
    const tipoAtuacao = formData.atuacao === "Corretor(a) independente" ? 1 : 0;
    
    // Mapeamento para IdTipoCliente
    let idTipoCliente = 0;
    switch(formData.perfilCliente) {
      case "Investidores de alto padrão": idTipoCliente = 1; break;
      case "Médio padrão": idTipoCliente = 2; break;
      case "Ambos": idTipoCliente = 3; break;
    }
    
    // Mapeamento para JaVendeuInternacional (bit)
    const jaVendeuInternacional = formData.jaVendeuImovelInternacional === "Sim" ? 1 : 0;
    
    // Mapeamento para IdFaixaClientes50k
    let idFaixaClientes50k = 0;
    switch(formData.clientesPotenciais) {
      case "Nenhum": idFaixaClientes50k = 1; break;
      case "De 1 a 3": idFaixaClientes50k = 2; break;
      case "Mais de 3": idFaixaClientes50k = 3; break;
    }
    
    // Mapeamento para QuerTreinamento (bit)
    const querTreinamento = formData.desejaTreinamento === "Sim" ? 1 : 0;
    
    // Mapeamento para IdCNPJAtivo
    let idCNPJAtivo = 0;
    switch(formData.cnpj) {
      case "Sim": idCNPJAtivo = 1; break;
      case "Não": idCNPJAtivo = 2; break;
      case "Pessoa física (podemos te orientar)": idCNPJAtivo = 3; break;
    }

    return {
      formType: 'broker', // Adicionar identificador para consistência
      TipoAtuacao: tipoAtuacao,
      Nome: formData.nome.trim(),
      NomeImobiliaria: formData.nomeImobiliaria.trim() || null,
      WhatsApp: formData.telefone.replace(/\D/g, ''), // Remove caracteres não numéricos
      Email: formData.email.trim(),
      IdTipoCliente: idTipoCliente,
      JaVendeuInternacional: jaVendeuInternacional,
      IdFaixaClientes50k: idFaixaClientes50k,
      QuerTreinamento: querTreinamento,
      IdCNPJAtivo: idCNPJAtivo
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!form.nome || !form.telefone || !form.email || !form.atuacao) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Mapeia os dados antes de enviar
      const mappedData = mapFormDataToAPI(form);
      
      console.log('Dados sendo enviados (Corretor):', mappedData);
      
      const response = await fetch("/api/DataBase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mappedData)
      });

      if (response.ok) {
        const result = await response.json();
        alert("Corretor cadastrado com sucesso!");
        console.log('Resposta do servidor:', result);
        
        // Reset do form
        setForm({
          atuacao: "",
          nome: "",
          nomeImobiliaria: "",
          telefone: "",
          email: "",
          perfilCliente: "",
          jaVendeuImovelInternacional: "",
          clientesPotenciais: "",
          desejaTreinamento: "",
          cnpj: ""
        });
      } else {
        const errorData = await response.json();
        alert(`Erro ao cadastrar corretor: ${errorData.error || 'Erro desconhecido'}`);
        console.error('Erro do servidor:', errorData);
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro de conexão com o servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6"
    >
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold">Lucre com a Venda em Imóveis nos EUA</h1>
        <p className="text-base">Corretores: Ganhem até <strong>10% de Comissão</strong> com Imóveis nos EUA.</p>
        <p className="text-base">A Nexxland conecta você às melhores oportunidades de venda para seu cliente investidor.</p>
        <p className="text-base">Aumente seu ticket médio, diversifique sua atuação e ganhe em dólar.</p>
        <p className="text-base font-medium">Cadastre-se para ser um parceiro Nexxland.</p>
      </div>
      
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Cadastro de Corretor
      </h2>

      {/* 1 - Forma de atuação */}
      <div>
        <label className="block font-medium mb-1">
          Informe sua forma de atuação no mercado imobiliário: <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="atuacao"
              value="Corretor(a) independente"
              checked={form.atuacao === "Corretor(a) independente"}
              onChange={handleChange}
              className="mr-2"
            />
            Corretor(a) independente
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="atuacao"
              value="Vinculado(a) a uma imobiliária"
              checked={form.atuacao === "Vinculado(a) a uma imobiliária"}
              onChange={handleChange}
              className="mr-2"
            />
            Vinculado(a) a uma imobiliária
          </label>
        </div>
      </div>

      {/* Nome */}
      <div>
        <label className="block font-medium">
          1. Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Nome da imobiliária */}
      <div>
        <label className="block font-medium mb-1">
          2. Nome da imobiliária (se aplicável)
        </label>
        <input
          type="text"
          name="nomeImobiliaria"
          value={form.nomeImobiliaria}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      {/* Telefone */}
      <div>
        <label className="block font-medium">
          3. WhatsApp com DDD <span className="text-red-500">*</span>
        </label>
        <input
          name="telefone"
          type="tel"
          placeholder="(11) 99999-9999"
          value={form.telefone}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium">
          4. E-mail Profissional <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Atua com */}
      <div>
        <label className="block font-medium mb-1">
          5. Você atua com:
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="perfilCliente"
              value="Investidores de alto padrão"
              checked={form.perfilCliente === "Investidores de alto padrão"}
              onChange={handleChange}
              className="mr-2"
            />
            Investidores de alto padrão
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="perfilCliente"
              value="Médio padrão"
              checked={form.perfilCliente === "Médio padrão"}
              onChange={handleChange}
              className="mr-2"
            />
            Médio padrão
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="perfilCliente"
              value="Ambos"
              checked={form.perfilCliente === "Ambos"}
              onChange={handleChange}
              className="mr-2"
            />
            Ambos
          </label>
        </div>
      </div>

      {/* Já vendeu imóveis internacionais */}
      <div>
        <label className="block font-medium mb-1">
          6. Já vendeu imóveis internacionais antes?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="jaVendeuImovelInternacional"
              value="Sim"
              checked={form.jaVendeuImovelInternacional === "Sim"}
              onChange={handleChange}
              className="mr-2"
            />
            Sim
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="jaVendeuImovelInternacional"
              value="Não"
              checked={form.jaVendeuImovelInternacional === "Não"}
              onChange={handleChange}
              className="mr-2"
            />
            Não
          </label>
        </div>
      </div>

      {/* Clientes com potencial */}
      <div>
        <label className="block font-medium mb-1">
          7. Quantos clientes você tem com potencial de investir acima de US$ 50 mil nos próximos 6 meses?
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="clientesPotenciais"
              value="Nenhum"
              checked={form.clientesPotenciais === "Nenhum"}
              onChange={handleChange}
              className="mr-2"
            />
            Nenhum
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="clientesPotenciais"
              value="De 1 a 3"
              checked={form.clientesPotenciais === "De 1 a 3"}
              onChange={handleChange}
              className="mr-2"
            />
            De 1 a 3
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="clientesPotenciais"
              value="Mais de 3"
              checked={form.clientesPotenciais === "Mais de 3"}
              onChange={handleChange}
              className="mr-2"
            />
            Mais de 3
          </label>
        </div>
      </div>

      {/* Deseja treinamentos */}
      <div>
        <label className="block font-medium mb-1">
          8. Gostaria de receber treinamentos e materiais da Nexxland?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="desejaTreinamento"
              value="Sim"
              checked={form.desejaTreinamento === "Sim"}
              onChange={handleChange}
              className="mr-2"
            />
            Sim
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="desejaTreinamento"
              value="Não"
              checked={form.desejaTreinamento === "Não"}
              onChange={handleChange}
              className="mr-2"
            />
            Não
          </label>
        </div>
      </div>

      {/* CNPJ */}
      <div>
        <label className="block font-medium mb-1">
          9. Tem CNPJ ativo para emissão de nota?
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="cnpj"
              value="Sim"
              checked={form.cnpj === "Sim"}
              onChange={handleChange}
              className="mr-2"
            />
            Sim
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="cnpj"
              value="Não"
              checked={form.cnpj === "Não"}
              onChange={handleChange}
              className="mr-2"
            />
            Não
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="cnpj"
              value="Pessoa física (podemos te orientar)"
              checked={form.cnpj === "Pessoa física (podemos te orientar)"}
              onChange={handleChange}
              className="mr-2"
            />
            Pessoa física (podemos te orientar)
          </label>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button 
          type="submit" 
          variant="outlinedGold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Quero Ser Parceiro Nexxland"}
        </Button>
      </div>

      <p className="text-sm text-center text-gray-600 mt-4">
        📩 Após o cadastro, nossa equipe entrará em contato com seu link de parceiro exclusivo e condições de comissionamento.
      </p>
    </form>
  );
}