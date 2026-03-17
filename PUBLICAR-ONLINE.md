# Publicar e abrir em qualquer lugar

## Opcao mais rapida (sem codigo)
1. Acesse `https://app.netlify.com/drop`
2. Arraste a pasta inteira `pagina evangelismo` para a pagina
3. O Netlify gera um link publico (ex.: `https://seu-site.netlify.app`)
4. Compartilhe esse link no QR

## Gerar QR limpo para chaveiro
Depois de ter o link publico, rode:

```powershell
powershell -ExecutionPolicy Bypass -File .\gerar-qr.ps1 -Url "https://SEU-LINK-PUBLICO"
```

Arquivos gerados:
- `qr-chaveiro.png` (1200x1200)
- `qr-chaveiro.svg` (vetorial, ideal para impressao)
