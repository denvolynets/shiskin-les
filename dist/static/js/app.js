!function(e){function t(t){for(var r,o,s=t[0],l=t[1],p=t[2],c=0,f=[];c<s.length;c++)o=s[c],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var u=l;i.push([68,1]),n()}({37:function(e,t){},68:function(e,t,n){"use strict";n.r(t);n(37);var r=n(8),a=n.n(r);!function(e){var t={type:"default",minL:{val:3,mess:"Минимальная длина 3 символа"},lang:!1,message:"Заполните это поле",confirm:!1,messForTypes:{alphabet:"Допускаются только буквы",numerical:"Допускаются только цифры",phoneRU:"Неверный код региона",email:"Введите корректный e-mail","password_сonfirmed":"Пароли не совпадают"},parent:".js-rsform__field"},n={declOfNum:function(e,t){return t[e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]},userOptionsTypeOf:function(e,t){for(var r in t||(t=e),e)void 0!=t[r]&&("object"==a()(e[r])?"object"==a()(t[r])?e[r]=t[r]:(e[r].val=t[r],"minL"==r&&(e[r].mess="Минимальная длина "+t[r]+" "+n.declOfNum(t[r],["символ","символа","символов"]))):e[r]=t[r]);return e}},r={initForm:function(){this.each(function(){var r=e(this),i={formID:r.attr("id"),elemRequired:"[data-required]",fieldValid:[],formValid:!1},o=[];r.find(i.elemRequired).each(function(s){var l=e(this),p=l.val(),u=p.replace(/\D/g,""),c=p.replace(/[0-9]/g,""),f=u.split(""),d=l.data("required"),h=l.attr("type"),m=jQuery.extend({},t);m=n.userOptionsTypeOf(m,d),i.fieldValid[s]={value:p,state:!1,inputData:m},l.attr("autocomplete","off").parents(m.parentField).addClass("required"),m.message&&l.parent(m.parentField).append('<span class="rsform-hint">'+m.message+"</span>"),l.on("input keydown change",function(t){if(p=l.val(),u=p.replace(/\D/g,""),c=p.replace(/[0-9]/g,""),f=u.split(""),"email"==m.type)g.checkValue(g.checkEmail(p));else if("alphabet"==m.type||"numerical"==m.type)g.alphabetORnumerical(m.type),g.checkValue(p.length>=m.minL.val);else if("phoneRU"==m.type)g.checkValue(u.length>=12&&"9"==f[1]);else if("checkbox"==h||"checkbox"==m.type)g.checkValue(l.prop("checked"));else if("password"==m.type){if(g.checkValue(g.checkPassword()),m.confirm){if(0==e(m.confirm).length)return void e.error("Элемент "+m.confirm+" не найден для jQuery.rsForm");o[0]=p,g.checkPassword()&&e(m.confirm).trigger("input")}}else"password_сonfirmed"==m.type?(o[1]=p,g.checkValue(o[0]==o[1]&&0!==o[0].length&&0!==o[1].length)):"radio"==m.type?g.checkValue(l.find('[type="radio"]').is(":checked")):"select"==m.type||"select"==h?g.checkValue(p):g.checkValue(p.length>=m.minL.val);m.lang&&g.translateLang(p,m.lang)}),l.on("blur",function(){0==p.length&&l.parents(m.parentField).removeClass("error")});var g={hintMessage:function(e){e?l.siblings(".rsform-hint").text(e):l.siblings(".rsform-hint").text(m.message)},checkValue:function(e){"email"==m.type?p.length>0?g.hintMessage(m.messForTypes[m.type]):g.hintMessage():"alphabet"==m.type?event.keyCode>=48&&event.keyCode<=57?g.hintMessage(m.messForTypes[m.type]):event.keyCode&&g.hintMessage():"numerical"==m.type?event.keyCode>=65&&event.keyCode<=90?g.hintMessage(m.messForTypes[m.type]):event.keyCode&&g.hintMessage():"phoneRU"==m.type?"9"==f[1]?g.hintMessage():0!==u.length?g.hintMessage(m.messForTypes[m.type]):g.hintMessage():"password"==m.type?"object"==a()(m.minL)&&(p.length>=m.minL.val?g.hintMessage():0!=u.length?g.hintMessage(m.minL.mess):g.hintMessage()):"password_сonfirmed"==m.type&&(o[0]==o[1]?g.hintMessage():o[1].length>0?g.hintMessage(m.messForTypes[m.type]):g.hintMessage()),e?(i.fieldValid[s]={value:p,state:!0,inputData:m},l.parents(m.parentField).addClass("success").removeClass("error")):(l.parents(m.parentField).addClass("error").removeClass("success"),i.fieldValid[s]={value:p,state:!1,inputData:m}),g.setFormValid(!1,i.fieldValid),r.data("DATA_FORM",i)},checkEmail:function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},checkPassword:function(){return p.length>=m.minL.val},translateLang:function(e,t){var n={'"':"@",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю","/":"."},r={'"':"@"};if("ru"==t)t=n;else{if("eng"!=t)return!1;t=r}for(var a in n)r[n[a]]=a;r["."]=".",r["/"]=".";for(var i=0;i<e.length;i++)void 0!=t[e[i].toLowerCase()]&&(e[i]==e[i].toLowerCase()?replace=t[e[i].toLowerCase()]:e[i]==e[i].toUpperCase()&&(replace=t[e[i].toLowerCase()].toUpperCase()),e=e.replace(e[i],replace));l.val(e),p=l.val()},alphabetORnumerical:function(e){"alphabet"==e?l.val(c):"numerical"==e&&l.val(u),p=l.val()},setFormValid:function(e,t){t.filter(function(e){return!e.state}).length>0?i.formValid=!1:i.formValid=!0}}}),r.submit(function(e){e.preventDefault(),r.find(i.elemRequired).trigger("input")})})},getDataForm:function(){return this.data("DATA_FORM").formValid}};e.fn.rsForm=function(i,o){return"method"!==i&&(i=n.userOptionsTypeOf(i),e.extend(t,i)),r[o]?r[o].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==(void 0===o?"undefined":a()(o))&&o?void e.error("Метод с именем "+o+" не существует для jQuery.rsForm"):r.initForm.apply(this,arguments)}}(jQuery);var i={load:function(){i.bindEvents()},bindEvents:function(){$('input[type="tel"]').inputmask("+7(999)-9999-99-99"),setTimeout(function(){for(var e=document.querySelectorAll(".banner-title"),t=0;t<e.length;t++)new CircleType(e[t]).radius(300);$(".js-carousel__banner").addClass("show")},20),new Swiper(".js-carousel__banner .swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".js-carousel__categories .swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0}),new Swiper(".js-carousel__gallery .swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0}),new Swiper(".js-carousel__about .swiper-container",{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0}),$("form").rsForm()}};window.addEventListener("load",i.load)}});
//# sourceMappingURL=app.js.map