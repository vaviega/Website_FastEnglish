const Cliente={
    id:'',
    nome:'',
    email:'',
    senha:'',
    cpf:'',
    cep:'',
    endereco:'',
    bairro:'',
    cidade:'',
    estado:'',
    numero:'',
    complemento:''
}


const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nome=form.nome.value
    const email=form.email.value
    const senha=form.senha.value
    const rSenha=form.rSenha.value
    const cpf=form.cpf.value
    const cep=form.cep.value
    const endereco=form.Endereco.value
    const bairro=form.bairro.value
    const cidade=form.cidade.value
    const estado=form.estado.value
    const numero=form.numero.value
    const complemento=form.complemento.value
    const resp=document.querySelector('#resp')
    if(nome.length<6 || nome.indexOf(' ')<0){
        resp.innerHTML='Nome Inválido'
    }else if(email.indexOf('@')<0 || email.indexOf('.')<0){
        resp.innerHTML='email Inválido'
    }else if(senha!=rSenha){
        resp.innerHTML='As senha precisam ser iguais!'
    }else if (cpf.length<11 || cpf.length>11){
        resp.innerHTML='Insira um CPF válido'
    }else if (cep.length<8 || cep.length>8){
        resp.innerHTML='Insira um CEP válido'
    }else{
        resp.innerHTML='Cadastrado com sucesso!'
        Cliente.id=Math.random
        Cliente.nome=nome
        Cliente.email=email
        Cliente.senha=senha
        Cliente.cpf=cpf
        Cliente.cep=cep
        Cliente.endereco=endereco
        Cliente.bairro=bairro
        Cliente.cidade=cidade
        Cliente.estado=estado
        Cliente.numero=numero
        Cliente.complemento=complemento
        alert(`nome: ${Cliente.nome} - email:  ${Cliente.email} - Cadastrado com sucesso`)
        console.log(Cliente)
        
    }
})

const campoCep=document.querySelector('#cep')
campoCep.addEventListener('blur',()=>{
    const CEP=campoCep.value
const config = {
    "url": `https://viacep.com.br/ws/${CEP}/json/`,
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(config).done((response)=> {
    console.log({response});
    document.querySelector('#Endereco').value=response.logradouro
    document.querySelector('#bairro').value=response.bairro
    document.querySelector('#cidade').value=response.localidade
    document.querySelector('#estado').value=response.uf
  });
})