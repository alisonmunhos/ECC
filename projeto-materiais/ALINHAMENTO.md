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
- Nicho candidato: **Ciências inclusivas** (material adaptado para alunos de inclusão / AEE).

## Pendências guardadas para depois

- Análise de nicho e redes sociais (Instagram, carrosséis, Reels, perfil, vendas).
- Criação de marca, domínio, e-mail e contas (guiado; contas criadas pelo autor).
- Skills de conteúdo (carrossel, roteiro de Reels, análise de perfil, copy de vendas) para o claude.ai.
