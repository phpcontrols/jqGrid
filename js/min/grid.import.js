(function(c){"function"===typeof define&&define.amd?define(["jquery","./jsonxml"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){c.jgrid.extend({jqGridImport:function(a){a=c.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"roots>grid",data:"roots>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},a||{});return this.each(function(){var d=this,e=function(a,b){var f=c(b.xmlGrid.config,a)[0],k=c(b.xmlGrid.data,a)[0],g,e;if(xmlJsonClass.xml2json&&
c.jgrid.parse){f=xmlJsonClass.xml2json(f," ");f=c.jgrid.parse(f);for(e in f)f.hasOwnProperty(e)&&(g=f[e]);void 0!==g&&(k?(k=f.grid.datatype,f.grid.datatype="xmlstring",f.grid.datastr=a,c(d).jqGrid(g).jqGrid("setGridParam",{datatype:k})):c(d).jqGrid(g))}else alert("xml2json or parse are not present")},b=function(a,b){if(a&&"string"===typeof a){var f=!1,e,g;c.jgrid.useJSON&&(c.jgrid.useJSON=!1,f=!0);e=c.jgrid.parse(a);f&&(c.jgrid.useJSON=!0);f=e[b.jsonGrid.config];(e=e[b.jsonGrid.data])?(g=f.datatype,
f.datatype="jsonstring",f.datastr=e,c(d).jqGrid(f).jqGrid("setGridParam",{datatype:g})):c(d).jqGrid(f)}},h;switch(a.imptype){case "xml":c.ajax(c.extend({url:a.impurl,type:a.mtype,data:a.impData,dataType:"xml",complete:function(b){!(300>b.status||304===b.status)||0===b.status&&4===b.readyState||(e(b.responseXML,a),c(d).triggerHandler("jqGridImportComplete",[b,a]),c.isFunction(a.importComplete)&&a.importComplete(b))}},a.ajaxOptions));break;case "xmlstring":a.impstring&&"string"===typeof a.impstring&&
(h=c.parseXML(a.impstring))&&(e(h,a),c(d).triggerHandler("jqGridImportComplete",[h,a]),c.isFunction(a.importComplete)&&a.importComplete(h),a.impstring=null);break;case "json":c.ajax(c.extend({url:a.impurl,type:a.mtype,data:a.impData,dataType:"json",complete:function(e){try{!(300>e.status||304===e.status)||0===e.status&&4===e.readyState||(b(e.responseText,a),c(d).triggerHandler("jqGridImportComplete",[e,a]),c.isFunction(a.importComplete)&&a.importComplete(e))}catch(h){}}},a.ajaxOptions));break;case "jsonstring":a.impstring&&
"string"===typeof a.impstring&&(b(a.impstring,a),c(d).triggerHandler("jqGridImportComplete",[a.impstring,a]),c.isFunction(a.importComplete)&&a.importComplete(a.impstring),a.impstring=null)}})},jqGridExport:function(a){a=c.extend({exptype:"xmlstring",root:"grid",ident:"\t"},a||{});var d=null;this.each(function(){if(this.grid){var e,b=c.extend(!0,{},c(this).jqGrid("getGridParam"));b.rownumbers&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.multiselect&&(b.colNames.splice(0,1),b.colModel.splice(0,
1));b.subGrid&&(b.colNames.splice(0,1),b.colModel.splice(0,1));b.knv=null;if(b.treeGrid)for(e in b.treeReader)b.treeReader.hasOwnProperty(e)&&(b.colNames.splice(b.colNames.length-1),b.colModel.splice(b.colModel.length-1));switch(a.exptype){case "xmlstring":d="<"+a.root+">"+xmlJsonClass.json2xml(b,a.ident)+"</"+a.root+">";break;case "jsonstring":d="{"+xmlJsonClass.toJson(b,a.root,a.ident,!1)+"}",void 0!==b.postData.filters&&(d=d.replace(/filters":"/,'filters":'),d=d.replace(/\}\]\}"/,"}]}"))}}});return d},
excelExport:function(a){a=c.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",exportOptions:{}},a||{});return this.each(function(){var d;this.grid&&"remote"===a.exptype&&(d=c.extend({},this.p.postData,a.exportOptions),d[a.oper]=a.tag,d=jQuery.param(d),d=-1!==a.url.indexOf("?")?a.url+"&"+d:a.url+"?"+d,window.location=d)})}})});

//# sourceMappingURL=grid.import.map

//# sourceMappingURL=grid.import.map

//# sourceMappingURL=grid.import.map

//# sourceMappingURL=grid.import.map

//# sourceMappingURL=grid.import.map
