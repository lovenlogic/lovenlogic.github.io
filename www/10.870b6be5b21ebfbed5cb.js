(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GrlX:function(r,n,t){var e=t("T016"),o=t("JRS9"),a={};for(var i in e)e.hasOwnProperty(i)&&(a[e[i]]=i);var l=r.exports={to:{},get:{}};function s(r,n,t){return Math.min(Math.max(n,r),t)}function c(r){var n=r.toString(16).toUpperCase();return n.length<2?"0"+n:n}l.get=function(r){var n,t;switch(r.substring(0,3).toLowerCase()){case"hsl":n=l.get.hsl(r),t="hsl";break;case"hwb":n=l.get.hwb(r),t="hwb";break;default:n=l.get.rgb(r),t="rgb"}return n?{model:t,value:n}:null},l.get.rgb=function(r){if(!r)return null;var n,t,o,a=[0,0,0,1];if(n=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(o=n[2],n=n[1],t=0;t<3;t++){var i=2*t;a[t]=parseInt(n.slice(i,i+2),16)}o&&(a[3]=Math.round(parseInt(o,16)/255*100)/100)}else if(n=r.match(/^#([a-f0-9]{3,4})$/i)){for(o=(n=n[1])[3],t=0;t<3;t++)a[t]=parseInt(n[t]+n[t],16);o&&(a[3]=Math.round(parseInt(o+o,16)/255*100)/100)}else if(n=r.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(t=0;t<3;t++)a[t]=parseInt(n[t+1],0);n[4]&&(a[3]=parseFloat(n[4]))}else{if(!(n=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(n=r.match(/(\D+)/))?"transparent"===n[1]?[0,0,0,0]:(a=e[n[1]])?(a[3]=1,a):null:null;for(t=0;t<3;t++)a[t]=Math.round(2.55*parseFloat(n[t+1]));n[4]&&(a[3]=parseFloat(n[4]))}for(t=0;t<3;t++)a[t]=s(a[t],0,255);return a[3]=s(a[3],0,1),a},l.get.hsl=function(r){if(!r)return null;var n=r.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(n){var t=parseFloat(n[4]);return[(parseFloat(n[1])+360)%360,s(parseFloat(n[2]),0,100),s(parseFloat(n[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},l.get.hwb=function(r){if(!r)return null;var n=r.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(n){var t=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,s(parseFloat(n[2]),0,100),s(parseFloat(n[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},l.to.hex=function(){var r=o(arguments);return"#"+c(r[0])+c(r[1])+c(r[2])+(r[3]<1?c(Math.round(255*r[3])):"")},l.to.rgb=function(){var r=o(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},l.to.rgb.percent=function(){var r=o(arguments),n=Math.round(r[0]/255*100),t=Math.round(r[1]/255*100),e=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+n+"%, "+t+"%, "+e+"%)":"rgba("+n+"%, "+t+"%, "+e+"%, "+r[3]+")"},l.to.hsl=function(){var r=o(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},l.to.hwb=function(){var r=o(arguments),n="";return r.length>=4&&1!==r[3]&&(n=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+n+")"},l.to.keyword=function(r){return a[r.slice(0,3)]}},JRS9:function(r,n,t){"use strict";var e=t("uPr3"),o=Array.prototype.concat,a=Array.prototype.slice,i=r.exports=function(r){for(var n=[],t=0,i=r.length;t<i;t++){var l=r[t];e(l)?n=o.call(n,a.call(l)):n.push(l)}return n};i.wrap=function(r){return function(){return r(i(arguments))}}},T016:function(r,n,t){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},WPWp:function(r,n,t){"use strict";t.d(n,"a",function(){return s});var e=t("aSns"),o=t("CcnG"),a=t("Ip0R"),i=t("iw74"),l=function(){return(l=Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o]);return r}).apply(this,arguments)},s=function(){function r(r,n){var t=this;this.document=r,this.storage=n,n.get("theme").then(function(r){t.setGlobalCSS(r)})}return r.prototype.setTheme=function(r){var n,t,o,a,i,s,g,f,d,b,p=(t=(n=l({},c,n=h[r])).primary,o=n.secondary,a=n.tertiary,i=n.success,s=n.warning,g=n.danger,d=n.medium,"\n    --ion-color-base: "+(b=n.light)+";\n    --ion-color-contrast: "+(f=n.dark)+";\n    --ion-background-color: "+b+";\n    --ion-text-color: "+f+";\n    --ion-toolbar-background-color: "+u(b,.1)+";\n    --ion-toolbar-text-color: "+u(f,.1)+";\n    --ion-item-background-color: "+u(b,.3)+";\n    --ion-item-text-color: "+u(f,.3)+";\n\n    --ion-color-primary: "+t+";\n    --ion-color-primary-rgb: 56,128,255;\n    --ion-color-primary-contrast: "+u(t)+";\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade:  "+e(t).darken(.1)+";\n    --ion-color-primary-tint:  "+e(t).lighten(.1)+";\n\n    --ion-color-secondary: "+o+";\n    --ion-color-secondary-rgb: 12,209,232;\n    --ion-color-secondary-contrast: "+u(o)+";\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade:  "+e(o).darken(.1)+";\n    --ion-color-secondary-tint: "+e(o).lighten(.1)+";\n\n    --ion-color-tertiary:  "+a+";\n    --ion-color-tertiary-rgb: 112,68,255;\n    --ion-color-tertiary-contrast: "+u(a)+";\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: "+e(a).darken(.1)+";\n    --ion-color-tertiary-tint:  "+e(a).lighten(.1)+";\n\n    --ion-color-success: "+i+";\n    --ion-color-success-rgb: 16,220,96;\n    --ion-color-success-contrast: "+u(i)+";\n    --ion-color-success-contrast-rgb: 255,255,255;\n    --ion-color-success-shade: "+e(i).darken(.1)+";\n    --ion-color-success-tint: "+e(i).lighten(.1)+";\n\n    --ion-color-warning: "+s+";\n    --ion-color-warning-rgb: 255,206,0;\n    --ion-color-warning-contrast: "+u(s)+";\n    --ion-color-warning-contrast-rgb: 255,255,255;\n    --ion-color-warning-shade: "+e(s).darken(.1)+";\n    --ion-color-warning-tint: "+e(s).lighten(.1)+";\n\n    --ion-color-danger: "+g+";\n    --ion-color-danger-rgb: 245,61,61;\n    --ion-color-danger-contrast: "+u(g)+";\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: "+e(g).darken(.1)+";\n    --ion-color-danger-tint: "+e(g).lighten(.1)+";\n\n    --ion-color-dark: "+f+";\n    --ion-color-dark-rgb: 34,34,34;\n    --ion-color-dark-contrast: "+u(f)+";\n    --ion-color-dark-contrast-rgb: 255,255,255;\n    --ion-color-dark-shade: "+e(f).darken(.1)+";\n    --ion-color-dark-tint: "+e(f).lighten(.1)+";\n\n    --ion-color-medium: "+d+";\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: "+u(d)+";\n    --ion-color-medium-contrast-rgb: 255,255,255;\n    --ion-color-medium-shade: "+e(d).darken(.1)+";\n    --ion-color-medium-tint: "+e(d).lighten(.1)+";\n\n    --ion-color-light: "+b+";\n    --ion-color-light-rgb: 244,244,244;\n    --ion-color-light-contrast: $"+u(b)+";\n    --ion-color-light-contrast-rgb: 0,0,0;\n    --ion-color-light-shade: "+e(b).darken(.1)+";\n    --ion-color-light-tint: "+e(b).lighten(.1)+";");this.setGlobalCSS(p),this.storage.set("theme",p),this.storage.set("theme_name",r)},r.prototype.setVariable=function(r,n){this.document.documentElement.style.setProperty(r,n)},r.prototype.setGlobalCSS=function(r){this.document.documentElement.style.cssText=r},r.prototype.getStoredTheme=function(){return this.storage.get("theme")},r.prototype.getStoredThemeName=function(){return this.storage.get("theme_name")},r.prototype.dummy=function(){},r.ngInjectableDef=o.S({factory:function(){return new r(o.W(a.c),o.W(i.b))},token:r,providedIn:"root"}),r}(),c={primary:"#F06373",secondary:"#0cd1e8",tertiary:"#7044ff",success:"#10dc60",warning:"#ffce00",danger:"#f04141",dark:"#222428",medium:"#989aa2",light:"#f4f5f8"},h={autumn:{primary:"#F78154",secondary:"#4D9078",tertiary:"#B4436C",light:"#FDE8DF",medium:"#FCD0A2",dark:"#B89876"},night:{primary:"#F06373",secondary:"#FCFF6C",tertiary:"#FE5F55",medium:"#BCC2C7",dark:"#F7F7FF",light:"#212121",lighter:"#000000"},neon:{primary:"#F06373",secondary:"#4CE0B3",tertiary:"#FF5E79",light:"#F4EDF2",medium:"#B682A5",dark:"#34162A"}};function u(r,n){return void 0===n&&(n=.8),(r=e(r)).isDark()?r.lighten(n):r.darken(n)}},aSns:function(r,n,t){"use strict";var e=t("GrlX"),o=t("uxXc"),a=[].slice,i=["keyword","gray","hex"],l={};Object.keys(o).forEach(function(r){l[a.call(o[r].labels).sort().join("")]=r});var s={};function c(r,n){if(!(this instanceof c))return new c(r,n);if(n&&n in i&&(n=null),n&&!(n in o))throw new Error("Unknown model: "+n);var t,h;if(void 0===r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof c)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var u=e.get(r);if(null===u)throw new Error("Unable to parse color from string: "+r);this.model=u.model,this.color=u.value.slice(0,h=o[this.model].channels),this.valpha="number"==typeof u.value[h]?u.value[h]:1}else if(r.length){this.model=n||"rgb";var f=a.call(r,0,h=o[this.model].channels);this.color=g(f,h),this.valpha="number"==typeof r[h]?r[h]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var d=Object.keys(r);"alpha"in r&&(d.splice(d.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var b=d.sort().join("");if(!(b in l))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=l[b];var p=o[this.model].labels,v=[];for(t=0;t<p.length;t++)v.push(r[p[t]]);this.color=g(v)}if(s[this.model])for(h=o[this.model].channels,t=0;t<h;t++){var m=s[this.model][t];m&&(this.color[t]=m(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function h(r,n,t){return(r=Array.isArray(r)?r:[r]).forEach(function(r){(s[r]||(s[r]=[]))[n]=t}),r=r[0],function(e){var o;return arguments.length?(t&&(e=t(e)),(o=this[r]()).color[n]=e,o):(o=this[r]().color[n],t&&(o=t(o)),o)}}function u(r){return function(n){return Math.max(0,Math.min(r,n))}}function g(r,n){for(var t=0;t<n;t++)"number"!=typeof r[t]&&(r[t]=0);return r}c.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var n=this.model in e.to?this:this.rgb(),t=1===(n=n.round("number"==typeof r?r:1)).valpha?n.color:n.color.concat(this.valpha);return e.to[n.model](t)},percentString:function(r){var n=this.rgb().round("number"==typeof r?r:1),t=1===n.valpha?n.color:n.color.concat(this.valpha);return e.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},n=o[this.model].channels,t=o[this.model].labels,e=0;e<n;e++)r[t[e]]=this.color[e];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new c(this.color.map(function(r){return function(n){return function(r,n){return Number(r.toFixed(n))}(n,r)}}(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new c(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:h("rgb",0,u(255)),green:h("rgb",1,u(255)),blue:h("rgb",2,u(255)),hue:h(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:h("hsl",1,u(100)),lightness:h("hsl",2,u(100)),saturationv:h("hsv",1,u(100)),value:h("hsv",2,u(100)),chroma:h("hcg",1,u(100)),gray:h("hcg",2,u(100)),white:h("hwb",1,u(100)),wblack:h("hwb",2,u(100)),cyan:h("cmyk",0,u(100)),magenta:h("cmyk",1,u(100)),yellow:h("cmyk",2,u(100)),black:h("cmyk",3,u(100)),x:h("xyz",0,u(100)),y:h("xyz",1,u(100)),z:h("xyz",2,u(100)),l:h("lab",0,u(100)),a:h("lab",1),b:h("lab",2),keyword:function(r){return arguments.length?new c(r):o[this.model].keyword(this.color)},hex:function(r){return arguments.length?new c(r):e.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,n=[],t=0;t<r.length;t++){var e=r[t]/255;n[t]=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return.2126*n[0]+.7152*n[1]+.0722*n[2]},contrast:function(r){var n=this.luminosity(),t=r.luminosity();return n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)},level:function(r){var n=this.contrast(r);return n>=7.1?"AAA":n>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),n=0;n<3;n++)r.color[n]=255-r.color[n];return r},lighten:function(r){var n=this.hsl();return n.color[2]+=n.color[2]*r,n},darken:function(r){var n=this.hsl();return n.color[2]-=n.color[2]*r,n},saturate:function(r){var n=this.hsl();return n.color[1]+=n.color[1]*r,n},desaturate:function(r){var n=this.hsl();return n.color[1]-=n.color[1]*r,n},whiten:function(r){var n=this.hwb();return n.color[1]+=n.color[1]*r,n},blacken:function(r){var n=this.hwb();return n.color[2]+=n.color[2]*r,n},grayscale:function(){var r=this.rgb().color,n=.3*r[0]+.59*r[1]+.11*r[2];return c.rgb(n,n,n)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var n=this.hsl(),t=n.color[0];return n.color[0]=t=(t=(t+r)%360)<0?360+t:t,n},mix:function(r,n){var t=r.rgb(),e=this.rgb(),o=void 0===n?.5:n,a=2*o-1,i=t.alpha()-e.alpha(),l=((a*i==-1?a:(a+i)/(1+a*i))+1)/2,s=1-l;return c.rgb(l*t.red()+s*e.red(),l*t.green()+s*e.green(),l*t.blue()+s*e.blue(),t.alpha()*o+e.alpha()*(1-o))}},Object.keys(o).forEach(function(r){if(-1===i.indexOf(r)){var n=o[r].channels;c.prototype[r]=function(){if(this.model===r)return new c(this);if(arguments.length)return new c(arguments,r);var t,e="number"==typeof arguments[n]?n:this.valpha;return new c((t=o[this.model][r].raw(this.color),Array.isArray(t)?t:[t]).concat(e),r)},c[r]=function(t){return"number"==typeof t&&(t=g(a.call(arguments),n)),new c(t,r)}}}),r.exports=c},onlc:function(r,n,t){var e=t("t1N5");function o(r,n){return function(t){return n(r(t))}}function a(r,n){for(var t=[n[r].parent,r],a=e[n[r].parent][r],i=n[r].parent;n[i].parent;)t.unshift(n[i].parent),a=o(e[n[i].parent][i],a),i=n[i].parent;return a.conversion=t,a}r.exports=function(r){for(var n=function(r){var n=function(){for(var r={},n=Object.keys(e),t=n.length,o=0;o<t;o++)r[n[o]]={distance:-1,parent:null};return r}(),t=[r];for(n[r].distance=0;t.length;)for(var o=t.pop(),a=Object.keys(e[o]),i=a.length,l=0;l<i;l++){var s=a[l],c=n[s];-1===c.distance&&(c.distance=n[o].distance+1,c.parent=o,t.unshift(s))}return n}(r),t={},o=Object.keys(n),i=o.length,l=0;l<i;l++){var s=o[l];null!==n[s].parent&&(t[s]=a(s,n))}return t}},t1N5:function(r,n,t){var e=t("T016"),o={};for(var a in e)e.hasOwnProperty(a)&&(o[e[a]]=a);var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw new Error("missing channels property: "+l);if(!("labels"in i[l]))throw new Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw new Error("channel and label counts mismatch: "+l);var s=i[l].channels,c=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:s}),Object.defineProperty(i[l],"labels",{value:c})}i.rgb.hsl=function(r){var n,t,e=r[0]/255,o=r[1]/255,a=r[2]/255,i=Math.min(e,o,a),l=Math.max(e,o,a),s=l-i;return l===i?n=0:e===l?n=(o-a)/s:o===l?n=2+(a-e)/s:a===l&&(n=4+(e-o)/s),(n=Math.min(60*n,360))<0&&(n+=360),t=(i+l)/2,[n,100*(l===i?0:t<=.5?s/(l+i):s/(2-l-i)),100*t]},i.rgb.hsv=function(r){var n,t,e,o,a,i=r[0]/255,l=r[1]/255,s=r[2]/255,c=Math.max(i,l,s),h=c-Math.min(i,l,s),u=function(r){return(c-r)/6/h+.5};return 0===h?o=a=0:(a=h/c,n=u(i),t=u(l),e=u(s),i===c?o=e-t:l===c?o=1/3+n-e:s===c&&(o=2/3+t-n),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*c]},i.rgb.hwb=function(r){var n=r[0],t=r[1],e=r[2];return[i.rgb.hsl(r)[0],1/255*Math.min(n,Math.min(t,e))*100,100*(e=1-1/255*Math.max(n,Math.max(t,e)))]},i.rgb.cmyk=function(r){var n,t=r[0]/255,e=r[1]/255,o=r[2]/255;return[100*((1-t-(n=Math.min(1-t,1-e,1-o)))/(1-n)||0),100*((1-e-n)/(1-n)||0),100*((1-o-n)/(1-n)||0),100*n]},i.rgb.keyword=function(r){var n=o[r];if(n)return n;var t,a,i,l=1/0;for(var s in e)if(e.hasOwnProperty(s)){var c=(a=r,i=e[s],Math.pow(a[0]-i[0],2)+Math.pow(a[1]-i[1],2)+Math.pow(a[2]-i[2],2));c<l&&(l=c,t=s)}return t},i.keyword.rgb=function(r){return e[r]},i.rgb.xyz=function(r){var n=r[0]/255,t=r[1]/255,e=r[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)),100*(.2126*n+.7152*t+.0722*e),100*(.0193*n+.1192*t+.9505*e)]},i.rgb.lab=function(r){var n=i.rgb.xyz(r),t=n[0],e=n[1],o=n[2];return e/=100,o/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(t-e),200*(e-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},i.hsl.rgb=function(r){var n,t,e,o,a,i=r[0]/360,l=r[1]/100,s=r[2]/100;if(0===l)return[a=255*s,a,a];n=2*s-(t=s<.5?s*(1+l):s+l-s*l),o=[0,0,0];for(var c=0;c<3;c++)(e=i+1/3*-(c-1))<0&&e++,e>1&&e--,o[c]=255*(a=6*e<1?n+6*(t-n)*e:2*e<1?t:3*e<2?n+(t-n)*(2/3-e)*6:n);return o},i.hsl.hsv=function(r){var n=r[0],t=r[1]/100,e=r[2]/100,o=t,a=Math.max(e,.01);return t*=(e*=2)<=1?e:2-e,o*=a<=1?a:2-a,[n,100*(0===e?2*o/(a+o):2*t/(e+t)),(e+t)/2*100]},i.hsv.rgb=function(r){var n=r[0]/60,t=r[1]/100,e=r[2]/100,o=Math.floor(n)%6,a=n-Math.floor(n),i=255*e*(1-t),l=255*e*(1-t*a),s=255*e*(1-t*(1-a));switch(e*=255,o){case 0:return[e,s,i];case 1:return[l,e,i];case 2:return[i,e,s];case 3:return[i,l,e];case 4:return[s,i,e];case 5:return[e,i,l]}},i.hsv.hsl=function(r){var n,t,e,o=r[0],a=r[1]/100,i=r[2]/100,l=Math.max(i,.01);return e=(2-a)*i,t=a*l,[o,100*(t=(t/=(n=(2-a)*l)<=1?n:2-n)||0),100*(e/=2)]},i.hwb.rgb=function(r){var n,t,e,o,a,i,l,s=r[0]/360,c=r[1]/100,h=r[2]/100,u=c+h;switch(u>1&&(c/=u,h/=u),e=6*s-(n=Math.floor(6*s)),0!=(1&n)&&(e=1-e),o=c+e*((t=1-h)-c),n){default:case 6:case 0:a=t,i=o,l=c;break;case 1:a=o,i=t,l=c;break;case 2:a=c,i=t,l=o;break;case 3:a=c,i=o,l=t;break;case 4:a=o,i=c,l=t;break;case 5:a=t,i=c,l=o}return[255*a,255*i,255*l]},i.cmyk.rgb=function(r){var n=r[1]/100,t=r[2]/100,e=r[3]/100;return[255*(1-Math.min(1,r[0]/100*(1-e)+e)),255*(1-Math.min(1,n*(1-e)+e)),255*(1-Math.min(1,t*(1-e)+e))]},i.xyz.rgb=function(r){var n,t,e,o=r[0]/100,a=r[1]/100,i=r[2]/100;return t=-.9689*o+1.8758*a+.0415*i,e=.0557*o+-.204*a+1.057*i,n=(n=3.2406*o+-1.5372*a+-.4986*i)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,[255*(n=Math.min(Math.max(0,n),1)),255*(t=Math.min(Math.max(0,t),1)),255*(e=Math.min(Math.max(0,e),1))]},i.xyz.lab=function(r){var n=r[0],t=r[1],e=r[2];return t/=100,e/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(n-t),200*(t-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]},i.lab.xyz=function(r){var n,t,e;n=r[1]/500+(t=(r[0]+16)/116),e=t-r[2]/200;var o=Math.pow(t,3),a=Math.pow(n,3),i=Math.pow(e,3);return t=o>.008856?o:(t-16/116)/7.787,n=a>.008856?a:(n-16/116)/7.787,e=i>.008856?i:(e-16/116)/7.787,[n*=95.047,t*=100,e*=108.883]},i.lab.lch=function(r){var n,t=r[0],e=r[1],o=r[2];return(n=360*Math.atan2(o,e)/2/Math.PI)<0&&(n+=360),[t,Math.sqrt(e*e+o*o),n]},i.lch.lab=function(r){var n,t=r[1];return n=r[2]/360*2*Math.PI,[r[0],t*Math.cos(n),t*Math.sin(n)]},i.rgb.ansi16=function(r){var n=r[0],t=r[1],e=r[2],o=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(e/255)<<2|Math.round(t/255)<<1|Math.round(n/255));return 2===o&&(a+=60),a},i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])},i.rgb.ansi256=function(r){var n=r[0],t=r[1],e=r[2];return n===t&&t===e?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5)},i.ansi16.rgb=function(r){var n=r%10;if(0===n||7===n)return r>50&&(n+=3.5),[n=n/10.5*255,n,n];var t=.5*(1+~~(r>50));return[(1&n)*t*255,(n>>1&1)*t*255,(n>>2&1)*t*255]},i.ansi256.rgb=function(r){if(r>=232){var n=10*(r-232)+8;return[n,n,n]}var t;return r-=16,[Math.floor(r/36)/5*255,Math.floor((t=r%36)/6)/5*255,t%6/5*255]},i.rgb.hex=function(r){var n=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},i.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var t=n[0];3===n[0].length&&(t=t.split("").map(function(r){return r+r}).join(""));var e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},i.rgb.hcg=function(r){var n,t=r[0]/255,e=r[1]/255,o=r[2]/255,a=Math.max(Math.max(t,e),o),i=Math.min(Math.min(t,e),o),l=a-i;return n=l<=0?0:a===t?(e-o)/l%6:a===e?2+(o-t)/l:4+(t-e)/l+4,n/=6,[360*(n%=1),100*l,100*(l<1?i/(1-l):0)]},i.hsl.hcg=function(r){var n,t=r[1]/100,e=r[2]/100,o=0;return(n=e<.5?2*t*e:2*t*(1-e))<1&&(o=(e-.5*n)/(1-n)),[r[0],100*n,100*o]},i.hsv.hcg=function(r){var n=r[2]/100,t=r[1]/100*n,e=0;return t<1&&(e=(n-t)/(1-t)),[r[0],100*t,100*e]},i.hcg.rgb=function(r){var n=r[1]/100,t=r[2]/100;if(0===n)return[255*t,255*t,255*t];var e,o=[0,0,0],a=r[0]/360%1*6,i=a%1,l=1-i;switch(Math.floor(a)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return[255*(n*o[0]+(e=(1-n)*t)),255*(n*o[1]+e),255*(n*o[2]+e)]},i.hcg.hsv=function(r){var n=r[1]/100,t=n+r[2]/100*(1-n),e=0;return t>0&&(e=n/t),[r[0],100*e,100*t]},i.hcg.hsl=function(r){var n=r[1]/100,t=r[2]/100*(1-n)+.5*n,e=0;return t>0&&t<.5?e=n/(2*t):t>=.5&&t<1&&(e=n/(2*(1-t))),[r[0],100*e,100*t]},i.hcg.hwb=function(r){var n=r[1]/100,t=n+r[2]/100*(1-n);return[r[0],100*(t-n),100*(1-t)]},i.hwb.hcg=function(r){var n=1-r[2]/100,t=n-r[1]/100,e=0;return t<1&&(e=(n-t)/(1-t)),[r[0],100*t,100*e]},i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]},i.gray.hwb=function(r){return[0,100,r[0]]},i.gray.cmyk=function(r){return[0,0,0,r[0]]},i.gray.lab=function(r){return[r[0],0,0]},i.gray.hex=function(r){var n=255&Math.round(r[0]/100*255),t=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},uPr3:function(r,n){r.exports=function(r){return!(!r||"string"==typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},uxXc:function(r,n,t){var e=t("t1N5"),o=t("onlc"),a={};Object.keys(e).forEach(function(r){a[r]={},Object.defineProperty(a[r],"channels",{value:e[r].channels}),Object.defineProperty(a[r],"labels",{value:e[r].labels});var n=o(r);Object.keys(n).forEach(function(t){var e=n[t];a[r][t]=function(r){var n=function(n){if(null==n)return n;arguments.length>1&&(n=Array.prototype.slice.call(arguments));var t=r(n);if("object"==typeof t)for(var e=t.length,o=0;o<e;o++)t[o]=Math.round(t[o]);return t};return"conversion"in r&&(n.conversion=r.conversion),n}(e),a[r][t].raw=function(r){var n=function(n){return null==n?n:(arguments.length>1&&(n=Array.prototype.slice.call(arguments)),r(n))};return"conversion"in r&&(n.conversion=r.conversion),n}(e)})}),r.exports=a}}]);