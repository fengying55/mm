var bosonnlp = require('bosonnlp');
var nlp = new bosonnlp.BosonNLP('lHlJ9K3k.13114.9YdQPMqH2Mw6');
nlp.ner('�ɶ��̱����� Ҧ����', function (result) {
	console.log(result);
});