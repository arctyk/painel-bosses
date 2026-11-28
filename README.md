# Tibia Collection

Guia rápido offline de bosses de Tibia, com dados da [TibiaWiki BR](https://www.tibiawiki.com.br).
Para abrir, dê duplo clique em `index.html`. Não precisa de servidor nem de internet.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html`, `style.css`, `app.js` | A página (HTML/CSS/JS puros) |
| `bosses.js` | Os dados: `window.BOSSES = [...]` |
| `img/bosses/`, `img/itens/`, `img/criaturas/`, `img/icones/` | Sprites e ícones baixados pela coleta |
| `fontes/martel.ttf` | Fonte dos títulos do tibia.com (do template "tibiacom" do MyAAC) |
| `fontes/uncial-antiqua.woff2` | Completa a Martel com "ç", números e pontuação (Google Fonts, licença OFL) |
| `tema/` | Imagens do visual do tibia.com (bordas, cantos, menu, botões, arte do topo) |

## Tema do tibia.com

O visual segue o CSS do site oficial (`../Site Oficial/`): caixas com cantos e bordas, barra de título
verde, menu lateral expansível com correntes, manchetes vermelhas, tabelas com legenda marrom e botões
azuis. Textos em Verdana/Arial, como no site; títulos na fonte Martel.

As imagens de `tema/` e a `martel.ttf` vêm do template `tibiacom` do MyAAC
(https://github.com/slawkens/myaac, pasta `templates/tibiacom/`), que reproduz o tibia.com.
Os ícones de notícia e o logo vieram da página salva em `../Site Oficial/`.
Se alguma imagem de `tema/` faltar, o painel usa cores parecidas no lugar.
| `coletar.py` | Script que busca os dados na wiki e atualiza `bosses.js` |
| `servidor.py` | Servidor local sem cache (`python servidor.py` → http://127.0.0.1:8765), para ver as mudanças na hora |
| `menu.js` | Menu lateral compartilhado (Bosses / Outfits / Bestiário / Montarias) |
| `stats.js` | Quadro "Estatísticas" na coluna da direita de todas as páginas (outfits, montarias e bestiário marcados) |
| `outfits.html`, `outfits.js`, `outfits-dados.js` | Página de outfits: todos os outfits (quest, básicos, premium e especiais), Store Outfits com preço em Tibia Coins e itens de drop; marcação de Outfit/Addon 1/Addon 2 já obtidos (salva no navegador) |
| `coletar_outfits.py` | Gera `outfits-dados.js` a partir da TibiaWiki em inglês |
| `outfits-extra.js` | Editado à mão: como conseguir cada parte (outfit/addon) que não pede itens |
| `montarias.html`, `montarias.js`, `montarias-dados.js` | Página de montarias (na ordem do jogo), Store Mounts com preço e marcação de "tenho" |
| `coletar_montarias.py` | Gera `montarias-dados.js` (TibiaWiki EN para lista/IDs/preços/imagens, TibiaWiki BR para o texto em português) |
| `rotacoes.py` | Gera a rotação de ataque de cada vocação (usado pelo `coletar.py`) |
| `img/magias/` | Ícones das magias (da tibia.fandom.com) |

## Atualizar os dados (ex.: depois de um update do jogo)

Requer Python 3 (só biblioteca padrão).

```
python coletar.py                 # atualiza todos os bosses
python coletar.py "Duke Krule"    # atualiza só um boss
python coletar.py --forcar-img    # baixa de novo todas as imagens
```

O script usa a API do MediaWiki (`api.php`), com User-Agent identificado e 1 segundo de pausa
entre requisições. Imagens que já existem em `img/` não são baixadas de novo.
No final ele lista as pendências (HP ausente, raridade de loot indisponível, sprite não encontrado etc.).

## Adicionar um boss

1. Abra `bosses.js` e acrescente um registro no array:

   ```json
   {
     "nome": "Nome Exato Do Boss",
     "local": "Cidade ou área",
     "grupo": "Grave Danger",
     "subgrupo": "Diários",
     "ordem": 7,
     "quest": "Grave Danger Quest",
     "mecanica": [
       "Primeira linha, citando [[Soul Scourge]] ou [[Frozen Soul|Frozen Souls]].",
       "Os minibosses:",
       "- Subtópico da linha anterior.",
       "- Outro subtópico."
     ]
   }
   ```

   - `nome`: o título da página na wiki. Se o nome exibido for diferente, use `"pagina": "Título Na Wiki"`.
   - `local`: aparece embaixo do nome, no card e no popup.
   - `quest`: página da quest na wiki. O level mínimo e o recomendado vêm do infobox dela.
     Sem `quest`, o level não aparece e a coleta avisa nas pendências.
   - Na `mecanica`, nomes entre `[[ ]]` ganham o sprite da wiki ao lado. `[[Página|texto]]` mostra
     "texto" e usa o sprite da página. Linhas começando com `- ` viram subtópicos da linha anterior.
   - `grupo`: a seção onde o card aparece (e o item do menu lateral). Grupos novos vão para o fim da
     página. Para mudar a ordem das seções, edite `ORDEM_GRUPOS` no topo de `app.js`.
   - `subgrupo` (opcional): faixa vermelha dentro da seção, como "Diários" ou "Last GD". Os subgrupos
     aparecem na ordem do primeiro boss de cada um.
   - `ordem`: a posição dentro da seção.
   - `mecanica`: lista de linhas (3 a 6), escrita à mão. O script nunca sobrescreve esse campo.
   - Opcional, `tabela`: quadro extra no popup (veja o Grand Master Oberon como exemplo).

2. Rode `python coletar.py "Nome Exato Do Boss"`.

O conteúdo de `bosses.js` precisa continuar sendo JSON válido depois de `window.BOSSES =`:
aspas duplas e sem comentários dentro do array. Uma vírgula sobrando no fim é tolerada.

## Mudar a ordem dos bosses

Basta trocar o número de `ordem` em `bosses.js`. Não precisa rodar a coleta.

## De onde vem cada campo

- **Level recomendado**: campos `lvl` (mínimo) e `lvlreq` (recomendado) do infobox da quest indicada em `quest`.
- **HP, XP e nível de boss** (bane, archfoe, nemesis): campos `hp`, `exp` e `bosstype` do infobox.
  A XP "com bônus" é calculada no painel (×1,5, como na wiki).
- **Resistências**: campos `*DmgMod`. Imunidades, "pode ser puxado", "passa por" e "empurra objetos"
  vêm de `immunities`, `pushable`, `ignoresfields` e `pushobjects`. Os ícones ficam em `img/icones/`.
- **Tokens**: Gold Token e Silver Token encontrados nos campos de loot do infobox, com a quantidade e a raridade.
- **Loot**: tokens primeiro e depois os campos `lootcomum` a `lootmuitoraro` do infobox (a TibiaWiki BR não tem
  página separada de estatísticas de loot). Os tokens ficam de fora dessa grade porque já aparecem no bloco de tokens.
  Quando a página só tem a lista geral de loot, sem raridade, o popup mostra "Pendente".
- **Sprites**: `Arquivo:<Nome>.gif` (ou `.png`) via `prop=imageinfo`.
- **Mecânica**: resumo manual baseado no texto da wiki (páginas das quests e dos bosses).

## Rotação de ataque

O quadro "Rotação de ataque" é gerado por `rotacoes.py` a cada coleta, a partir das resistências do boss
e dos dados das magias depois do update "Vocation Adjustments 2026" (16/06/2026) e dos ajustes do monk
(01/09/2026), tirados da TibiaWiki em inglês. Magias e runas de ataque dividem a recarga de 2s, então a
rotação é a ordem de prioridade: a mais forte disponível primeiro (dano = força base × resistência do boss).
O SD (força 150) entra na posição certa, e o que for mais fraco que ele aparece como "economia".

Ajustes por boss ficam em `bosses.js`, no campo `rotacaoAjustes`:

```json
"rotacaoAjustes": {
  "sdPrincipal": true,
  "semMorte": true, "semTerra": true, "semEnergia": true,
  "nota": "observação geral",
  "notas": {"knight": "observação só do knight"}
}
```

Se a CipSoft mudar força ou recarga de magias, atualize a tabela `MAGIAS` no topo de `rotacoes.py` e rode a coleta.

## Fases e alvos

Cada boss pode ter o campo `fases` em `bosses.js` (formas, minibosses e criaturas que importam na luta):

```json
"fases": [
  {"nome": "Hunger Worm", "dica": "Mate: abre um buraco por ~10s."},
  {"nome": "The Hunger", "dica": "...", "elementosAjuste": {"fogo": "110%"}, "hpAjuste": "130000"}
]
```

A coleta busca HP, resistências e sprite de cada fase na wiki BR e calcula o melhor ataque de cada
vocação contra ela (as 2 primeiras magias da rotação). `elementosAjuste` e `hpAjuste` corrigem dados que a
wiki BR não tem (vários vieram da wiki em inglês). O boss também aceita `elementosAjuste`.

Os Avulsos aparecem em ordem de level recomendado (`ORDENAR_POR_LEVEL` no topo de `app.js`).

## Ataque e defesa por elemento

- **Ataque**: `rotacoes.elementos_ataque` escolhe o elemento de cada vocação para a luta inteira. Cada alvo tem
  peso: o boss vale 1; cada fase usa o campo `peso` (1 = forma/miniboss, 0,5 = summon que precisa morrer,
  0 = imune/evitar). Para cada opção (ex.: sorcerer "energia + SD") soma-se o melhor elemento da opção em cada
  alvo. Empates: sorcerer prefere energia, druid prefere gelo (magias de área mais fortes). Para forçar uma
  escolha: `"rotacaoAjustes": {"ataque": {"sorcerer": ["fogo"]}}`.
- **Defesa**: campo manual `defesa` no boss: `{"elementos": ["energia"], "melee": true, "nota": "..."}`.
  Com `melee`, knight e monk também recebem proteção física.

## Página de Outfits

`python coletar_outfits.py` lê as seções "Required Equipment" das páginas "<Outfit> Outfits Quest/Spoiler"
da TibiaWiki em inglês, aplica as correções da lista `CORRECOES` (no topo do script), descobre quem dropa
cada item e baixa os sprites (outfit completo masculino/feminino e itens).

A ordem da tabela é a da janela de outfits do jogo: o ID de aparência (`male_id`/`female_id` da wiki).
Outfits do tipo Basic (vêm com a conta) e Premium (vêm com a Premium) já contam como "tenho" no outfit base.
O texto de como conseguir as partes sem itens fica em `outfits-extra.js` (editado à mão).

## Montarias (`montarias.html`)

`python coletar_montarias.py` lê `Category:Mounts` da TibiaWiki em inglês (ID da montaria = ordem do jogo,
preço na Store, imagens) e o campo "method" da TibiaWiki BR (texto em português). O Rented Horse fica de fora
(é alugado por 24h). O ícone do menu sai de `novo-tema/*ontaria*.png` ao rodar `python gerar_tema.py`.

## Bestiário (`bestiario.html`)

Tabela com todas as criaturas do bestiário (833): nome, classe, dificuldade, pontos, kills necessárias,
tempo estimado e respawn sugerido, com uma caixa para marcar as já completas (fica salvo no navegador,
`localStorage`). Dá para ordenar pelo cabeçalho, buscar e filtrar por classe, dificuldade e situação.

- Dados: `python coletar_bestiario.py` gera `bestiario-dados.js` e baixa as imagens em `img/bestiario/`.
- Pontos e kills seguem a tabela oficial (TibiaWiki, página Cyclopedia); criaturas "Very Rare" pedem 5 kills.
- A lista é dividida por classe (seções que abrem e fecham); as completas vão para o fim da própria classe.
- Também dá para marcar, por criatura, o **Echo Warden** morto (Echo Raids, Summer Update 2026: a primeira morte do
  Warden dá charm points: 1/2/5/10/15/30 conforme a dificuldade, somados nas estatísticas) e o **Soul Core** feito no
  Soulpit (Animus Mastery). Criaturas novas sem dificuldade na wiki aparecem como "A confirmar".
- **Extrair lista em texto**: gera uma lista simples (não completas, completas, Wardens, Soul Cores feitos ou que faltam)
  para copiar e mandar no WhatsApp/Discord, e compara com uma lista colada de outra pessoa (o que você já tem e o que falta).
- No fim da página, **Bestiários completos** repete as criaturas completas numa lista só (sem divisão por classe), com coluna de classe e ordenação própria (Ordem do jogo, Nome ou clique no cabeçalho).
- **Ordenar por: Ordem do jogo** deixa cada classe na mesma ordem do bestiário do Tibia (pelo `race_id` da TibiaWiki). Quando a wiki ainda não tem o `race_id`, ele é estimado pela versão em que a criatura foi implementada.
- Cada respawn sugerido tem uma badge com o tipo recomendado pelo TibiaPal: **1x** (respawn normal), **Rapid** (melhor no rapid respawn) ou **Evento** (só em raids/eventos/quests).
- Respawn e tempo vêm do TibiaPal (tibiapal.com/bestiary). Quando o TibiaPal não tem a criatura, aparecem
  os primeiros locais citados na TibiaWiki, marcados com "wiki".
