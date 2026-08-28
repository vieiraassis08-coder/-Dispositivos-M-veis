@echo off
REM Script para commitar e enviar ao GitHub (configure origin antes de rodar)
cd /d %~dp0
git add .
git commit -m "Add placeholder screenshot and project files"
git branch -M main
echo If you don't have a remote set, run:
echo   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
pause
