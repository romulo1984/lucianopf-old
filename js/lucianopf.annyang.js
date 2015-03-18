//! annyang
//! version : 1.1.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
(function(a){"use strict";var b=this,c=b.SpeechRecognition||b.webkitSpeechRecognition||b.mozSpeechRecognition||b.msSpeechRecognition||b.oSpeechRecognition;if(!c)return b.annyang=null,a;var d,e,f=[],g={start:[],error:[],end:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},h=0,i=!1,j="font-weight: bold; color: #008b00;",k=/\s*\((.*?)\)\s*/g,l=/(\(\?:[^)]+\))\?/g,m=/(\(\?)?:\w+/g,n=/\*\w+/g,o=/[\-{}\[\]+?.,\\\^$|#]/g,p=function(a){return a=a.replace(o,"\\$&").replace(k,"(?:$1)?").replace(m,function(a,b){return b?a:"([^\\s]+)"}).replace(n,"(.*?)").replace(l,"\\s*$1?\\s*"),new RegExp("^"+a+"$","i")},q=function(a){a.forEach(function(a){a.callback.apply(a.context)})},r=function(){d===a&&b.annyang.init({},!1)};b.annyang={init:function(k,l){l=l===a?!0:!!l,d&&d.abort&&d.abort(),d=new c,d.maxAlternatives=5,d.continuous=!0,d.lang="pt-BR",d.onstart=function(){q(g.start)},d.onerror=function(a){switch(q(g.error),a.error){case"network":q(g.errorNetwork);break;case"not-allowed":case"service-not-allowed":e=!1,(new Date).getTime()-h<200?q(g.errorPermissionBlocked):q(g.errorPermissionDenied)}},d.onend=function(){if(q(g.end),e){var a=(new Date).getTime()-h;1e3>a?setTimeout(b.annyang.start,1e3-a):b.annyang.start()}},d.onresult=function(a){q(g.result);for(var c,d=a.results[a.resultIndex],e=0;e<d.length;e++){c=d[e].transcript.trim(),i&&b.console.log("Comando reconhecido: %c"+c,j);for(var h=0,k=f.length;k>h;h++){var l=f[h].command.exec(c);if(l){var m=l.slice(1);return i&&(b.console.log("comando confere com: %c"+f[h].originalPhrase,j),m.length&&b.console.log("com os parametros",m)),f[h].callback.apply(this,m),q(g.resultMatch),!0}}}return q(g.resultNoMatch),!1},l&&(f=[]),k.length&&this.addCommands(k)},start:function(b){r(),b=b||{},e=b.autoRestart!==a?!!b.autoRestart:!0,h=(new Date).getTime(),d.start()},abort:function(){r(),e=!1,d.abort()},debug:function(a){i=arguments.length>0?!!a:!0},setLanguage:function(a){r(),d.lang=a},addCommands:function(a){var c,d;r();for(var e in a)if(a.hasOwnProperty(e)){if(c=b[a[e]]||a[e],"function"!=typeof c)continue;d=p(e),f.push({command:d,callback:c,originalPhrase:e})}i&&b.console.log("Comandos carregados: %c"+f.length,j)},removeCommands:function(a){a=Array.isArray(a)?a:[a],f=f.filter(function(b){for(var c=0;c<a.length;c++)if(a[c]===b.originalPhrase)return!1;return!0})},addCallback:function(c,d,e){if(g[c]!==a){var f=b[d]||d;"function"==typeof f&&g[c].push({callback:f,context:e||this})}}}}).call(this);

// Annyang injetado

if (annyang) {
	var ativar_inicio = function(){
		$(".ativa_incio").click();
	};
	var ativar_sobre = function(){
		$(".ativa_sobre").click();
	};
	var ativar_projetos = function(){
		$(".ativa_projetos").click();
	};
	var ativar_contato = function(){
		$(".ativa_contato").click();
	};
	// * --------------------------------------------------------------------------------------------------------------------
	// *
	// * Aqui definimos todos os comandos que a Miley entenderá (cortesia da biblioteca de reconhecimento de fala Annyang.js)
	// *
	// * --------------------------------------------------------------------------------------------------------------------

	var commands = {
		'ativar inicio': ativar_inicio,
		'inicio': ativar_inicio,
		'início': ativar_inicio,
		'ínicio': ativar_inicio,
		'home': ativar_inicio,
		'ativar sobre': ativar_sobre,
		'sobre': ativar_sobre,
		'about': ativar_sobre,
		'ativar projetos': ativar_projetos,
		'projetos': ativar_projetos,
		'projeto': ativar_projetos,
		'projects': ativar_projetos,
		'portifolio': ativar_projetos,
		'ativar contato': ativar_contato,
		'contato': ativar_contato,
		'contact': ativar_contato,
		'contactar': ativar_contato,
		'email': ativar_contato

	};

	annyang.debug();
	annyang.addCommands(commands);
	annyang.setLanguage('pt-BR');
	// annyang.addCallback('resultNoMatch', function() {d.getElementById("texto").value = "Comando ou sentença desconhecidos."; _EaDsVr();});
	// annyang.addCallback('errorPermissionDenied', function() {d.getElementById("texto").value = permissaoNegada; _EaDsVr();});
	annyang.start();
	}
else {alert('Este navegador não suporta comandos de voz.');}