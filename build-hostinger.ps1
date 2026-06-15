# ELECTROTECH - Package mise a jour Hostinger
# Lance: npm run build, copie .htaccess dans out/, cree une archive ZIP

$ErrorActionPreference = "Stop"
$ProjectRoot = $PSScriptRoot

Write-Host ""
Write-Host "============================================"
Write-Host "  ELECTROTECH - Package mise a jour Hostinger"
Write-Host "============================================"
Write-Host ""

Set-Location $ProjectRoot

# 1. Nettoyage
Write-Host "[1/4] Nettoyage des anciens builds..."
if (Test-Path "out") { Remove-Item -Recurse -Force "out" }
if (Test-Path "electrotech-hostinger.zip") { Remove-Item -Force "electrotech-hostinger.zip" }
Write-Host "      OK." -ForegroundColor Green
Write-Host ""

# 2. Build Next.js
Write-Host "[2/4] Build Next.js (export statique)..."
$build = & npm run build 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host $build
    Write-Host ""
    Write-Host "ERREUR: Le build a echoue. Corrigez les erreurs puis relancez." -ForegroundColor Red
    exit 1
}
Write-Host "      OK." -ForegroundColor Green
Write-Host ""

# 3. Copie .htaccess et instructions
Write-Host "[3/4] Copie de .htaccess et UPLOAD_INSTRUCTIONS dans out/..."
if (Test-Path ".htaccess") {
    Copy-Item -Path ".htaccess" -Destination "out\.htaccess" -Force
}
if (Test-Path "UPLOAD_INSTRUCTIONS.txt") {
    Copy-Item -Path "UPLOAD_INSTRUCTIONS.txt" -Destination "out\UPLOAD_INSTRUCTIONS.txt" -Force
}
Write-Host "      OK." -ForegroundColor Green
Write-Host ""

# 4. Archive ZIP
Write-Host "[4/4] Creation de l'archive electrotech-hostinger.zip..."
try {
    $outPath = Join-Path $ProjectRoot "out"
    $zipPath = Join-Path $ProjectRoot "electrotech-hostinger.zip"
    if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
    Compress-Archive -Path "$outPath\*" -DestinationPath $zipPath -Force
    Write-Host "      OK. Archive creee: electrotech-hostinger.zip" -ForegroundColor Green
} catch {
    Write-Host "      (Zip optionnel - uploader le contenu de out/ directement)" -ForegroundColor Yellow
}
Write-Host ""

Write-Host "============================================"
Write-Host "  TERMINE"
Write-Host "============================================"
Write-Host ""
Write-Host "DRAG and DROP (glisser-deposer):"
Write-Host "  1. Hostinger: File Manager -> public_html/"
Write-Host "  2. Supprimer l'ancien contenu"
Write-Host "  3. Ouvrir le dossier  out/  (explorer out)"
Write-Host "  4. Dans out: Ctrl+A pour tout selectionner"
Write-Host "  5. Glisser-deposer dans public_html (le CONTENU de out, pas le dossier out)"
Write-Host ""
Write-Host "Contenu de out: index.html, _next/, img/, api/, .htaccess, les pages."
Write-Host ""
if (Test-Path "out") { explorer out }
Write-Host ""
