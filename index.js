// funcionando e testado no Postman


const express = require('express');
const { get } = require('http');
const server = express();

server.use(express.json());

const Nomes=['Francisco','Vieira','daSilva']

// retornar um nome 
server.get('/Nomes/:index',(req,res)=>{
    const{index} =req.params
    return res.json(Nomes[index]);
})
// retornar todos os nomes 
server.get('/Nomes',(req,res)=>{
    return res.json(Nomes)
})

// Criar um novo nome 
server.post('/Nomes',(req,res)=>{
    const{name}= req.body;
    Nomes.push(name);
})
// Atualizar um dos Nomes
server.put('/Nomes/:index',(req,res)=>{
    const{index}=req.params;
    const{name}=req.body;

    Nomes[index]=name;
    return res.json(Nomes)
})
// Deletar um dos Nomes
server.delete('/Nomes/:index',(req,res)=>{
    const{index}=req.params;

    Nomes.splice(index,1);
    return res.json({message:"O Nome Foi Deletado"})
})


//Porta do Servidor
server.listen(3000);