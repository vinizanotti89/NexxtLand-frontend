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

    // Para MySQL, não precisamos formatar WhatsApp com padding - usar VARCHAR é mais flexível
    const whatsAppFormatted = WhatsApp.toString().trim();

    console.log('Valores processados (Investidor):', {
        Nome,
        Email,
        WhatsApp: whatsAppFormatted,
        JaInvestiu: jaInvestiuValue,
        IdFaixaInvestimento: parseInt(IdFaixaInvestimento) || 0,
        IdObjetivoInvestidor: parseInt(IdObjetivoInvestidor) || 0,
        QuerFalarEspecialista: querFalarValue
    });

    try {
        const [result] = await pool.execute(`
            INSERT INTO Investidor (
                Nome, Email, WhatsApp, JaInvestiu, 
                IdFaixaInvestimento, IdObjetivoInvestidor, QuerFalarEspecialista
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [
            Nome,
            Email,
            whatsAppFormatted,
            jaInvestiuValue,
            parseInt(IdFaixaInvestimento) || 0,
            parseInt(IdObjetivoInvestidor) || 0,
            querFalarValue
        ]);

        console.log('Query de investidor executada com sucesso:', result);

        return NextResponse.json({
            message: "Investidor cadastrado com sucesso!",
            insertId: result.insertId
        });

    } catch (err) {
        console.error("Erro ao cadastrar investidor:", err);
        return NextResponse.json(
            { error: "Erro ao cadastrar investidor: " + err.message },
            { status: 500 }
        );
    }
}

// Função para lidar com o formulário de corretor
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

    // Para MySQL, não precisamos do padding para CHAR(15)
    const whatsAppFormatted = WhatsApp.toString().trim();

    console.log('Valores processados (Corretor):', {
        TipoAtuacao: tipoAtuacaoValue,
        Nome,
        NomeImobiliaria: NomeImobiliaria || null,
        WhatsApp: whatsAppFormatted,
        Email,
        IdTipoCliente: parseInt(IdTipoCliente) || 0,
        JaVendeuInternacional: jaVendeuValue,
        IdFaixaClientes50k: parseInt(IdFaixaClientes50k) || 0,
        QuerTreinamento: querTreinamentoValue,
        IdCNPJAtivo: parseInt(IdCNPJAtivo) || 0
    });

    try {
        const [result] = await pool.execute(`
            INSERT INTO Corretor (
                TipoAtuacao, Nome, NomeImobiliaria, WhatsApp, Email, 
                IdTipoCliente, JaVendeuInternacional, IdFaixaClientes50k, 
                QuerTreinamento, IdCNPJAtivo, CriadoEm, AtualizadoEm
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
        `, [
            tipoAtuacaoValue,
            Nome,
            NomeImobiliaria || null,
            whatsAppFormatted,
            Email,
            parseInt(IdTipoCliente) || 0,
            jaVendeuValue,
            parseInt(IdFaixaClientes50k) || 0,
            querTreinamentoValue,
            parseInt(IdCNPJAtivo) || 0
        ]);

        console.log('Query de corretor executada com sucesso:', result);

        return NextResponse.json({
            message: "Corretor cadastrado com sucesso!",
            insertId: result.insertId
        });

    } catch (err) {
        console.error("Erro ao cadastrar corretor:", err);
        return NextResponse.json(
            { error: "Erro ao cadastrar corretor: " + err.message },
            { status: 500 }
        );
    }
}