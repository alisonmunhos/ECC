# Gerador de kits de aula

Cada aula é um arquivo `aulas/<código>.json` com o conteúdo. O `modelo.html.j2` define o visual.
`python3 gerar.py <código>` gera `saida/<código>.pdf` com 4 páginas:

1–2. Plano do professor (essencial, roteiro, 4 caminhos, avaliação, adaptações, gabarito)
3. Folha do aluno ● convencional
4. Folha do aluno ◆ adaptada (imagem para colorir em `imagens/`)

Piloto: `CIE6-B01-A03` (Misturas e fases). Marca: `--marca "Nome"` (padrão: `[NOME DA MARCA]`).
