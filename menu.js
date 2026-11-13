/* Gemeinsame Menüdaten für Website und Admin-Bereich (LocalStorage) */
window.KHMenu=(function(){
 var KEY='khb_menu_v1';
 var CAT_KEY='khb_menu_categories_v1';
 var u=function(id){return 'https://images.unsplash.com/photo-'+id+'?auto=format&fit=crop&w=700&q=75'};
 var seed=[
  {id:'s1',c:'doener',n:'Großer Döner Kebab',d:'Im Fladenbrot mit Fleisch, Salat und Soße nach Wahl.',p:7.5,img:u('1529006557810-274b9b2fc783')},
  {id:'s2',c:'doener',n:'Dürüm Wrap XL',d:'Dünner Teigfladen, groß gefüllt und frisch eingerollt.',p:8.5,img:u('1626700051175-6818013e1d4f')},
  {id:'s3',c:'doener',n:'Lahmacun',d:'Knusprig dünner Teig mit würziger Hackfleischcreme.',p:6.5,img:u('1565299585323-38d6b0865b47')},
  {id:'s4',c:'teller',n:'Döner Teller',d:'Dönerfleisch mit Pommes oder Reis, Salat und Soße.',p:11.9,img:u('1544025162-d76694265947')},
  {id:'s5',c:'teller',n:'Pommes Teller',d:'Goldgelbe Pommes mit Salat und Soße.',p:5.5,img:u('1630384060421-cb20d0e0649d')},
  {id:'s6',c:'teller',n:'Gemischter Teller',d:'Fleisch, Beilagen und Salat – reichlich für den großen Hunger.',p:13.5,img:u('1561651823-34feb02250e4')},
  {id:'s7',c:'drinks',n:'Ayran',d:'Der Klassiker: erfrischendes Joghurtgetränk.',p:1.9,img:u('1571091718767-18b5b1457add')},
  {id:'s8',c:'drinks',n:'Softgetränke',d:'Verschiedene Sorten, gut gekühlt.',p:2,img:u('1622483767028-3f66f32aef97')}
 ];
 return{
  KEY:KEY,
  CAT_KEY:CAT_KEY,
  CATS:{doener:'Döner & Dürüm',teller:'Teller-Gerichte',drinks:'Getränke'},
  EMOJI:{doener:'🥙',teller:'🍽️',drinks:'🥤'},
  load:function(){try{var r=localStorage.getItem(KEY);if(r){var a=JSON.parse(r);if(Array.isArray(a))return a}}catch(e){}return JSON.parse(JSON.stringify(seed))},
  save:function(a){localStorage.setItem(KEY,JSON.stringify(a))},
  categories:function(){var cats=Object.assign({},this.CATS);try{var saved=JSON.parse(localStorage.getItem(CAT_KEY)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))Object.keys(saved).forEach(function(k){if(typeof saved[k]==='string'&&saved[k].trim())cats[k]=saved[k].trim()})}catch(e){}return cats},
  addCategory:function(name){var label=String(name||'').trim(),cats=this.categories();if(!label)throw new Error('Bitte einen Kategorienamen eingeben.');if(Object.keys(cats).some(function(k){return cats[k].toLocaleLowerCase()===label.toLocaleLowerCase()}))throw new Error('Diese Kategorie gibt es bereits.');var key='custom_'+Date.now().toString(36);while(cats[key])key+='_';cats[key]=label;var custom={};Object.keys(cats).forEach(function(k){if(!this.CATS[k])custom[k]=cats[k]},this);localStorage.setItem(CAT_KEY,JSON.stringify(custom));return key},
  fmt:function(p){return Number(p).toFixed(2).replace('.',',')+' €'},
  esc:function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
 };
})();
 
