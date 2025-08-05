type EmailTemplateProps = {
    nome: string
    email: string
    telefone: string
    mensagem: string
    assunto: string
  }
  
  type EmailTemplateCadastroNaPlataforma = {
    firstStep: string
    product_or_service: string
    specification: string
    street: string
    neighborhood: string
    cep: string
    email: string
    phone: string
    city: string
    state: string
    cellphone: string
    name: string
    cpf: string
    razao_social: string
    cnpj: string
  }
  
  export function EmailTemplate({
    nome,
    email,
    telefone,
    mensagem,
    assunto,
  }: EmailTemplateProps) {
    return `<div><h2 style="font-size:'20px'">Solicitação de contato via site<h2><p style="font-size:16px;font-weight: normal;"><strong>Nome:</strong> ${nome}</p><p style="font-size:16px;font-weight: normal;"><strong>E-mail:</strong> ${email}</p><p  style="font-size:16px;font-weight: normal;"><strong>Telefone:</strong> ${telefone}</p><p style="font-size:16px;font-weight: normal;"><strong>Assunto:</strong> ${assunto}</p><p  style="font-size:16px;font-weight: normal;"><strong>Mensagem:</strong> ${mensagem}</p><div>`
  }
  
  export function EmailTemplateCadastroNaPlataforma({
    firstStep,
    product_or_service,
    specification,
    street,
    neighborhood,
    cep,
    email,
    phone,
    city,
    state,
    cellphone,
    name,
    cpf,
    razao_social,
    cnpj,
  }: EmailTemplateCadastroNaPlataforma) {
    return `<div><h2 style="font-size:'20px'">Solicitação de contato via site<h2><p style="font-size:16px;font-weight: normal;"><strong>Marca:</strong> TESTE </p><p style="font-size:16px;font-weight: normal;"><strong>Tipo de Pessoa:</strong> ${firstStep}</p><p style="font-size:16px;font-weight: normal;"><strong>Produto/Serviço:</strong> ${product_or_service}</p><p  style="font-size:16px;font-weight: normal;"><strong>Telefone:</strong> ${phone}</p><p style="font-size:16px;font-weight: normal;"><strong>Celular:</strong> ${cellphone}</p><p  style="font-size:16px;font-weight: normal;"><strong>Bairro:</strong> ${neighborhood}<strong></p><p  style="font-size:16px;font-weight: normal;"><strong>Logradouro:</strong> ${street}</p><p  style="font-size:16px;font-weight: normal;"><strong>Cidade:</strong> ${city}</p><p  style="font-size:16px;font-weight: normal;"><strong>UF:</strong> ${state}</p> <p  style="font-size:16px;font-weight: normal;"><strong>CEP:</strong> ${cep}</p><p  style="font-size:16px;font-weight: normal;"><strong>Email:</strong> ${email}</p><p  style="font-size:16px;font-weight: normal;"><strong>Especificação:</strong> ${specification}</p>
    <p style="font-size:16px;font-weight: normal;"><strong>Nome:</strong> ${name}<p>
    <p style="font-size:16px;font-weight: normal;"><strong>CPF:</strong> ${cpf}<p>
    <p style="font-size:16px;font-weight: normal;"><strong>Razão Social:</strong> ${razao_social}<p>
    <p style="font-size:16px;font-weight: normal;"><strong>CNPJ:</strong> ${cnpj}<p><div>`
    
  }
  
  type EmailTemplateHomeProps = {
    name: string
    phone: string
    email: string
    theme: string
  }
  export function EmailTemplateHomeFormulario({
    name,
    phone,
    theme,
    email: email,
  }: EmailTemplateHomeProps) {
    return `<div>
    <h2 style="font-size:'20px'">Solicitação de cadastro na Plataforma Nexxland via site<h2>
      <p style="font-size:16px;font-weight: normal;"><strong>Nome:</strong> ${name}</p>
      <p style="font-size:16px;font-weight: normal;"><strong>E-mail:</strong> ${email}</p>
      <p style="font-size:16px;font-weight: normal;"><strong>Telefone:</strong> ${phone}</p>
      <p style="font-size:16px;font-weight: normal;"><strong>Título:</strong> ${theme}</p>
    <div>`
  }
  