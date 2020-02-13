function consoleInfo(a){if(typeof console==="object"&&typeof console.info==="function"){console.info(a)}}function consoleError(a){if(typeof console==="object"&&typeof console.error==="function"){console.error(a)}}var GAUTH=function(){var k,v,q,A,g,t,B,x,u,b,c,h;var s=10,n;var d;function f(C,D){A=document.createElement("IFRAME");A.setAttribute("src",D);A.setAttribute("id",d);A.setAttribute("title","Account Operations");A.setAttribute("scrolling","no");A.setAttribute("marginheight","0");A.setAttribute("marginwidth","0");A.setAttribute("class","gauth-iframe");A.style.width="100%";A.style.height="0px";A.style.border="none";A.frameBorder="0";C.appendChild(A);parent.document.getElementById(d).src=D}function l(){if(v.indexOf("/login")!=-1){v=v.substring(0,v.indexOf("/login"))}if(v.indexOf("/signin")!=-1){v=v.substring(0,v.indexOf("/signin"))}return v}function w(){var C=v.substring(0,v.indexOf("://"));var D=v.substring(C.length+3,v.length);if(D.indexOf("/")!=-1){D=D.substring(0,D.indexOf("/"))}return C+"://"+D}function a(){return"/login"}function r(){return"/signin"}function z(){return"/createNewAccount"}function i(C){g=document.createElement("DIV");g.setAttribute("class","gauth-loading");g.innerHTML=(x?'<link href="'+x+'" rel="stylesheet" type="text/css" media="all" />':"")+"<img src='"+w()+"/sso/images/ajax-loader.gif'/>";C.appendChild(g)}function o(C){if(C==undefined||(C!=false&&C!=true)){return true}else{return false}}function p(C){if(C){var D=[];if(!C.gauthHost){D.push("gauthHost")}if(!C.locale){D.push("locale")}C.locale=C.locale.replace(/^([a-z]{2})\-([a-z]{2})$/i,"$1_$2");if(!C.clientId){D.push("clientId")}if(o(C.rememberMeShown)){C.rememberMeShown=true}if(o(C.createAccountShown)){C.createAccountShown=true}if(o(C.openCreateAccount)){C.openCreateAccount=false}if(o(C.displayNameShown)){C.displayNameShown=false}if(o(C.consumeServiceTicket)){C.consumeServiceTicket=true}if(o(C.initialFocus)){C.initialFocus=true}if(o(C.embedWidget)){C.embedWidget=false}if(o(C.socialEnabled)){C.socialEnabled=true}if(o(C.generateExtraServiceTicket)){C.generateExtraServiceTicket=false}if(o(C.generateTwoExtraServiceTickets)){C.generateTwoExtraServiceTickets=false}if(o(C.generateNoServiceTicket)){C.generateNoServiceTicket=false}if(o(C.globalOptInShown)){C.globalOptInShown=false}if(o(C.globalOptInChecked)){C.globalOptInChecked=false}if(o(C.mobile)){C.mobile=false}if(o(C.connectLegalTerms)){C.connectLegalTerms=false}if(o(C.showTermsOfUse)){C.showTermsOfUse=false}if(o(C.showPrivacyPolicy)){C.showPrivacyPolicy=false}if(o(C.showConnectLegalAge)){C.showConnectLegalAge=false}if(o(C.locationPromptShown)){C.locationPromptShown=false}if(o(C.showPassword)){C.showPassword=true}if(o(C.useCustomHeader)){C.useCustomHeader=false}if(D.length===0){k=C;if(k.target){B=k.target}v=k.gauthHost;if(k.cssUrl){x=k.cssUrl}return}if(D.length>1){throw"The following are required configuration parameters!: "+D}else{throw D+" is a required configuration parameter!"}}else{throw"Configuration is required!"}}function j(F,C){if(document.getElementById("gauth-light-box")==null){consoleInfo("gauth-widget.js LoadPopupInDialogBox(): calling loadLightBoxes() because gauth-light-box is null");loadLightBoxes()}b=document.getElementById("gauth-light-box");b.innerHTML="<a class='button' id='liteBoxClose' href='#' onclick='hideLightBox();return false;'><span>X</span></a>";var E;var D=l();E=D+F+"&lightBox=true";consoleInfo("gauth-widget.js LoadPopupInDialogBox(): popup_source: "+E);if(document.getElementById("popup-iframe-id")){purge(document.getElementById("popup-iframe-id"));b.removeChild(document.getElementById("popup-iframe-id"))}e(b,E,C)}function e(C,E,D){h=document.createElement("IFRAME");h.setAttribute("src",E);h.setAttribute("title",D);h.setAttribute("id","popup-iframe-id");h.setAttribute("scrolling","no");h.setAttribute("marginheight","0");h.setAttribute("marginwidth","0");h.setAttribute("class","popup-iframe-class");h.style.width="100%";h.style.height="100%";h.style.border="none";h.frameBorder="0";C.appendChild(h)}function m(C){if(y(C)){return}var D=document.createElement("link");D.setAttribute("rel","stylesheet");D.setAttribute("type","text/css");D.setAttribute("href",C);document.getElementsByTagName("head")[0].appendChild(D)}function y(C){var F="href";var E=document.getElementsByTagName("link");for(var D=E.length;D>=0;D--){if(E[D]&&E[D].getAttribute(F)!=null&&E[D].getAttribute(F).indexOf(C)!=-1){return true}}return false}return{loadGAuth:function(){q=document.getElementById(k.id?k.id:"gauth-widget");d=k.id?"gauth-widget-frame-"+k.id:"gauth-widget-frame";i(q);var D=l();var C;if(!k.redirectAfterAccountLoginUrl){C="service="+encodeURIComponent(removeRequestParameters(document.location.href))}else{if(k.redirectAfterAccountLoginUrl.indexOf("http")==0){C="service="+encodeURIComponent(k.redirectAfterAccountLoginUrl)}else{C="service="+encodeURIComponent(getHost()+k.redirectAfterAccountLoginUrl)}}if(k.callBackWebHostUrl){C+="&webhost="+encodeURIComponent(k.callBackWebHostUrl)}C+="&source="+encodeURIComponent(removeRequestParameters(document.location.href));if(k.redirectAfterAccountLoginUrl){if(k.redirectAfterAccountLoginUrl.indexOf("http")==0){C+="&redirectAfterAccountLoginUrl="+encodeURIComponent(k.redirectAfterAccountLoginUrl)}else{C+="&redirectAfterAccountLoginUrl="+encodeURIComponent(getHost()+k.redirectAfterAccountLoginUrl)}}if(k.redirectAfterAccountCreationUrl){if(k.redirectAfterAccountCreationUrl.indexOf("http")==0){C+="&redirectAfterAccountCreationUrl="+encodeURIComponent(k.redirectAfterAccountCreationUrl)}else{C+="&redirectAfterAccountCreationUrl="+encodeURIComponent(getHost()+k.redirectAfterAccountCreationUrl)}}else{if(k.redirectAfterAccountLoginUrl){if(k.redirectAfterAccountLoginUrl.indexOf("http")==0){C+="&redirectAfterAccountCreationUrl="+encodeURIComponent(k.redirectAfterAccountLoginUrl)}else{C+="&redirectAfterAccountCreationUrl="+encodeURIComponent(getHost()+k.redirectAfterAccountLoginUrl)}}}C+="&gauthHost="+encodeURIComponent(k.gauthHost);C+="&locale="+k.locale;C+="&id="+k.id;if(k.cssUrl){C+="&cssUrl="+encodeURIComponent(k.cssUrl)}if(k.productSupportUrl){C+="&productSupportUrl="+encodeURIComponent(k.productSupportUrl)}if(k.termsOfUseUrl){C+="&termsOfUseUrl="+encodeURIComponent(k.termsOfUseUrl)}if(k.privacyStatementUrl){C+="&privacyStatementUrl="+encodeURIComponent(k.privacyStatementUrl)}if(k.customerId){C+="&customerId="+k.customerId}C+="&clientId="+k.clientId;C+="&rememberMeShown="+k.rememberMeShown;C+="&rememberMeChecked="+k.rememberMeChecked;C+="&createAccountShown="+k.createAccountShown;C+="&openCreateAccount="+k.openCreateAccount;C+="&displayNameShown="+k.displayNameShown;C+="&consumeServiceTicket="+k.consumeServiceTicket;C+="&initialFocus="+k.initialFocus;C+="&embedWidget="+k.embedWidget;if(!k.socialEnabled){C+="&socialEnabled="+k.socialEnabled}C+="&generateExtraServiceTicket="+k.generateExtraServiceTicket;C+="&generateTwoExtraServiceTickets="+k.generateTwoExtraServiceTickets;C+="&generateNoServiceTicket="+k.generateNoServiceTicket;C+="&globalOptInShown="+k.globalOptInShown;C+="&globalOptInChecked="+k.globalOptInChecked;C+="&mobile="+k.mobile;C+="&connectLegalTerms="+k.connectLegalTerms;C+="&showTermsOfUse="+k.showTermsOfUse;C+="&showPrivacyPolicy="+k.showPrivacyPolicy;C+="&showConnectLegalAge="+k.showConnectLegalAge;C+="&locationPromptShown="+k.locationPromptShown;C+="&showPassword="+k.showPassword;C+="&useCustomHeader="+k.useCustomHeader;if(k.lockToEmailAddress){C+="&lockToEmailAddress="+encodeURIComponent(k.lockToEmailAddress)}t=D+r()+"?"+C;u=z()+"?"+C;consoleInfo("gauth-widget.js loadGAuth(): source: "+t);consoleInfo("gauth-widget.js loadGAuth(): createAccountUrl: "+u);if(k.openCreateAccount){t=D+u}consoleInfo("gauth-widget.js loadGAuth(): source after check: "+t);if(k.embedWidget){consoleInfo("gauth-widget.js loadGAuth(): Setting document.location.href to '"+t+"'");document.location.href=t}else{consoleInfo("gauth-widget.js loadGAuth(): Calling appendIFrame('"+t+"'");f(q,t);n=setTimeout(function(){GAUTH_Events.error({status:"error",errorDetails:"No response from the server in "+s+" seconds."})},s*1000)}},init:function(C){try{p(C);m(v+"/css/gauth-widget.css?20190903");XD.receiveMessage(function(E){if(E&&E.data){var J=E.data;if(typeof(J)==="string"){J=JSON.parse(E.data)}GAUTH_Events.messagePosted(J);if(J.gauthInitHeight){if(g&&q){q.removeChild(g);g=undefined}clearTimeout(n);consoleInfo("gauth-widget.js: Initializing gauth height to: "+J.gauthInitHeight);A.style.height=J.gauthInitHeight+20+"px"}else{if(J.openLiteBox){consoleInfo("gauth-widget.js: Opening lite box, ID: ["+J.openLiteBox+"], URL: ["+J.popupUrl+"], TITLE: ["+J.popupTitle+"], LOGINPROVIDER: ["+J.loginProviderName+"], CLIENTID: ["+J.clientId+"]");j(J.popupUrl,J.popupTitle);var I=J.loginProviderName=="qq";var H=J.clientId=="GarminConnect"||J.clientId=="GarminExpressConnect"||J.clientId=="GarminConnectMobileAndroid"||J.clientId=="GarminConnectMobileiOS"||J.clientId=="VIRBDesktopWin"||J.clientId=="VIRBDesktopMac"||J.clientId=="VIRBMobileAndroid"||J.clientId=="VIRBMobileiOS";if(J.openLiteBox=="createAccountLink"){showLightBox(600+(H?180:0),850);return false}else{if(J.openLiteBox=="createAccountOrlinkSocialAccount"){showLightBox(300+(I?100:0),850);return false}else{if(J.openLiteBox=="createSocialAccount"){showLightBox(500+(H?100:0)+(I?100:0),850);return false}else{if(J.openLiteBox=="linkSocialAccount"){showLightBox(450,850);return false}}}}}else{if(J.closeLiteBox){consoleInfo("gauth-widget.js: Closing lite box...");hideLightBox();if(J.username){GAUTH.send({setUsername:"1",username:J.username})}}else{if(J.gauthHeight){consoleInfo("gauth-widget.js: Resizing gauth to md.gauthHeight: "+J.gauthHeight);A.style.height=J.gauthHeight+20+"px"}else{if(J.fullPageSocialAuth){consoleInfo("gauth-widget.js: Redirecting to full page social auth for provider ["+J.provider+"], redirectURL ["+J.redirectURL+"]...");var G=l()+"/socialAuth?provider="+J.provider+"&redirectURL="+J.redirectURL;consoleInfo("gauth-widget.js: Setting document.location.href to '"+G+"'");document.location.href=G}else{if(J.status){var F=J.status;switch(F){case"SUCCESS":if(B){window.location.href=B+"?serviceTicket="+J.serviceTicket}else{GAUTH_Events.success(J)}break;case"FAIL":GAUTH_Events.fail(J);break;case"ACCOUNT_LOCKED":GAUTH_Events.locked(J);break;case"ACCOUNT_DISABLED":GAUTH_Events.disabled(J);break;case"ACCOUNT_PROBLEM":GAUTH_Events.problem(J);break;default:GAUTH_Events.error(J)}}}}}}}}},w())}catch(D){GAUTH_Events.error({errorDetails:D})}},send:function(C){consoleInfo("gauth-widget.js send(): message: ["+JSON.stringify(C)+"]");consoleInfo("gauth-widget.js send(): target_url: ["+t+"]}");window.XD.postMessage(C,t,document.getElementById(d).contentWindow);return false},checkAuthentication:function(){var D;loginPath=a();if(k.embedWidget){D=l()+loginPath+"?clientId="+k.clientId+"&manual&service="+encodeURIComponent(removeRequestParameters(document.location.href))}else{D=l()+loginPath+"?clientId="+k.clientId+"&manual&service="+encodeURIComponent(document.location.href)}if(k.generateExtraServiceTicket){D+="&generateExtraServiceTicket=true"}if(k.generateTwoExtraServiceTickets){D+="&generateTwoExtraServiceTickets=true"}if(k.generateNoServiceTicket){D+="&generateNoServiceTicket=true"}if(k.callBackWebHostUrl){D+="&webhost="+encodeURIComponent(k.callBackWebHostUrl)}consoleInfo("gauth-widget.js: checkAuthentication(): Loading XMLHttpRequest URL: ["+D+"]");var C=new XMLHttpRequest();C.open("GET",D,true);C.setRequestHeader("Content-Type","application/json");C.withCredentials=true;C.onload=function(){if(this.status>=200&&this.status<400){var E=this.response;if(typeof(E)==="string"){E=JSON.parse(E)}consoleInfo("gauth-widget.js: checkAuthentication(): serviceTicketId: ["+E.serviceTicketId+"], serviceUrl: ["+E.serviceUrl+"]");if(E.serviceTicketId){GAUTH_Events.authenticated({status:"AUTHENTICATED",serviceTicket:E.serviceTicketId,serviceUrl:E.serviceUrl})}else{GAUTH_Events.not_authenticated({status:"NOT_AUTHENTICATED"})}}else{consoleError("gauth-widget.js: checkAuthentication(): Error loading XMLHttpRequest URL: ["+D+"]! Error Code: "+this.status+" Error Message "+this.statusText);GAUTH_Events.error({status:"ERROR",errorDetails:"Error Code: "+this.status+" Error Message "+this.statusText})}};C.onerror=function(){consoleError("gauth-widget.js: checkAuthentication(): Network Error occured when loading XMLHttpRequest URL: ["+D+"]! Error Code: "+this.status+" Error Message "+this.statusText);GAUTH_Events.error({status:"ERROR",errorDetails:"Error Code: "+this.status+" Error Message "+this.statusText})};C.send()},openCreateAccount:function(C){consoleInfo("gauth-widget.js: openCreateAccount(): Opening create account iFrame.");if(!C){C=""}j(u,C);showLightBox(800,850);return false}}}();function loadLightBoxes(){var a=document.createDocumentFragment();var c=document.createElement("div");c.id="gauth-light-box";c.className="LB-white-content";a.appendChild(c);var b=document.createElement("div");b.id="light_box_fade";b.className="LB-black-overlay";b.style.height=document.body.offsetHeight+20>screen.height?document.body.offsetHeight+20+"px":screen.height+"px";if(typeof document.body.style.maxHeight==="undefined"){b.style.width=document.body.scrollWidth+20+"px"}else{b.style.width="100%"}a.appendChild(b);document.body.appendChild(a)}function showLightBox(j,b){loadLightBoxes();var h=document.getElementById("gauth-light-box");h.style.display="block";h.style.height=j+"px";h.style.width=b+"px";h.style.position="absolute";h.style.left="50%";h.style.top="50%";var c=b/2;var a=j/2;var e=vpHeight()/2;var f=vpWidth()/2;h.style.marginTop="-"+Math.min(e,a)+"px";h.style.marginLeft="-"+Math.min(f,c)+"px";var g=document.getElementById("light_box_fade");if(g){g.style.display="block"}if(typeof document.body.style.maxHeight==="undefined"){select_boxes=document.getElementsByTagName("select");for(var d=0;d<select_boxes.length;d++){select_boxes[d].style.visibility="hidden"}}window.scrollTo(0,0);h.focus()}function hideLightBox(){consoleInfo("gauth-widget.js: hideLightBox(): Entering function.");var d=document.getElementById("gauth-light-box");if(d){d.style.display="none";var c=document.getElementById("light_box_fade");if(c){c.style.display="none"}purge(document.getElementById("popup-iframe-id"))}if(typeof document.body.style.maxHeight==="undefined"){select_boxes=document.getElementsByTagName("select");for(var b=0,a=select_boxes.length;b<a;b++){select_boxes[b].style.visibility="hidden"}}}function vpWidth(){return document.documentElement.clientWidth||document.body.clientWidth}function vpHeight(){return document.documentElement.clientHeight||document.body.clientHeight}function purge(f){var c,e,b,g;if(f){c=f.attributes;if(c){for(e=c.length-1;e>=0;e-=1){g=c[e].name;if(typeof f[g]==="function"){f[g]=null}}}c=f.childNodes;if(c){b=c.length;for(e=0;e<b;e+=1){purge(f.childNodes[e])}}}}function removeRequestParameters(a){if(a.indexOf("?")!=-1){return a.slice(0,a.indexOf("?"))}else{return a}}function getHost(){pathArray=window.location.href.split("/");return pathArray[0]+"//"+pathArray[2]}var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());var XD=function(){var e,d,b=1,c,a=this;return{postMessage:function(g,j,h){if(!j){return}h=h||parent;if(a.postMessage){if(j.indexOf("%253A%252F%252F")>=0){j=decodeURIComponent(j);consoleInfo("gauth-widget.js: decoded over-encoded target_url to: ["+j+"]")}var i=j.replace(/([^:]+:\/\/[^\/]+).*/,"$1");var f=JSON.stringify(g);consoleInfo("gauth-widget.js: newURL: ["+i+"], jsonMessage: ["+f+"]");h.postMessage(f,i)}else{if(j){h.location=j.replace(/#.*$/,"")+"#"+(+new Date)+(b++)+"&"+JSON.stringify(g)}}},receiveMessage:function(g,f){if(a.postMessage){if(g){c=function(h){if((typeof f==="string"&&h.origin!==f)||(Object.prototype.toString.call(f)==="[object Function]"&&f(h.origin)===!1)){return!1}g(h)}}if(a.addEventListener){a[g?"addEventListener":"removeEventListener"]("message",c,!1)}else{a[g?"attachEvent":"detachEvent"]("onmessage",c)}}else{e&&clearInterval(e);e=null;if(g){e=setInterval(function(){var i=document.location.hash,h=/^#?\d+&/;if(i!==d&&h.test(i)){d=i;g({data:JSON.parse(decodeURIComponent(i.replace(h,"")))})}},100)}}}}}();function EventTarget(){this._listeners={}}EventTarget.prototype={constructor:EventTarget,addListener:function(a,b){if(typeof this._listeners[a]=="undefined"){this._listeners[a]=[]}this._listeners[a].push(b)},fire:function(d,e){if(typeof d=="string"){d={type:d}}if(!d.target){d.target=this}if(!d.type){throw new Error("Event object missing 'type' property.")}if(this._listeners[d.type]instanceof Array){var c=this._listeners[d.type];for(var b=0,a=c.length;b<a;b++){c[b].call(this,d,e)}}},removeListener:function(d,e){if(this._listeners[d]instanceof Array){var c=this._listeners[d];for(var b=0,a=c.length;b<a;b++){if(c[b]===e){c.splice(b,1);break}}}}};function EventReg(){EventTarget.call(this)}EventReg.prototype=new EventTarget();EventReg.prototype.constructor=EventReg;EventReg.prototype.not_authenticated=function(a){this.fire("NOT_AUTHENTICATED",a)};EventReg.prototype.authenticated=function(a){this.fire("AUTHENTICATED",a)};EventReg.prototype.success=function(a){this.fire("SUCCESS",a)};EventReg.prototype.error=function(a){this.fire("ERROR",a)};EventReg.prototype.fail=function(a){this.fire("FAIL",a)};EventReg.prototype.locked=function(a){this.fire("ACCOUNT_LOCKED",a)};EventReg.prototype.disabled=function(a){this.fire("ACCOUNT_DISABLED",a)};EventReg.prototype.problem=function(a){this.fire("ACCOUNT_PROBLEM",a)};EventReg.prototype.messagePosted=function(a){this.fire("MESSAGE-POSTED",a)};var GAUTH_Events=new EventReg();GAUTH_Events.addListener("NOT_AUTHENTICATED",function(a,b){consoleInfo("gauth-widget.js: [NOT_AUTHENTICATED event triggered]")});GAUTH_Events.addListener("AUTHENTICATED",function(a,b){consoleInfo("gauth-widget.js: [AUTHENTICATED event triggered] serviceTicket: ["+b.serviceTicket+"], serviceUrl: ["+b.serviceUrl+"]")});GAUTH_Events.addListener("SUCCESS",function(a,b){consoleInfo("gauth-widget.js: [SUCCESS event triggered]")});GAUTH_Events.addListener("ERROR",function(a,b){consoleInfo("gauth-widget.js:  [ERROR event triggered] errorDetails: ["+b.errorDetails+"]")});GAUTH_Events.addListener("FAIL",function(a,b){consoleInfo("gauth-widget.js:  [FAIL event triggered] failDetails: ["+b.failDetails+"]")});GAUTH_Events.addListener("ACCOUNT_LOCKED",function(a,b){consoleInfo("gauth-widget.js: [ACCOUNT_LOCKED event triggered]")});GAUTH_Events.addListener("ACCOUNT_DISABLED",function(a,b){consoleInfo("gauth-widget.js: [ACCOUNT_DISABLED event triggered]")});GAUTH_Events.addListener("ACCOUNT_PROBLEM",function(a,b){consoleInfo("gauth-widget.js: [ACCOUNT_PROBLEM event triggered]")});

// === GCOverrides =====================================================
// Copyright © 2020 by Ivo Truxa, all rights reserved - gco@apnea.cz
// =====================================================================
var gcoVer = 1.07;
var gcoVerTm = '2020/02/12';

// === GCOverrides SETTINGS ============================================
var gcoSleepH = 8;      // enter the number of hours (without minutes) of your sleep goal
var gcoSleepM = 0;      // enter the remaining number of minutes of your sleep goal
var gcoUseKJ = false;   // change false to true to enable the conversion of kcal to kJoules
// === end of GCO settings =============================================

var gcoInitDone = false;

// ---------------------------------------------------------------------
// Identification of GCOverrides
// ---------------------------------------------------------------------
function gcoInit() {
    var gcControls = document.getElementsByClassName("header-controls");
    if (!gcoInitDone && gcControls && gcControls[0]) {
        gcControls[0].insertAdjacentHTML("afterend", '<span style="color:#ccc; font-size:12pt;">GCOverrides <span style="font-size:7pt;">v'+gcoVer+'</span></span>');
        gcoInitDone = true;
    }
}


// ---------------------------------------------------------------------
// some GCO functions need to be re-applied periodically
// ---------------------------------------------------------------------
// Note: using setInterval() is a temporary quick & dirty hack; 
//       properly it should be done by overriding events or classes
//       in some cases one-time call in document.onload would be sufficient 
setInterval(function(){
    gcoInit();
    gcoWeight6m();
    gcoActivityOverlays();
    gcoFloorsPerMin(); 
    gcoSleepGoalFix();
    gcoKCalToKJoule();
},1000);


// ---------------------------------------------------------------------
// Injecting the missing 6 Months tab on the Weight page
// ---------------------------------------------------------------------
function gcoWeight6m() {
    var aYear = document.getElementById("lastYearLinkId"); 
    if (aYear && !document.getElementById("lastSixMonthsLinkId")) {
        aYear.parentElement.insertAdjacentHTML("beforebegin", '<a href="#pane3" data-toggle="tab" id="lastSixMonthsLinkId">6 Months</a>');
    }
} 


// ---------------------------------------------------------------------
// Injecting missing overlay labels on zoomed charts of an Activity
// ---------------------------------------------------------------------
function gcoActivityOverlays() {
    var overlay = [
        document.getElementById("primary-dropdown"),
        document.getElementById("secondary-dropdown")
    ]; 
    for (n=0; n<2; n++) {
        if (overlay[n]) {
            for (i=0; i<overlay[n].childElementCount; i++) { 
                if (!overlay[n].children[i].innerText){
                    var label    = overlay[n].children[i].getAttribute("data-value");
                    var lblChart = overlay[n].parentElement.getElementsByTagName('button')[0];
                    overlay[n].children[i].getElementsByTagName('a')[0].innerText = label;
                    if (!lblChart.innerText) {
                        var t = document.createTextNode(label);
                        lblChart.insertBefore(t, lblChart.childNodes[2]);
                    }
                }
            }
        }
    }

    // searching and adding the missing title
    var modalHeader = document.getElementById("chart-header-placeholder");
    if (modalHeader) {
        var modalCircle = modalHeader.getElementsByClassName("chart-color-circle");
        if (modalCircle && modalCircle[0] && !modalCircle[0].parentElement.innerText) {
            var circles = document.getElementsByClassName("chart-color-circle");
            for (i=0; i<circles.length; i++) {
                if (circles[i].style.backgroundColor == modalCircle[0].style.backgroundColor) {
                    modalCircle[0].parentElement.innerHTML += circles[i].nextSibling.innerText;
                    break;
                }
            }
        }
    }
} 


// ---------------------------------------------------------------------
// Floors per minute need to be divided by 60 to fix the GC bug
// ---------------------------------------------------------------------
var floorFixDone = false;
function gcoFloorsPerMin() {
    var gcFloorClimb = document.getElementById("react-activitySmallStats");
    if (gcFloorClimb) {
        var gcFloorsMin = gcFloorClimb.children[0].children[0].children[3].children[0].children[0];
        var val = parseFloat(gcFloorsMin.innerText);
        if (val > 0 && !floorFixDone) {
            floorFixDone = true;
            gcFloorsMin.innerText = Math.round(val/0.6)/100; // rounding division by 60 to 2 decimals
        }
    }
}


// ---------------------------------------------------------------------
// Adjusting the Sleep Goal
// ---------------------------------------------------------------------
function gcoSleepGoalFix() {
    var gcSleepGoal = document.querySelectorAll("div[class^='SleepGauge_secondText']");
     
    if (gcSleepGoal && gcSleepGoal[0] && !(gcoSleepH==8 && gcoSleepM==0)) {
        gcSleepGoal[0].innerText = parseInt(gcoSleepH) +"h "+ (gcoSleepM? parseInt(gcoSleepM)+"m " : "") +"Goal";

        var gcSleepTm = document.querySelectorAll("div[class^='SleepGauge_mainText']");
        if (gcSleepTm && gcSleepTm[0]) {
            sleepTm = gcSleepTm[0].innerText.match(/\d+/g).map(Number);
            if (sleepTm[0]>gcoSleepH || sleepTm[0]==gcoSleepH && sleepTm[1]>=gcoSleepM) {
                var gcGoalMet = document.querySelectorAll("div[class^='SleepGauge_goalNotMet']");
                if (gcGoalMet && gcGoalMet[0]) {
                    gcGoalMet[0].className = "goalMet";
                    gcGoalMet[0].style.color = "#72EA24";
                }
            }
        }
    }
} 


// ---------------------------------------------------------------------
// Converting kCal values to kJoules (SI units)
// ---------------------------------------------------------------------
function gcoKCalToKJoule() {
    if (gcoUseKJ) {
        var gcCalBox = null;
        var gcCalTitle = document.getElementsByClassName("icon-calories");
        if (gcCalTitle && gcCalTitle[0] && gcCalTitle[0].parentElement) {
            gcCalBox = gcCalTitle[0].parentElement.parentElement.parentElement.parentElement.parentElement;
        }

        if (gcCalBox) {
            // Calories In/Out pane in Daily Summary
            gcoElementsKC2KJ(gcCalBox,"span[class^='DailySummaryCardMainValue_mainValue']");
            gcoElementsKC2KJ(gcCalBox,"span[class^='DailySummaryCardDataBlock_dataValue']");
            gcoElementsKC2KJ(gcCalBox,"div[class^='CaloriesChart_dataBit']");
            gcoElementsKC2KJ(gcCalBox,"div[class^='CaloriesInfo_dataBit']");
            gcoGoalKC2KJ(gcCalBox, "div[class^='CaloriesCardContent_centeredText'] > h5");
            gcoLabelsKC2KJ(gcCalBox);
        }

        // Calories In/Out widget
        var calWidget = document.getElementsByClassName("calories-summary");
        if (calWidget && calWidget[0]) {
            gcoElementsKC2KJ(calWidget[0],"div.data-bit");
            gcoGoalKC2KJ(calWidget[0], "div.chart-goal-overlay > div.data-1 > h5");
            gcoLabelsKC2KJ(calWidget[0]);
        }

    }
}

// ---------------------------------------------------------------------
function gcoKC2KJ(val){
    return Math.round(4.184 * parseInt(val.replace(",","").replace(".","")));
}

// ---------------------------------------------------------------------
function gcoLabelsKC2KJ(container) {
    var graph = container.querySelectorAll("g.highcharts-axis-labels > text");
    if (graph) {
        for (i=0; i<graph.length; i++) {
            if (graph[i] && !graph[i].textContent.includes('kJ')) {
                graph[i].textContent = gcoKC2KJ(graph[i].textContent) + " kJ";
            }
        }    
    }
}

// ---------------------------------------------------------------------
function gcoGoalKC2KJ(rootObj, elemType) {
    var goal = rootObj.querySelectorAll(elemType);
    if (goal && goal[0].childNodes[3] && !goal[0].childNodes[3].textContent.includes('kJ')) { 
        goal[0].childNodes[3].textContent = gcoKC2KJ(goal[0].childNodes[3].textContent) + " kJ";
        goal[0].style.color = "green";
    } else if (goal && goal[0].childNodes[0].textContent.includes("%") && !goal[0].childNodes[0].textContent.includes('kJ')) {
        var txt = goal[0].childNodes[0].textContent.split(" ");
        var val = txt[2];
        txt.pop();
        goal[0].childNodes[0].textContent = txt.join(" ") + " " + gcoKC2KJ(val) + " kJ";
        goal[0].style.color = "green";
    }
}

// ---------------------------------------------------------------------
function gcoElementsKC2KJ(rootObj, elemType) {
    var calVals = rootObj.querySelectorAll(elemType);
    for (i=0; i<calVals.length; i++) {
        if (!calVals[i].innerHTML.includes('kJ')) {
            calVals[i].innerHTML = gcoKC2KJ(calVals[i].innerText) + '<span style="font-size:50%"> kJ</span>';
            calVals[i].style.color = "green";
        }
    }
}

// TX end ==============================================================