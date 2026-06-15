@echo off
chcp 65001 >nul
echo.
echo ============================================
echo   ELECTROTECH - Package mise a jour Hostinger
echo ============================================
echo.

cd /d "%~dp0"

echo [1/4] Nettoyage des anciens builds...
if exist "out" rmdir /s /q "out"
if exist "electrotech-hostinger.zip" del "electrotech-hostinger.zip"
echo       OK.
echo.

echo [2/4] Build Next.js (export statique)...
call npm run build
if errorlevel 1 (
    echo.
    echo ERREUR: Le build a echoue. Corrigez les erreurs puis relancez.
    pause
    exit /b 1
)
echo       OK.
echo.

echo [3/4] Copie de .htaccess et instructions dans out/...
copy /y ".htaccess" "out\.htaccess" >nul
if exist "UPLOAD_INSTRUCTIONS.txt" copy /y "UPLOAD_INSTRUCTIONS.txt" "out\UPLOAD_INSTRUCTIONS.txt" >nul
echo       OK.
echo.

echo [4/4] Creation de l'archive electrotech-hostinger.zip...
powershell -NoProfile -Command "Compress-Archive -Path 'out\*' -DestinationPath 'electrotech-hostinger.zip' -Force"
if errorlevel 1 (
    echo       (Zip optionnel - vous pouvez uploader le contenu de out/ directement)
) else (
    echo       OK. Archive creee: electrotech-hostinger.zip
)
echo.
echo ============================================
echo   TERMINE
echo ============================================
echo.
echo DRAG and DROP (glisser-deposer):
echo   1. Sur Hostinger: File Manager -> public_html/
echo   2. Supprimer l'ancien contenu
echo   3. Ouvrir le dossier  out/  (double-clic ou: explorer out)
echo   4. Dans out: Ctrl+A pour tout selectionner
echo   5. Glisser-deposer dans public_html ( le CONTENU de out, pas le dossier out )
echo.
echo Le contenu de out/ : index.html, _next/, img/, api/, .htaccess, les pages.
echo.
explorer out
echo (Dossier out ouvert pour glisser-deposer.)
echo.
pause
