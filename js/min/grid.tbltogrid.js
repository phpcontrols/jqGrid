(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){window.tableToGrid=function(n,p){a(n).each(function(){var d=a(this),b,e,c,h,f=[],k=[],g=[],l=[],m=[];if(!this.grid){d.width("99%");b=d.width();e=a("tr td:first-child input[type=checkbox]:first",d);c=a("tr td:first-child input[type=radio]:first",d);e=0<e.length;c=!e&&0<c.length;h=e||c;a("th",d).each(function(){0===f.length&&h?(f.push({name:"__selection__",
index:"__selection__",width:0,hidden:!0}),k.push("__selection__")):(f.push({name:a(this).attr("id")||a.trim(a.jgrid.stripHtml(a(this).html())).split(" ").join("_"),index:a(this).attr("id")||a.trim(a.jgrid.stripHtml(a(this).html())).split(" ").join("_"),width:a(this).width()||150}),k.push(a(this).html()))});a("tbody > tr",d).each(function(){var c={},b=0;a("td",a(this)).each(function(){if(0===b&&h){var d=a("input",a(this)),e=d.attr("value");l.push(e||g.length);d.is(":checked")&&m.push(e);c[f[b].name]=
d.attr("value")}else c[f[b].name]=a(this).html();b++});0<b&&g.push(c)});d.empty();d.jqGrid(a.extend({datatype:"local",width:b,colNames:k,colModel:f,multiselect:e},p||{}));for(b=0;b<g.length;b++)c=null,0<l.length&&(c=l[b])&&c.replace&&(c=encodeURIComponent(c).replace(/[.\-%]/g,"_")),null===c&&(c=a.jgrid.randId()),d.jqGrid("addRowData",c,g[b]);for(b=0;b<m.length;b++)d.jqGrid("setSelection",m[b])}})}});

//# sourceMappingURL=grid.tbltogrid.map

//# sourceMappingURL=grid.tbltogrid.map

//# sourceMappingURL=grid.tbltogrid.map

//# sourceMappingURL=grid.tbltogrid.map

//# sourceMappingURL=grid.tbltogrid.map
