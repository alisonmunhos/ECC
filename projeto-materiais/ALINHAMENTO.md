# Alinhamento do projeto — Materiais didáticos de Ciências (Alison)

Registro de decisões e contexto para retomar em sessões futuras.

## Quem é o autor

- Professor de Ciências e Biologia (rede estadual do RS).
- Mestrando em Informática na Educação; especialização em Ensino de Ciências.
- Objetivo: começar a gerar renda com materiais didáticos próprios.

## Ativos existentes

| Ativo | Onde | Estado |
|---|---|---|
| Planilha de 294 atividades inclusivas (6º–9º EF + 1ª–3ª EM) | upload `planilha_inclusao_completa` (CSV) | EF completo (168 com versão adaptada + prompt de imagem); EM só 6/126 adaptadas |
| BNCC oficial — habilidades EF (1.408) e EM (209) + competências | uploads `Lista de questões*.csv`, `Lista de Competências Gerais.csv` | Completo e fiel; 3 rótulos de área trocados no EM (linhas 2, 59, 86) |
| `bncc_master_v2_completo` | Google Drive, pasta do projeto | **Descartar** — contém códigos/textos inventados (ex.: EM13CNT105B) |
| BNCC API (bncc.api.br, open source MIT) | API com chave | Útil para busca semântica e competências gerais por habilidade; host bloqueado na rede do ambiente; chave deve ir em `BNCC_API_KEY` |
| Projeto Lovable "Board Master" (Diário de Bordo Líquido) | Lovable | Planejador BNCC, parado desde jun/2026 |

## Lógica pedagógica original

- Calendário da rede estadual do RS: 3 trimestres × 14 semanas, últimas 2 semanas de recuperação.
- Cada trimestre = 14 atividades: conteúdo + oficina prática + sistematização + avaliação.
- Cada atividade tem: objetivo, referência ao livro (Araribá Conecta / Biologia 360), missão do caderno,
  caderno ideal, e versão adaptada para inclusão (texto simplificado, ação motora, imagem para colorir).
- **Alinhamento:** não precisa ficar preso às 14 semanas — deixar menos engessado, mas organizado.

## Diagnóstico da sequência (out/2026)

Pontos fortes: estrutura consistente, espiral entre EF e EM em vários temas (genética 9º → 3ª EM,
evolução 9º → 3ª EM, biomas 7º → 2ª EM, sexualidade/ISTs 8º → 3ª EM, ETA 6º → 2ª EM).

Problemas:

1. **Repetição sem aumento de complexidade:** efeito estufa aparece 3× com quase o mesmo objetivo
   ("cobertor") — EF06-A37, EF07-A12, EF07-A31; aquecimento global em 6º, 7º (2×), 8º e 1ª EM;
   camada de ozônio 6º A39 e 7º A33–34; clonagem/células-tronco 2× na 3ª série (A26 e A39);
   cadeias/teias na 1ª EM T3 e de novo na 2ª EM A13–A14.
2. **Lacunas de BNCC no EF:** energia elétrica (EF08CI01–06: circuitos, consumo, fontes) não aparece;
   vacinas e indicadores de saúde (EF07CI09–11) não aparecem no 7º; máquinas simples (EF07CI01) está no 8º.
3. **Conteúdo fora da BNCC do EF:** 8º ano 1º tri é mecânica/Leis de Newton (segue o livro, não a BNCC).
4. **Português de Portugal** em vários títulos/textos (neurónios, ozónio, tectónicas, sida, contracetivos,
   infeções, cromossomas, harmónicas…) — corrigir para PT-BR antes de vender.
5. Dependência de páginas de livros específicos (limita mercado e pode gerar questão de direitos autorais).
6. EM: BNCC não divide por série/disciplina — vincular a habilidades EM13CNT e, se quiser, ao Referencial Curricular Gaúcho.

## Formatos de produto em consideração

- PDFs / apostilas para imprimir (caminho mais rápido — EF já está quase pronto).
- Ferramentas digitais (gerador/planejador no Lovable) — segundo passo.
- ~~Nicho candidato: Ciências inclusivas~~ → **revisado (out/2026):** inclusão NÃO é o foco isolado.

### Posicionamento definido pelo autor

- **Todo material sai "casado": versão convencional + versão adaptada do MESMO conteúdo.**
- Motivo: o professor tem alunos diversos na mesma sala e não encontra material alinhado para ensinar
  de forma equânime (todos trabalham o mesmo tema, cada um no seu nível).
- Público principal: professor de Ciências/Biologia regente com turma diversa; AEE é público secundário.
- Etapa prioritária: Fundamental anos finais (6º–9º); Médio em segundo plano.
- Conceito pedagógico próximo: Desenho Universal para a Aprendizagem (DUA) — avaliar uso na comunicação.

## Modelos de plano de aula (referências em `referencias/planos-aula/`)

O autor já vinha desenvolvendo um "Sistema Base & Autoria" de planos de aula em HTML (A4, pronto para PDF).

| Versão | Arquivo | Destaques |
|---|---|---|
| v1 | `v1-1EM-T1-A01-ecologia.html` | 50 min, 4 momentos com passo a passo, tabela de avaliação, diferenciação por 5 perfis (TEA, TDAH, DV, DA, dislexia), competência geral, TCT, socioemocional, materiais por momento. Rodapé "Professor Tranquilo". |
| v2 | `v2a-…` / `v2b-…-gemini` | 100 min, Saber/Fazer/Sentir, Trilha Alfa (essencial) + Trilha Beta (ENEM / investigativo), rubrica 🟢🟡🔴, dica de trincheira, esquema da lousa, material do aluno. |
| v3 (mais madura) | `v3-1EM-A01-digital.html` / `-impressao.html` | 4 metodologias à escolha do professor (Expositiva, Raio-X ENEM, Prática visual impressa, Investigação), inclusão cruzada com metodologia + AEE, conexão digital (só na versão digital), atividade do aluno com infográfico para colorir (gerado no NotebookLM, embutido em base64 ≈3,4 MB). |

**Decisão sugerida:** v3 como base do modelo, incorporando da v1 competências gerais/TCT/socioemocional,
materiais por momento e perfis DV/DA/dislexia; e garantindo o material do aluno SEMPRE em par
(versão convencional + versão adaptada do mesmo conteúdo).

Problemas a corrigir antes de vender:

- Questão rotulada "ENEM 2021" está parafraseada ("...") — conferir texto oficial ou retirar o rótulo.
- Imagem com marca d'água do NotebookLM; arquivos de 3,4 MB por plano (comprimir imagem).
- Inglês/PT-PT vazando: "depressions", "characteristic" (v2b), "actuar" (v1); v1 diz "7 níveis" e lista 6.
- Nota legal da v1 cita Lei 14.254/2021 para "laudo não é obrigatório" — conferir a base legal correta.
- Rubrica "Atenção" da v3 com exemplo jocoso (dinossauros) — trocar por erro conceitual real.
- Esquema de códigos diverge entre planilha (EM01-BIO-A01) e planos (1EM-A01, 1EM-T1-A01) — unificar.
- Link de documentário da Netflix exige assinatura — oferecer alternativa gratuita.

## Automação de preenchimento de templates (referência em `referencias/automacao-slides/`)

Projeto do autor em Google Apps Script: duplica um slide-modelo A4 do Google Slides para cada linha da
planilha, troca `{{CODIGO}}`, `{{SÉRIE}}`, `{{TEMA}}`, `{{OBJETIVO}}`, `{{BÚSSOLA}}`,
`{{ORIENTAÇÃO ADAPTADA}}`, `{{AÇÃO MOTORA}}` e coloca no lugar de `{{IMAGEM}}` a imagem da pasta do
Drive cujo nome contém o código (ex.: `EF06-CIE-A01`). O layout é só da folha **adaptada** do aluno.

Pontos de atenção:

- Lê colunas por posição (0–6); a planilha completa tem 13 colunas em outra ordem → ler pelo nome do cabeçalho.
- Limite de 6 min por execução do Apps Script; está fixo em 10 linhas → processar em lotes com retomada.
- Textos longos podem estourar as caixas (Slides não ajusta fonte automaticamente pela API).
- Não exporta PDF; o slide-modelo fica como 1º slide do resultado.
- Falta o layout da folha **convencional** para fechar o par.

Alternativa avaliada: modelo HTML (base v3) + script que lê o CSV e gera PDF (Chromium), rodando nesta sessão.

## Decisões de marca e redes (out/2026)

- Visão de longo prazo: atender **todas as séries**; 6º–9º é só o ponto de partida.
- Estratégia: **conteúdo primeiro, venda depois** — redes começam com temas de valor (burocratização do
  trabalho docente, inclusão em dados, dicas de planejamento com IA, ferramentas úteis) para formar
  público; infoprodutos entram depois.
- **Marca sem rosto e sem o nome do autor** no @ e no produto; autor aparece no máximo como responsável.
- Preferência de comunicação: respostas curtas e diretas.

## Estrutura de produtos (out/2026)

Pacotes desejados (do maior ao menor):

1. Completo: Ciências 6º–9º + Biologia 1ª–3ª
2. Só Ciências EF (6º–9º) · 3. Só Biologia EM (1ª–3ª)
4. Por série · 5. Por bloco temático (etapa posterior)

Princípio: **autoria do professor** — nada amarrado a semana/trimestre fixo.

Proposta de organização:

- Unidade básica = **bloco temático** (ex.: "Matéria e misturas"), com nº variável de aulas.
- Cada aula = plano do professor + par de folhas do aluno (convencional + adaptada).
- Códigos sem trimestre (ex.: `CIE6-B01-A03` = Ciências 6º, bloco 1, aula 3).
- **Guia de distribuição** separado com sugestões de calendário (trimestral, bimestral, semestral),
  encaixando blocos nos períodos; o professor reordena, pula ou mistura com material próprio.
- Formato do guia: PDF no pacote primeiro; depois página/ferramenta interativa (ex.: Lovable).

## Pendências guardadas para depois

- Análise de nicho e redes sociais (Instagram, carrosséis, Reels, perfil, vendas).
- Criação de marca, domínio, e-mail e contas (guiado; contas criadas pelo autor).
- Skills de conteúdo (carrossel, roteiro de Reels, análise de perfil, copy de vendas) para o claude.ai.
