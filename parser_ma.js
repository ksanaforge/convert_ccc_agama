var parser_agama=require("./parser_agama");
var list=require("fs").readFileSync("./genxml/ma.lst","utf8").split(/\r?\n/);
var workaround_sa=require("./workaround_ma");
var processfiles=function(outfn){
  parser_agama(outfn,list,
  {
    pat_sid: /<title>中阿含(.*?)經</
    ,workaround:workaround_sa
    ,sourcepath:"../ccc_translation/MA/"
  });
}
module.exports={processfiles};