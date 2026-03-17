param(
  [Parameter(Mandatory = $false)]
  [string]$Url = "https://www.instagram.com/renovomanaus",

  [Parameter(Mandatory = $false)]
  [string]$OutputBase = "qr-chaveiro"
)

# Gera QR limpo para impressao pequena (chaveiro):
# - preto no branco
# - sem logo
# - alta resolucao
# - margem minima

$encodedUrl = [System.Uri]::EscapeDataString($Url)

$pngApi = "https://quickchart.io/qr?text=$encodedUrl&size=1200&ecLevel=M&margin=1"
$svgApi = "https://quickchart.io/qr?text=$encodedUrl&size=1200&ecLevel=M&margin=1&format=svg"

$pngPath = "$OutputBase.png"
$svgPath = "$OutputBase.svg"

Invoke-WebRequest -Uri $pngApi -OutFile $pngPath
Invoke-WebRequest -Uri $svgApi -OutFile $svgPath

Write-Output "QR gerado:"
Write-Output " - $pngPath"
Write-Output " - $svgPath"
Write-Output "URL: $Url"
