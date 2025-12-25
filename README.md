![](thumbnail.png)

# 🛒 useDev — SOLID aplicado ao React

O **useDev** é um **projeto de e-commerce desenvolvido em React**, criado com o objetivo de aplicar na prática os **princípios SOLID** para melhorar a **modularidade, flexibilidade e manutenibilidade do código**.

O projeto simula um fluxo real de uma aplicação de comércio eletrônico, servindo como base para refatorações orientadas a boas práticas de arquitetura de software no front-end.

---

## 🚀 Sobre o projeto

Este projeto foi desenvolvido com foco no estudo e aplicação dos **cinco princípios SOLID** no contexto de aplicações React modernas.

Ao longo do desenvolvimento, a aplicação passa por refatorações que visam:

- Reduzir acoplamento entre componentes e serviços
- Aumentar a reutilização de código
- Facilitar testes e extensões futuras
- Tornar o código mais legível e sustentável

O domínio do projeto gira em torno de um e-commerce fictício chamado **useDev**, abordando listagem de produtos, categorias e carrinho de compras.

---

## 🧠 Principais recursos

- 🛍️ Listagem de categorias e produtos
- 📄 Exibição de detalhes do produto
- 🛒 Visualização e gerenciamento do carrinho de compras
- 🧩 Componentes desacoplados e reutilizáveis
- 🧠 Hooks customizados seguindo princípios SOLID
- 🔄 Serviços abstraídos para consumo de dados

---

## 🧱 Princípios SOLID aplicados

- **SRP (Responsabilidade Única)**  
  Componentes como `Button` e `Input` são responsáveis apenas pela renderização, sem lógica de negócio acoplada.

- **OCP (Aberto/Fechado)**  
  Componentes e hooks podem ser estendidos com novos comportamentos sem necessidade de modificar o código existente.

- **LSP (Substituição de Liskov)**  
  Implementações especializadas podem substituir abstrações sem quebrar o funcionamento da aplicação.

- **ISP (Segregação de Interfaces)**  
  Interfaces de props e contratos contêm apenas o necessário, evitando dependências desnecessárias.

- **DIP (Inversão de Dependência)**  
  Hooks e serviços dependem de abstrações, não de implementações concretas, facilitando testes e substituições.

---

## 🛠️ Tecnologias utilizadas

- **React**
- **Vite**
- **TypeScript**
- **Hooks customizados**
- **Arquitetura baseada em princípios SOLID**
- **Git & GitHub**

---

## 🎯 Desafios abordados

- Estruturação de componentes seguindo o **SRP**
- Aplicação de **DIP** com serviços HTTP abstratos
- Extensão de funcionalidades sem alterar código base (**OCP**)
- Desacoplamento entre `ProductService` e hooks de consumo de dados
- Organização de pastas e responsabilidades no front-end

---

## ⚙️ Instalação e uso

Clone o repositório, instale as dependências e execute a aplicação:

```bash
# Clone o projeto
git clone https://github.com/GabrielVeroneze/usedev-react-solid-architecture.git

# Acesse a pasta
cd usedev-react-solid-architecture

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
