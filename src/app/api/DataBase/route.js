import { NextResponse } from 'next/server';
import { connectDB } from './db';

export async function POST(request) {
    let pool;
    try {
        pool = await connectDB();
        
        // Recebe os dados do request
        const body = await request.json();
        console.log('Dados recebidos:', body); // Para debug
        
        const { formType } = body;
        
        // Roteamento baseado no tipo de formulário
        if (formType === 'investor') {
            return await handleInvestorForm(pool, body);
        } else {
            // Formulário de Corretor (padrão existente)
            return await handleBrokerForm(pool, body);
        }
        
    } catch (err) {
        console.error("Erro completo:", err);
        console.error("Stack trace:", err.stack);
        return NextResponse.json(
            { error: "Erro interno do servidor: " + err.message }, 
            { status: 500 }
        );
    }
}

// Função para lidar com o formulário de investidor
async function handleInvestorForm(pool, body) {
    const {
        Nome,
        Email,
        WhatsApp,
        JaInvestiu,
        IdFaixaInvestimento,
        IdObjetivoInvestidor,
        QuerFalarEspecialista
    } = body;

    // Validação básica
    if (!Nome || !Email || !WhatsApp) {
        return NextResponse.json(
            { error: "Campos obrigatórios não preenchidos (Nome, Email, WhatsApp)" }, 
            { status: 400 }
        );
    }

    // Garantir que os valores boolean sejam realmente bit (0/1)
    const jaInvestiuValue = JaInvestiu === 1 || JaInvestiu === true ? 1 : 0;
    const querFalarValue = QuerFalarEspecialista === 1 || QuerFalarEspecialista === true ? 1 : 0;

    // Formatar WhatsApp para CHAR(15) - garantir exatamente 15 caracteres
    let whatsAppFormatted = WhatsApp.toString().trim();
    if (whatsAppFormatted.length > 15) {
        whatsAppFormatted = whatsAppFormatted.substring(0, 15);
    } else if (whatsAppFormatted.length < 15) {
        whatsAppFormatted = whatsAppFormatted.padEnd(15, ' ');
    }

    console.log('Valores processados (Investidor):', {
        Nome,
        Email,
        WhatsApp: `'${whatsAppFormatted}' (${whatsAppFormatted.length} chars)`,
        JaInvestiu: jaInvestiuValue,
        IdFaixaInvestimento: parseInt(IdFaixaInvestimento) || 0,
        IdObjetivoInvestidor: parseInt(IdObjetivoInvestidor) || 0,
        QuerFalarEspecialista: querFalarValue
    });

    try {
        // Importar mssql apenas quando necessário
        const mssql = require('mssql');

        const result = await pool.request()
            .input("Nome", Nome)
            .input("Email", Email)
            .input("WhatsApp", mssql.Char(15), whatsAppFormatted)
            .input("JaInvestiu", jaInvestiuValue)
            .input("IdFaixaInvestimento", parseInt(IdFaixaInvestimento) || 0)
            .input("IdObjetivoInvestidor", parseInt(IdObjetivoInvestidor) || 0)
            .input("QuerFalarEspecialista", querFalarValue)
            .query(`
                INSERT INTO dbo.Investidor (
                  Nome, Email, WhatsApp, JaInvestiu, 
                  IdFaixaInvestimento, IdObjetivoInvestidor, QuerFalarEspecialista
                )
                VALUES (
                  @Nome, @Email, @WhatsApp, @JaInvestiu, 
                  @IdFaixaInvestimento, @IdObjetivoInvestidor, @QuerFalarEspecialista
                )
            `);

        console.log('Query de investidor executada com sucesso:', result);

        return NextResponse.json({ message: "Investidor cadastrado com sucesso!" });
        
    } catch (err) {
        console.error("Erro ao cadastrar investidor:", err);
        return NextResponse.json(
            { error: "Erro ao cadastrar investidor: " + err.message }, 
            { status: 500 }
        );
    }
}

// Função para lidar com o formulário de corretor (código existente)
async function handleBrokerForm(pool, body) {
    const {
        TipoAtuacao,
        Nome,
        NomeImobiliaria,
        WhatsApp,
        Email,
        IdTipoCliente,
        JaVendeuInternacional,
        IdFaixaClientes50k,
        QuerTreinamento,
        IdCNPJAtivo
    } = body;

    // Validação básica
    if (!Nome || !WhatsApp || !Email) {
        return NextResponse.json(
            { error: "Campos obrigatórios não preenchidos" }, 
            { status: 400 }
        );
    }

    // Garantir que os valores boolean sejam realmente boolean ou bit (0/1)
    const tipoAtuacaoValue = TipoAtuacao === 1 || TipoAtuacao === true ? 1 : 0;
    const jaVendeuValue = JaVendeuInternacional === 1 || JaVendeuInternacional === true ? 1 : 0;
    const querTreinamentoValue = QuerTreinamento === 1 || QuerTreinamento === true ? 1 : 0;

    // Formatar WhatsApp para CHAR(15) - garantir exatamente 15 caracteres
    let whatsAppFormatted = WhatsApp.toString().trim();
    if (whatsAppFormatted.length > 15) {
        whatsAppFormatted = whatsAppFormatted.substring(0, 15);
    } else if (whatsAppFormatted.length < 15) {
        whatsAppFormatted = whatsAppFormatted.padEnd(15, ' ');
    }

    console.log('Valores processados (Corretor):', {
        TipoAtuacao: tipoAtuacaoValue,
        Nome,
        NomeImobiliaria: NomeImobiliaria || null,
        WhatsApp: `'${whatsAppFormatted}' (${whatsAppFormatted.length} chars)`,
        Email,
        IdTipoCliente: parseInt(IdTipoCliente) || 0,
        JaVendeuInternacional: jaVendeuValue,
        IdFaixaClientes50k: parseInt(IdFaixaClientes50k) || 0,
        QuerTreinamento: querTreinamentoValue,
        IdCNPJAtivo: parseInt(IdCNPJAtivo) || 0
    });

    try {
        // Importar mssql apenas quando necessário
        const mssql = require('mssql');

        const result = await pool.request()
            .input("TipoAtuacao", tipoAtuacaoValue)
            .input("Nome", Nome)
            .input("NomeImobiliaria", NomeImobiliaria || null)
            .input("WhatsApp", mssql.Char(15), whatsAppFormatted) // Especificar CHAR(15)
            .input("Email", Email)
            .input("IdTipoCliente", parseInt(IdTipoCliente) || 0) 
            .input("JaVendeuInternacional", jaVendeuValue)
            .input("IdFaixaClientes50k", parseInt(IdFaixaClientes50k) || 0) 
            .input("QuerTreinamento", querTreinamentoValue)
            .input("IdCNPJAtivo", parseInt(IdCNPJAtivo) || 0)
            .query(`
                INSERT INTO dbo.Corretor (
                  TipoAtuacao, Nome, NomeImobiliaria, WhatsApp, Email, 
                  IdTipoCliente, JaVendeuInternacional, IdFaixaClientes50k, 
                  QuerTreinamento, IdCNPJAtivo, CriadoEm, AtualizadoEm
                )
                VALUES (
                  @TipoAtuacao, @Nome, @NomeImobiliaria, @WhatsApp, @Email, 
                  @IdTipoCliente, @JaVendeuInternacional, @IdFaixaClientes50k, 
                  @QuerTreinamento, @IdCNPJAtivo, GETDATE(), GETDATE()
                )
            `);

        console.log('Query de corretor executada com sucesso:', result);

        return NextResponse.json({ message: "Corretor cadastrado com sucesso!" });
        
    } catch (err) {
        console.error("Erro ao cadastrar corretor:", err);
        return NextResponse.json(
            { error: "Erro ao cadastrar corretor: " + err.message }, 
            { status: 500 }
        );
    }
}