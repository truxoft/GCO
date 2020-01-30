/*Copyright (c) 2011, 2019, Oracle and/or its affiliates. All rights reserved.*/
(function(){try{var l=function(b){var a=!0;try{b.domain}catch(f){a=!1}return a},r=function(b){return b.replace(/:/g,"%3A").replace(/=/g,"%3D").replace(/,/g,"%2C")},q=function(b){try{var a;var f=b.data;if("string"!==typeof f)a=!1;else{var c=f.match(new RegExp("([a-z]+)"+d+"([a-z0-9.-]+)"+d+"([0-9]+)"+d+"([a-z]+)"+d+"([0-9]+)"+d+"(.+)","i"));a=c&&7===c.length&&c[1]===m&&c[2]===n&&-1!==c[6].indexOf("check")?!0:!1}if(a){var p;var h=window.top&&window.top.location&&window.top.location.href;p=h&&("string"!==
typeof h?0:/^(?:https?:\/\/)?[^.:\/]+(?:\.[^.:\/]+)/.test(h))?h:!1;if(p){var t,e=window.top.location.hostname.replace("www.","")+window.top.location.pathname;"string"===typeof e&&"/"===e.charAt(e.length-1)&&(e=e.substr(0,e.length-1));if(t=e){var g=JSON.stringify({available:!1,fullUrl:r(p),cleanUrl:r(t),urlSrc:5}),g=g.replace(/"(\w+)"\s*:/g,"$1:"),l=b.data.split(d),q=[m,n,k,u,l[4]||k+1,g].join(d);b.source.postMessage(q,"*")}}}}catch(v){}},v=function(b,a){function f(c,b){var a=[];c&&a.push(c);b=b||
0;if(10<b||!c||!c.frames)return a;var d;try{d=isNaN(c.frames.length)?100:c.frames.length}catch(g){d=100}for(var e=0;e<d;e++)try{try{if(void 0==c.frames[e])break}catch(g){break}a=a.concat(f(c.frames[e],b+1))}catch(g){break}return a}return f(b,a)},w=function(){for(var b=[m,n,k,u,k+1,"ping"].join(d),a=v(window.top),f=0;f<a.length;f++)a[f]!==window.top&&a[f].postMessage(b,"*")},d="#",m="MSFAPI",n="1.2",u="addThis",k=Math.floor(Math.random()*Math.pow(10,12));window&&window.top&&l(window.top)&&!0!==window.top["__@@##MUH"]&&
(window.top.addEventListener("message",q),window.top["__@@##MUH"]=!0,w())}catch(b){}})();

// =============== GCOverrides v0.02 - 2020/01/30 ======================
// Copyright © 2020 by Ivo Truxa, all rights reserved - gco@apnea.cz
// =====================================================================
// Note: using setInterval is a temporary quick & dirty hack; 
//       properly it should be done by overriding events or classes

// ---------------------------------------------------------------------
// Injecting the missing 6 Months tab on the Weight page
// ---------------------------------------------------------------------
function gcoWeight6m() {
    var aYear = document.getElementById("lastYearLinkId"); 
    if (aYear && !document.getElementById("lastSixMonthsLinkId")) {
        aYear.parentElement.insertAdjacentHTML("beforebegin", '<a href="#pane3" data-toggle="tab" id="lastSixMonthsLinkId">6 Months</a>');
    }
} 
gcoWeight6m(); 
setInterval(gcoWeight6m,1000);

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
} 
gcoActivityOverlays();
setInterval(gcoActivityOverlays,1000);

// TX end ==============================================================

