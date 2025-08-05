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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Aqui você pode enviar os dados para API ou serviço de backend
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
          Informe sua forma de atuação no mercado imobiliário:
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="atuacao"
              value="Corretor(a) independente"
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
        />
      </div>

      {/* Nome da imobiliária */}
      <div>
        <label className="block font-medium mb-1">
          2. Nome da imobiliária (se aplicável)</label>
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
          placeholder="(  ) _____-____"
          value={form.telefone}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
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
        />
      </div>

      {/* Atua com */}
      <div>
        <label className="block font-medium mb-1">
          5. Você atua com:</label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="perfilCliente"
              value="Investidores de alto padrão"
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
          6. Já vendeu imóveis internacionais antes?</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="jaVendeuImovelInternacional"
              value="Sim"
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
              onChange={handleChange}
              className="mr-2"
            />
            Não
          </label>
        </div>
      </div>

      {/*Clientes com potencial */}
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
              onChange={handleChange}
              className="mr-2"
            />
            Pessoa física (podemos te orientar)
          </label>
        </div>
      </div>

     <div className="flex justify-center pt-4">
        <Button type="submit" variant="outlinedGold">Quero Ser Parceiro Nexxland</Button>
      </div>

      <p className="text-sm text-center text-gray-600 mt-4">📩 Após o cadastro, nossa equipe entrará em contato com seu link de parceiro exclusivo e condições de comissionamento.</p>
    </form>
  );
}
