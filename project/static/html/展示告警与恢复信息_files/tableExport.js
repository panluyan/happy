/*
 tableExport.jquery.plugin

 Copyright (c) 2015-2017 hhurz, https://github.com/hhurz

 Original Work Copyright (c) 2014 Giri Raj

 Licensed under the MIT License
*/
(function(c){c.fn.extend({tableExport:function(n){function N(b){var a=[];c(b).find("thead").first().find("th").each(function(b,f){void 0!==c(f).attr("data-field")?a[b]=c(f).attr("data-field"):a[b]=b.toString()});return a}function x(b,m,e,f,z){if(-1==c.inArray(e,a.ignoreRow)&&-1==c.inArray(e-f,a.ignoreRow)){var F=c(b).filter(function(){return"none"!=c(this).data("tableexport-display")&&(c(this).is(":visible")||"always"==c(this).data("tableexport-display")||"always"==c(this).closest("table").data("tableexport-display"))}).find(m),
l=0;F.each(function(b){if(("always"==c(this).data("tableexport-display")||"none"!=c(this).css("display")&&"hidden"!=c(this).css("visibility")&&"none"!=c(this).data("tableexport-display"))&&"function"===typeof z){var f,m=1,r=1;var d=F.length;if("undefined"!=typeof y[e]&&0<y[e].length){var g=b;for(f=0;f<=g;f++)"undefined"!=typeof y[e][f]&&(z(null,e,f),delete y[e][f],g++);b+=y[e].length;d+=y[e].length}c(this).is("[colspan]")&&(m=parseInt(c(this).attr("colspan"))||1,l+=0<m?m-1:0);c(this).is("[rowspan]")&&
(r=parseInt(c(this).attr("rowspan"))||1);f=d;d=b+l;g=!1;0<a.ignoreColumn.length&&("string"==typeof a.ignoreColumn[0]?I.length>d&&"undefined"!=typeof I[d]&&-1!=c.inArray(I[d],a.ignoreColumn)&&(g=!0):"number"!=typeof a.ignoreColumn[0]||-1==c.inArray(d,a.ignoreColumn)&&-1==c.inArray(d-f,a.ignoreColumn)||(g=!0));if(!1===g)for(z(this,e,b),f=1;f<m;f++)z(null,e,b+f);if(1<r)for(d=1;d<r;d++)for("undefined"==typeof y[e+d]&&(y[e+d]=[]),y[e+d][b+l]="",f=1;f<m;f++)y[e+d][b+l-f]=""}});if("undefined"!=typeof y[e]&&
0<y[e].length)for(b=0;b<=y[e].length;b++)"undefined"!=typeof y[e][b]&&(z(null,e,b),delete y[e][b])}}function aa(b,m){!0===a.consoleLog&&console.log(b.output());if("string"===a.outputMode)return b.output();if("base64"===a.outputMode)return D(b.output());if("window"===a.outputMode)window.open(URL.createObjectURL(b.output("blob")));else try{var e=b.output("blob");saveAs(e,a.fileName+".pdf")}catch(f){A(a.fileName+".pdf","data:application/pdf"+(m?"":";base64")+",",m?e:b.output())}}function ba(b,a,e){var f=
0;"undefined"!=typeof e&&(f=e.colspan);if(0<=f){for(var m=b.width,c=b.textPos.x,l=a.table.columns.indexOf(a.column),r=1;r<f;r++)m+=a.table.columns[l+r].width;1<f&&("right"===b.styles.halign?c=b.textPos.x+m-b.width:"center"===b.styles.halign&&(c=b.textPos.x+(m-b.width)/2));b.width=m;b.textPos.x=c;"undefined"!=typeof e&&1<e.rowspan&&(b.height*=e.rowspan);if("middle"===b.styles.valign||"bottom"===b.styles.valign)e=("string"===typeof b.text?b.text.split(/\r\n|\r|\n/g):b.text).length||1,2<e&&(b.textPos.y-=
(2-1.15)/2*a.row.styles.fontSize*(e-2)/3);return!0}return!1}function ca(b,a,e){"undefined"!=typeof e.images&&a.each(function(){var a=c(this).children();if(c(this).is("img")){var m=da(this.src);e.images[m]={url:this.src,src:this.src}}"undefined"!=typeof a&&0<a.length&&ca(b,a,e)})}function ma(b,a){function e(b){if(b.url){var f=new Image;m=++c;f.crossOrigin="Anonymous";f.onerror=f.onload=function(){if(f.complete&&(0===f.src.indexOf("data:image/")&&(f.width=b.width||f.width||0,f.height=b.height||f.height||
0),f.width+f.height)){var e=document.createElement("canvas"),l=e.getContext("2d");e.width=f.width;e.height=f.height;l.drawImage(f,0,0);b.src=e.toDataURL("image/jpeg")}--c||a(m)};f.src=b.url}}var f,m=0,c=0;if("undefined"!=typeof b.images)for(f in b.images)b.images.hasOwnProperty(f)&&e(b.images[f]);(f=c)||(a(m),f=void 0);return f}function ea(b,m,e){m.each(function(){var f=c(this).children();if(c(this).is("div")){var m=O(E(this,"background-color"),[255,255,255]),F=O(E(this,"border-top-color"),[0,0,0]),
l=P(this,"border-top-width",a.jspdf.unit),r=this.getBoundingClientRect(),d=this.offsetLeft*e.dw;var g=this.offsetTop*e.dh;var h=r.width*e.dw,r=r.height*e.dh;e.doc.setDrawColor.apply(void 0,F);e.doc.setFillColor.apply(void 0,m);e.doc.setLineWidth(l);e.doc.rect(b.x+d,b.y+g,h,r,l?"FD":"F")}else if(c(this).is("img")&&"undefined"!=typeof e.images&&(g=da(this.src),m=e.images[g],"undefined"!=typeof m)){F=b.width/b.height;l=this.width/this.height;d=b.width;h=b.height;r=19.049976/25.4;g=0;l<=F?(h=Math.min(b.height,
this.height),d=this.width*h/this.height):l>F&&(d=Math.min(b.width,this.width),h=this.height*d/this.width);d*=r;h*=r;h<b.height&&(g=(b.height-h)/2);try{e.doc.addImage(m.src,b.textPos.x,b.y+g,d,h)}catch(qa){}b.textPos.x+=d}"undefined"!=typeof f&&0<f.length&&ea(b,f,e)})}function fa(b,a,e){if("function"===typeof e.onAutotableText)e.onAutotableText(e.doc,b,a);else{var f=b.textPos.x,m=b.textPos.y,d={halign:b.styles.halign,valign:b.styles.valign};if(a.length){for(a=a[0];a.previousSibling;)a=a.previousSibling;
for(var l=!1,r=!1;a;){var g=a.innerText||a.textContent||"",g=(g.length&&" "==g[0]?" ":"")+c.trim(g)+(1<g.length&&" "==g[g.length-1]?" ":"");c(a).is("br")&&(f=b.textPos.x,m+=e.doc.internal.getFontSize());c(a).is("b")?l=!0:c(a).is("i")&&(r=!0);(l||r)&&e.doc.setFontType(l&&r?"bolditalic":l?"bold":"italic");var h=e.doc.getStringUnitWidth(g)*e.doc.internal.getFontSize();if(h){if("linebreak"===b.styles.overflow&&f>b.textPos.x&&f+h>b.textPos.x+b.width){if(0<=".,!%*;:=-".indexOf(g.charAt(0))){var k=g.charAt(0),
h=e.doc.getStringUnitWidth(k)*e.doc.internal.getFontSize();f+h<=b.textPos.x+b.width&&(e.doc.autoTableText(k,f,m,d),g=g.substring(1,g.length));h=e.doc.getStringUnitWidth(g)*e.doc.internal.getFontSize()}f=b.textPos.x;m+=e.doc.internal.getFontSize()}for(;g.length&&f+h>b.textPos.x+b.width;)g=g.substring(0,g.length-1),h=e.doc.getStringUnitWidth(g)*e.doc.internal.getFontSize();e.doc.autoTableText(g,f,m,d);f+=h}if(l||r)c(a).is("b")?l=!1:c(a).is("i")&&(r=!1),e.doc.setFontType(l||r?l?"bold":"italic":"normal");
a=a.nextSibling}b.textPos.x=f;b.textPos.y=m}else e.doc.autoTableText(b.text,b.textPos.x,b.textPos.y,d)}}function Q(b,a,e){return b.replace(new RegExp(a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),e)}function U(b){b=Q(b||"0",a.numbers.html.thousandsSeparator,"");b=Q(b,a.numbers.html.decimalMark,".");return"number"===typeof b||!1!==jQuery.isNumeric(b)?b:!1}function v(b,m,e){var f="";if(null!==b){var z=c(b);if(z[0].hasAttribute("data-tableexport-value"))var d=z.data("tableexport-value");else if(d=
z.html(),"function"===typeof a.onCellHtmlData)d=a.onCellHtmlData(z,m,e,d);else if(""!=d){b=c.parseHTML(d);var l=0,g=0;d="";c.each(b,function(){if(c(this).is("input"))d+=z.find("input").eq(l++).val();else if(c(this).is("select"))d+=z.find("select option:selected").eq(g++).text();else if("undefined"===typeof c(this).html())d+=c(this).text();else if(void 0===jQuery().bootstrapTable||!0!==c(this).hasClass("filterControl"))d+=c(this).html()})}if(!0===a.htmlContent)f=c.trim(d);else if(""!=d){var h=d.replace(/\n/g,
"\u2028").replace(/<br\s*[\/]?>/gi,"\u2060");b=c("<div/>").html(h).contents();h="";c.each(b.text().split("\u2028"),function(b,a){0<b&&(h+=" ");h+=c.trim(a)});c.each(h.split("\u2060"),function(b,a){0<b&&(f+="\n");f+=c.trim(a).replace(/\u00AD/g,"")});if("json"==a.type||"excel"===a.type&&"xmlss"===a.excelFileFormat||!1===a.numbers.output)b=U(f),!1!==b&&(f=Number(b));else if(a.numbers.html.decimalMark!=a.numbers.output.decimalMark||a.numbers.html.thousandsSeparator!=a.numbers.output.thousandsSeparator)if(b=
U(f),!1!==b){var k=(""+b.substr(0>b?1:0)).split(".");1==k.length&&(k[1]="");var n=3<k[0].length?k[0].length%3:0,f=(0>b?"-":"")+(a.numbers.output.thousandsSeparator?(n?k[0].substr(0,n)+a.numbers.output.thousandsSeparator:"")+k[0].substr(n).replace(/(\d{3})(?=\d)/g,"$1"+a.numbers.output.thousandsSeparator):k[0])+(k[1].length?a.numbers.output.decimalMark+k[1]:"")}}!0===a.escape&&(f=escape(f));"function"===typeof a.onCellData&&(f=a.onCellData(z,m,e,f))}return f}function na(b,a,e){return a+"-"+e.toLowerCase()}
function O(b,a){var e=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.exec(b),f=a;e&&(f=[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]);return f}function ga(a){var b=E(a,"text-align"),e=E(a,"font-weight"),f=E(a,"font-style"),d="";"start"==b&&(b="rtl"==E(a,"direction")?"right":"left");700<=e&&(d="bold");"italic"==f&&(d+=f);""===d&&(d="normal");b={style:{align:b,bcolor:O(E(a,"background-color"),[255,255,255]),color:O(E(a,"color"),[0,0,0]),fstyle:d},colspan:parseInt(c(a).attr("colspan"))||0,rowspan:parseInt(c(a).attr("rowspan"))||
0};null!==a&&(a=a.getBoundingClientRect(),b.rect={width:a.width,height:a.height});return b}function E(a,c){try{return window.getComputedStyle?(c=c.replace(/([a-z])([A-Z])/,na),window.getComputedStyle(a,null).getPropertyValue(c)):a.currentStyle?a.currentStyle[c]:a.style[c]}catch(e){}return""}function P(a,c,e){c=E(a,c).match(/\d+/);if(null!==c){c=c[0];a=a.parentElement;var b=document.createElement("div");b.style.overflow="hidden";b.style.visibility="hidden";a.appendChild(b);b.style.width=100+e;e=100/
b.offsetWidth;a.removeChild(b);return c*e}return 0}function V(){if(!(this instanceof V))return new V;this.SheetNames=[];this.Sheets={}}function oa(a){for(var b=new ArrayBuffer(a.length),e=new Uint8Array(b),f=0;f!=a.length;++f)e[f]=a.charCodeAt(f)&255;return b}function pa(a){for(var b={},e={s:{c:1E7,r:1E7},e:{c:0,r:0}},f=0;f!=a.length;++f)for(var c=0;c!=a[f].length;++c){e.s.r>f&&(e.s.r=f);e.s.c>c&&(e.s.c=c);e.e.r<f&&(e.e.r=f);e.e.c<c&&(e.e.c=c);var d={v:a[f][c]};if(null!==d.v){var l=XLSX.utils.encode_cell({c:c,
r:f});if("number"===typeof d.v)d.t="n";else if("boolean"===typeof d.v)d.t="b";else if(d.v instanceof Date){d.t="n";d.z=XLSX.SSF._table[14];var g=d;var h=(Date.parse(d.v)-new Date(Date.UTC(1899,11,30)))/864E5;g.v=h}else d.t="s";b[l]=d}}1E7>e.s.c&&(b["!ref"]=XLSX.utils.encode_range(e));return b}function da(a){var b=0,c;if(0===a.length)return b;var f=0;for(c=a.length;f<c;f++){var d=a.charCodeAt(f);b=(b<<5)-b+d;b|=0}return b}function A(a,c,e){var b=window.navigator.userAgent;if(!1!==a&&(0<b.indexOf("MSIE ")||
b.match(/Trident.*rv\:11\./)))if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(new Blob([e]),a);else{if(c=document.createElement("iframe"))document.body.appendChild(c),c.setAttribute("style","display:none"),c.contentDocument.open("txt/html","replace"),c.contentDocument.write(e),c.contentDocument.close(),c.focus(),c.contentDocument.execCommand("SaveAs",!0,a),document.body.removeChild(c)}else if(b=document.createElement("a")){var d=null;b.style.display="none";!1!==a?b.download=
a:b.target="_blank";"object"==typeof e?(d=window.URL.createObjectURL(e),b.href=d):0<=c.toLowerCase().indexOf("base64,")?b.href=c+D(e):b.href=c+encodeURIComponent(e);document.body.appendChild(b);if(document.createEvent)null===R&&(R=document.createEvent("MouseEvents")),R.initEvent("click",!0,!1),b.dispatchEvent(R);else if(document.createEventObject)b.fireEvent("onclick");else if("function"==typeof b.onclick)b.onclick();d&&window.URL.revokeObjectURL(d);document.body.removeChild(b)}}function D(a){var b=
"",c,f=0;a=a.replace(/\x0d\x0a/g,"\n");var d="";for(c=0;c<a.length;c++){var g=a.charCodeAt(c);128>g?d+=String.fromCharCode(g):(127<g&&2048>g?d+=String.fromCharCode(g>>6|192):(d+=String.fromCharCode(g>>12|224),d+=String.fromCharCode(g>>6&63|128)),d+=String.fromCharCode(g&63|128))}for(a=d;f<a.length;){var l=a.charCodeAt(f++);d=a.charCodeAt(f++);c=a.charCodeAt(f++);g=l>>2;l=(l&3)<<4|d>>4;var r=(d&15)<<2|c>>6;var h=c&63;isNaN(d)?r=h=64:isNaN(c)&&(h=64);b=b+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(r)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)}return b}var a={consoleLog:!1,csvEnclosure:'"',csvSeparator:",",csvUseBOM:!0,displayTableName:!1,escape:!1,excelFileFormat:"xlshtml",excelstyles:[],fileName:"tableExport",htmlContent:!1,ignoreColumn:[],ignoreRow:[],jsonScope:"all",jspdf:{orientation:"p",unit:"pt",format:"a4",
margins:{left:20,right:10,top:10,bottom:10},autotable:{styles:{cellPadding:2,rowHeight:12,fontSize:8,fillColor:255,textColor:50,fontStyle:"normal",overflow:"ellipsize",halign:"left",valign:"middle"},headerStyles:{fillColor:[52,73,94],textColor:255,fontStyle:"bold",halign:"center"},alternateRowStyles:{fillColor:245},tableExport:{onAfterAutotable:null,onBeforeAutotable:null,onAutotableText:null,onTable:null,outputImages:!0}}},numbers:{html:{decimalMark:".",thousandsSeparator:","},output:{decimalMark:".",
thousandsSeparator:","}},onCellData:null,onCellHtmlData:null,onMsoNumberFormat:null,outputMode:"file",pdfmake:{enabled:!1,docDefinition:{pageOrientation:"portrait",defaultStyle:{font:"Roboto"}},fonts:{}},tbodySelector:"tr",tfootSelector:"tr",theadSelector:"tr",tableName:"myTableName",type:"csv",worksheetName:"Worksheet"},t=this,R=null,q=[],g=[],p=0,y=[],h="",I=[];c.extend(!0,a,n);I=N(t);if("csv"==a.type||"tsv"==a.type||"txt"==a.type){var C="",J=0,p=0,W=function(b,d,e){b.each(function(){h="";x(this,
d,p,e+b.length,function(b,c,e){var f=h,d="";if(null!==b)if(b=v(b,c,e),c=null===b||""===b?"":b.toString(),"tsv"==a.type)b instanceof Date&&b.toLocaleString(),d=Q(c,"\t"," ");else if(b instanceof Date)d=a.csvEnclosure+b.toLocaleString()+a.csvEnclosure;else if(d=Q(c,a.csvEnclosure,a.csvEnclosure+a.csvEnclosure),0<=d.indexOf(a.csvSeparator)||/[\r\n ]/g.test(d))d=a.csvEnclosure+d+a.csvEnclosure;h=f+(d+("tsv"==a.type?"\t":a.csvSeparator))});h=c.trim(h).substring(0,h.length-1);0<h.length&&(0<C.length&&(C+=
"\n"),C+=h);p++});return b.length},J=J+W(c(t).find("thead").first().find(a.theadSelector),"th,td",J);c(t).find("tbody").each(function(){J+=W(c(this).find(a.tbodySelector),"td,th",J)});a.tfootSelector.length&&W(c(t).find("tfoot").first().find(a.tfootSelector),"td,th",J);C+="\n";!0===a.consoleLog&&console.log(C);if("string"===a.outputMode)return C;if("base64"===a.outputMode)return D(C);if("window"===a.outputMode){A(!1,"data:text/"+("csv"==a.type?"csv":"plain")+";charset=utf-8,",C);return}try{var w=
new Blob([C],{type:"text/"+("csv"==a.type?"csv":"plain")+";charset=utf-8"});saveAs(w,a.fileName+"."+a.type,"csv"!=a.type||!1===a.csvUseBOM)}catch(b){A(a.fileName+"."+a.type,"data:text/"+("csv"==a.type?"csv":"plain")+";charset=utf-8,"+("csv"==a.type&&a.csvUseBOM?"\ufeff":""),C)}}else if("sql"==a.type){var p=0,u="INSERT INTO `"+a.tableName+"` (",q=c(t).find("thead").first().find(a.theadSelector);q.each(function(){x(this,"th,td",p,q.length,function(a,c,e){u+="'"+v(a,c,e)+"',"});p++;u=c.trim(u);u=c.trim(u).substring(0,
u.length-1)});u+=") VALUES ";c(t).find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});a.tfootSelector.length&&g.push.apply(g,c(t).find("tfoot").find(a.tfootSelector));c(g).each(function(){h="";x(this,"td,th",p,q.length+g.length,function(a,c,e){h+="'"+v(a,c,e)+"',"});3<h.length&&(u+="("+h,u=c.trim(u).substring(0,u.length-1),u+="),");p++});u=c.trim(u).substring(0,u.length-1);u+=";";!0===a.consoleLog&&console.log(u);if("string"===a.outputMode)return u;if("base64"===a.outputMode)return D(u);
try{w=new Blob([u],{type:"text/plain;charset=utf-8"}),saveAs(w,a.fileName+".sql")}catch(b){A(a.fileName+".sql","data:application/sql;charset=utf-8,",u)}}else if("json"==a.type){var K=[],q=c(t).find("thead").first().find(a.theadSelector);q.each(function(){var a=[];x(this,"th,td",p,q.length,function(b,c,f){a.push(v(b,c,f))});K.push(a)});var X=[];c(t).find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});a.tfootSelector.length&&g.push.apply(g,c(t).find("tfoot").find(a.tfootSelector));
c(g).each(function(){var a={},d=0;x(this,"td,th",p,q.length+g.length,function(b,c,g){K.length?a[K[K.length-1][d]]=v(b,c,g):a[d]=v(b,c,g);d++});!1===c.isEmptyObject(a)&&X.push(a);p++});n="";n="head"==a.jsonScope?JSON.stringify(K):"data"==a.jsonScope?JSON.stringify(X):JSON.stringify({header:K,data:X});!0===a.consoleLog&&console.log(n);if("string"===a.outputMode)return n;if("base64"===a.outputMode)return D(n);try{w=new Blob([n],{type:"application/json;charset=utf-8"}),saveAs(w,a.fileName+".json")}catch(b){A(a.fileName+
".json","data:application/json;charset=utf-8;base64,",n)}}else if("xml"===a.type){p=0;var B='<?xml version="1.0" encoding="utf-8"?>';B+="<tabledata><fields>";q=c(t).find("thead").first().find(a.theadSelector);q.each(function(){x(this,"th,td",p,q.length,function(a,c,e){B+="<field>"+v(a,c,e)+"</field>"});p++});B+="</fields><data>";var ha=1;c(t).find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});a.tfootSelector.length&&g.push.apply(g,c(t).find("tfoot").find(a.tfootSelector));
c(g).each(function(){var a=1;h="";x(this,"td,th",p,q.length+g.length,function(b,c,f){h+="<column-"+a+">"+v(b,c,f)+"</column-"+a+">";a++});0<h.length&&"<column-1></column-1>"!=h&&(B+='<row id="'+ha+'">'+h+"</row>",ha++);p++});B+="</data></tabledata>";!0===a.consoleLog&&console.log(B);if("string"===a.outputMode)return B;if("base64"===a.outputMode)return D(B);try{w=new Blob([B],{type:"application/xml;charset=utf-8"}),saveAs(w,a.fileName+".xml")}catch(b){A(a.fileName+".xml","data:application/xml;charset=utf-8;base64,",
B)}}else if("excel"===a.type&&"xmlss"===a.excelFileFormat){var k=c(t).filter(function(){return"none"!=c(this).data("tableexport-display")&&(c(this).is(":visible")||"always"==c(this).data("tableexport-display"))});var Y=[];k.each(function(){var b=c(this),d="";p=0;I=N(this);q=b.find("thead").first().find(a.theadSelector);var d=d+"<Table>",e=0;q.each(function(){h="";x(this,"th,td",p,q.length,function(a,b,c){null!==a&&(h+='<Cell><Data ss:Type="String">'+v(a,b,c)+"</Data></Cell>",e++)});0<h.length&&(d+=
"<Row>"+h+"</Row>");p++});g=[];b.find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});c(g).each(function(){c(this);h="";x(this,"td,th",p,q.length+g.length,function(a,b,c){if(null!==a){var d="String",e="";a=v(a,b,c);!1!==jQuery.isNumeric(a)?d="Number":(b=a,-1<b.indexOf("%")?(b=U(b.replace(/%/g,"")),!1!==b&&(b/=100)):b=!1,number=b,!1!==number&&(a=number,d="Number",e=' ss:StyleID="pct1"'));"Number"!==d&&(a=a.replace(/\n/g,"<br>"));h+="<Cell"+e+'><Data ss:Type="'+d+'">'+a+"</Data></Cell>"}});
0<h.length&&(d+="<Row>"+h+"</Row>");p++});d+="</Table>";Y.push(d);!0===a.consoleLog&&console.log(d)});k='<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?> <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40"> <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"> <Created>'+
(new Date).toISOString()+'</Created> </DocumentProperties> <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office"> <AllowPNG/> </OfficeDocumentSettings> <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> <WindowHeight>9000</WindowHeight> <WindowWidth>13860</WindowWidth> <WindowTopX>0</WindowTopX> <WindowTopY>0</WindowTopY> <ProtectStructure>False</ProtectStructure> <ProtectWindows>False</ProtectWindows> </ExcelWorkbook> <Styles> <Style ss:ID="Default" ss:Name="Default"> <Alignment ss:Vertical="Center"/> <Borders/> <Font/> <Interior/> <NumberFormat/> <Protection/> </Style> <Style ss:ID="Normal" ss:Name="Normal"/> <Style ss:ID="pct1">   <NumberFormat ss:Format="Percent"/> </Style> </Styles>';
for(n=0;n<Y.length;n++)k+='<Worksheet ss:Name="'+("string"===typeof a.worksheetName?a.worksheetName+" "+(n+1):"undefined"!==typeof a.worksheetName[n]?a.worksheetName[n]:"Table "+(n+1))+'">'+Y[n]+"<WorksheetOptions/> </Worksheet>";k+="</Workbook>";!0===a.consoleLog&&console.log(k);if("string"===a.outputMode)return k;if("base64"===a.outputMode)return D(k);try{w=new Blob([k],{type:"application/xml;charset=utf-8"}),saveAs(w,a.fileName+".xml")}catch(b){A(a.fileName+".xml","data:application/xml;charset=utf-8;base64,",
B)}}else if("excel"==a.type||"xls"==a.type||"word"==a.type||"doc"==a.type){n="excel"==a.type||"xls"==a.type?"excel":"word";var G="excel"==n?"xls":"doc",S='xmlns:x="urn:schemas-microsoft-com:office:'+n+'"';k=c(t).filter(function(){return"none"!=c(this).data("tableexport-display")&&(c(this).is(":visible")||"always"==c(this).data("tableexport-display"))});var H="";k.each(function(){var b=c(this);p=0;I=N(this);H+="<table><thead>";q=b.find("thead").first().find(a.theadSelector);q.each(function(){h="";
x(this,"th,td",p,q.length,function(b,d,f){if(null!==b){var e="";h+="<th";for(var g in a.excelstyles)if(a.excelstyles.hasOwnProperty(g)){var l=c(b).css(a.excelstyles[g]);""!==l&&"0px none rgb(0, 0, 0)"!=l&&"rgba(0, 0, 0, 0)"!=l&&(e+=""===e?'style="':";",e+=a.excelstyles[g]+":"+l)}""!==e&&(h+=" "+e+'"');c(b).is("[colspan]")&&(h+=' colspan="'+c(b).attr("colspan")+'"');c(b).is("[rowspan]")&&(h+=' rowspan="'+c(b).attr("rowspan")+'"');h+=">"+v(b,d,f)+"</th>"}});0<h.length&&(H+="<tr>"+h+"</tr>");p++});H+=
"</thead><tbody>";b.find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});a.tfootSelector.length&&g.push.apply(g,b.find("tfoot").find(a.tfootSelector));c(g).each(function(){var b=c(this);h="";x(this,"td,th",p,q.length+g.length,function(d,f,g){if(null!==d){var e="",l=c(d).data("tableexport-msonumberformat");"undefined"==typeof l&&"function"===typeof a.onMsoNumberFormat&&(l=a.onMsoNumberFormat(d,f,g));"undefined"!=typeof l&&""!==l&&(e="style=\"mso-number-format:'"+l+"'");for(var m in a.excelstyles)a.excelstyles.hasOwnProperty(m)&&
(l=c(d).css(a.excelstyles[m]),""===l&&(l=b.css(a.excelstyles[m])),""!==l&&"0px none rgb(0, 0, 0)"!=l&&"rgba(0, 0, 0, 0)"!=l&&(e+=""===e?'style="':";",e+=a.excelstyles[m]+":"+l));h+="<td";""!==e&&(h+=" "+e+'"');c(d).is("[colspan]")&&(h+=' colspan="'+c(d).attr("colspan")+'"');c(d).is("[rowspan]")&&(h+=' rowspan="'+c(d).attr("rowspan")+'"');h+=">"+v(d,f,g).replace(/\n/g,"<br>")+"</td>"}});0<h.length&&(H+="<tr>"+h+"</tr>");p++});a.displayTableName&&(H+="<tr><td></td></tr><tr><td></td></tr><tr><td>"+v(c("<p>"+
a.tableName+"</p>"))+"</td></tr>");H+="</tbody></table>";!0===a.consoleLog&&console.log(H)});k='<html xmlns:o="urn:schemas-microsoft-com:office:office" '+S+' xmlns="http://www.w3.org/TR/REC-html40">'+('<meta http-equiv="content-type" content="application/vnd.ms-'+n+'; charset=UTF-8">')+"<head>";"excel"===n&&(k+="\x3c!--[if gte mso 9]>",k+="<xml>",k+="<x:ExcelWorkbook>",k+="<x:ExcelWorksheets>",k+="<x:ExcelWorksheet>",k+="<x:Name>",k+=a.worksheetName,k+="</x:Name>",k+="<x:WorksheetOptions>",k+="<x:DisplayGridlines/>",
k+="</x:WorksheetOptions>",k+="</x:ExcelWorksheet>",k+="</x:ExcelWorksheets>",k+="</x:ExcelWorkbook>",k+="</xml>",k+="<![endif]--\x3e");k+="<style>br {mso-data-placement:same-cell;}</style>";k+="</head>";k+="<body>";k+=H;k+="</body>";k+="</html>";!0===a.consoleLog&&console.log(k);if("string"===a.outputMode)return k;if("base64"===a.outputMode)return D(k);try{w=new Blob([k],{type:"application/vnd.ms-"+a.type}),saveAs(w,a.fileName+"."+G)}catch(b){A(a.fileName+"."+G,"data:application/vnd.ms-"+n+";base64,",
k)}}else if("xlsx"==a.type){var ia=[],Z=[],p=0,g=c(t).find("thead").first().find(a.theadSelector);c(t).find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});a.tfootSelector.length&&g.push.apply(g,c(t).find("tfoot").find(a.tfootSelector));c(g).each(function(){var a=[];x(this,"th,td",p,g.length,function(b,c,d){if("undefined"!==typeof b&&null!==b){var e=parseInt(b.getAttribute("colspan")),f=parseInt(b.getAttribute("rowspan"));b=v(b,c,d);""!==b&&b==+b&&(b=+b);Z.forEach(function(b){if(p>=
b.s.r&&p<=b.e.r&&a.length>=b.s.c&&a.length<=b.e.c)for(var c=0;c<=b.e.c-b.s.c;++c)a.push(null)});if(f||e)e=e||1,Z.push({s:{r:p,c:a.length},e:{r:p+(f||1)-1,c:a.length+e-1}});a.push(""!==b?b:null);if(e)for(f=0;f<e-1;++f)a.push(null)}});ia.push(a);p++});n=new V;G=pa(ia);G["!merges"]=Z;n.SheetNames.push(a.worksheetName);n.Sheets[a.worksheetName]=G;n=XLSX.write(n,{bookType:a.type,bookSST:!1,type:"binary"});try{w=new Blob([oa(n)],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"}),
saveAs(w,a.fileName+"."+a.type)}catch(b){A(a.fileName+"."+a.type,"data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8,",w)}}else if("png"==a.type)html2canvas(c(t)[0]).then(function(b){b=b.toDataURL();for(var c=atob(b.substring(22)),d=new ArrayBuffer(c.length),f=new Uint8Array(d),g=0;g<c.length;g++)f[g]=c.charCodeAt(g);!0===a.consoleLog&&console.log(c);if("string"===a.outputMode)return c;if("base64"===a.outputMode)return D(b);if("window"===a.outputMode)window.open(b);
else try{w=new Blob([d],{type:"image/png"}),saveAs(w,a.fileName+".png")}catch(F){A(a.fileName+".png","data:image/png,",w)}});else if("pdf"==a.type)if(!0===a.pdfmake.enabled){n=[];var ja=[],p=0,G=function(a,d,e){var b=0;c(a).each(function(){var a=[];x(this,d,p,e,function(b,c,d){if("undefined"!==typeof b&&null!==b){var e=parseInt(b.getAttribute("colspan")),f=parseInt(b.getAttribute("rowspan"));b=v(b,c,d)||" ";1<e||1<f?a.push({colSpan:e||1,rowSpan:f||1,text:b}):a.push(b)}else a.push(" ")});a.length&&
ja.push(a);b<a.length&&(b=a.length);p++});return b},q=c(this).find("thead").first().find(a.theadSelector);k=G(q,"th,td",q.length);for(S=n.length;S<k;S++)n.push("*");c(this).find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});a.tfootSelector.length&&g.push.apply(g,c(this).find("tfoot").find(a.tfootSelector));G(g,"th,td",q.length+g.length);n={content:[{table:{headerRows:q.length,widths:n,body:ja}}]};c.extend(!0,n,a.pdfmake.docDefinition);pdfMake.fonts={Roboto:{normal:"Roboto-Regular.ttf",
bold:"Roboto-Medium.ttf",italics:"Roboto-Italic.ttf",bolditalics:"Roboto-MediumItalic.ttf"}};c.extend(!0,pdfMake.fonts,a.pdfmake.fonts);pdfMake.createPdf(n).getBuffer(function(b){try{var c=new Blob([b],{type:"application/pdf"});saveAs(c,a.fileName+".pdf")}catch(e){A(a.fileName+".pdf","data:application/pdf;base64,",b)}})}else if(!1===a.jspdf.autotable){n={dim:{w:P(c(t).first().get(0),"width","mm"),h:P(c(t).first().get(0),"height","mm")},pagesplit:!1};var ka=new jsPDF(a.jspdf.orientation,a.jspdf.unit,
a.jspdf.format);ka.addHTML(c(t).first(),a.jspdf.margins.left,a.jspdf.margins.top,n,function(){aa(ka,!1)})}else{var d=a.jspdf.autotable.tableExport;if("string"===typeof a.jspdf.format&&"bestfit"===a.jspdf.format.toLowerCase()){var L={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89]},T="",M="",la=0;c(t).filter(":visible").each(function(){if("none"!=c(this).css("display")){var a=P(c(this).get(0),"width","pt");if(a>la){a>L.a0[0]&&(T="a0",M="l");for(var d in L)L.hasOwnProperty(d)&&
L[d][1]>a&&(T=d,M="l",L[d][0]>a&&(M="p"));la=a}}});a.jspdf.format=""===T?"a4":T;a.jspdf.orientation=""===M?"w":M}d.doc=new jsPDF(a.jspdf.orientation,a.jspdf.unit,a.jspdf.format);!0===d.outputImages&&(d.images={});"undefined"!=typeof d.images&&(c(t).filter(function(){return"none"!=c(this).data("tableexport-display")&&(c(this).is(":visible")||"always"==c(this).data("tableexport-display"))}).each(function(){var b=0;q=c(this).find("thead").find(a.theadSelector);c(this).find("tbody").each(function(){g.push.apply(g,
c(this).find(a.tbodySelector))});a.tfootSelector.length&&g.push.apply(g,c(this).find("tfoot").find(a.tfootSelector));c(g).each(function(){x(this,"td,th",q.length+b,q.length+g.length,function(a,b,f){"undefined"!==typeof a&&null!==a&&(b=c(a).children(),"undefined"!=typeof b&&0<b.length&&ca(a,b,d))});b++})}),q=[],g=[]);ma(d,function(b){c(t).filter(function(){return"none"!=c(this).data("tableexport-display")&&(c(this).is(":visible")||"always"==c(this).data("tableexport-display"))}).each(function(){var b,
e=0;I=N(this);d.columns=[];d.rows=[];d.rowoptions={};if("function"===typeof d.onTable&&!1===d.onTable(c(this),a))return!0;a.jspdf.autotable.tableExport=null;var f=c.extend(!0,{},a.jspdf.autotable);a.jspdf.autotable.tableExport=d;f.margin={};c.extend(!0,f.margin,a.jspdf.margins);f.tableExport=d;"function"!==typeof f.beforePageContent&&(f.beforePageContent=function(a){1==a.pageCount&&a.table.rows.concat(a.table.headerRow).forEach(function(b){0<b.height&&(b.height+=(2-1.15)/2*b.styles.fontSize,a.table.height+=
(2-1.15)/2*b.styles.fontSize)})});"function"!==typeof f.createdHeaderCell&&(f.createdHeaderCell=function(a,b){a.styles=c.extend({},b.row.styles);if("undefined"!=typeof d.columns[b.column.dataKey]){var e=d.columns[b.column.dataKey];if("undefined"!=typeof e.rect){a.contentWidth=e.rect.width;if("undefined"==typeof d.heightRatio||0===d.heightRatio){var g=b.row.raw[b.column.dataKey].rowspan?b.row.raw[b.column.dataKey].rect.height/b.row.raw[b.column.dataKey].rowspan:b.row.raw[b.column.dataKey].rect.height;
d.heightRatio=a.styles.rowHeight/g}g=b.row.raw[b.column.dataKey].rect.height*d.heightRatio;g>a.styles.rowHeight&&(a.styles.rowHeight=g)}"undefined"!=typeof e.style&&!0!==e.style.hidden&&(a.styles.halign=e.style.align,"inherit"===f.styles.fillColor&&(a.styles.fillColor=e.style.bcolor),"inherit"===f.styles.textColor&&(a.styles.textColor=e.style.color),"inherit"===f.styles.fontStyle&&(a.styles.fontStyle=e.style.fstyle))}});"function"!==typeof f.createdCell&&(f.createdCell=function(a,b){var c=d.rowoptions[b.row.index+
":"+b.column.dataKey];"undefined"!=typeof c&&"undefined"!=typeof c.style&&!0!==c.style.hidden&&(a.styles.halign=c.style.align,"inherit"===f.styles.fillColor&&(a.styles.fillColor=c.style.bcolor),"inherit"===f.styles.textColor&&(a.styles.textColor=c.style.color),"inherit"===f.styles.fontStyle&&(a.styles.fontStyle=c.style.fstyle))});"function"!==typeof f.drawHeaderCell&&(f.drawHeaderCell=function(a,b){var c=d.columns[b.column.dataKey];return(!0!==c.style.hasOwnProperty("hidden")||!0!==c.style.hidden)&&
0<=c.rowIndex?ba(a,b,c):!1});"function"!==typeof f.drawCell&&(f.drawCell=function(a,b){var c=d.rowoptions[b.row.index+":"+b.column.dataKey];if(ba(a,b,c))if(d.doc.rect(a.x,a.y,a.width,a.height,a.styles.fillStyle),"undefined"!=typeof c&&"undefined"!=typeof c.kids&&0<c.kids.length){var e=a.height/c.rect.height;if(e>d.dh||"undefined"==typeof d.dh)d.dh=e;d.dw=a.width/c.rect.width;e=a.textPos.y;ea(a,c.kids,d);a.textPos.y=e;fa(a,c.kids,d)}else fa(a,{},d);return!1});d.headerrows=[];q=c(this).find("thead").find(a.theadSelector);
q.each(function(){b=0;d.headerrows[e]=[];x(this,"th,td",e,q.length,function(a,c,f){var g=ga(a);g.title=v(a,c,f);g.key=b++;g.rowIndex=e;d.headerrows[e].push(g)});e++});if(0<e)for(var h=e-1;0<=h;)c.each(d.headerrows[h],function(){var a=this;0<h&&null===this.rect&&(a=d.headerrows[h-1][this.key]);null!==a&&0<=a.rowIndex&&(!0!==a.style.hasOwnProperty("hidden")||!0!==a.style.hidden)&&d.columns.push(a)}),h=0<d.columns.length?-1:h-1;var k=0;g=[];c(this).find("tbody").each(function(){g.push.apply(g,c(this).find(a.tbodySelector))});
a.tfootSelector.length&&g.push.apply(g,c(this).find("tfoot").find(a.tfootSelector));c(g).each(function(){var a=[];b=0;x(this,"td,th",e,q.length+g.length,function(e,f,g){if("undefined"===typeof d.columns[b]){var h={title:"",key:b,style:{hidden:!0}};d.columns.push(h)}"undefined"!==typeof e&&null!==e?(h=ga(e),h.kids=c(e).children()):(h=c.extend(!0,{},d.rowoptions[k+":"+(b-1)]),h.colspan=-1);d.rowoptions[k+":"+b++]=h;a.push(v(e,f,g))});a.length&&(d.rows.push(a),k++);e++});if("function"===typeof d.onBeforeAutotable)d.onBeforeAutotable(c(this),
d.columns,d.rows,f);d.doc.autoTable(d.columns,d.rows,f);if("function"===typeof d.onAfterAutotable)d.onAfterAutotable(c(this),f);a.jspdf.autotable.startY=d.doc.autoTableEndPosY()+f.margin.top});aa(d.doc,"undefined"!=typeof d.images&&!1===jQuery.isEmptyObject(d.images));"undefined"!=typeof d.headerrows&&(d.headerrows.length=0);"undefined"!=typeof d.columns&&(d.columns.length=0);"undefined"!=typeof d.rows&&(d.rows.length=0);delete d.doc;d.doc=null})}return this}})})(jQuery);
