# App Flexbox — Projeto Autoral

Exemplo simples de app usando Flexbox e `StyleSheet.create()` (React Native / Expo).

## O que o projeto demonstra

- Todos os estilos em `styles.js` usando `StyleSheet.create()`.
- Separação clara entre lógica (`App.js`, `components/`) e estilos.
- Uso de `flexDirection`, `justifyContent`, `alignItems` e `flex` em várias seções:
  - Header (linha com logo e título)
  - Layout principal com colunas responsivas
  - Footer centralizado
- Layout responsivo básico via `useWindowDimensions()` para alternar entre `row` e `column`.

## Arquivos principais

- [App.js](App.js)
- [styles.js](styles.js)
- [components/Header.js](components/Header.js)
- [components/Card.js](components/Card.js)

## Rodando localmente

Sugestão com Expo (recomendado):

```bash
# instalar expo-cli se necessário
npm install -g expo-cli
# iniciar o projeto localmente (na pasta do projeto)
expo init . --template blank
# instale dependências (se necessário)
npm install
# iniciar
expo start
```

Obs.: o código fornecido assume um ambiente React Native/Expo. Se você já tem um projeto Expo, copie os arquivos para a pasta do projeto.

## Link do repositório

Substitua pelo link do seu repositório GitHub:

https://github.com/SEU_USUARIO/SEU_REPOSITORIO

## Print / Vídeo curto

- Para tirar um print no Android Emulator: `Ctrl+M` → `Take Screenshot` ou use a ferramenta do emulador.
- No iOS Simulator: `Cmd+S` (macOS) ou `Device` → `Screenshot`.
- Para gravar um curto vídeo de tela, use ferramentas como OBS ou as funcionalidades do próprio sistema (Windows Game Bar, QuickTime no macOS).

Inclua o print/vídeo no repositório na pasta `media/` antes de enviar ao professor.

---

## Placeholder de screenshot incluído

Adicionei um placeholder de screenshot em `media/screenshot.svg`. Substitua este arquivo pelo seu print real antes de enviar ao professor.

Também criei `git_push.bat` para facilitar o commit/push no Windows — ajuste o remote no script se necessário.

---

Se quiser, posso:
- Criar um `package.json` / scaffold completo do Expo aqui.
- Adicionar um exemplo de screenshot (arquivo placeholder) e instruções de push para o GitHub.
