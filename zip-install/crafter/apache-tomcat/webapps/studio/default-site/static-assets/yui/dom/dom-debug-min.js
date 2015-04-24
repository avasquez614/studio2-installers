(function(){var b=YAHOO.util,f=YAHOO.lang,l,j,k={},g={},n=window.document;
YAHOO.env._id_counter=YAHOO.env._id_counter||0;
var c=YAHOO.env.ua.opera,m=YAHOO.env.ua.webkit,a=YAHOO.env.ua.gecko,h=YAHOO.env.ua.ie;
var e={HYPHEN:/(-[a-z])/i,ROOT_TAG:/^body|html$/i,OP_SCROLL:/^(?:inline|table-row)$/i};
var o=function(q){if(!e.HYPHEN.test(q)){return q
}if(k[q]){return k[q]
}var r=q;
while(e.HYPHEN.exec(r)){r=r.replace(RegExp.$1,RegExp.$1.substr(1).toUpperCase())
}k[q]=r;
return r
};
var p=function(r){var q=g[r];
if(!q){q=new RegExp("(?:^|\\s+)"+r+"(?:\\s+|$)");
g[r]=q
}return q
};
if(n.defaultView&&n.defaultView.getComputedStyle){l=function(q,t){var s=null;
if(t=="float"){t="cssFloat"
}var r=q.ownerDocument.defaultView.getComputedStyle(q,"");
if(r){s=r[o(t)]
}return q.style[t]||s
}
}else{if(n.documentElement.currentStyle&&h){l=function(q,s){switch(o(s)){case"opacity":var u=100;
try{u=q.filters["DXImageTransform.Microsoft.Alpha"].opacity
}catch(t){try{u=q.filters("alpha").opacity
}catch(t){YAHOO.log("getStyle: IE filter failed","error","Dom")
}}return u/100;
case"float":s="styleFloat";
default:var r=q.currentStyle?q.currentStyle[s]:null;
return(q.style[s]||r)
}}
}else{l=function(q,r){return q.style[r]
}
}}if(h){j=function(q,r,s){switch(r){case"opacity":if(f.isString(q.style.filter)){q.style.filter="alpha(opacity="+s*100+")";
if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1
}}break;
case"float":r="styleFloat";
default:q.style[r]=s
}}
}else{j=function(q,r,s){if(r=="float"){r="cssFloat"
}q.style[r]=s
}
}var d=function(q,r){return q&&q.nodeType==1&&(!r||r(q))
};
YAHOO.util.Dom={get:function(s){if(s){if(s.nodeType||s.item){return s
}if(typeof s==="string"){return n.getElementById(s)
}if("length" in s){var t=[];
for(var r=0,q=s.length;
r<q;
++r){t[t.length]=b.Dom.get(s[r])
}return t
}return s
}return null
},getStyle:function(q,s){s=o(s);
var r=function(t){return l(t,s)
};
return b.Dom.batch(q,r,b.Dom,true)
},setStyle:function(q,s,t){s=o(s);
var r=function(u){j(u,s,t);
YAHOO.log("setStyle setting "+s+" to "+t,"info","Dom")
};
b.Dom.batch(q,r,b.Dom,true)
},getXY:function(q){var r=function(s){if((s.parentNode===null||s.offsetParent===null||this.getStyle(s,"display")=="none")&&s!=s.ownerDocument.body){YAHOO.log("getXY failed: element not available","error","Dom");
return false
}YAHOO.log("getXY returning "+i(s),"info","Dom");
return i(s)
};
return b.Dom.batch(q,r,b.Dom,true)
},getX:function(q){var r=function(s){return b.Dom.getXY(s)[0]
};
return b.Dom.batch(q,r,b.Dom,true)
},getY:function(q){var r=function(s){return b.Dom.getXY(s)[1]
};
return b.Dom.batch(q,r,b.Dom,true)
},setXY:function(q,t,s){var r=function(w){var v=this.getStyle(w,"position");
if(v=="static"){this.setStyle(w,"position","relative");
v="relative"
}var y=this.getXY(w);
if(y===false){YAHOO.log("setXY failed: element not available","error","Dom");
return false
}var x=[parseInt(this.getStyle(w,"left"),10),parseInt(this.getStyle(w,"top"),10)];
if(isNaN(x[0])){x[0]=(v=="relative")?0:w.offsetLeft
}if(isNaN(x[1])){x[1]=(v=="relative")?0:w.offsetTop
}if(t[0]!==null){w.style.left=t[0]-y[0]+x[0]+"px"
}if(t[1]!==null){w.style.top=t[1]-y[1]+x[1]+"px"
}if(!s){var u=this.getXY(w);
if((t[0]!==null&&u[0]!=t[0])||(t[1]!==null&&u[1]!=t[1])){this.setXY(w,t,true)
}}YAHOO.log("setXY setting position to "+t,"info","Dom")
};
b.Dom.batch(q,r,b.Dom,true)
},setX:function(r,q){b.Dom.setXY(r,[q,null])
},setY:function(q,r){b.Dom.setXY(q,[null,r])
},getRegion:function(q){var r=function(s){if((s.parentNode===null||s.offsetParent===null||this.getStyle(s,"display")=="none")&&s!=s.ownerDocument.body){YAHOO.log("getRegion failed: element not available","error","Dom");
return false
}var t=b.Region.getRegion(s);
YAHOO.log("getRegion returning "+t,"info","Dom");
return t
};
return b.Dom.batch(q,r,b.Dom,true)
},getClientWidth:function(){return b.Dom.getViewportWidth()
},getClientHeight:function(){return b.Dom.getViewportHeight()
},getElementsByClassName:function(u,y,v,w){u=f.trim(u);
y=y||"*";
v=(v)?b.Dom.get(v):null||n;
if(!v){return[]
}var r=[],q=v.getElementsByTagName(y),x=p(u);
for(var s=0,t=q.length;
s<t;
++s){if(x.test(q[s].className)){r[r.length]=q[s];
if(w){w.call(q[s],q[s])
}}}return r
},hasClass:function(s,r){var q=p(r);
var t=function(u){YAHOO.log("hasClass returning "+q.test(u.className),"info","Dom");
return q.test(u.className)
};
return b.Dom.batch(s,t,b.Dom,true)
},addClass:function(r,q){var s=function(t){if(this.hasClass(t,q)){return false
}YAHOO.log("addClass adding "+q,"info","Dom");
t.className=f.trim([t.className,q].join(" "));
return true
};
return b.Dom.batch(r,s,b.Dom,true)
},removeClass:function(s,r){var q=p(r);
var t=function(w){var v=false,x=w.className;
if(r&&x&&this.hasClass(w,r)){w.className=x.replace(q," ");
if(this.hasClass(w,r)){this.removeClass(w,r)
}w.className=f.trim(w.className);
if(w.className===""){var u=(w.hasAttribute)?"class":"className";
YAHOO.log("removeClass removing empty class attribute","info","Dom");
w.removeAttribute(u)
}v=true
}YAHOO.log("removeClass "+r+" result: "+v,"info","Dom");
return v
};
return b.Dom.batch(s,t,b.Dom,true)
},replaceClass:function(t,r,q){if(!q||r===q){return false
}var s=p(r);
var u=function(v){YAHOO.log("replaceClass replacing "+r+" with "+q,"info","Dom");
if(!this.hasClass(v,r)){this.addClass(v,q);
return true
}v.className=v.className.replace(s," "+q+" ");
if(this.hasClass(v,r)){this.removeClass(v,r)
}v.className=f.trim(v.className);
return true
};
return b.Dom.batch(t,u,b.Dom,true)
},generateId:function(q,s){s=s||"yui-gen";
var r=function(t){if(t&&t.id){YAHOO.log("generateId returning existing id "+t.id,"info","Dom");
return t.id
}var u=s+YAHOO.env._id_counter++;
YAHOO.log("generateId generating "+u,"info","Dom");
if(t){t.id=u
}return u
};
return b.Dom.batch(q,r,b.Dom,true)||r.apply(b.Dom,arguments)
},isAncestor:function(r,s){r=b.Dom.get(r);
s=b.Dom.get(s);
var q=false;
if((r&&s)&&(r.nodeType&&s.nodeType)){if(r.contains&&r!==s){q=r.contains(s)
}else{if(r.compareDocumentPosition){q=!!(r.compareDocumentPosition(s)&16)
}}}else{YAHOO.log("isAncestor failed; invalid input: "+r+","+s,"error","Dom")
}YAHOO.log("isAncestor("+r+","+s+" returning "+q,"info","Dom");
return q
},inDocument:function(q){return this.isAncestor(n.documentElement,q)
},getElementsBy:function(x,r,s,u){r=r||"*";
s=(s)?b.Dom.get(s):null||n;
if(!s){return[]
}var t=[],w=s.getElementsByTagName(r);
for(var v=0,q=w.length;
v<q;
++v){if(x(w[v])){t[t.length]=w[v];
if(u){u(w[v])
}}}YAHOO.log("getElementsBy returning "+t,"info","Dom");
return t
},batch:function(u,x,w,s){u=(u&&(u.tagName||u.item))?u:b.Dom.get(u);
if(!u||!x){YAHOO.log("batch failed: invalid arguments","error","Dom");
return false
}var t=(s)?w:window;
if(u.tagName||u.length===undefined){return x.call(t,u,w)
}var v=[];
for(var r=0,q=u.length;
r<q;
++r){v[v.length]=x.call(t,u[r],w)
}return v
},getDocumentHeight:function(){var r=(n.compatMode!="CSS1Compat")?n.body.scrollHeight:n.documentElement.scrollHeight;
var q=Math.max(r,b.Dom.getViewportHeight());
YAHOO.log("getDocumentHeight returning "+q,"info","Dom");
return q
},getDocumentWidth:function(){var r=(n.compatMode!="CSS1Compat")?n.body.scrollWidth:n.documentElement.scrollWidth;
var q=Math.max(r,b.Dom.getViewportWidth());
YAHOO.log("getDocumentWidth returning "+q,"info","Dom");
return q
},getViewportHeight:function(){var q=self.innerHeight;
var r=n.compatMode;
if((r||h)&&!c){q=(r=="CSS1Compat")?n.documentElement.clientHeight:n.body.clientHeight
}YAHOO.log("getViewportHeight returning "+q,"info","Dom");
return q
},getViewportWidth:function(){var q=self.innerWidth;
var r=n.compatMode;
if(r||h){q=(r=="CSS1Compat")?n.documentElement.clientWidth:n.body.clientWidth
}YAHOO.log("getViewportWidth returning "+q,"info","Dom");
return q
},getAncestorBy:function(q,r){while((q=q.parentNode)){if(d(q,r)){YAHOO.log("getAncestorBy returning "+q,"info","Dom");
return q
}}YAHOO.log("getAncestorBy returning null (no ancestor passed test)","error","Dom");
return null
},getAncestorByClassName:function(r,q){r=b.Dom.get(r);
if(!r){YAHOO.log("getAncestorByClassName failed: invalid node argument","error","Dom");
return null
}var s=function(t){return b.Dom.hasClass(t,q)
};
return b.Dom.getAncestorBy(r,s)
},getAncestorByTagName:function(r,q){r=b.Dom.get(r);
if(!r){YAHOO.log("getAncestorByTagName failed: invalid node argument","error","Dom");
return null
}var s=function(t){return t.tagName&&t.tagName.toUpperCase()==q.toUpperCase()
};
return b.Dom.getAncestorBy(r,s)
},getPreviousSiblingBy:function(q,r){while(q){q=q.previousSibling;
if(d(q,r)){return q
}}return null
},getPreviousSibling:function(q){q=b.Dom.get(q);
if(!q){YAHOO.log("getPreviousSibling failed: invalid node argument","error","Dom");
return null
}return b.Dom.getPreviousSiblingBy(q)
},getNextSiblingBy:function(q,r){while(q){q=q.nextSibling;
if(d(q,r)){return q
}}return null
},getNextSibling:function(q){q=b.Dom.get(q);
if(!q){YAHOO.log("getNextSibling failed: invalid node argument","error","Dom");
return null
}return b.Dom.getNextSiblingBy(q)
},getFirstChildBy:function(q,s){var r=(d(q.firstChild,s))?q.firstChild:null;
return r||b.Dom.getNextSiblingBy(q.firstChild,s)
},getFirstChild:function(q,r){q=b.Dom.get(q);
if(!q){YAHOO.log("getFirstChild failed: invalid node argument","error","Dom");
return null
}return b.Dom.getFirstChildBy(q)
},getLastChildBy:function(q,s){if(!q){YAHOO.log("getLastChild failed: invalid node argument","error","Dom");
return null
}var r=(d(q.lastChild,s))?q.lastChild:null;
return r||b.Dom.getPreviousSiblingBy(q.lastChild,s)
},getLastChild:function(q){q=b.Dom.get(q);
return b.Dom.getLastChildBy(q)
},getChildrenBy:function(r,t){var s=b.Dom.getFirstChildBy(r,t);
var q=s?[s]:[];
b.Dom.getNextSiblingBy(s,function(u){if(!t||t(u)){q[q.length]=u
}return false
});
return q
},getChildren:function(q){q=b.Dom.get(q);
if(!q){YAHOO.log("getChildren failed: invalid node argument","error","Dom")
}return b.Dom.getChildrenBy(q)
},getDocumentScrollLeft:function(q){q=q||n;
return Math.max(q.documentElement.scrollLeft,q.body.scrollLeft)
},getDocumentScrollTop:function(q){q=q||n;
return Math.max(q.documentElement.scrollTop,q.body.scrollTop)
},insertBefore:function(r,q){r=b.Dom.get(r);
q=b.Dom.get(q);
if(!r||!q||!q.parentNode){YAHOO.log("insertAfter failed: missing or invalid arg(s)","error","Dom");
return null
}return q.parentNode.insertBefore(r,q)
},insertAfter:function(r,q){r=b.Dom.get(r);
q=b.Dom.get(q);
if(!r||!q||!q.parentNode){YAHOO.log("insertAfter failed: missing or invalid arg(s)","error","Dom");
return null
}if(q.nextSibling){return q.parentNode.insertBefore(r,q.nextSibling)
}else{return q.parentNode.appendChild(r)
}},getClientRegion:function(){var u=b.Dom.getDocumentScrollTop(),s=b.Dom.getDocumentScrollLeft(),v=b.Dom.getViewportWidth()+s,q=b.Dom.getViewportHeight()+u;
return new b.Region(u,v,q,s)
}};
var i=function(){if(n.documentElement.getBoundingClientRect){return function(s){var t=s.getBoundingClientRect(),r=Math.round;
var q=s.ownerDocument;
return[r(t.left+b.Dom.getDocumentScrollLeft(q)),r(t.top+b.Dom.getDocumentScrollTop(q))]
}
}else{return function(s){var t=[s.offsetLeft,s.offsetTop];
var r=s.offsetParent;
var q=(m&&b.Dom.getStyle(s,"position")=="absolute"&&s.offsetParent==s.ownerDocument.body);
if(r!=s){while(r){t[0]+=r.offsetLeft;
t[1]+=r.offsetTop;
if(!q&&m&&b.Dom.getStyle(r,"position")=="absolute"){q=true
}r=r.offsetParent
}}if(q){t[0]-=s.ownerDocument.body.offsetLeft;
t[1]-=s.ownerDocument.body.offsetTop
}r=s.parentNode;
while(r.tagName&&!e.ROOT_TAG.test(r.tagName)){if(r.scrollTop||r.scrollLeft){t[0]-=r.scrollLeft;
t[1]-=r.scrollTop
}r=r.parentNode
}return t
}
}}()
})();
YAHOO.util.Region=function(d,e,a,c){this.top=d;
this[1]=d;
this.right=e;
this.bottom=a;
this.left=c;
this[0]=c
};
YAHOO.util.Region.prototype.contains=function(a){return(a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom)
};
YAHOO.util.Region.prototype.getArea=function(){return((this.bottom-this.top)*(this.right-this.left))
};
YAHOO.util.Region.prototype.intersect=function(f){var d=Math.max(this.top,f.top);
var e=Math.min(this.right,f.right);
var a=Math.min(this.bottom,f.bottom);
var c=Math.max(this.left,f.left);
if(a>=d&&e>=c){return new YAHOO.util.Region(d,e,a,c)
}else{return null
}};
YAHOO.util.Region.prototype.union=function(f){var d=Math.min(this.top,f.top);
var e=Math.max(this.right,f.right);
var a=Math.max(this.bottom,f.bottom);
var c=Math.min(this.left,f.left);
return new YAHOO.util.Region(d,e,a,c)
};
YAHOO.util.Region.prototype.toString=function(){return("Region {top: "+this.top+", right: "+this.right+", bottom: "+this.bottom+", left: "+this.left+"}")
};
YAHOO.util.Region.getRegion=function(e){var g=YAHOO.util.Dom.getXY(e);
var d=g[1];
var f=g[0]+e.offsetWidth;
var a=g[1]+e.offsetHeight;
var c=g[0];
return new YAHOO.util.Region(d,f,a,c)
};
YAHOO.util.Point=function(a,b){if(YAHOO.lang.isArray(a)){b=a[1];
a=a[0]
}this.x=this.right=this.left=this[0]=a;
this.y=this.top=this.bottom=this[1]=b
};
YAHOO.util.Point.prototype=new YAHOO.util.Region();
YAHOO.register("dom",YAHOO.util.Dom,{version:"2.6.0",build:"1321"});