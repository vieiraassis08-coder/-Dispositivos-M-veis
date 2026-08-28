# App Flexbox — Projeto Autoral

Aplicativo desenvolvido em React Native com Expo, com foco em Flexbox, organização visual e renderização condicional.

## Objetivo

Criar uma interface responsiva e visualmente organizada, utilizando:

- `StyleSheet.create()` para estilização em JavaScript
- `flexDirection`, `justifyContent`, `alignItems` e `flex` para layout
- componentes reutilizáveis
- renderização condicional para exibir conteúdos conforme o estado da aplicação

## Atividade 2 — Renderização condicional

O projeto foi atualizado para incluir dois exemplos práticos de renderização condicional:

1. Status do usuário
   - quando o usuário está online, é exibida a mensagem “Disponível agora”
   - quando está offline, aparece “Offline no momento”

2. Controle de estoque
   - quando um produto tem estoque, aparece a quantidade disponível e o botão “Comprar”
   - quando não há estoque, aparece “Sem estoque no momento” e o botão fica indisponível

Esses exemplos foram integrados ao layout principal de forma coerente com a proposta do projeto.

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- Flexbox
- StyleSheet

## Estrutura do projeto

- `App.js` — estrutura principal da interface
- `styles.js` — estilos gerais do app
- `components/Header.js` — cabeçalho do app
- `components/Card.js` — cards reutilizáveis
- `media/` — screenshots do projeto em web e mobile

## Como executar

No PowerShell, na pasta do projeto:

```powershell
cd "C:\Users\Francisco\Desktop\Flexbox"
npm install
npm start
```

Para abrir em navegador web:

```powershell
npx expo start --web
```

Para abrir no Android:

```powershell
npx expo start --android
```

## Repositório GitHub

https://github.com/vieiraassis08-coder/-Dispositivos-M-veis.git

## Screenshots

### Web

![Web screenshot 1](media/web-atv1.png)

![Web screenshot 2](media/web-atv2.png)

### Mobile

![Mobile screenshot 1](media/mobile-atv1.jpeg)

![Mobile screenshot 2](media/mobile-atv2.jpeg)

## Observações

Este projeto atende à proposta da unidade de estilização e renderização condicional em React Native, demonstrando uso prático de layout responsivo e lógica de interface dinâmica.
