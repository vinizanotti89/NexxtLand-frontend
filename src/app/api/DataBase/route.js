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
        } else if (formType === 'broker') {
            return await handleBrokerForm(pool, body);
        } else {
            return NextResponse.json(
                { error: "Tipo de formulário não especificado ou inválido" },
                { status: 400 }
            );
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
        Cidade,
        UF,
        WhatsApp,
        JaInvestiu,
        IdFaixaInvestimento,
        IdObjetivoInvestidor,
        IdPreferenciaImovel,
        QuerFalarEspecialista,
        ComoConheceu,
        CriadoEm,
        AtualizadoEm
    } = body;

    // Validação básica
    if (!Nome || !Email || !WhatsApp) {
        return NextResponse.json(
            { error: "Campos obrigatórios não preenchidos (Nome, Email, WhatsApp)" },
            { status: 400 }
        );
    }

    // Validação de faixa de investimento obrigatória
    if (!IdFaixaInvestimento || IdFaixaInvestimento === 0) {
        return NextResponse.json(
            { error: "Faixa de investimento é obrigatória" },
            { status: 400 }
        );
    }

    // Garantir que os valores boolean sejam realmente bit (0/1)
    const jaInvestiuValue = JaInvestiu === 1 || JaInvestiu === true ? 1 : 0;
    const querFalarValue = QuerFalarEspecialista === 1 || QuerFalarEspecialista === true ? 1 : 0;

    // Formatação do WhatsApp
    const whatsAppFormatted = WhatsApp.toString().trim();

    // Tratamento das datas - converte ISO string para Date ou usa NOW()
    const criadoEm = CriadoEm ? new Date(CriadoEm) : null;
    const atualizadoEm = AtualizadoEm ? new Date(AtualizadoEm) : null;

    console.log('Valores processados (Investidor):', {
        Nome,
        Email,
        Cidade: Cidade || null,
        UF: UF || null,
        WhatsApp: whatsAppFormatted,
        JaInvestiu: jaInvestiuValue,
        IdFaixaInvestimento: parseInt(IdFaixaInvestimento) || 0,
        IdObjetivoInvestidor: parseInt(IdObjetivoInvestidor) || 0,
        IdPreferenciaImovel: parseInt(IdPreferenciaImovel) || 0,
        QuerFalarEspecialista: querFalarValue,
        ComoConheceu: ComoConheceu || null,
        CriadoEm: criadoEm,
        AtualizadoEm: atualizadoEm
    });

    try {
        const [result] = await pool.execute(`
            INSERT INTO Investidor (
                Nome, Email, Cidade, UF, WhatsApp, JaInvestiu, 
                IdFaixaInvestimento, IdObjetivoInvestidor, IdPreferenciaImovel,
                QuerFalarEspecialista, ComoConheceu, CriadoEm, AtualizadoEm
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            Nome,
            Email,
            Cidade || null,
            UF || null,
            whatsAppFormatted,
            jaInvestiuValue,
            parseInt(IdFaixaInvestimento) || 0,
            parseInt(IdObjetivoInvestidor) || 0,
            parseInt(IdPreferenciaImovel) || 0,
            querFalarValue,
            ComoConheceu || null,
            criadoEm || new Date(), // Usa data atual se não fornecida
            atualizadoEm || new Date() // Usa data atual se não fornecida
        ]);

        console.log('✅ Query de investidor executada com sucesso:', result);

        return NextResponse.json({
            success: true,
            message: "Investidor cadastrado com sucesso!",
            insertId: result.insertId
        });

    } catch (err) {
        console.error("❌ Erro ao cadastrar investidor:", err);
        
        // Tratamento de erros específicos
        let errorMessage = "Erro ao cadastrar investidor: " + err.message;
        
        if (err.code === 'ER_DUP_ENTRY') {
            errorMessage = "Este email já está cadastrado";
        } else if (err.code === 'ER_BAD_FIELD_ERROR') {
            errorMessage = "Erro nos campos enviados";
        }
        
        return NextResponse.json(
            { error: errorMessage },
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
        IdCNPJAtivo,
        CriadoEm,
        AtualizadoEm
    } = body;

    // Validação básica
    if (!Nome || !WhatsApp || !Email) {
        return NextResponse.json(
            { error: "Campos obrigatórios não preenchidos (Nome, Email, WhatsApp)" },
            { status: 400 }
        );
    }

    // Garantir que os valores boolean sejam realmente boolean ou bit (0/1)
    const tipoAtuacaoValue = TipoAtuacao === 1 || TipoAtuacao === true ? 1 : 0;
    const jaVendeuValue = JaVendeuInternacional === 1 || JaVendeuInternacional === true ? 1 : 0;
    const querTreinamentoValue = QuerTreinamento === 1 || QuerTreinamento === true ? 1 : 0;

    // Formatação do WhatsApp
    const whatsAppFormatted = WhatsApp.toString().trim();

    // Tratamento das datas - converte ISO string para Date ou usa NOW()
    const criadoEm = CriadoEm ? new Date(CriadoEm) : null;
    const atualizadoEm = AtualizadoEm ? new Date(AtualizadoEm) : null;

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
        IdCNPJAtivo: parseInt(IdCNPJAtivo) || 0,
        CriadoEm: criadoEm,
        AtualizadoEm: atualizadoEm
    });

    try {
        const [result] = await pool.execute(`
            INSERT INTO Corretor (
                TipoAtuacao, Nome, NomeImobiliaria, WhatsApp, Email, 
                IdTipoCliente, JaVendeuInternacional, IdFaixaClientes50k, 
                QuerTreinamento, IdCNPJAtivo, CriadoEm, AtualizadoEm
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            parseInt(IdCNPJAtivo) || 0,
            criadoEm || new Date(), // Usa data atual se não fornecida
            atualizadoEm || new Date() // Usa data atual se não fornecida
        ]);

        console.log('✅ Query de corretor executada com sucesso:', result);

        return NextResponse.json({
            success: true,
            message: "Corretor cadastrado com sucesso!",
            insertId: result.insertId
        });

    } catch (err) {
        console.error("❌ Erro ao cadastrar corretor:", err);
        
        // Tratamento de erros específicos
        let errorMessage = "Erro ao cadastrar corretor: " + err.message;
        
        if (err.code === 'ER_DUP_ENTRY') {
            errorMessage = "Este email já está cadastrado";
        } else if (err.code === 'ER_BAD_FIELD_ERROR') {
            errorMessage = "Erro nos campos enviados";
        }
        
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}

// Método GET opcional para consultar dados
export async function GET(request) {
    try {
        const pool = await connectDB();
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');
        const limit = parseInt(searchParams.get('limit') || '50');
        const offset = parseInt(searchParams.get('offset') || '0');

        let query;
        let countQuery;
        
        if (type === 'investidores') {
            query = `SELECT * FROM Investidor ORDER BY CriadoEm DESC LIMIT ? OFFSET ?`;
            countQuery = `SELECT COUNT(*) as total FROM Investidor`;
        } else if (type === 'corretores') {
            query = `SELECT * FROM Corretor ORDER BY CriadoEm DESC LIMIT ? OFFSET ?`;
            countQuery = `SELECT COUNT(*) as total FROM Corretor`;
        } else {
            return NextResponse.json(
                { error: 'Tipo de consulta inválido. Use: investidores ou corretores' },
                { status: 400 }
            );
        }

        const [data] = await pool.execute(query, [limit, offset]);
        const [countResult] = await pool.execute(countQuery);
        const total = countResult[0].total;

        return NextResponse.json({
            success: true,
            data,
            pagination: {
                total,
                limit,
                offset,
                hasMore: (offset + limit) < total
            }
        });

    } catch (error) {
        console.error('❌ Erro ao buscar dados:', error);
        return NextResponse.json(
            { error: 'Erro ao buscar dados: ' + error.message },
            { status: 500 }
        );
    }
}