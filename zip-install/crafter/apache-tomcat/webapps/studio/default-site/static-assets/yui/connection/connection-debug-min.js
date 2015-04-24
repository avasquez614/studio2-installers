YAHOO.util.Connect={_msxml_progid:["Microsoft.XMLHTTP","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:"application/x-www-form-urlencoded; charset=UTF-8",_default_form_header:"application/x-www-form-urlencoded",_use_default_xhr_header:true,_default_xhr_header:"XMLHttpRequest",_has_default_headers:true,_default_headers:{},_isFormSubmit:false,_isFileUpload:false,_formNode:null,_sFormData:null,_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,_submitElementValue:null,_hasSubmitListener:(function(){if(YAHOO.util.Event){YAHOO.util.Event.addListener(document,"click",function(b){var a=YAHOO.util.Event.getTarget(b);
if(a.nodeName.toLowerCase()=="input"&&(a.type&&a.type.toLowerCase()=="submit")){YAHOO.util.Connect._submitElementValue=encodeURIComponent(a.name)+"="+encodeURIComponent(a.value)
}});
return true
}return false
})(),startEvent:new YAHOO.util.CustomEvent("start"),completeEvent:new YAHOO.util.CustomEvent("complete"),successEvent:new YAHOO.util.CustomEvent("success"),failureEvent:new YAHOO.util.CustomEvent("failure"),uploadEvent:new YAHOO.util.CustomEvent("upload"),abortEvent:new YAHOO.util.CustomEvent("abort"),_customEvents:{onStart:["startEvent","start"],onComplete:["completeEvent","complete"],onSuccess:["successEvent","success"],onFailure:["failureEvent","failure"],onUpload:["uploadEvent","upload"],onAbort:["abortEvent","abort"]},setProgId:function(a){this._msxml_progid.unshift(a);
YAHOO.log("ActiveX Program Id  "+a+" added to _msxml_progid.","info","Connection")
},setDefaultPostHeader:function(a){if(typeof a=="string"){this._default_post_header=a;
YAHOO.log("Default POST header set to  "+a,"info","Connection")
}else{if(typeof a=="boolean"){this._use_default_post_header=a
}}},setDefaultXhrHeader:function(a){if(typeof a=="string"){this._default_xhr_header=a;
YAHOO.log("Default XHR header set to  "+a,"info","Connection")
}else{this._use_default_xhr_header=a
}},setPollingInterval:function(a){if(typeof a=="number"&&isFinite(a)){this._polling_interval=a;
YAHOO.log("Default polling interval set to "+a+"ms","info","Connection")
}},createXhrObject:function(g){var f,a;
try{a=new XMLHttpRequest();
f={conn:a,tId:g};
YAHOO.log("XHR object created for transaction "+g,"info","Connection")
}catch(d){for(var b=0;
b<this._msxml_progid.length;
++b){try{a=new ActiveXObject(this._msxml_progid[b]);
f={conn:a,tId:g};
YAHOO.log("ActiveX XHR object created for transaction "+g,"info","Connection");
break
}catch(c){}}}finally{return f
}},getConnectionObject:function(a){var c;
var d=this._transaction_id;
try{if(!a){c=this.createXhrObject(d)
}else{c={};
c.tId=d;
c.isUpload=true
}if(c){this._transaction_id++
}}catch(b){}finally{return c
}},asyncRequest:function(f,c,e,a){var d=(this._isFileUpload)?this.getConnectionObject(true):this.getConnectionObject();
var b=(e&&e.argument)?e.argument:null;
if(!d){YAHOO.log("Unable to create connection object.","error","Connection");
return null
}else{if(e&&e.customevents){this.initCustomEvents(d,e)
}if(this._isFormSubmit){if(this._isFileUpload){this.uploadFile(d,e,c,a);
return d
}if(f.toUpperCase()=="GET"){if(this._sFormData.length!==0){c+=((c.indexOf("?")==-1)?"?":"&")+this._sFormData
}}else{if(f.toUpperCase()=="POST"){a=a?this._sFormData+"&"+a:this._sFormData
}}}if(f.toUpperCase()=="GET"&&(e&&e.cache===false)){c+=((c.indexOf("?")==-1)?"?":"&")+"rnd="+new Date().valueOf().toString()
}d.conn.open(f,c,true);
if(this._use_default_xhr_header){if(!this._default_headers["X-Requested-With"]){this.initHeader("X-Requested-With",this._default_xhr_header,true);
YAHOO.log("Initialize transaction header X-Request-Header to XMLHttpRequest.","info","Connection")
}}if((f.toUpperCase()==="POST"&&this._use_default_post_header)&&this._isFormSubmit===false){this.initHeader("Content-Type",this._default_post_header);
YAHOO.log("Initialize header Content-Type to application/x-www-form-urlencoded; UTF-8 for POST transaction.","info","Connection")
}if(this._has_default_headers||this._has_http_headers){this.setHeader(d)
}this.handleReadyState(d,e);
d.conn.send(a||"");
YAHOO.log("Transaction "+d.tId+" sent.","info","Connection");
if(this._isFormSubmit===true){this.resetFormState()
}this.startEvent.fire(d,b);
if(d.startEvent){d.startEvent.fire(d,b)
}return d
}},initCustomEvents:function(a,c){var b;
for(b in c.customevents){if(this._customEvents[b][0]){a[this._customEvents[b][0]]=new YAHOO.util.CustomEvent(this._customEvents[b][1],(c.scope)?c.scope:null);
YAHOO.log("Transaction-specific Custom Event "+a[this._customEvents[b][1]]+" created.","info","Connection");
a[this._customEvents[b][0]].subscribe(c.customevents[b]);
YAHOO.log("Transaction-specific Custom Event "+a[this._customEvents[b][1]]+" subscribed.","info","Connection")
}}},handleReadyState:function(c,d){var b=this;
var a=(d&&d.argument)?d.argument:null;
if(d&&d.timeout){this._timeOut[c.tId]=window.setTimeout(function(){b.abort(c,d,true)
},d.timeout)
}this._poll[c.tId]=window.setInterval(function(){if(c.conn&&c.conn.readyState===4){window.clearInterval(b._poll[c.tId]);
delete b._poll[c.tId];
if(d&&d.timeout){window.clearTimeout(b._timeOut[c.tId]);
delete b._timeOut[c.tId]
}b.completeEvent.fire(c,a);
if(c.completeEvent){c.completeEvent.fire(c,a)
}b.handleTransactionResponse(c,d)
}},this._polling_interval)
},handleTransactionResponse:function(g,h,a){var d,c;
var b=(h&&h.argument)?h.argument:null;
try{if(g.conn.status!==undefined&&g.conn.status!==0){d=g.conn.status
}else{d=13030
}}catch(f){d=13030
}if(d>=200&&d<300||d===1223){c=this.createResponseObject(g,b);
if(h&&h.success){if(!h.scope){h.success(c);
YAHOO.log("Success callback. HTTP code is "+d,"info","Connection")
}else{h.success.apply(h.scope,[c]);
YAHOO.log("Success callback with scope. HTTP code is "+d,"info","Connection")
}}this.successEvent.fire(c);
if(g.successEvent){g.successEvent.fire(c)
}}else{switch(d){case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:c=this.createExceptionObject(g.tId,b,(a?a:false));
if(h&&h.failure){if(!h.scope){h.failure(c);
YAHOO.log("Failure callback. Exception detected. Status code is "+d,"warn","Connection")
}else{h.failure.apply(h.scope,[c]);
YAHOO.log("Failure callback with scope. Exception detected. Status code is "+d,"warn","Connection")
}}break;
default:c=this.createResponseObject(g,b);
if(h&&h.failure){if(!h.scope){h.failure(c);
YAHOO.log("Failure callback. HTTP status code is "+d,"warn","Connection")
}else{h.failure.apply(h.scope,[c]);
YAHOO.log("Failure callback with scope. HTTP status code is "+d,"warn","Connection")
}}}this.failureEvent.fire(c);
if(g.failureEvent){g.failureEvent.fire(c)
}}this.releaseObject(g);
c=null
},createResponseObject:function(a,h){var d={};
var k={};
try{var c=a.conn.getAllResponseHeaders();
var g=c.split("\n");
for(var f=0;
f<g.length;
f++){var b=g[f].indexOf(":");
if(b!=-1){k[g[f].substring(0,b)]=g[f].substring(b+2)
}}}catch(j){}d.tId=a.tId;
d.status=(a.conn.status==1223)?204:a.conn.status;
d.statusText=(a.conn.status==1223)?"No Content":a.conn.statusText;
d.getResponseHeader=k;
d.getAllResponseHeaders=c;
d.responseText=a.conn.responseText;
d.responseXML=a.conn.responseXML;
if(h){d.argument=h
}return d
},createExceptionObject:function(h,d,a){var f=0;
var g="communication failure";
var c=-1;
var b="transaction aborted";
var e={};
e.tId=h;
if(a){e.status=c;
e.statusText=b
}else{e.status=f;
e.statusText=g
}if(d){e.argument=d
}return e
},initHeader:function(a,d,c){var b=(c)?this._default_headers:this._http_headers;
b[a]=d;
if(c){this._has_default_headers=true
}else{this._has_http_headers=true
}},setHeader:function(a){var b;
if(this._has_default_headers){for(b in this._default_headers){if(YAHOO.lang.hasOwnProperty(this._default_headers,b)){a.conn.setRequestHeader(b,this._default_headers[b]);
YAHOO.log("Default HTTP header "+b+" set with value of "+this._default_headers[b],"info","Connection")
}}}if(this._has_http_headers){for(b in this._http_headers){if(YAHOO.lang.hasOwnProperty(this._http_headers,b)){a.conn.setRequestHeader(b,this._http_headers[b]);
YAHOO.log("HTTP header "+b+" set with value of "+this._http_headers[b],"info","Connection")
}}delete this._http_headers;
this._http_headers={};
this._has_http_headers=false
}},resetDefaultHeaders:function(){delete this._default_headers;
this._default_headers={};
this._has_default_headers=false
},setForm:function(o,h,c){var n,b,m,k,r,l=false,f=[],q=0,e,g,d,p,a;
this.resetFormState();
if(typeof o=="string"){n=(document.getElementById(o)||document.forms[o])
}else{if(typeof o=="object"){n=o
}else{YAHOO.log("Unable to create form object "+o,"warn","Connection");
return
}}if(h){this.createFrame(c?c:null);
this._isFormSubmit=true;
this._isFileUpload=true;
this._formNode=n;
return
}for(e=0,g=n.elements.length;
e<g;
++e){b=n.elements[e];
r=b.disabled;
m=b.name;
if(!r&&m){m=encodeURIComponent(m)+"=";
k=encodeURIComponent(b.value);
switch(b.type){case"select-one":if(b.selectedIndex>-1){a=b.options[b.selectedIndex];
f[q++]=m+encodeURIComponent((a.attributes.value&&a.attributes.value.specified)?a.value:a.text)
}break;
case"select-multiple":if(b.selectedIndex>-1){for(d=b.selectedIndex,p=b.options.length;
d<p;
++d){a=b.options[d];
if(a.selected){f[q++]=m+encodeURIComponent((a.attributes.value&&a.attributes.value.specified)?a.value:a.text)
}}}break;
case"radio":case"checkbox":if(b.checked){f[q++]=m+k
}break;
case"file":case undefined:case"reset":case"button":break;
case"submit":if(l===false){if(this._hasSubmitListener&&this._submitElementValue){f[q++]=this._submitElementValue
}else{f[q++]=m+k
}l=true
}break;
default:f[q++]=m+k
}}}this._isFormSubmit=true;
this._sFormData=f.join("&");
YAHOO.log("Form initialized for transaction. HTML form POST message is: "+this._sFormData,"info","Connection");
this.initHeader("Content-Type",this._default_form_header);
YAHOO.log("Initialize header Content-Type to application/x-www-form-urlencoded for setForm() transaction.","info","Connection");
return this._sFormData
},resetFormState:function(){this._isFormSubmit=false;
this._isFileUpload=false;
this._formNode=null;
this._sFormData=""
},createFrame:function(a){var b="yuiIO"+this._transaction_id;
var c;
if(YAHOO.env.ua.ie){c=document.createElement('<iframe id="'+b+'" name="'+b+'" />');
if(typeof a=="boolean"){c.src="javascript:false"
}}else{c=document.createElement("iframe");
c.id=b;
c.name=b
}c.style.position="absolute";
c.style.top="-1000px";
c.style.left="-1000px";
document.body.appendChild(c);
YAHOO.log("File upload iframe created. Id is:"+b,"info","Connection")
},appendPostData:function(a){var d=[],b=a.split("&"),c,e;
for(c=0;
c<b.length;
c++){e=b[c].indexOf("=");
if(e!=-1){d[c]=document.createElement("input");
d[c].type="hidden";
d[c].name=decodeURIComponent(b[c].substring(0,e));
d[c].value=decodeURIComponent(b[c].substring(e+1));
this._formNode.appendChild(d[c])
}}return d
},uploadFile:function(d,p,e,c){var j="yuiIO"+d.tId,k="multipart/form-data",m=document.getElementById(j),q=this,l=(p&&p.argument)?p.argument:null,n,h,b,g;
var a={action:this._formNode.getAttribute("action"),method:this._formNode.getAttribute("method"),target:this._formNode.getAttribute("target")};
this._formNode.setAttribute("action",e);
this._formNode.setAttribute("method","POST");
this._formNode.setAttribute("target",j);
if(YAHOO.env.ua.ie){this._formNode.setAttribute("encoding",k)
}else{this._formNode.setAttribute("enctype",k)
}if(c){n=this.appendPostData(c)
}this._formNode.submit();
this.startEvent.fire(d,l);
if(d.startEvent){d.startEvent.fire(d,l)
}if(p&&p.timeout){this._timeOut[d.tId]=window.setTimeout(function(){q.abort(d,p,true)
},p.timeout)
}if(n&&n.length>0){for(h=0;
h<n.length;
h++){this._formNode.removeChild(n[h])
}}for(b in a){if(YAHOO.lang.hasOwnProperty(a,b)){if(a[b]){this._formNode.setAttribute(b,a[b])
}else{this._formNode.removeAttribute(b)
}}}this.resetFormState();
var f=function(){if(p&&p.timeout){window.clearTimeout(q._timeOut[d.tId]);
delete q._timeOut[d.tId]
}q.completeEvent.fire(d,l);
if(d.completeEvent){d.completeEvent.fire(d,l)
}g={tId:d.tId,argument:p.argument};
try{g.responseText=m.contentWindow.document.body?m.contentWindow.document.body.innerHTML:m.contentWindow.document.documentElement.textContent;
g.responseXML=m.contentWindow.document.XMLDocument?m.contentWindow.document.XMLDocument:m.contentWindow.document
}catch(i){}if(p&&p.upload){if(!p.scope){p.upload(g);
YAHOO.log("Upload callback.","info","Connection")
}else{p.upload.apply(p.scope,[g]);
YAHOO.log("Upload callback with scope.","info","Connection")
}}q.uploadEvent.fire(g);
if(d.uploadEvent){d.uploadEvent.fire(g)
}YAHOO.util.Event.removeListener(m,"load",f);
setTimeout(function(){document.body.removeChild(m);
q.releaseObject(d);
YAHOO.log("File upload iframe destroyed. Id is:"+j,"info","Connection")
},100)
};
YAHOO.util.Event.addListener(m,"load",f)
},abort:function(e,g,a){var d;
var b=(g&&g.argument)?g.argument:null;
if(e&&e.conn){if(this.isCallInProgress(e)){e.conn.abort();
window.clearInterval(this._poll[e.tId]);
delete this._poll[e.tId];
if(a){window.clearTimeout(this._timeOut[e.tId]);
delete this._timeOut[e.tId]
}d=true
}}else{if(e&&e.isUpload===true){var c="yuiIO"+e.tId;
var f=document.getElementById(c);
if(f){YAHOO.util.Event.removeListener(f,"load");
document.body.removeChild(f);
YAHOO.log("File upload iframe destroyed. Id is:"+c,"info","Connection");
if(a){window.clearTimeout(this._timeOut[e.tId]);
delete this._timeOut[e.tId]
}d=true
}}else{d=false
}}if(d===true){this.abortEvent.fire(e,b);
if(e.abortEvent){e.abortEvent.fire(e,b)
}this.handleTransactionResponse(e,g,true);
YAHOO.log("Transaction "+e.tId+" aborted.","info","Connection")
}return d
},isCallInProgress:function(b){if(b&&b.conn){return b.conn.readyState!==4&&b.conn.readyState!==0
}else{if(b&&b.isUpload===true){var a="yuiIO"+b.tId;
return document.getElementById(a)?true:false
}else{return false
}}},releaseObject:function(a){if(a&&a.conn){a.conn=null;
YAHOO.log("Connection object for transaction "+a.tId+" destroyed.","info","Connection");
a=null
}}};
YAHOO.register("connection",YAHOO.util.Connect,{version:"2.6.0",build:"1321"});