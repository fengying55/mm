var bosonnlp = require('bosonnlp');
var nlp = new bosonnlp.BosonNLP('lHlJ9K3k.13114.9YdQPMqH2Mw6');
nlp.ner('成都商报记者 姚永忠', function (result) {
	console.log(result);
});