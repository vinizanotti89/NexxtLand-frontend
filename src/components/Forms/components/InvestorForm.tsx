"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Button";

export default function InvestorForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    investeImoveis: "",
    objetivo: "",
    investiuExterior: "",
    faixaInvestimento: "",
    estado: "",
    cidade: "",
    origem: "",
  });

  const [objetivos, setObjetivos] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleObjetivosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setObjetivos((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullForm = {
      ...form,
      objetivosSelecionados: objetivos,
    };
    console.log("Form enviado:", fullForm);
    // Aqui você pode integrar com sua API/backend
  };

  return (
    <form className="space-y-8 max-w-2xl mx-auto px-4 py-8" onSubmit={handleSubmit}>
      {/* Texto de abertura */}
      <div className="space-y-3 text-center">
        <h1 className="text-2xl font-bold">
          Descubra Como Investir em Imóveis nos EUA com Baixo Risco e Alta Rentabilidade
        </h1>
        <p className="text-lg">
          Invista em Propriedades nos EUA com Segurança e Alta Rentabilidade.
        </p>
        <p className="text-lg">
          A Nexxland conecta você a oportunidades exclusivas no mercado americano de real estate.
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-xl text-base">
          <li>Renda em dólar, imóveis selecionados e suporte jurídico completo.</li>
        </ul>
        <p className="text-lg font-medium">
          Cadastre-se para conhecer as próximas oportunidades com vaga limitada.
        </p>
      </div>

      <h2 className="text-xl font-bold text-center">Formulário com perguntas</h2>

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

      {/* Email */}
      <div>
        <label className="block font-medium">
          2. E-mail principal <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
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

      {/* Já investe em imóveis nos EUA? */}
      <div>
        <p className="font-medium mb-2">4. Você já investiu em imóveis nos EUA antes?</p>
        <div className="flex gap-6">
          {["Sim", "Não"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="investeImoveis"
                value={option}
                checked={form.investeImoveis === option}
                onChange={handleChange}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Quanto tem disponível */}
      <div>
        <p className="font-medium mb-2">
          5. Quanto você tem disponível para investir nos próximos 3 meses?
        </p>
        <div className="flex flex-col gap-2">
          {["Até US$ 25 mil", "De US$ 25 mil a US$ 100 mil", "Acima de US$ 100 mil"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="faixaInvestimento"
                value={option}
                checked={form.faixaInvestimento === option}
                onChange={handleChange}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Objetivos como investidor - múltipla escolha */}
      <div>
        <p className="font-medium mb-2">
          6. Qual o seu objetivo como investidor? <span className="text-red-500">*</span>
        </p>
        <div className="flex flex-col gap-2">
          {[
            "Renda passiva em dólar",
            "Valorização do patrimônio",
            "Diversificação internacional",
            "Emigrar futuramente",
          ].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={option}
                checked={objetivos.includes(option)}
                onChange={handleObjetivosChange}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferência de imóvel */}
      <div>
        <p className="font-medium mb-2">7. Prefere imóveis para:</p>
        <div className="flex flex-col gap-2">
          {["Aluguel de temporada", "Longo prazo", "Revenda rápida", "Construção", "Ainda não sei"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="objetivo"
                value={option}
                checked={form.objetivo === option}
                onChange={handleChange}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Especialista da Nexxland */}
      <div>
        <p className="font-medium mb-2">8. Deseja falar com um especialista da Nexxland?</p>
        <div className="flex flex-col gap-2">
          {[
            "Sim, quero agendar uma conversa",
            "Quero apenas receber oportunidades por e-mail",
          ].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="investiuExterior"
                value={option}
                checked={form.investiuExterior === option}
                onChange={handleChange}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Estado + Cidade */}
      <div className="flex gap-4">
        <div className="w-1/4">
          <label className="block font-medium">UF</label>
          <input
            name="estado"
            type="text"
            maxLength={2}
            value={form.estado}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2 uppercase"
          />
        </div>
        <div className="flex-1">
          <label className="block font-medium">Cidade</label>
          <input
            name="cidade"
            type="text"
            value={form.cidade}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Origem */}
      <div>
        <label className="block font-medium">Como conheceu este projeto?</label>
        <textarea
          name="origem"
          rows={2}
          value={form.origem}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 resize-none"
        />
      </div>

      {/* Botão */}
      <div className="flex justify-center pt-4">
        <Button type="submit" variant="outlinedGold">
          Quero Receber Oportunidades em Dólar
        </Button>
      </div>

      {/* Aviso final */}
      <p className="text-center text-sm text-gray-600 pt-4">
        📩 Você receberá um acesso exclusivo às oportunidades em pré-lançamento da Nexxland.
      </p>
    </form>
  );
}
