// Script original do autor (Google Apps Script) — preenche um slide-modelo A4 a partir da planilha
// e insere a imagem da pasta do Drive cujo nome contém o código da atividade.
// IDs de arquivos removidos daqui; ver a versão no Google Drive do autor.
function gerarRoteirosComImagens() {
  try {
    var idApresentacao = 'ID_DA_APRESENTACAO';
    var idPlanilha = 'ID_DA_PLANILHA';
    var idPastaImagens = 'ID_DA_PASTA_DE_IMAGENS';

    var apresentacao = SlidesApp.openById(idApresentacao);
    var slideMestre = apresentacao.getSlides()[0];
    var planilha = SpreadsheetApp.openById(idPlanilha).getActiveSheet();
    var dados = planilha.getDataRange().getValues();
    var pastaImagens = DriveApp.getFolderById(idPastaImagens);

    for (var i = 1; i <= 10; i++) {
      var linha = dados[i];
      if (!linha || linha[0] === "") break;
      var codigoAula = linha[0].toString().trim();
      var novoSlide = slideMestre.duplicate();
      novoSlide.replaceAllText('{{CODIGO}}', codigoAula);
      novoSlide.replaceAllText('{{SÉRIE}}', linha[1] ? linha[1].toString() : "");
      novoSlide.replaceAllText('{{TEMA}}', linha[2] ? linha[2].toString() : "");
      novoSlide.replaceAllText('{{OBJETIVO}}', linha[3] ? linha[3].toString() : "");
      novoSlide.replaceAllText('{{BÚSSOLA}}', linha[4] ? linha[4].toString() : "");
      novoSlide.replaceAllText('{{ORIENTAÇÃO ADAPTADA}}', linha[5] ? linha[5].toString() : "");
      novoSlide.replaceAllText('{{AÇÃO MOTORA}}', linha[6] ? linha[6].toString() : "");

      var arquivosEncontrados = pastaImagens.searchFiles('title contains "' + codigoAula + '"');
      if (arquivosEncontrados.hasNext()) {
        var arquivoImagem = arquivosEncontrados.next();
        var elementos = novoSlide.getPageElements();
        for (var j = 0; j < elementos.length; j++) {
          var elemento = elementos[j];
          if (elemento.getPageElementType() == SlidesApp.PageElementType.SHAPE) {
            var shape = elemento.asShape();
            if (shape.getText().asString().includes("{{IMAGEM}}")) {
              novoSlide.insertImage(arquivoImagem.getBlob(), shape.getLeft(), shape.getTop(), shape.getWidth(), shape.getHeight());
              shape.remove();
              break;
            }
          }
        }
      }
      novoSlide.move(apresentacao.getSlides().length);
    }
  } catch (erro) {
    Logger.log("ERRO: " + erro.message);
  }
}
