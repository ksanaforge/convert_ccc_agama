/*TODO
	build samyutta/seq to sid mapping
*/
var parser_agama=require("./parser_nikaya");
var list=require("fs").readFileSync("./genxml/sn.lst","utf8").split(/\r?\n/);

var processfiles=function(collections){
	parser_agama(collections,list,
	{	
		pat_sid:/<title>(.+?)<\/title>/
		,sourcepath:"../ccc_translation/SN/"
		,targetpath:"genxml/"
	});
}
module.exports={processfiles};