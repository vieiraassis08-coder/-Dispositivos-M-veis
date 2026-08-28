@echo off
REM Script para commitar e enviar o projeto ao GitHub
cd /d %~dp0
git add .
git commit -m "Finalize Flexbox app and screenshots"
git branch -M main
git remote set-url origin https://github.com/vieiraassis08-coder/-Dispositivos-M-veis.git
git push -u origin main
pause
