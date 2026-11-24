# ABRS Tecidos · Atendimento online

Site da **ABRS Tecidos**, loja de tecidos no Brás (São Paulo), em formato de conversa no estilo WhatsApp do iPhone.
A cliente escolhe os tecidos, responde a algumas perguntas e o WhatsApp da loja abre com a mensagem pronta.

Publicado em: https://abrstecidos.github.io/tecido/

## Arquivos

```
index.html        página (estrutura e ícones)
style.css         visual (cores, animações, celular e computador)
script.js         conversa (textos, tecidos, perguntas e envio ao WhatsApp)
.nojekyll         avisa o GitHub Pages para publicar os arquivos como estão
assets/
  abrs-wordmark.png          logo escrita (topo do chat e perfil)
  logo-mark-transparent.png  símbolo da marca
  favicon.png                ícone da aba do navegador
  apple-touch-icon.png       ícone ao salvar na tela do celular
  og-abrs.jpg                imagem de prévia ao compartilhar o link (1200x630)
  beriz-tec-logo.png         crédito "site por"
  tecidos/<id>.jpg           imagem de cada tecido do catálogo (troque pela foto real com o mesmo nome)
```

## Onde mudar os textos

Tudo fica no começo do `script.js`, em listas:

| Lista | O que é |
|---|---|
| `FABRICS` | tecidos do catálogo (nome, para que serve, cor e trama) |
| `SEGMENTS` | tecidos agrupados por segmento (Dia a dia, Fitness, Uniformes…) |
| `PURCHASE`, `FORMATS`, `QTY_SETS` | como comprar, formato (retalho/peça) e quantidades |
| `PROJECTS` | "o que vai costurar" e os tecidos sugeridos |
| `FAQ` | dúvidas e respostas |
| `STORIES` | novidades (bolinhas de status no topo) |
| `FABRIC_KEYS` / `PROJECT_KEYS` | palavras que o chat reconhece quando a cliente digita |

O número do WhatsApp fica em `WHATSAPP_NUMBER`, na primeira linha útil do `script.js`.

Textos entre colchetes, como `[confirmar …]`, aparecem em amarelo no site: são informações que ainda faltam confirmar
(retirada na loja, horário, quantidade mínima e amostra física).

## Fotos (opcional, sem mexer no código)

Basta salvar as fotos com estes nomes (substituindo as amostras geradas). Se a foto não existir, o site mostra a trama desenhada.

| O quê | Onde salvar |
|---|---|
| Foto de cada tecido | `assets/tecidos/jeans.jpg`, `malha.jpg`, `brim.jpg`, `viscose.jpg`… (o nome é o `id` da lista `FABRICS`) |
| Saldos da semana | `assets/semana/1.jpg` até `8.jpg` (fotos quadradas) |

## Link por grupo do Facebook

Acrescente `?origem=NOME-DO-GRUPO` ao link (ex.: `https://abrstecidos.github.io/tecido/?origem=costureiras-sp`).
A origem vai junto na mensagem do WhatsApp, para saber de qual grupo veio a cliente.

## Depois de publicar

1. Abra o site e recarregue com **Ctrl+Shift+R**.
2. Para atualizar a prévia no Facebook, cole o link no
   [Sharing Debugger](https://developers.facebook.com/tools/debug/) e toque em "Extrair novamente".

---
Site por Beriz Tec.
