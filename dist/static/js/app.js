!function(e){function t(t){for(var r,s,o=t[0],l=t[1],p=t[2],u=0,d=[];u<o.length;u++)s=o[u],a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);d.length;)d.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={0:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var c=l;i.push([68,1]),n()}({37:function(e,t){},68:function(e,t,n){"use strict";n.r(t);n(37);var r=n(8),a=n.n(r);!function(e){var t={type:"default",minL:{val:3,mess:"Минимальная длина 3 символа"},lang:!1,message:"Заполните это поле",confirm:!1,messForTypes:{alphabet:"Допускаются только буквы",numerical:"Допускаются только цифры",phoneRU:"Неверный код региона",email:"Введите корректный e-mail","password_сonfirmed":"Пароли не совпадают"},parent:".js-rsform__field"},n={declOfNum:function(e,t){return t[e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]},userOptionsTypeOf:function(e,t){for(var r in t||(t=e),e)void 0!=t[r]&&("object"==a()(e[r])?"object"==a()(t[r])?e[r]=t[r]:(e[r].val=t[r],"minL"==r&&(e[r].mess="Минимальная длина "+t[r]+" "+n.declOfNum(t[r],["символ","символа","символов"]))):e[r]=t[r]);return e}},r={initForm:function(){this.each(function(){var r=e(this),i={formID:r.attr("id"),elemRequired:"[data-required]",fieldValid:[],formValid:!1},s=[];r.find(i.elemRequired).each(function(o){var l=e(this),p=l.val(),c=p.replace(/\D/g,""),u=p.replace(/[0-9]/g,""),d=c.split(""),f=l.data("required"),h=l.attr("type"),m=jQuery.extend({},t);m=n.userOptionsTypeOf(m,f),i.fieldValid[o]={value:p,state:!1,inputData:m},l.attr("autocomplete","off").parents(m.parentField).addClass("required"),m.message&&l.parent(m.parentField).append('<span class="rsform-hint">'+m.message+"</span>"),l.on("input keydown change",function(t){if(p=l.val(),c=p.replace(/\D/g,""),u=p.replace(/[0-9]/g,""),d=c.split(""),"email"==m.type)g.checkValue(g.checkEmail(p));else if("alphabet"==m.type||"numerical"==m.type)g.alphabetORnumerical(m.type),g.checkValue(p.length>=m.minL.val);else if("phoneRU"==m.type)g.checkValue(c.length>=12&&"9"==d[1]);else if("checkbox"==h||"checkbox"==m.type)g.checkValue(l.prop("checked"));else if("password"==m.type){if(g.checkValue(g.checkPassword()),m.confirm){if(0==e(m.confirm).length)return void e.error("Элемент "+m.confirm+" не найден для jQuery.rsForm");s[0]=p,g.checkPassword()&&e(m.confirm).trigger("input")}}else"password_сonfirmed"==m.type?(s[1]=p,g.checkValue(s[0]==s[1]&&0!==s[0].length&&0!==s[1].length)):"radio"==m.type?g.checkValue(l.find('[type="radio"]').is(":checked")):"select"==m.type||"select"==h?g.checkValue(p):g.checkValue(p.length>=m.minL.val);m.lang&&g.translateLang(p,m.lang)}),l.on("blur",function(){0==p.length&&l.parents(m.parentField).removeClass("error")});var g={hintMessage:function(e){e?l.siblings(".rsform-hint").text(e):l.siblings(".rsform-hint").text(m.message)},checkValue:function(e){"email"==m.type?p.length>0?g.hintMessage(m.messForTypes[m.type]):g.hintMessage():"alphabet"==m.type?event.keyCode>=48&&event.keyCode<=57?g.hintMessage(m.messForTypes[m.type]):event.keyCode&&g.hintMessage():"numerical"==m.type?event.keyCode>=65&&event.keyCode<=90?g.hintMessage(m.messForTypes[m.type]):event.keyCode&&g.hintMessage():"phoneRU"==m.type?"9"==d[1]?g.hintMessage():0!==c.length?g.hintMessage(m.messForTypes[m.type]):g.hintMessage():"password"==m.type?"object"==a()(m.minL)&&(p.length>=m.minL.val?g.hintMessage():0!=c.length?g.hintMessage(m.minL.mess):g.hintMessage()):"password_сonfirmed"==m.type&&(s[0]==s[1]?g.hintMessage():s[1].length>0?g.hintMessage(m.messForTypes[m.type]):g.hintMessage()),e?(i.fieldValid[o]={value:p,state:!0,inputData:m},l.parents(m.parentField).addClass("success").removeClass("error")):(l.parents(m.parentField).addClass("error").removeClass("success"),i.fieldValid[o]={value:p,state:!1,inputData:m}),g.setFormValid(!1,i.fieldValid),r.data("DATA_FORM",i)},checkEmail:function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},checkPassword:function(){return p.length>=m.minL.val},translateLang:function(e,t){var n={'"':"@",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю","/":"."},r={'"':"@"};if("ru"==t)t=n;else{if("eng"!=t)return!1;t=r}for(var a in n)r[n[a]]=a;r["."]=".",r["/"]=".";for(var i=0;i<e.length;i++)void 0!=t[e[i].toLowerCase()]&&(e[i]==e[i].toLowerCase()?replace=t[e[i].toLowerCase()]:e[i]==e[i].toUpperCase()&&(replace=t[e[i].toLowerCase()].toUpperCase()),e=e.replace(e[i],replace));l.val(e),p=l.val()},alphabetORnumerical:function(e){"alphabet"==e?l.val(u):"numerical"==e&&l.val(c),p=l.val()},setFormValid:function(e,t){t.filter(function(e){return!e.state}).length>0?i.formValid=!1:i.formValid=!0}}}),r.submit(function(e){e.preventDefault(),r.find(i.elemRequired).trigger("input")})})},getDataForm:function(){return this.data("DATA_FORM").formValid}};e.fn.rsForm=function(i,s){return"method"!==i&&(i=n.userOptionsTypeOf(i),e.extend(t,i)),r[s]?r[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!==(void 0===s?"undefined":a()(s))&&s?void e.error("Метод с именем "+s+" не существует для jQuery.rsForm"):r.initForm.apply(this,arguments)}}(jQuery);var i={load:function(){i.bindEvents()},bindEvents:function(){$('input[type="tel"]').inputmask("+7(999)-9999-99-99"),$("img.svg").each(function(e,t){var n=$(t),r=n.attr("id"),a=n.attr("class"),i=n.attr("src");$.get(i,function(e){var t=$(e).find("svg");void 0!==r&&(t=t.attr("id",r)),void 0!==a&&(t=t.attr("class",a+"replaced-svg")),!(t=t.removeAttr("xmlns:a")).attr("viewBox")&&t.attr("height")&&t.attr("width")&&t.attr("viewBox 0 0  "+t.attr("height")+" "+t.attr("width")),n.replaceWith(t)},"xml")}),setTimeout(function(){for(var e=document.querySelectorAll(".banner-title"),t=0;t<e.length;t++)new CircleType(e[t]).radius(300);$(".js-carousel__banner").addClass("show")},20),new Swiper(".js-carousel__banner .swiper-container",{loop:!0,autoplay:{delay:7e3},pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".js-carousel__categories .swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0}),new Swiper(".js-carousel__gallery .swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0}),new Swiper(".js-carousel__about .swiper-container",{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0}),$("form").rsForm()}};window.addEventListener("load",i.load)}});
//# sourceMappingURL=app.js.map