window.CodeMirror=(function(){function p(a3,aZ){var cm={},bA=p.defaults;
for(var aR in bA){if(bA.hasOwnProperty(aR)){cm[aR]=(aZ&&aZ.hasOwnProperty(aR)?aZ:bA)[aR]
}}var bD=ah("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em");
bD.setAttribute("wrap","off");
bD.setAttribute("autocorrect","off");
bD.setAttribute("autocapitalize","off");
var ci=ah("div",[bD],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");
var cJ=ah("div",null,"CodeMirror-scrollbar-inner");
var a2=ah("div",[cJ],"CodeMirror-scrollbar");
var aI=ah("div"),bx=ah("div",null,null,"position: relative; z-index: -1");
var bu=ah("pre","\u00a0","CodeMirror-cursor"),bo=ah("pre","\u00a0","CodeMirror-cursor","visibility: hidden");
var aN=ah("div",null,null,"position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden;");
var bO=ah("div",[aN,bu,bo,bx,aI],null,"position: relative; z-index: 0");
var bf=ah("div",null,"CodeMirror-gutter-text"),aX=ah("div",[bf],"CodeMirror-gutter");
var cE=ah("div",[aX,ah("div",[bO],"CodeMirror-lines")],null,"position: relative");
var cu=ah("div",[cE],null,"position: relative");
var bB=ah("div",[cu],"CodeMirror-scroll");
bB.setAttribute("tabIndex","-1");
var aV=ah("div",[ci,a2,bB],"CodeMirror"+(cm.lineWrapping?" CodeMirror-wrap":""));
if(a3.appendChild){a3.appendChild(aV)
}else{a3(aV)
}c0();
cT();
if(h){bD.style.width="0px"
}if(!k){bB.draggable=true
}bO.style.outline="none";
if(cm.tabindex!=null){bD.tabIndex=cm.tabindex
}if(cm.autofocus){bV()
}if(!cm.gutter&&!cm.lineNumbers){aX.style.display="none"
}if(ae){ci.style.height="1px",ci.style.position="absolute"
}if(T){a2.style.zIndex=-2;
a2.style.visibility="hidden"
}else{if(J){a2.style.minWidth="18px"
}}var cs=new i(),aO=new i(),dd;
var cz,cW=new ai([new N([new H("")])]),c7=0,cG;
cf();
var dk={from:{line:0,ch:0},to:{line:0,ch:0},inverted:false};
var cF,bI,bh,bQ=0,bt,cL=false,cQ=false;
var cN,cr,aT,db,a6,a9,cX;
var bv=0,de=0,b6=0,b7=0;
var cp;
var b0=c3(0),c1=false,bH=true;
var bM=false;
var cS=null;
aJ(function(){bd(cm.value||"");
cN=false
})();
var br=new D();
az(bB,"mousedown",aJ(cH));
az(bB,"dblclick",aJ(ch));
az(bO,"selectstart",e);
if(!v){az(bB,"contextmenu",bj)
}az(bB,"scroll",cw);
az(a2,"scroll",bW);
az(a2,"mousedown",function(){if(cG){setTimeout(bV,0)
}});
var cv=az(window,"resize",function(){if(aV.parentNode){cB(true)
}else{cv()
}},true);
az(bD,"keyup",aJ(cI));
az(bD,"input",a7);
az(bD,"keydown",aJ(cA));
az(bD,"keypress",aJ(bE));
az(bD,"focus",di);
az(bD,"blur",aW);
function bZ(dm){if(cm.onDragEvent&&cm.onDragEvent(cx,O(dm))){return
}ab(dm)
}if(cm.dragDrop){az(bB,"dragstart",aY);
az(bB,"dragenter",bZ);
az(bB,"dragover",bZ);
az(bB,"drop",aJ(aE))
}az(bB,"paste",function(){bV();
a7()
});
az(bD,"paste",a7);
az(bD,"cut",aJ(function(){if(!cm.readOnly){bL("")
}}));
if(ae){az(cu,"mouseup",function(){if(document.activeElement==bD){bD.blur()
}bV()
})
}var cU;
try{cU=(document.activeElement==bD)
}catch(ct){}if(cU||cm.autofocus){setTimeout(di,20)
}else{aW()
}function bK(dm){return dm>=0&&dm<cW.size
}var cx=aV.CodeMirror={getValue:cn,setValue:aJ(bd),getSelection:co,replaceSelection:aJ(bL),focus:function(){window.focus();
bV();
di();
a7()
},setOption:function(dn,dp){var dm=cm[dn];
cm[dn]=dp;
if(dn=="mode"||dn=="indentUnit"){cf()
}else{if(dn=="readOnly"&&dp=="nocursor"){aW();
bD.blur()
}else{if(dn=="readOnly"&&!dp){cZ(true)
}else{if(dn=="theme"){c0()
}else{if(dn=="lineWrapping"&&dm!=dp){aJ(c4)()
}else{if(dn=="tabSize"){cB(true)
}else{if(dn=="keyMap"){cT()
}}}}}}}if(dn=="lineNumbers"||dn=="gutter"||dn=="firstLineNumber"||dn=="theme"||dn=="lineNumberFormatter"){bw();
cB(true)
}},getOption:function(dm){return cm[dm]
},getMode:function(){return cz
},undo:aJ(dh),redo:aJ(c6),indentLine:aJ(function(dn,dm){if(typeof dm!="string"){if(dm==null){dm=cm.smartIndent?"smart":"prev"
}else{dm=dm?"add":"subtract"
}}if(bK(dn)){bU(dn,dm)
}}),indentSelection:aJ(cY),historySize:function(){return{undo:br.done.length,redo:br.undone.length}
},clearHistory:function(){br=new D()
},setHistory:function(dm){br=new D();
br.done=dm.done;
br.undone=dm.undone
},getHistory:function(){function dm(dt){for(var ds=0,du=[],dv;
ds<dt.length;
++ds){du.push(dv=[]);
for(var dr=0,dq=dt[ds];
dr<dq.length;
++dr){var dn=[],dw=dq[dr];
dv.push({start:dw.start,added:dw.added,old:dn});
for(var dp=0;
dp<dw.old.length;
++dp){dn.push(aq(dw.old[dp]))
}}}return du
}return{done:dm(br.done),undone:dm(br.undone)}
},matchBrackets:aJ(function(){cC(true)
}),getTokenAt:aJ(function(dm){dm=ba(dm);
return c3(dm.line).getTokenAt(cz,cR(dm.line),cm.tabSize,dm.ch)
}),getStateAfter:function(dm){dm=ck(dm==null?cW.size-1:dm);
return cR(dm+1)
},cursorCoords:function(dn,dm){if(dn==null){dn=dk.inverted
}return this.charCoords(dn?dk.from:dk.to,dm)
},charCoords:function(dn,dm){dn=ba(dn);
if(dm=="local"){return df(dn,false)
}if(dm=="div"){return df(dn,true)
}return aG(dn)
},coordsChar:function(dm){var dn=z(bO);
return b3(dm.x-dn.left,dm.y-dn.top)
},markText:aJ(b1),setBookmark:bb,findMarksAt:bF,setMarker:aJ(cg),clearMarker:aJ(aM),setLineClass:aJ(bC),hideLine:aJ(function(dm){return c8(dm,true)
}),showLine:aJ(function(dm){return c8(dm,false)
}),onDeleteLine:function(dm,dn){if(typeof dm=="number"){if(!bK(dm)){return null
}dm=c3(dm)
}(dm.handlers||(dm.handlers=[])).push(dn);
return dm
},lineInfo:bc,getViewport:function(){return{from:de,to:b6}
},addWidget:function(dr,dp,dt,dq,dv){dr=df(ba(dr));
var ds=dr.yBot,dn=dr.x;
dp.style.position="absolute";
cu.appendChild(dp);
if(dq=="over"){ds=dr.y
}else{if(dq=="near"){var dm=Math.max(bB.offsetHeight,cW.height*ca()),du=Math.max(cu.clientWidth,bO.clientWidth)-bn();
if(dr.yBot+dp.offsetHeight>dm&&dr.y>dp.offsetHeight){ds=dr.y-dp.offsetHeight
}if(dn+dp.offsetWidth>du){dn=du-dp.offsetWidth
}}}dp.style.top=(ds+cP())+"px";
dp.style.left=dp.style.right="";
if(dv=="right"){dn=cu.clientWidth-dp.offsetWidth;
dp.style.right="0px"
}else{if(dv=="left"){dn=0
}else{if(dv=="middle"){dn=(cu.clientWidth-dp.offsetWidth)/2
}}dp.style.left=(dn+bn())+"px"
}if(dt){aS(dn,ds,dn+dp.offsetWidth,ds+dp.offsetHeight)
}},lineCount:function(){return cW.size
},clipPos:ba,getCursor:function(dm){if(dm==null){dm=dk.inverted
}return X(dm?dk.from:dk.to)
},somethingSelected:function(){return !Q(dk.from,dk.to)
},setCursor:aJ(function(dm,dp,dn){if(dp==null&&typeof dm.line=="number"){bp(dm.line,dm.ch,dn)
}else{bp(dm,dp,dn)
}}),setSelection:aJ(function(dp,dn,dm){(dm?bT:bR)(ba(dp),ba(dn||dp))
}),getLine:function(dm){if(bK(dm)){return c3(dm).text
}},getLineHandle:function(dm){if(bK(dm)){return c3(dm)
}},setLine:aJ(function(dm,dn){if(bK(dm)){cb(dn,{line:dm,ch:0},{line:dm,ch:c3(dm).text.length})
}}),removeLine:aJ(function(dm){if(bK(dm)){cb("",{line:dm,ch:0},ba({line:dm+1,ch:0}))
}}),replaceRange:aJ(cb),getRange:function(dp,dn,dm){return dc(ba(dp),ba(dn),dm)
},triggerOnKeyDown:aJ(cA),execCommand:function(dm){return r[dm](cx)
},moveH:aJ(c2),deleteH:aJ(cK),moveV:aJ(cV),toggleOverwrite:function(){if(cL){cL=false;
bu.className=bu.className.replace(" CodeMirror-overwrite","")
}else{cL=true;
bu.className+=" CodeMirror-overwrite"
}},posFromIndex:function(dn){var dp=0,dm;
cW.iter(0,cW.size,function(dq){var dr=dq.text.length+1;
if(dr>dn){dm=dn;
return true
}dn-=dr;
++dp
});
return ba({line:dp,ch:dm})
},indexFromPos:function(dn){if(dn.line<0||dn.ch<0){return 0
}var dm=dn.ch;
cW.iter(0,dn.line,function(dp){dm+=dp.text.length+1
});
return dm
},scrollTo:function(dm,dn){if(dm!=null){bB.scrollLeft=dm
}if(dn!=null){a2.scrollTop=bB.scrollTop=dn
}cB([])
},getScrollInfo:function(){return{x:bB.scrollLeft,y:a2.scrollTop,height:a2.scrollHeight,width:bB.scrollWidth}
},setSize:function(dp,dm){function dn(dq){dq=String(dq);
return/^\d+$/.test(dq)?dq+"px":dq
}if(dp!=null){aV.style.width=dn(dp)
}if(dm!=null){bB.style.height=dn(dm)
}cx.refresh()
},operation:function(dm){return aJ(dm)()
},compoundChange:function(dm){return b9(dm)
},refresh:function(){cB(true,null,bQ);
if(a2.scrollHeight>bQ){a2.scrollTop=bQ
}},getInputField:function(){return bD
},getWrapperElement:function(){return aV
},getScrollerElement:function(){return bB
},getGutterElement:function(){return aX
}};
function c3(dm){return K(cW,dm)
}function bl(dn,dm){a9=true;
var dp=dm-dn.height;
for(var dq=dn;
dq;
dq=dq.parent){dq.height+=dp
}}function b8(dm,dn){if(!dm.styles){dm.highlight(cz,dm.stateAfter=cR(U(dm)),cm.tabSize)
}return dm.getContent(cm.tabSize,dn,cm.lineWrapping)
}function bd(dm){var dn={line:0,ch:0};
a5(dn,{line:cW.size-1,ch:c3(cW.size-1).text.length},g(dm),dn,dn);
cN=true
}function cn(dn){var dm=[];
cW.iter(0,cW.size,function(dp){dm.push(dp.text)
});
return dm.join(dn||"\n")
}function bW(dm){if(a2.scrollTop!=bQ){bQ=bB.scrollTop=a2.scrollTop;
cB([])
}}function cw(dm){if(cm.fixedGutter&&aX.style.left!=bB.scrollLeft+"px"){aX.style.left=bB.scrollLeft+"px"
}if(bB.scrollTop!=bQ){bQ=bB.scrollTop;
if(a2.scrollTop!=bQ){a2.scrollTop=bQ
}cB([])
}if(cm.onScroll){cm.onScroll(cx)
}}function cH(dz){bm(aa(dz,"shiftKey"));
for(var dt=ao(dz);
dt!=aV;
dt=dt.parentNode){if(dt.parentNode==cu&&dt!=cE){return
}}for(var dt=ao(dz);
dt!=aV;
dt=dt.parentNode){if(dt.parentNode==bf){if(cm.onGutterClick){cm.onGutterClick(cx,s(bf.childNodes,dt)+de,dz)
}return e(dz)
}}var dn=bk(dz);
switch(C(dz)){case 3:if(v){bj(dz)
}return;
case 2:if(dn){bp(dn.line,dn.ch,true)
}setTimeout(bV,20);
e(dz);
return
}if(!dn){if(ao(dz)==bB){e(dz)
}return
}if(!cG){di()
}var dp=+new Date,dC="single";
if(bh&&bh.time>dp-400&&Q(bh.pos,dn)){dC="triple";
e(dz);
setTimeout(bV,20);
a0(dn.line)
}else{if(bI&&bI.time>dp-400&&Q(bI.pos,dn)){dC="double";
bh={time:dp,pos:dn};
e(dz);
var dm=bN(dn);
bT(dm.from,dm.to)
}else{bI={time:dp,pos:dn}
}}function du(dE){if(k){bB.draggable=false
}bt=false;
dy();
ds();
if(Math.abs(dz.clientX-dE.clientX)+Math.abs(dz.clientY-dE.clientY)<10){e(dE);
bp(dn.line,dn.ch,true);
bV()
}}var dD=dn,dr;
if(cm.dragDrop&&Z&&!cm.readOnly&&!Q(dk.from,dk.to)&&!B(dn,dk.from)&&!B(dk.to,dn)&&dC=="single"){if(k){bB.draggable=true
}var dy=az(document,"mouseup",aJ(du),true);
var ds=az(bB,"drop",aJ(du),true);
bt=true;
if(bB.dragDrop){bB.dragDrop()
}return
}e(dz);
if(dC=="single"){bp(dn.line,dn.ch,true)
}var dB=dk.from,dq=dk.to;
function dw(dF){if(dC=="single"){bT(dn,dF)
}else{if(dC=="double"){var dE=bN(dF);
if(B(dF,dB)){bT(dE.from,dq)
}else{bT(dB,dE.to)
}}else{if(dC=="triple"){if(B(dF,dB)){bT(dq,ba({line:dF.line,ch:0}))
}else{bT(dB,ba({line:dF.line+1,ch:0}))
}}}}}function dA(dE){var dG=bk(dE,true);
if(dG&&!Q(dG,dD)){if(!cG){di()
}dD=dG;
dw(dG);
cN=false;
var dF=bX();
if(dG.line>=dF.to||dG.line<dF.from){dr=setTimeout(aJ(function(){dA(dE)
}),150)
}}}function dx(dE){clearTimeout(dr);
var dF=bk(dE);
if(dF){dw(dF)
}e(dE);
bV();
cN=true;
dv();
dy()
}var dv=az(document,"mousemove",aJ(function(dE){clearTimeout(dr);
e(dE);
if(!R&&!C(dE)){dx(dE)
}else{dA(dE)
}}),true);
var dy=az(document,"mouseup",aJ(dx),true)
}function ch(dm){for(var dn=ao(dm);
dn!=aV;
dn=dn.parentNode){if(dn.parentNode==bf){return e(dm)
}}e(dm)
}function aE(dr){if(cm.onDragEvent&&cm.onDragEvent(cx,O(dr))){return
}e(dr);
var du=bk(dr,true),dn=dr.dataTransfer.files;
if(!du||cm.readOnly){return
}if(dn&&dn.length&&window.FileReader&&window.File){var dt=dn.length,ds=Array(dt),dp=0;
var dq=function(dx,dw){var dv=new FileReader;
dv.onload=function(){ds[dw]=dv.result;
if(++dp==dt){du=ba(du);
aJ(function(){var dy=cb(ds.join(""),du,du);
bT(du,dy)
})()
}};
dv.readAsText(dx)
};
for(var dm=0;
dm<dt;
++dm){dq(dn[dm],dm)
}}else{if(bt&&!(B(du,dk.from)||B(dk.to,du))){return
}try{var ds=dr.dataTransfer.getData("Text");
if(ds){b9(function(){var dw=dk.from,dv=dk.to;
bT(du,du);
if(bt){cb("",dw,dv)
}bL(ds);
bV()
})
}}catch(dr){}}}function aY(dn){var dm=co();
dn.dataTransfer.setData("Text",dm);
if(dn.dataTransfer.setDragImage){dn.dataTransfer.setDragImage(ah("img"),0,0)
}}function bz(dp,dm){if(typeof dp=="string"){dp=r[dp];
if(!dp){return false
}}var dn=cF;
try{if(cm.readOnly){cQ=true
}if(dm){cF=null
}dp(cx)
}catch(dq){if(dq!=an){throw dq
}return false
}finally{cF=dn;
cQ=false
}return true
}var bY;
function c9(du){var dm=ap(cm.keyMap),dr=dm.auto;
clearTimeout(bY);
if(dr&&!ag(du)){bY=setTimeout(function(){if(ap(cm.keyMap)==dm){cm.keyMap=(dr.call?dr.call(null,cx):dr)
}},50)
}var dn=u[aa(du,"keyCode")],dt=false;
var dq=au&&I;
if(dn==null||du.altGraphKey){return false
}if(aa(du,"altKey")){dn="Alt-"+dn
}if(aa(du,dq?"metaKey":"ctrlKey")){dn="Ctrl-"+dn
}if(aa(du,dq?"ctrlKey":"metaKey")){dn="Cmd-"+dn
}var ds=false;
function dp(){ds=true
}if(aa(du,"shiftKey")){dt=ar("Shift-"+dn,cm.extraKeys,cm.keyMap,function(dv){return bz(dv,true)
},dp)||ar(dn,cm.extraKeys,cm.keyMap,function(dv){if(typeof dv=="string"&&/^go[A-Z]/.test(dv)){return bz(dv)
}},dp)
}else{dt=ar(dn,cm.extraKeys,cm.keyMap,bz,dp)
}if(ds){dt=false
}if(dt){e(du);
da();
if(R){du.oldKeyCode=du.keyCode;
du.keyCode=0
}}return dt
}function cj(dp,dm){var dn=ar("'"+dm+"'",cm.extraKeys,cm.keyMap,function(dq){return bz(dq,true)
});
if(dn){e(dp);
da()
}return dn
}var c5=null;
function cA(dp){if(!cG){di()
}if(R&&dp.keyCode==27){dp.returnValue=false
}if(bM){if(b5()){bM=false
}}if(cm.onKeyEvent&&cm.onKeyEvent(cx,O(dp))){return
}var dm=aa(dp,"keyCode");
bm(dm==16||aa(dp,"shiftKey"));
var dn=c9(dp);
if(au){c5=dn?dm:null;
if(!dn&&dm==88&&aa(dp,I?"metaKey":"ctrlKey")){bL("")
}}}function bE(dq){if(bM){b5()
}if(cm.onKeyEvent&&cm.onKeyEvent(cx,O(dq))){return
}var dp=aa(dq,"keyCode"),dm=aa(dq,"charCode");
if(au&&dp==c5){c5=null;
e(dq);
return
}if(((au&&(!dq.which||dq.which<10))||ae)&&c9(dq)){return
}var dn=String.fromCharCode(dm==null?dp:dm);
if(cm.electricChars&&cz.electricChars&&cm.smartIndent&&!cm.readOnly){if(cz.electricChars.indexOf(dn)>-1){setTimeout(aJ(function(){bU(dk.to.line,"smart")
}),75)
}}if(cj(dq,dn)){return
}a7()
}function cI(dm){if(cm.onKeyEvent&&cm.onKeyEvent(cx,O(dm))){return
}if(aa(dm,"keyCode")==16){cF=null
}}function di(){if(cm.readOnly=="nocursor"){return
}if(!cG){if(cm.onFocus){cm.onFocus(cx)
}cG=true;
if(bB.className.search(/\bCodeMirror-focused\b/)==-1){bB.className+=" CodeMirror-focused"
}}aD();
da()
}function aW(){if(cG){if(cm.onBlur){cm.onBlur(cx)
}cG=false;
if(cp){aJ(function(){if(cp){cp();
cp=null
}})()
}bB.className=bB.className.replace(" CodeMirror-focused","")
}clearInterval(dd);
setTimeout(function(){if(!cG){cF=null
}},150)
}function a5(dt,ds,dr,dn,dm){if(cQ){return
}var dq=[];
cW.iter(dt.line,ds.line+1,function(du){dq.push(j(du.text,du.markedSpans))
});
if(br){br.addChange(dt.line,dr.length,dq);
while(br.done.length>cm.undoDepth){br.done.shift()
}}var dp=V(d(dq[0]),d(M(dq)),dt.ch,ds.ch,dr);
aK(dt,ds,dp,dn,dm)
}function cy(ds,dt){if(!ds.length){return
}var du=ds.pop(),dn=[];
for(var dp=du.length-1;
dp>=0;
dp-=1){var dr=du[dp];
var dv=[],dm=dr.start+dr.added;
cW.iter(dr.start,dm,function(dw){dv.push(j(dw.text,dw.markedSpans))
});
dn.push({start:dr.start,added:dr.old.length,old:dv});
var dq={line:dr.start+dr.old.length-1,ch:A(aq(M(dv)),aq(M(dr.old)))};
aK({line:dr.start,ch:0},{line:dm-1,ch:c3(dm-1).text.length},dr.old,dq,dq)
}cN=true;
dt.push(dn)
}function dh(){cy(br.done,br.undone)
}function c6(){cy(br.undone,br.done)
}function aK(dC,dr,dn,dm,dG){if(cQ){return
}var dF=false,dq=b0.text.length;
if(!cm.lineWrapping){cW.iter(dC.line,dr.line+1,function(dH){if(!dH.hidden&&dH.text.length==dq){dF=true;
return true
}})
}if(dC.line!=dr.line||dn.length>1){a9=true
}var dA=dr.line-dC.line,dz=c3(dC.line),dp=c3(dr.line);
var dw=M(dn);
if(dC.ch==0&&dr.ch==0&&aq(dw)==""){var dx=[],dy=null;
for(var dD=0,dE=dn.length-1;
dD<dE;
++dD){dx.push(new H(aq(dn[dD]),d(dn[dD])))
}dp.update(dp.text,d(dw));
if(dA){cW.remove(dC.line,dA,cX)
}if(dx.length){cW.insert(dC.line,dx)
}}else{if(dz==dp){if(dn.length==1){dz.update(dz.text.slice(0,dC.ch)+aq(dn[0])+dz.text.slice(dr.ch),d(dn[0]))
}else{for(var dx=[],dD=1,dE=dn.length-1;
dD<dE;
++dD){dx.push(new H(aq(dn[dD]),d(dn[dD])))
}dx.push(new H(aq(dw)+dz.text.slice(dr.ch),d(dw)));
dz.update(dz.text.slice(0,dC.ch)+aq(dn[0]),d(dn[0]));
cW.insert(dC.line+1,dx)
}}else{if(dn.length==1){dz.update(dz.text.slice(0,dC.ch)+aq(dn[0])+dp.text.slice(dr.ch),d(dn[0]));
cW.remove(dC.line+1,dA,cX)
}else{var dx=[];
dz.update(dz.text.slice(0,dC.ch)+aq(dn[0]),d(dn[0]));
dp.update(aq(dw)+dp.text.slice(dr.ch),d(dw));
for(var dD=1,dE=dn.length-1;
dD<dE;
++dD){dx.push(new H(aq(dn[dD]),d(dn[dD])))
}if(dA>1){cW.remove(dC.line+1,dA-1,cX)
}cW.insert(dC.line+1,dx)
}}}if(cm.lineWrapping){var dt=Math.max(5,bB.clientWidth/by()-3);
cW.iter(dC.line,dC.line+dn.length,function(dH){if(dH.hidden){return
}var dI=Math.ceil(dH.text.length/dt)||1;
if(dI!=dH.height){bl(dH,dI)
}})
}else{cW.iter(dC.line,dC.line+dn.length,function(dI){var dH=dI.text;
if(!dI.hidden&&dH.length>dq){b0=dI;
dq=dH.length;
bH=true;
dF=false
}});
if(dF){c1=true
}}c7=Math.min(c7,dC.line);
b2(400);
var dv=dn.length-dA-1;
aT.push({from:dC.line,to:dr.line+1,diff:dv});
if(cm.onChange){for(var dD=0;
dD<dn.length;
++dD){if(typeof dn[dD]!="string"){dn[dD]=dn[dD].text
}}var du={from:dC,to:dr,text:dn};
if(db){for(var ds=db;
ds.next;
ds=ds.next){}ds.next=du
}else{db=du
}}function dB(dH){return dH<=Math.min(dr.line,dr.line+dv)?dH:dH+dv
}bR(ba(dm),ba(dG),dB(dk.from.line),dB(dk.to.line))
}function aH(){var dm=cW.height*ca()+2*cP();
return dm*0.99>bB.offsetHeight?dm:false
}function aL(dn){var dm=aH();
a2.style.display=dm?"block":"none";
if(dm){cJ.style.height=cu.style.minHeight=dm+"px";
a2.style.height=bB.clientHeight+"px";
if(dn!=null){a2.scrollTop=bB.scrollTop=dn;
if(k){setTimeout(function(){if(a2.scrollTop!=dn){return
}a2.scrollTop=dn+(dn?-1:1);
a2.scrollTop=dn
},0)
}}}else{cu.style.minHeight=""
}cE.style.top=bv*ca()+"px"
}function bS(){b0=c3(0);
bH=true;
var dm=b0.text.length;
cW.iter(1,cW.size,function(dp){var dn=dp.text;
if(!dp.hidden&&dn.length>dm){dm=dn.length;
b0=dp
}});
c1=false
}function cb(dn,dr,dq){dr=ba(dr);
if(!dq){dq=dr
}else{dq=ba(dq)
}dn=g(dn);
function dp(du){if(B(du,dr)){return du
}if(!B(dq,du)){return dm
}var ds=du.line+dn.length-(dq.line-dr.line)-1;
var dt=du.ch;
if(du.line==dq.line){dt+=M(dn).length-(dq.ch-(dq.line==dr.line?dr.ch:0))
}return{line:ds,ch:dt}
}var dm;
aU(dn,dr,dq,function(ds){dm=ds;
return{from:dp(dk.from),to:dp(dk.to)}
});
return dm
}function bL(dm,dn){aU(g(dm),dk.from,dk.to,function(dp){if(dn=="end"){return{from:dp,to:dp}
}else{if(dn=="start"){return{from:dk.from,to:dk.from}
}else{return{from:dk.from,to:dp}
}}})
}function aU(dq,ds,dr,dm){var dp=dq.length==1?dq[0].length+ds.ch:M(dq).length;
var dn=dm({line:ds.line+dq.length-1,ch:dp});
a5(ds,dr,dq,dn.from,dn.to)
}function dc(ds,dr,dq){var dn=ds.line,dm=dr.line;
if(dn==dm){return c3(dn).text.slice(ds.ch,dr.ch)
}var dp=[c3(dn).text.slice(ds.ch)];
cW.iter(dn+1,dm,function(dt){dp.push(dt.text)
});
dp.push(c3(dm).text.slice(0,dr.ch));
return dp.join(dq||"\n")
}function co(dm){return dc(dk.from,dk.to,dm)
}function aD(){if(bM){return
}cs.set(cm.pollInterval,function(){b5();
if(cG){aD()
}})
}function a7(){var dm=false;
bM=true;
function dn(){var dp=b5();
if(!dp&&!dm){dm=true;
cs.set(60,dn)
}else{bM=false;
aD()
}}cs.set(20,dn)
}var bs="";
function b5(){if(!cG||b(bD)||cm.readOnly){return false
}var dn=bD.value;
if(dn==bs){return false
}if(!cO){a4()
}cF=null;
var dp=0,dm=Math.min(bs.length,dn.length);
while(dp<dm&&bs[dp]==dn[dp]){++dp
}if(dp<bs.length){dk.from={line:dk.from.line,ch:dk.from.ch-(bs.length-dp)}
}else{if(cL&&Q(dk.from,dk.to)){dk.to={line:dk.to.line,ch:Math.min(c3(dk.to.line).text.length,dk.to.ch+(dn.length-dp))}
}}bL(dn.slice(dp),"end");
if(dn.length>1000){bD.value=bs=""
}else{bs=dn
}if(!cO){aQ()
}return true
}function cZ(dm){if(!Q(dk.from,dk.to)){bs="";
bD.value=co();
if(cG){aA(bD)
}}else{if(dm){bs=bD.value=""
}}}function bV(){if(cm.readOnly!="nocursor"){bD.focus()
}}function cD(){var dq=cc();
aS(dq.x,dq.y,dq.x,dq.yBot);
if(!cG){return
}var dn=cu.getBoundingClientRect(),dm=null;
if(dq.y+dn.top<0){dm=true
}else{if(dq.y+dn.top+ca()>(window.innerHeight||document.documentElement.clientHeight)){dm=false
}}if(dm!=null){var dp=bu.style.display=="none";
if(dp){bu.style.display="";
bu.style.left=dq.x+"px";
bu.style.top=(dq.y-bv)+"px"
}bu.scrollIntoView(dm);
if(dp){bu.style.display="none"
}}}function cc(){var dn=df(dk.inverted?dk.from:dk.to);
var dm=cm.lineWrapping?Math.min(dn.x,bO.offsetWidth):dn.x;
return{x:dm,y:dn.y,yBot:dn.yBot}
}function aS(dn,dq,dm,dp){var dr=bg(dn,dq,dm,dp);
if(dr.scrollLeft!=null){bB.scrollLeft=dr.scrollLeft
}if(dr.scrollTop!=null){a2.scrollTop=bB.scrollTop=dr.scrollTop
}}function bg(dq,dx,dn,dw){var dt=bn(),dC=cP();
dx+=dC;
dw+=dC;
dq+=dt;
dn+=dt;
var dz=bB.clientHeight,dr=a2.scrollTop,dB={};
var dp=aH()||Infinity;
var dm=dx<dC+10,dv=dw+dC>dp-10;
if(dx<dr){dB.scrollTop=dm?0:Math.max(0,dx)
}else{if(dw>dr+dz){dB.scrollTop=(dv?dp:dw)-dz
}}var dy=bB.clientWidth,dA=bB.scrollLeft;
var du=cm.fixedGutter?aX.clientWidth:0;
var ds=dq<du+dt+10;
if(dq<dA+du||ds){if(ds){dq=0
}dB.scrollLeft=Math.max(0,dq-10-du)
}else{if(dn>dy+dA-3){dB.scrollLeft=dn+10-dy
}}return dB
}function bX(dr){var dm=ca(),dq=(dr!=null?dr:a2.scrollTop)-cP();
var dp=Math.max(0,Math.floor(dq/dm));
var dn=Math.ceil((dq+bB.clientHeight)/dm);
return{from:ac(cW,dp),to:ac(cW,dn)}
}function cB(dw,ds,dq){if(!bB.clientWidth){de=b6=bv=0;
return
}var dr=bX(dq);
if(dw!==true&&dw.length==0&&dr.from>de&&dr.to<b6){aL(dq);
return
}var dx=Math.max(dr.from-100,0),dy=Math.min(cW.size,dr.to+100);
if(de<dx&&dx-de<20){dx=de
}if(b6>dy&&b6-dy<20){dy=Math.min(cW.size,b6)
}var dA=dw===true?[]:cl([{from:de,to:b6,domStart:0}],dw);
var dv=0;
for(var dt=0;
dt<dA.length;
++dt){var du=dA[dt];
if(du.from<dx){du.domStart+=(dx-du.from);
du.from=dx
}if(du.to>dy){du.to=dy
}if(du.from>=du.to){dA.splice(dt--,1)
}else{dv+=du.to-du.from
}}if(dv==dy-dx&&dx==de&&dy==b6){aL(dq);
return
}dA.sort(function(dC,dB){return dC.domStart-dB.domStart
});
var dp=ca(),dm=aX.style.display;
aI.style.display="none";
a8(dx,dy,dA);
aI.style.display=aX.style.display="";
var dn=dx!=de||dy!=b6||b7!=bB.clientHeight+dp;
if(dn){b7=bB.clientHeight+dp
}if(dx!=de||dy!=b6&&cm.onViewportChange){setTimeout(function(){if(cm.onViewportChange){cm.onViewportChange(cx,dx,dy)
}})
}de=dx;
b6=dy;
bv=a(cW,dx);
b2(100);
if(aI.childNodes.length!=b6-de){throw new Error("BAD PATCH! "+JSON.stringify(dA)+" size="+(b6-de)+" nodes="+aI.childNodes.length)
}function dz(){var dC=aI.firstChild,dB=false;
cW.iter(de,b6,function(dE){if(!dC){return
}if(!dE.hidden){var dD=Math.round(dC.offsetHeight/dp)||1;
if(dE.height!=dD){bl(dE,dD);
a9=dB=true
}}dC=dC.nextSibling
});
return dB
}if(cm.lineWrapping){dz()
}aX.style.display=dm;
if(dn||a9){a1()&&cm.lineWrapping&&dz()&&a1()
}aL(dq);
dj();
if(!ds&&cm.onUpdate){cm.onUpdate(cx)
}return true
}function cl(dw,du){for(var dr=0,dp=du.length||0;
dr<dp;
++dr){var dt=du[dr],dm=[],dv=dt.diff||0;
for(var dq=0,dn=dw.length;
dq<dn;
++dq){var ds=dw[dq];
if(dt.to<=ds.from&&dt.diff){dm.push({from:ds.from+dv,to:ds.to+dv,domStart:ds.domStart})
}else{if(dt.to<=ds.from||dt.from>=ds.to){dm.push(ds)
}else{if(dt.from>ds.from){dm.push({from:ds.from,to:dt.from,domStart:ds.domStart})
}if(dt.to<ds.to){dm.push({from:dt.to+dv,to:ds.to+dv,domStart:ds.domStart+(dt.to-ds.from)})
}}}}dw=dm
}return dw
}function a8(dv,dw,dy){function dm(dA){var dz=dA.nextSibling;
dA.parentNode.removeChild(dA);
return dz
}if(!dy.length){aB(aI)
}else{var dr=0,dp=aI.firstChild,dn;
for(var ds=0;
ds<dy.length;
++ds){var dx=dy[ds];
while(dx.domStart>dr){dp=dm(dp);
dr++
}for(var dq=0,du=dx.to-dx.from;
dq<du;
++dq){dp=dp.nextSibling;
dr++
}}while(dp){dp=dm(dp)
}}var dt=dy.shift(),dp=aI.firstChild,dq=dv;
cW.iter(dv,dw,function(dz){if(dt&&dt.to==dq){dt=dy.shift()
}if(!dt||dt.from>dq){if(dz.hidden){var dA=ah("pre")
}else{var dA=b8(dz);
if(dz.className){dA.className=dz.className
}if(dz.bgClassName){var dB=ah("pre","\u00a0",dz.bgClassName,"position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2");
dA=ah("div",[dB,dA],null,"position: relative")
}}aI.insertBefore(dA,dp)
}else{dp=dp.nextSibling
}++dq
})
}function a1(){if(!cm.gutter&&!cm.lineNumbers){return
}var dn=cE.offsetHeight,dw=bB.clientHeight;
aX.style.height=(dn-dw<2?dw:dn)+"px";
var du=document.createDocumentFragment(),ds=de,dv;
cW.iter(de,Math.max(b6,de+1),function(dy){if(dy.hidden){du.appendChild(ah("pre"))
}else{var dx=dy.gutterMarker;
var dB=cm.lineNumbers?cm.lineNumberFormatter(ds+cm.firstLineNumber):null;
if(dx&&dx.text){dB=dx.text.replace("%N%",dB!=null?dB:"")
}else{if(dB==null){dB="\u00a0"
}}var dA=du.appendChild(ah("pre",null,dx&&dx.style));
dA.innerHTML=dB;
for(var dz=1;
dz<dy.height;
++dz){dA.appendChild(ah("br"));
dA.appendChild(document.createTextNode("\u00a0"))
}if(!dx){dv=ds
}}++ds
});
aX.style.display="none";
q(bf,du);
if(dv!=null&&cm.lineNumbers){var dq=bf.childNodes[dv-de];
var dr=String(cW.size).length,dm=ax(dq.firstChild),dp="";
while(dm.length+dp.length<dr){dp+="\u00a0"
}if(dp){dq.insertBefore(document.createTextNode(dp),dq.firstChild)
}}aX.style.display="";
var dt=Math.abs((parseInt(bO.style.marginLeft)||0)-aX.offsetWidth)>2;
bO.style.marginLeft=aX.offsetWidth+"px";
a9=false;
return dt
}function dj(){var dq=Q(dk.from,dk.to);
var dB=df(dk.from,true);
var dw=dq?dB:df(dk.to,true);
var du=dk.inverted?dB:dw,dn=ca();
var dm=z(aV),dp=z(aI);
ci.style.top=Math.max(0,Math.min(bB.offsetHeight,du.y+dp.top-dm.top))+"px";
ci.style.left=Math.max(0,Math.min(bB.offsetWidth,du.x+dp.left-dm.left))+"px";
if(dq){bu.style.top=du.y+"px";
bu.style.left=(cm.lineWrapping?Math.min(du.x,bO.offsetWidth):du.x)+"px";
bu.style.display="";
bx.style.display="none"
}else{var dz=dB.y==dw.y,dt=document.createDocumentFragment();
var dx=bO.clientWidth||bO.offsetWidth;
var ds=bO.clientHeight||bO.offsetHeight;
var dA=function(dG,dF,dE,dC){var dD=l?"width: "+(!dE?dx:dx-dE-dG)+"px":"right: "+dE+"px";
dt.appendChild(ah("div",null,"CodeMirror-selected","position: absolute; left: "+dG+"px; top: "+dF+"px; "+dD+"; height: "+dC+"px"))
};
if(dk.from.ch&&dB.y>=0){var dy=dz?dx-dw.x:0;
dA(dB.x,dB.y,dy,dn)
}var dr=Math.max(0,dB.y+(dk.from.ch?dn:0));
var dv=Math.min(dw.y,ds)-dr;
if(dv>0.2*dn){dA(0,dr,0,dv)
}if((!dz||!dk.from.ch)&&dw.y<ds-0.5*dn){dA(0,dw.y,dx-dw.x,dn)
}q(bx,dt);
bu.style.display="none";
bx.style.display=""
}}function bm(dm){if(dm){cF=cF||(dk.inverted?dk.to:dk.from)
}else{cF=null
}}function bT(dp,dn){var dm=cF&&ba(cF);
if(dm){if(B(dm,dp)){dp=dm
}else{if(B(dn,dm)){dn=dm
}}}bR(dp,dn);
cr=true
}function bR(du,dt,dm,ds){cS=null;
if(dm==null){dm=dk.from.line;
ds=dk.to.line
}if(Q(dk.from,du)&&Q(dk.to,dt)){return
}if(B(dt,du)){var dq=dt;
dt=du;
du=dq
}if(du.line!=dm){var dr=cd(du,dm,dk.from.ch);
if(!dr){c8(du.line,false)
}else{du=dr
}}if(dt.line!=ds){dt=cd(dt,ds,dk.to.ch)
}if(Q(du,dt)){dk.inverted=false
}else{if(Q(du,dk.to)){dk.inverted=false
}else{if(Q(dt,dk.from)){dk.inverted=true
}}}if(cm.autoClearEmptyLines&&Q(dk.from,dk.to)){var dp=dk.inverted?du:dt;
if(dp.line!=dk.from.line&&dk.from.line<cW.size){var dn=c3(dk.from.line);
if(/^\s+$/.test(dn.text)){setTimeout(aJ(function(){if(dn.parent&&/^\s+$/.test(dn.text)){var dv=U(dn);
cb("",{line:dv,ch:0},{line:dv,ch:dn.text.length})
}},10))
}}}dk.from=du;
dk.to=dt;
a6=true
}function cd(ds,dn,dp){function dr(dv){var dx=ds.line+dv,du=dv==1?cW.size:-1;
while(dx!=du){var dt=c3(dx);
if(!dt.hidden){var dw=ds.ch;
if(dq||dw>dp||dw>dt.text.length){dw=dt.text.length
}return{line:dx,ch:dw}
}dx+=dv
}}var dm=c3(ds.line);
var dq=ds.ch==dm.text.length&&ds.ch!=dp;
if(!dm.hidden){return ds
}if(ds.line>=dn){return dr(1)||dr(-1)
}else{return dr(-1)||dr(1)
}}function bp(dm,dp,dn){var dq=ba({line:dm,ch:dp||0});
(dn?bT:bR)(dq,dq)
}function ck(dm){return Math.max(0,Math.min(dm,cW.size-1))
}function ba(dp){if(dp.line<0){return{line:0,ch:0}
}if(dp.line>=cW.size){return{line:cW.size-1,ch:c3(cW.size-1).text.length}
}var dm=dp.ch,dn=c3(dp.line).text.length;
if(dm==null||dm>dn){return{line:dp.line,ch:dn}
}else{if(dm<0){return{line:dp.line,ch:0}
}else{return dp
}}}function cM(dq,du){var dr=dk.inverted?dk.from:dk.to,dv=dr.line,dm=dr.ch;
var dt=c3(dv);
function dn(){for(var dw=dv+dq,dy=dq<0?-1:cW.size;
dw!=dy;
dw+=dq){var dx=c3(dw);
if(!dx.hidden){dv=dw;
dt=dx;
return true
}}}function ds(dw){if(dm==(dq<0?0:dt.text.length)){if(!dw&&dn()){dm=dq<0?dt.text.length:0
}else{return false
}}else{dm+=dq
}return true
}if(du=="char"){ds()
}else{if(du=="column"){ds(true)
}else{if(du=="word"){var dp=false;
for(;
;
){if(dq<0){if(!ds()){break
}}if(L(dt.text.charAt(dm))){dp=true
}else{if(dp){if(dq<0){dq=1;
ds()
}break
}}if(dq>0){if(!ds()){break
}}}}}}return{line:dv,ch:dm}
}function c2(dm,dn){var dp=dm<0?dk.from:dk.to;
if(cF||Q(dk.from,dk.to)){dp=cM(dm,dn)
}bp(dp.line,dp.ch,true)
}function cK(dm,dn){if(!Q(dk.from,dk.to)){cb("",dk.from,dk.to)
}else{if(dm<0){cb("",cM(dm,dn),dk.to)
}else{cb("",dk.from,cM(dm,dn))
}}cr=true
}function cV(dn,dq){var ds=0,dt=df(dk.inverted?dk.from:dk.to,true);
if(cS!=null){dt.x=cS
}if(dq=="page"){var dm=Math.min(bB.clientHeight,window.innerHeight||document.documentElement.clientHeight);
var dr=b3(dt.x,dt.y+dm*dn)
}else{if(dq=="line"){var dp=ca();
var dr=b3(dt.x,dt.y+0.5*dp+dn*dp)
}}if(dq=="page"){a2.scrollTop+=df(dr,true).y-dt.y
}bp(dr.line,dr.ch,true);
cS=dt.x
}function bN(ds){var dq=c3(ds.line).text;
var dr=ds.ch,dp=ds.ch;
if(dq){if(ds.after===false||dp==dq.length){--dr
}else{++dp
}var dn=dq.charAt(dr);
var dm=L(dn)?L:/\s/.test(dn)?function(dt){return/\s/.test(dt)
}:function(dt){return !/\s/.test(dt)&&!L(dt)
};
while(dr>0&&dm(dq.charAt(dr-1))){--dr
}while(dp<dq.length&&dm(dq.charAt(dp))){++dp
}}return{from:{line:ds.line,ch:dr},to:{line:ds.line,ch:dp}}
}function a0(dm){bT({line:dm,ch:0},ba({line:dm+1,ch:0}))
}function cY(dp){if(Q(dk.from,dk.to)){return bU(dk.from.line,dp)
}var dn=dk.to.line-(dk.to.ch?0:1);
for(var dm=dk.from.line;
dm<=dn;
++dm){bU(dm,dp)
}}function bU(dp,dw){if(!dw){dw="add"
}if(dw=="smart"){if(!cz.indent){dw="prev"
}else{var dm=cR(dp)
}}var dx=c3(dp),dr=dx.indentation(cm.tabSize),dn=dx.text.match(/^\s*/)[0],dt;
if(dw=="smart"){dt=cz.indent(dm,dx.text.slice(dn.length),dx.text);
if(dt==an){dw="prev"
}}if(dw=="prev"){if(dp){dt=c3(dp-1).indentation(cm.tabSize)
}else{dt=0
}}else{if(dw=="add"){dt=dr+cm.indentUnit
}else{if(dw=="subtract"){dt=dr-cm.indentUnit
}}}dt=Math.max(0,dt);
var dv=dt-dr;
var du="",ds=0;
if(cm.indentWithTabs){for(var dq=Math.floor(dt/cm.tabSize);
dq;
--dq){ds+=cm.tabSize;
du+="\t"
}}if(ds<dt){du+=av(dt-ds)
}if(du!=dn){cb(du,{line:dp,ch:0},{line:dp,ch:dn.length})
}}function cf(){cz=p.getMode(cm,cm.mode);
cW.iter(0,cW.size,function(dm){dm.stateAfter=null
});
c7=0;
b2(100)
}function bw(){var dm=cm.gutter||cm.lineNumbers;
aX.style.display=dm?"":"none";
if(dm){a9=true
}else{aI.parentNode.style.marginLeft=0
}}function c4(dp,dn){if(cm.lineWrapping){aV.className+=" CodeMirror-wrap";
var dm=bB.clientWidth/by()-3;
cW.iter(0,cW.size,function(dq){if(dq.hidden){return
}var dr=Math.ceil(dq.text.length/dm)||1;
if(dr!=1){bl(dq,dr)
}});
bO.style.minWidth=bo.style.left=""
}else{aV.className=aV.className.replace(" CodeMirror-wrap","");
bS();
cW.iter(0,cW.size,function(dq){if(dq.height!=1&&!dq.hidden){bl(dq,1)
}})
}aT.push({from:0,to:cW.size})
}function c0(){bB.className=bB.className.replace(/\s*cm-s-\S+/g,"")+cm.theme.replace(/(^|\s)\s*/g," cm-s-")
}function cT(){var dm=f[cm.keyMap].style;
aV.className=aV.className.replace(/\s*cm-keymap-\S+/g,"")+(dm?" cm-keymap-"+dm:"")
}function dl(dn,dm){this.lines=[];
this.type=dn;
if(dm){this.style=dm
}}dl.prototype.clear=aJ(function(){var dq=Infinity,dm=-Infinity;
for(var dp=0;
dp<this.lines.length;
++dp){var dn=this.lines[dp];
var ds=aC(dn.markedSpans,this,true);
if(ds.from!=null||ds.to!=null){var dr=U(dn);
dq=Math.min(dq,dr);
dm=Math.max(dm,dr)
}}if(dq!=Infinity){aT.push({from:dq,to:dm+1})
}this.lines.length=0
});
dl.prototype.find=function(){var ds,dr;
for(var dn=0;
dn<this.lines.length;
++dn){var dm=this.lines[dn];
var dp=aC(dm.markedSpans,this);
if(dp.from!=null||dp.to!=null){var dq=U(dm);
if(dp.from!=null){ds={line:dq,ch:dp.from}
}if(dp.to!=null){dr={line:dq,ch:dp.to}
}}}if(this.type=="bookmark"){return ds
}return ds&&{from:ds,to:dr}
};
function b1(dt,ds,dr,dp){dt=ba(dt);
ds=ba(ds);
var dn=new dl("range",dr);
if(dp){for(var dq in dp){if(dp.hasOwnProperty(dq)){dn[dq]=dp[dq]
}}}var dm=dt.line;
cW.iter(dm,ds.line+1,function(du){var dv={from:dm==dt.line?dt.ch:null,to:dm==ds.line?ds.ch:null,marker:dn};
(du.markedSpans||(du.markedSpans=[])).push(dv);
dn.lines.push(du);
++dm
});
aT.push({from:dt.line,to:ds.line+1});
return dn
}function bb(dq){dq=ba(dq);
var dn=new dl("bookmark"),dm=c3(dq.line);
var dp={from:dq.ch,to:dq.ch,marker:dn};
(dm.markedSpans||(dm.markedSpans=[])).push(dp);
dn.lines.push(dm);
return dn
}function bF(dr){dr=ba(dr);
var dq=[],dn=c3(dr.line).markedSpans;
if(dn){for(var dm=0;
dm<dn.length;
++dm){var dp=dn[dm];
if((dp.from==null||dp.from<=dr.ch)&&(dp.to==null||dp.to>=dr.ch)){dq.push(dp.marker)
}}}return dq
}function cg(dm,dp,dn){if(typeof dm=="number"){dm=c3(ck(dm))
}dm.gutterMarker={text:dp,style:dn};
a9=true;
return dm
}function aM(dm){if(typeof dm=="number"){dm=c3(ck(dm))
}dm.gutterMarker=null;
a9=true
}function be(dn,dq){var dp=dn,dm=dn;
if(typeof dn=="number"){dm=c3(ck(dn))
}else{dp=U(dn)
}if(dp==null){return null
}if(dq(dm,dp)){aT.push({from:dp,to:dp+1})
}else{return null
}return dm
}function bC(dn,dm,dp){return be(dn,function(dq){if(dq.className!=dm||dq.bgClassName!=dp){dq.className=dm;
dq.bgClassName=dp;
return true
}})
}function c8(dn,dm){return be(dn,function(dp,ds){if(dp.hidden!=dm){dp.hidden=dm;
if(!cm.lineWrapping){if(dm&&dp.text.length==b0.text.length){c1=true
}else{if(!dm&&dp.text.length>b0.text.length){b0=dp;
c1=false
}}}bl(dp,dm?0:1);
var dr=dk.from.line,dq=dk.to.line;
if(dm&&(dr==ds||dq==ds)){var du=dr==ds?cd({line:dr,ch:0},dr,0):dk.from;
var dt=dq==ds?cd({line:dq,ch:0},dq,0):dk.to;
if(!dt){return
}bR(du,dt)
}return(a9=true)
}})
}function bc(dn){if(typeof dn=="number"){if(!bK(dn)){return null
}var dp=dn;
dn=c3(dn);
if(!dn){return null
}}else{var dp=U(dn);
if(dp==null){return null
}}var dm=dn.gutterMarker;
return{line:dp,handle:dn,text:dn.text,markerText:dm&&dm.text,markerClass:dm&&dm.style,lineClass:dn.className,bgClass:dn.bgClassName}
}function cq(dn,dr){if(dr==0){return{top:0,left:0}
}var dm=cm.lineWrapping&&dr<dn.text.length&&F.test(dn.text.slice(dr-1,dr+1));
var du=b8(dn,dr);
q(aN,du);
var dq=du.anchor;
var dt=dq.offsetTop,ds=dq.offsetLeft;
if(R&&dt==0&&ds==0){var dp=ah("span","x");
dq.parentNode.insertBefore(dp,dq.nextSibling);
dt=dp.offsetTop
}return{top:dt,left:ds}
}function df(ds,dq){var dm,dn=ca(),dr=dn*(a(cW,ds.line)-(dq?bv:0));
if(ds.ch==0){dm=0
}else{var dp=cq(c3(ds.line),ds.ch);
dm=dp.left;
if(cm.lineWrapping){dr+=Math.max(0,dp.top)
}}return{x:dm,y:dr,yBot:dr+dn}
}function b3(dy,dx){var dv=ca(),ds=by(),dE=bv+Math.floor(dx/dv);
if(dE<0){return{line:0,ch:0}
}var dz=ac(cW,dE);
if(dz>=cW.size){return{line:cW.size-1,ch:c3(cW.size-1).text.length}
}var dn=c3(dz),dB=dn.text;
var dG=cm.lineWrapping,dw=dG?dE-a(cW,dz):0;
if(dy<=0&&dw==0){return{line:dz,ch:0}
}var dt=false;
function dF(dI){var dJ=cq(dn,dI);
if(dG){var dK=Math.round(dJ.top/dv);
dt=dK!=dw;
return Math.max(0,dJ.left+(dK-dw)*bB.clientWidth)
}return dJ.left
}var dD=0,dC=0,dp=dB.length,dm;
var dA=Math.min(dp,Math.ceil((dy+dw*bB.clientWidth*0.9)/ds));
for(;
;
){var du=dF(dA);
if(du<=dy&&dA<dp){dA=Math.min(dp,Math.ceil(dA*1.2))
}else{dm=du;
dp=dA;
break
}}if(dy>dm){return{line:dz,ch:dp}
}dA=Math.floor(dp*0.8);
du=dF(dA);
if(du<dy){dD=dA;
dC=du
}for(;
;
){if(dp-dD<=1){var dr=dy-dC<dm-dy;
return{line:dz,ch:dr?dD:dp,after:dr}
}var dH=Math.ceil((dD+dp)/2),dq=dF(dH);
if(dq>dy){dp=dH;
dm=dq;
if(dt){dm+=1000
}}else{dD=dH;
dC=dq
}}}function aG(dp){var dm=df(dp,true),dn=z(bO);
return{x:dn.left+dm.x,y:dn.top+dm.y,yBot:dn.top+dm.yBot}
}var bi,aP,aF;
function ca(){if(aF==null){aF=ah("pre");
for(var dn=0;
dn<49;
++dn){aF.appendChild(document.createTextNode("x"));
aF.appendChild(ah("br"))
}aF.appendChild(document.createTextNode("x"))
}var dm=aI.clientHeight;
if(dm==aP){return bi
}aP=dm;
q(aN,aF.cloneNode(true));
bi=aN.firstChild.offsetHeight/50||1;
aB(aN);
return bi
}var dg,bP=0;
function by(){if(bB.clientWidth==bP){return dg
}bP=bB.clientWidth;
var dm=ah("span","x");
var dn=ah("pre",[dm]);
q(aN,dn);
return(dg=dm.offsetWidth||10)
}function cP(){return bO.offsetTop
}function bn(){return bO.offsetLeft
}function bk(dr,dq){var dp=z(bB,true),dm,ds;
try{dm=dr.clientX;
ds=dr.clientY
}catch(dr){return null
}if(!dq&&(dm-dp.left>bB.clientWidth||ds-dp.top>bB.clientHeight)){return null
}var dn=z(bO,true);
return b3(dm-dn.left,ds-dn.top)
}var bJ;
function bj(dn){var ds=bk(dn),dr=a2.scrollTop;
if(!ds||au){return
}if(Q(dk.from,dk.to)||B(ds,dk.from)||!B(ds,dk.to)){aJ(bp)(ds.line,ds.ch)
}var dq=bD.style.cssText;
ci.style.position="absolute";
bD.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(dn.clientY-5)+"px; left: "+(dn.clientX-5)+"px; z-index: 1000; background: white; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
bV();
cZ(true);
if(Q(dk.from,dk.to)){bD.value=bs=" "
}function dm(){ci.style.position="relative";
bD.style.cssText=dq;
if(G){a2.scrollTop=dr
}aD();
if(bD.selectionStart!=null){clearTimeout(bJ);
var du=bD.value=" "+(Q(dk.from,dk.to)?"":bD.value),dt=0;
bs=" ";
bD.selectionStart=1;
bD.selectionEnd=du.length;
bJ=setTimeout(function dv(){if(bs==" "&&bD.selectionStart==0){aJ(r.selectAll)(cx)
}else{if(dt++<10){bJ=setTimeout(dv,500)
}else{cZ()
}}},200)
}}if(v){ab(dn);
var dp=az(window,"mouseup",function(){dp();
setTimeout(dm,20)
},true)
}else{setTimeout(dm,50)
}}function da(){clearInterval(dd);
var dm=true;
bu.style.visibility="";
dd=setInterval(function(){bu.style.visibility=(dm=!dm)?"":"hidden"
},cm.cursorBlinkRate)
}var bG={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"};
function cC(dt){var dm=dk.inverted?dk.from:dk.to,dv=c3(dm.line),dn=dm.ch-1;
var ds=(dn>=0&&bG[dv.text.charAt(dn)])||bG[dv.text.charAt(++dn)];
if(!ds){return
}var dw=ds.charAt(0),du=ds.charAt(1)==">",dG=du?1:-1,dB=dv.styles;
for(var dH=dn+1,dD=0,dF=dB.length;
dD<dF;
dD+=2){if((dH-=dB[dD].length)<=0){var dE=dB[dD+1];
break
}}var dq=[dv.text.charAt(dn)],dA=/[(){}[\]]/;
function dy(dT,dO,dP){if(!dT.text){return
}var dS=dT.styles,dN=du?0:dT.text.length-1,dQ;
for(var dK=du?0:dS.length-2,dM=du?dS.length:-2;
dK!=dM;
dK+=2*dG){var dR=dS[dK];
if(dS[dK+1]!=dE){dN+=dG*dR.length;
continue
}for(var dJ=du?0:dR.length-1,dI=du?dR.length:-1;
dJ!=dI;
dJ+=dG,dN+=dG){if(dN>=dO&&dN<dP&&dA.test(dQ=dR.charAt(dJ))){var dL=bG[dQ];
if(dL.charAt(1)==">"==du){dq.push(dQ)
}else{if(dq.pop()!=dL.charAt(0)){return{pos:dN,match:false}
}else{if(!dq.length){return{pos:dN,match:true}
}}}}}}}for(var dD=dm.line,dF=du?Math.min(dD+100,cW.size):Math.max(-1,dD-100);
dD!=dF;
dD+=dG){var dv=c3(dD),dr=dD==dm.line;
var dx=dy(dv,dr&&du?dn+1:0,dr&&!du?dn:dv.text.length);
if(dx){break
}}if(!dx){dx={pos:null,match:false}
}var dE=dx.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";
var dC=b1({line:dm.line,ch:dn},{line:dm.line,ch:dn+1},dE),dp=dx.pos!=null&&b1({line:dD,ch:dx.pos},{line:dD,ch:dx.pos+1},dE);
var dz=aJ(function(){dC.clear();
dp&&dp.clear()
});
if(dt){setTimeout(dz,800)
}else{cp=dz
}}function bq(dt){var ds,dp;
for(var dn=dt,dq=dt-40;
dn>dq;
--dn){if(dn==0){return 0
}var dm=c3(dn-1);
if(dm.stateAfter){return dn
}var dr=dm.indentation(cm.tabSize);
if(dp==null||ds>dr){dp=dn-1;
ds=dr
}}return dp
}function cR(dp){var dn=bq(dp),dm=dn&&c3(dn-1).stateAfter;
if(!dm){dm=t(cz)
}else{dm=m(cz,dm)
}cW.iter(dn,dp,function(dq){dq.process(cz,dm,cm.tabSize);
dq.stateAfter=(dn==dp-1||dn%5==0)?m(cz,dm):null
});
return dm
}function ce(){if(c7>=b6){return
}var dm=+new Date+cm.workTime,dp=m(cz,cR(c7));
var dn=c7;
cW.iter(c7,b6,function(dq){if(c7>=de){dq.highlight(cz,dp,cm.tabSize);
dq.stateAfter=m(cz,dp)
}else{dq.process(cz,dp,cm.tabSize);
dq.stateAfter=c7%5==0?m(cz,dp):null
}++c7;
if(+new Date>dm){b2(cm.workDelay);
return true
}});
if(b6>dn&&c7>=de){aJ(function(){aT.push({from:dn,to:c7})
})()
}}function b2(dm){if(c7<b6){aO.set(dm,ce)
}}function a4(){cN=cr=db=null;
aT=[];
a6=false;
cX=[]
}function aQ(){if(c1){bS()
}if(bH&&!cm.lineWrapping){var dm=bo.offsetWidth,dt=cq(b0,b0.text.length).left;
if(!J){bo.style.left=dt+"px";
bO.style.minWidth=(dt+dm)+"px"
}bH=false
}var dr,dn;
if(a6){var ds=cc();
dr=bg(ds.x,ds.y,ds.x,ds.yBot)
}if(aT.length||dr&&dr.scrollTop!=null){dn=cB(aT,true,dr&&dr.scrollTop)
}if(!dn){if(a6){dj()
}if(a9){a1()
}}if(dr){cD()
}if(a6){da()
}if(cG&&(cN===true||(cN!==false&&a6))){cZ(cr)
}if(a6&&cm.matchBrackets){setTimeout(aJ(function(){if(cp){cp();
cp=null
}if(Q(dk.from,dk.to)){cC(false)
}}),20)
}var du=a6,dp=cX;
if(db&&cm.onChange&&cx){cm.onChange(cx,db)
}if(du&&cm.onCursorActivity){cm.onCursorActivity(cx)
}for(var dq=0;
dq<dp.length;
++dq){dp[dq](cx)
}if(dn&&cm.onUpdate){cm.onUpdate(cx)
}}var cO=0;
function aJ(dm){return function(){if(!cO++){a4()
}try{var dn=dm.apply(this,arguments)
}finally{if(!--cO){aQ()
}}return dn
}
}function b9(dm){br.startCompound();
try{return dm()
}finally{br.endCompound()
}}for(var b4 in c){if(c.propertyIsEnumerable(b4)&&!cx.propertyIsEnumerable(b4)){cx[b4]=c[b4]
}}return cx
}p.defaults={value:"",mode:null,theme:"default",indentUnit:2,indentWithTabs:false,smartIndent:true,tabSize:4,keyMap:"default",extraKeys:null,electricChars:true,autoClearEmptyLines:false,onKeyEvent:null,onDragEvent:null,lineWrapping:false,lineNumbers:false,gutter:false,fixedGutter:false,firstLineNumber:1,readOnly:false,dragDrop:true,onChange:null,onCursorActivity:null,onViewportChange:null,onGutterClick:null,onUpdate:null,onFocus:null,onBlur:null,onScroll:null,matchBrackets:false,cursorBlinkRate:530,workTime:100,workDelay:200,pollInterval:100,undoDepth:40,tabindex:null,autofocus:null,lineNumberFormatter:function(aD){return aD
}};
var h=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent);
var I=h||/Mac/.test(navigator.platform);
var ad=/Win/.test(navigator.platform);
var y=p.modes={},aj=p.mimeModes={};
p.defineMode=function(aD,aF){if(!p.defaults.mode&&aD!="null"){p.defaults.mode=aD
}if(arguments.length>2){aF.dependencies=[];
for(var aE=2;
aE<arguments.length;
++aE){aF.dependencies.push(arguments[aE])
}}y[aD]=aF
};
p.defineMIME=function(aE,aD){aj[aE]=aD
};
p.resolveMode=function(aD){if(typeof aD=="string"&&aj.hasOwnProperty(aD)){aD=aj[aD]
}else{if(typeof aD=="string"&&/^[\w\-]+\/[\w\-]+\+xml$/.test(aD)){return p.resolveMode("application/xml")
}}if(typeof aD=="string"){return{name:aD}
}else{return aD||{name:"null"}
}};
p.getMode=function(aE,aD){var aD=p.resolveMode(aD);
var aG=y[aD.name];
if(!aG){return p.getMode(aE,"text/plain")
}var aH=aG(aE,aD);
if(Y.hasOwnProperty(aD.name)){var aF=Y[aD.name];
for(var aI in aF){if(aF.hasOwnProperty(aI)){aH[aI]=aF[aI]
}}}aH.name=aD.name;
return aH
};
p.listModes=function(){var aE=[];
for(var aD in y){if(y.propertyIsEnumerable(aD)){aE.push(aD)
}}return aE
};
p.listMIMEs=function(){var aE=[];
for(var aD in aj){if(aj.propertyIsEnumerable(aD)){aE.push({mime:aD,mode:aj[aD]})
}}return aE
};
var c=p.extensions={};
p.defineExtension=function(aD,aE){c[aD]=aE
};
var Y=p.modeExtensions={};
p.extendMode=function(aF,aE){var aD=Y.hasOwnProperty(aF)?Y[aF]:(Y[aF]={});
for(var aG in aE){if(aE.hasOwnProperty(aG)){aD[aG]=aE[aG]
}}};
var r=p.commands={selectAll:function(aD){aD.setSelection({line:0,ch:0},{line:aD.lineCount()-1})
},killLine:function(aD){var aG=aD.getCursor(true),aF=aD.getCursor(false),aE=!Q(aG,aF);
if(!aE&&aD.getLine(aG.line).length==aG.ch){aD.replaceRange("",aG,{line:aG.line+1,ch:0})
}else{aD.replaceRange("",aG,aE?aF:{line:aG.line})
}},deleteLine:function(aD){var aE=aD.getCursor().line;
aD.replaceRange("",{line:aE,ch:0},{line:aE})
},undo:function(aD){aD.undo()
},redo:function(aD){aD.redo()
},goDocStart:function(aD){aD.setCursor(0,0,true)
},goDocEnd:function(aD){aD.setSelection({line:aD.lineCount()-1},null,true)
},goLineStart:function(aD){aD.setCursor(aD.getCursor().line,0,true)
},goLineStartSmart:function(aD){var aG=aD.getCursor();
var aF=aD.getLine(aG.line),aE=Math.max(0,aF.search(/\S/));
aD.setCursor(aG.line,aG.ch<=aE&&aG.ch?0:aE,true)
},goLineEnd:function(aD){aD.setSelection({line:aD.getCursor().line},null,true)
},goLineUp:function(aD){aD.moveV(-1,"line")
},goLineDown:function(aD){aD.moveV(1,"line")
},goPageUp:function(aD){aD.moveV(-1,"page")
},goPageDown:function(aD){aD.moveV(1,"page")
},goCharLeft:function(aD){aD.moveH(-1,"char")
},goCharRight:function(aD){aD.moveH(1,"char")
},goColumnLeft:function(aD){aD.moveH(-1,"column")
},goColumnRight:function(aD){aD.moveH(1,"column")
},goWordLeft:function(aD){aD.moveH(-1,"word")
},goWordRight:function(aD){aD.moveH(1,"word")
},delCharLeft:function(aD){aD.deleteH(-1,"char")
},delCharRight:function(aD){aD.deleteH(1,"char")
},delWordLeft:function(aD){aD.deleteH(-1,"word")
},delWordRight:function(aD){aD.deleteH(1,"word")
},indentAuto:function(aD){aD.indentSelection("smart")
},indentMore:function(aD){aD.indentSelection("add")
},indentLess:function(aD){aD.indentSelection("subtract")
},insertTab:function(aD){aD.replaceSelection("\t","end")
},defaultTab:function(aD){if(aD.somethingSelected()){aD.indentSelection("add")
}else{aD.replaceSelection("\t","end")
}},transposeChars:function(aD){var aF=aD.getCursor(),aE=aD.getLine(aF.line);
if(aF.ch>0&&aF.ch<aE.length-1){aD.replaceRange(aE.charAt(aF.ch)+aE.charAt(aF.ch-1),{line:aF.line,ch:aF.ch-1},{line:aF.line,ch:aF.ch+1})
}},newlineAndIndent:function(aD){aD.replaceSelection("\n","end");
aD.indentLine(aD.getCursor().line)
},toggleOverwrite:function(aD){aD.toggleOverwrite()
}};
var f=p.keyMap={};
f.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharRight",Backspace:"delCharLeft",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite"};
f.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Alt-Up":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Down":"goDocEnd","Ctrl-Left":"goWordLeft","Ctrl-Right":"goWordRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delWordLeft","Ctrl-Delete":"delWordRight","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore",fallthrough:"basic"};
f.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goWordLeft","Alt-Right":"goWordRight","Cmd-Left":"goLineStart","Cmd-Right":"goLineEnd","Alt-Backspace":"delWordLeft","Ctrl-Alt-Backspace":"delWordRight","Alt-Delete":"delWordRight","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore",fallthrough:["basic","emacsy"]};
f["default"]=I?f.macDefault:f.pcDefault;
f.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageUp","Shift-Ctrl-V":"goPageDown","Ctrl-D":"delCharRight","Ctrl-H":"delCharLeft","Alt-D":"delWordRight","Alt-Backspace":"delWordLeft","Ctrl-K":"killLine","Ctrl-T":"transposeChars"};
function ap(aD){if(typeof aD=="string"){return f[aD]
}else{return aD
}}function ar(aE,aD,aI,aG,aF){function aH(aN){aN=ap(aN);
var aL=aN[aE];
if(aL===false){if(aF){aF()
}return true
}if(aL!=null&&aG(aL)){return true
}if(aN.nofallthrough){if(aF){aF()
}return true
}var aK=aN.fallthrough;
if(aK==null){return false
}if(Object.prototype.toString.call(aK)!="[object Array]"){return aH(aK)
}for(var aJ=0,aM=aK.length;
aJ<aM;
++aJ){if(aH(aK[aJ])){return true
}}return false
}if(aD&&aH(aD)){return true
}return aH(aI)
}function ag(aE){var aD=u[aa(aE,"keyCode")];
return aD=="Ctrl"||aD=="Alt"||aD=="Shift"||aD=="Mod"
}p.fromTextArea=function(aJ,aL){if(!aL){aL={}
}aL.value=aJ.value;
if(!aL.tabindex&&aJ.tabindex){aL.tabindex=aJ.tabindex
}if(aL.autofocus==null){var aD=document.body;
try{aD=document.activeElement
}catch(aF){}aL.autofocus=aD==aJ||aJ.getAttribute("autofocus")!=null&&aD==document.body
}function aH(){aJ.value=aK.getValue()
}if(aJ.form){var aE=az(aJ.form,"submit",aH,true);
if(typeof aJ.form.submit=="function"){var aI=aJ.form.submit;
aJ.form.submit=function aG(){aH();
aJ.form.submit=aI;
aJ.form.submit();
aJ.form.submit=aG
}
}}aJ.style.display="none";
var aK=p(function(aM){aJ.parentNode.insertBefore(aM,aJ.nextSibling)
},aL);
aK.save=aH;
aK.getTextArea=function(){return aJ
};
aK.toTextArea=function(){aH();
aJ.parentNode.removeChild(aK.getWrapperElement());
aJ.style.display="";
if(aJ.form){aE();
if(typeof aJ.form.submit=="function"){aJ.form.submit=aI
}}};
return aK
};
var v=/gecko\/\d{7}/i.test(navigator.userAgent);
var R=/MSIE \d/.test(navigator.userAgent);
var J=/MSIE [1-7]\b/.test(navigator.userAgent);
var G=/MSIE [1-8]\b/.test(navigator.userAgent);
var l=R&&document.documentMode==5;
var k=/WebKit\//.test(navigator.userAgent);
var n=/Chrome\//.test(navigator.userAgent);
var au=/Opera\//.test(navigator.userAgent);
var E=/Apple Computer/.test(navigator.vendor);
var ae=/KHTML\//.test(navigator.userAgent);
var T=/Mac OS X 10\D([7-9]|\d\d)\D/.test(navigator.userAgent);
function m(aG,aD){if(aD===true){return aD
}if(aG.copyState){return aG.copyState(aD)
}var aF={};
for(var aH in aD){var aE=aD[aH];
if(aE instanceof Array){aE=aE.concat([])
}aF[aH]=aE
}return aF
}p.copyState=m;
function t(aF,aE,aD){return aF.startState?aF.startState(aE,aD):true
}p.startState=t;
p.innerMode=function(aF,aD){while(aF.innerMode){var aE=aF.innerMode(aD);
aD=aE.state;
aF=aE.mode
}return aE||{mode:aF,state:aD}
};
function af(aD,aE){this.pos=this.start=0;
this.string=aD;
this.tabSize=aE||8
}af.prototype={eol:function(){return this.pos>=this.string.length
},sol:function(){return this.pos==0
},peek:function(){return this.string.charAt(this.pos)||undefined
},next:function(){if(this.pos<this.string.length){return this.string.charAt(this.pos++)
}},eat:function(aD){var aF=this.string.charAt(this.pos);
if(typeof aD=="string"){var aE=aF==aD
}else{var aE=aF&&(aD.test?aD.test(aF):aD(aF))
}if(aE){++this.pos;
return aF
}},eatWhile:function(aD){var aE=this.pos;
while(this.eat(aD)){}return this.pos>aE
},eatSpace:function(){var aD=this.pos;
while(/[\s\u00a0]/.test(this.string.charAt(this.pos))){++this.pos
}return this.pos>aD
},skipToEnd:function(){this.pos=this.string.length
},skipTo:function(aD){var aE=this.string.indexOf(aD,this.pos);
if(aE>-1){this.pos=aE;
return true
}},backUp:function(aD){this.pos-=aD
},column:function(){return am(this.string,this.start,this.tabSize)
},indentation:function(){return am(this.string,null,this.tabSize)
},match:function(aG,aE,aD){if(typeof aG=="string"){var aH=function(aI){return aD?aI.toLowerCase():aI
};
if(aH(this.string).indexOf(aH(aG),this.pos)==this.pos){if(aE!==false){this.pos+=aG.length
}return true
}}else{var aF=this.string.slice(this.pos).match(aG);
if(aF&&aF.index>0){return null
}if(aF&&aE!==false){this.pos+=aF[0].length
}return aF
}},current:function(){return this.string.slice(this.start,this.pos)
}};
p.StringStream=af;
function W(aF,aE,aD){this.from=aF;
this.to=aE;
this.marker=aD
}function aC(aG,aE,aD){if(aG){for(var aF=0;
aF<aG.length;
++aF){var aH=aG[aF];
if(aH.marker==aE){if(aD){aG.splice(aF,1)
}return aH
}}}}function S(aE,aF,aH){if(aE){for(var aI=0,aK;
aI<aE.length;
++aI){var aL=aE[aI],aJ=aL.marker;
var aD=aL.from==null||(aJ.inclusiveLeft?aL.from<=aF:aL.from<aF);
if(aD||aJ.type=="bookmark"&&aL.from==aF&&aL.from!=aH){var aG=aL.to==null||(aJ.inclusiveRight?aL.to>=aF:aL.to>aF);
(aK||(aK=[])).push({from:aL.from,to:aG?null:aL.to,marker:aJ})
}}}return aK
}function at(aF,aI){if(aF){for(var aH=0,aE;
aH<aF.length;
++aH){var aJ=aF[aH],aD=aJ.marker;
var aK=aJ.to==null||(aD.inclusiveRight?aJ.to>=aI:aJ.to>aI);
if(aK||aD.type=="bookmark"&&aJ.from==aI){var aG=aJ.from==null||(aD.inclusiveLeft?aJ.from<=aI:aJ.from<aI);
(aE||(aE=[])).push({from:aG?null:aJ.from-aI,to:aJ.to==null?null:aJ.to-aI,marker:aD})
}}}return aE
}function V(aL,aQ,aE,aH,aK){if(!aL&&!aQ){return aK
}var aJ=S(aL,aE);
var aO=at(aQ,aH);
var aP=aK.length==1,aF=M(aK).length+(aP?aE:0);
if(aJ){for(var aG=0;
aG<aJ.length;
++aG){var aN=aJ[aG];
if(aN.to==null){var aR=aC(aO,aN.marker);
if(!aR){aN.to=aE
}else{if(aP){aN.to=aR.to==null?null:aR.to+aF
}}}}}if(aO){for(var aG=0;
aG<aO.length;
++aG){var aN=aO[aG];
if(aN.to!=null){aN.to+=aF
}if(aN.from==null){var aR=aC(aJ,aN.marker);
if(!aR){aN.from=aF;
if(aP){(aJ||(aJ=[])).push(aN)
}}}else{aN.from+=aF;
if(aP){(aJ||(aJ=[])).push(aN)
}}}}var aI=[j(aK[0],aJ)];
if(!aP){var aM=aK.length-2,aD;
if(aM>0&&aJ){for(var aG=0;
aG<aJ.length;
++aG){if(aJ[aG].to==null){(aD||(aD=[])).push({from:null,to:null,marker:aJ[aG].marker})
}}}for(var aG=0;
aG<aM;
++aG){aI.push(j(aK[aG+1],aD))
}aI.push(j(M(aK),aO))
}return aI
}function aq(aD){return typeof aD=="string"?aD:aD.text
}function d(aD){return typeof aD=="string"?null:aD.markedSpans
}function j(aE,aD){return aD?{text:aE,markedSpans:aD}:aE
}function aw(aF){var aH=aF.markedSpans;
if(!aH){return
}for(var aG=0;
aG<aH.length;
++aG){var aE=aH[aG].marker.lines;
var aD=s(aE,aF);
aE.splice(aD,1)
}aF.markedSpans=null
}function ay(aE,aG){if(!aG){return
}for(var aF=0;
aF<aG.length;
++aF){var aD=aG[aF].marker.lines.push(aE)
}aE.markedSpans=aG
}var al=" ";
if(v||(R&&!J)){al="\u200b"
}else{if(au){al=""
}}function H(aE,aD){this.text=aE;
this.height=1;
ay(this,aD)
}H.prototype={update:function(aE,aD){this.text=aE;
this.stateAfter=this.styles=null;
aw(this);
ay(this,aD)
},highlight:function(aJ,aG,aH){var aI=new af(this.text,aH),aD=this.styles||(this.styles=[]);
var aK=aD.length=0;
if(this.text==""&&aJ.blankLine){aJ.blankLine(aG)
}while(!aI.eol()){var aE=aJ.token(aI,aG),aF=aI.current();
aI.start=aI.pos;
if(aK&&aD[aK-1]==aE){aD[aK-2]+=aF
}else{if(aF){aD[aK++]=aF;
aD[aK++]=aE
}}if(aI.pos>5000){aD[aK++]=this.text.slice(aI.pos);
aD[aK++]=null;
break
}}},process:function(aG,aD,aE){var aF=new af(this.text,aE);
if(this.text==""&&aG.blankLine){aG.blankLine(aD)
}while(!aF.eol()&&aF.pos<=5000){aG.token(aF,aD);
aF.start=aF.pos
}},getTokenAt:function(aJ,aG,aH,aF){var aD=this.text,aI=new af(aD,aH);
while(aI.pos<aF&&!aI.eol()){aI.start=aI.pos;
var aE=aJ.token(aI,aG)
}return{start:aI.start,end:aI.pos,string:aI.current(),className:aE||null,state:aG}
},indentation:function(aD){return am(this.text,null,aD)
},getContent:function(aS,aD,aO){var aJ=true,aH=0,aZ=/[\t\u0000-\u0019\u200b\u2028\u2029\uFEFF]/g;
var aR=ah("pre");
function a0(be,bj,bb){if(!bj){return
}if(aJ&&R&&bj.charAt(0)==" "){bj="\u00a0"+bj.slice(1)
}aJ=false;
if(!aZ.test(bj)){aH+=bj.length;
var bf=document.createTextNode(bj)
}else{var bf=document.createDocumentFragment(),bh=0;
while(true){aZ.lastIndex=bh;
var bc=aZ.exec(bj);
var bg=bc?bc.index-bh:bj.length-bh;
if(bg){bf.appendChild(document.createTextNode(bj.slice(bh,bh+bg)));
aH+=bg
}if(!bc){break
}bh+=bg+1;
if(bc[0]=="\t"){var bi=aS-aH%aS;
bf.appendChild(ah("span",av(bi),"cm-tab"));
aH+=bi
}else{var bd=ah("span","\u2022","cm-invalidchar");
bd.title="\\u"+bc[0].charCodeAt(0).toString(16);
bf.appendChild(bd);
aH+=1
}}}if(bb){be.appendChild(ah("span",[bf],bb))
}else{be.appendChild(bf)
}}var a3=a0;
if(aD!=null){var aX=0,aK=aR.anchor=ah("span");
a3=function(bc,bf,bd){var bb=bf.length;
if(aD>=aX&&aD<aX+bb){if(aD>aX){a0(bc,bf.slice(0,aD-aX),bd);
if(aO){bc.appendChild(ah("wbr"))
}}bc.appendChild(aK);
var be=aD-aX;
a0(aK,au?bf.slice(be,be+1):bf.slice(be),bd);
if(au){a0(bc,bf.slice(be+1),bd)
}aD--;
aX+=bb
}else{aX+=bb;
a0(bc,bf,bd);
if(aX==aD&&aX==a7){w(aK,al);
bc.appendChild(aK)
}else{if(aX>aD+10&&/\s/.test(bf)){a3=function(){}
}}}}
}var aW=this.styles,aL=this.text,aT=this.markedSpans;
var a7=aL.length;
function aG(bb){if(!bb){return null
}return"cm-"+bb.replace(/ +/g," cm-")
}if(!aL&&aD==null){a3(aR," ")
}else{if(!aT||!aT.length){for(var a4=0,aN=0;
aN<a7;
a4+=2){var aV=aW[a4],a6=aW[a4+1],aY=aV.length;
if(aN+aY>a7){aV=aV.slice(0,a7-aN)
}aN+=aY;
a3(aR,aV,aG(a6))
}}else{aT.sort(function(bc,bb){return bc.from-bb.from
});
var aI=0,a4=0,aQ="",a6,ba=0;
var a9=aT[0].from||0,a2=[],a8=0;
var a5=function(){var bb;
while(a8<aT.length&&((bb=aT[a8]).from==aI||bb.from==null)){if(bb.marker.type=="range"){a2.push(bb)
}++a8
}a9=a8<aT.length?aT[a8].from:Infinity;
for(var bc=0;
bc<a2.length;
++bc){var bd=a2[bc].to;
if(bd==null){bd=Infinity
}if(bd==aI){a2.splice(bc--,1)
}else{a9=Math.min(bd,a9)
}}};
var aU=0;
while(aI<a7){if(a9==aI){a5()
}var aP=Math.min(a7,a9);
while(true){if(aQ){var aF=aI+aQ.length;
var aE=a6;
for(var a1=0;
a1<a2.length;
++a1){var aM=a2[a1];
aE=(aE?aE+" ":"")+aM.marker.style;
if(aM.marker.endStyle&&aM.to===Math.min(aF,aP)){aE+=" "+aM.marker.endStyle
}if(aM.marker.startStyle&&aM.from===aI){aE+=" "+aM.marker.startStyle
}}a3(aR,aF>aP?aQ.slice(0,aP-aI):aQ,aE);
if(aF>=aP){aQ=aQ.slice(aP-aI);
aI=aP;
break
}aI=aF
}aQ=aW[a4++];
a6=aG(aW[a4++])
}}}}return aR
},cleanUp:function(){this.parent=null;
aw(this)
}};
function N(aE){this.lines=aE;
this.parent=null;
for(var aF=0,aG=aE.length,aD=0;
aF<aG;
++aF){aE[aF].parent=this;
aD+=aE[aF].height
}this.height=aD
}N.prototype={chunkSize:function(){return this.lines.length
},remove:function(aD,aJ,aH){for(var aG=aD,aI=aD+aJ;
aG<aI;
++aG){var aE=this.lines[aG];
this.height-=aE.height;
aE.cleanUp();
if(aE.handlers){for(var aF=0;
aF<aE.handlers.length;
++aF){aH.push(aE.handlers[aF])
}}}this.lines.splice(aD,aJ)
},collapse:function(aD){aD.splice.apply(aD,[aD.length,0].concat(this.lines))
},insertHeight:function(aE,aF,aD){this.height+=aD;
this.lines=this.lines.slice(0,aE).concat(aF).concat(this.lines.slice(aE));
for(var aG=0,aH=aF.length;
aG<aH;
++aG){aF[aG].parent=this
}},iterN:function(aD,aG,aF){for(var aE=aD+aG;
aD<aE;
++aD){if(aF(this.lines[aD])){return true
}}}};
function ai(aG){this.children=aG;
var aF=0,aD=0;
for(var aE=0,aI=aG.length;
aE<aI;
++aE){var aH=aG[aE];
aF+=aH.chunkSize();
aD+=aH.height;
aH.parent=this
}this.size=aF;
this.height=aD;
this.parent=null
}ai.prototype={chunkSize:function(){return this.size
},remove:function(aF,aE,aI){this.size-=aE;
for(var aG=0;
aG<this.children.length;
++aG){var aD=this.children[aG],aJ=aD.chunkSize();
if(aF<aJ){var aH=Math.min(aE,aJ-aF),aK=aD.height;
aD.remove(aF,aH,aI);
this.height-=aK-aD.height;
if(aJ==aH){this.children.splice(aG--,1);
aD.parent=null
}if((aE-=aH)==0){break
}aF=0
}else{aF-=aJ
}}if(this.size-aE<25){var aL=[];
this.collapse(aL);
this.children=[new N(aL)];
this.children[0].parent=this
}},collapse:function(aD){for(var aE=0,aF=this.children.length;
aE<aF;
++aE){this.children[aE].collapse(aD)
}},insert:function(aE,aF){var aD=0;
for(var aG=0,aH=aF.length;
aG<aH;
++aG){aD+=aF[aG].height
}this.insertHeight(aE,aF,aD)
},insertHeight:function(aE,aL,aK){this.size+=aL.length;
this.height+=aK;
for(var aF=0,aH=this.children.length;
aF<aH;
++aF){var aD=this.children[aF],aI=aD.chunkSize();
if(aE<=aI){aD.insertHeight(aE,aL,aK);
if(aD.lines&&aD.lines.length>50){while(aD.lines.length>50){var aG=aD.lines.splice(aD.lines.length-25,25);
var aJ=new N(aG);
aD.height-=aJ.height;
this.children.splice(aF+1,0,aJ);
aJ.parent=this
}this.maybeSpill()
}break
}aE-=aI
}},maybeSpill:function(){if(this.children.length<=10){return
}var aG=this;
do{var aE=aG.children.splice(aG.children.length-5,5);
var aF=new ai(aE);
if(!aG.parent){var aH=new ai(aG.children);
aH.parent=aG;
aG.children=[aH,aF];
aG=aH
}else{aG.size-=aF.size;
aG.height-=aF.height;
var aD=s(aG.parent.children,aG);
aG.parent.children.splice(aD+1,0,aF)
}aF.parent=aG.parent
}while(aG.children.length>10);
aG.parent.maybeSpill()
},iter:function(aF,aE,aD){this.iterN(aF,aE-aF,aD)
},iterN:function(aD,aK,aJ){for(var aE=0,aH=this.children.length;
aE<aH;
++aE){var aI=this.children[aE],aG=aI.chunkSize();
if(aD<aG){var aF=Math.min(aK,aG-aD);
if(aI.iterN(aD,aF,aJ)){return true
}if((aK-=aF)==0){break
}aD=0
}else{aD-=aG
}}}};
function K(aD,aH){while(!aD.lines){for(var aE=0;
;
++aE){var aG=aD.children[aE],aF=aG.chunkSize();
if(aH<aF){aD=aG;
break
}aH-=aF
}}return aD.lines[aH]
}function U(aD){if(aD.parent==null){return null
}var aI=aD.parent,aH=s(aI.lines,aD);
for(var aE=aI.parent;
aE;
aI=aE,aE=aE.parent){for(var aF=0,aG=aE.children.length;
;
++aF){if(aE.children[aF]==aI){break
}aH+=aE.children[aF].chunkSize()
}}return aH
}function ac(aJ,aH){var aF=0;
outer:do{for(var aG=0,aI=aJ.children.length;
aG<aI;
++aG){var aE=aJ.children[aG],aD=aE.height;
if(aH<aD){aJ=aE;
continue outer
}aH-=aD;
aF+=aE.chunkSize()
}return aF
}while(!aJ.lines);
for(var aG=0,aI=aJ.lines.length;
aG<aI;
++aG){var aL=aJ.lines[aG],aK=aL.height;
if(aH<aK){break
}aH-=aK
}return aF+aG
}function a(aD,aJ){var aF=0;
outer:do{for(var aE=0,aH=aD.children.length;
aE<aH;
++aE){var aI=aD.children[aE],aG=aI.chunkSize();
if(aJ<aG){aD=aI;
continue outer
}aJ-=aG;
aF+=aI.height
}return aF
}while(!aD.lines);
for(var aE=0;
aE<aJ;
++aE){aF+=aD.lines[aE].height
}return aF
}function D(){this.time=0;
this.done=[];
this.undone=[];
this.compound=0;
this.closed=false
}D.prototype={addChange:function(aD,aI,aE){this.undone.length=0;
var aF=+new Date,aK=M(this.done),aL=aK&&M(aK);
var aH=aF-this.time;
if(this.compound&&aK&&!this.closed){aK.push({start:aD,added:aI,old:aE})
}else{if(aH>400||!aL||this.closed||aL.start>aD+aE.length||aL.start+aL.added<aD){this.done.push([{start:aD,added:aI,old:aE}]);
this.closed=false
}else{var aJ=Math.max(0,aL.start-aD),aM=Math.max(0,(aD+aE.length)-(aL.start+aL.added));
for(var aG=aJ;
aG>0;
--aG){aL.old.unshift(aE[aG-1])
}for(var aG=aM;
aG>0;
--aG){aL.old.push(aE[aE.length-aG])
}if(aJ){aL.start=aD
}aL.added+=aI-(aE.length-aJ-aM)
}}this.time=aF
},startCompound:function(){if(!this.compound++){this.closed=true
}},endCompound:function(){if(!--this.compound){this.closed=true
}}};
function x(){ab(this)
}function O(aD){if(!aD.stop){aD.stop=x
}return aD
}function e(aD){if(aD.preventDefault){aD.preventDefault()
}else{aD.returnValue=false
}}function o(aD){if(aD.stopPropagation){aD.stopPropagation()
}else{aD.cancelBubble=true
}}function ab(aD){e(aD);
o(aD)
}p.e_stop=ab;
p.e_preventDefault=e;
p.e_stopPropagation=o;
function ao(aD){return aD.target||aD.srcElement
}function C(aE){var aD=aE.which;
if(aD==null){if(aE.button&1){aD=1
}else{if(aE.button&2){aD=3
}else{if(aE.button&4){aD=2
}}}}if(I&&aE.ctrlKey&&aD==1){aD=3
}return aD
}function aa(aE,aF){var aD=aE.override&&aE.override.hasOwnProperty(aF);
return aD?aE.override[aF]:aE[aF]
}function az(aG,aF,aE,aD){if(typeof aG.addEventListener=="function"){aG.addEventListener(aF,aE,false);
if(aD){return function(){aG.removeEventListener(aF,aE,false)
}
}}else{var aH=function(aI){aE(aI||window.event)
};
aG.attachEvent("on"+aF,aH);
if(aD){return function(){aG.detachEvent("on"+aF,aH)
}
}}}p.connect=az;
function i(){this.id=null
}i.prototype={set:function(aD,aE){clearTimeout(this.id);
this.id=setTimeout(aE,aD)
}};
var an=p.Pass={toString:function(){return"CodeMirror.Pass"
}};
var Z=function(){if(G){return false
}var aD=ah("div");
return"draggable" in aD||"dragDrop" in aD
}();
var P=function(){var aD=ah("textarea");
aD.value="foo\nbar";
if(aD.value.indexOf("\r")>-1){return"\r\n"
}return"\n"
}();
var F=/^$/;
if(v){F=/$'/
}else{if(E){F=/\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/
}else{if(n){F=/\-[^ \-\.?]|\?[^ \-\.?\]\}:;!'\"\),\/]|[\.!\"#&%\)*+,:;=>\]|\}~][\(\{\[<]|\$'/
}}}function am(aE,aD,aG){if(aD==null){aD=aE.search(/[^\s\u00a0]/);
if(aD==-1){aD=aE.length
}}for(var aF=0,aH=0;
aF<aD;
++aF){if(aE.charAt(aF)=="\t"){aH+=aG-(aH%aG)
}else{++aH
}}return aH
}function z(aG,aD){try{var aF=aG.getBoundingClientRect();
aF={top:aF.top,left:aF.left}
}catch(aH){aF={top:0,left:0}
}if(!aD){if(window.pageYOffset==null){var aE=document.documentElement||document.body.parentNode;
if(aE.scrollTop==null){aE=document.body
}aF.top+=aE.scrollTop;
aF.left+=aE.scrollLeft
}else{aF.top+=window.pageYOffset;
aF.left+=window.pageXOffset
}}return aF
}function ax(aD){return aD.textContent||aD.innerText||aD.nodeValue||""
}var ak=[""];
function av(aD){while(ak.length<=aD){ak.push(M(ak)+" ")
}return ak[aD]
}function M(aD){return aD[aD.length-1]
}function aA(aD){if(h){aD.selectionStart=0;
aD.selectionEnd=aD.value.length
}else{aD.select()
}}function Q(aE,aD){return aE.line==aD.line&&aE.ch==aD.ch
}function B(aE,aD){return aE.line<aD.line||(aE.line==aD.line&&aE.ch<aD.ch)
}function X(aD){return{line:aD.line,ch:aD.ch}
}function ah(aD,aH,aG,aF){var aI=document.createElement(aD);
if(aG){aI.className=aG
}if(aF){aI.style.cssText=aF
}if(typeof aH=="string"){w(aI,aH)
}else{if(aH){for(var aE=0;
aE<aH.length;
++aE){aI.appendChild(aH[aE])
}}}return aI
}function aB(aD){aD.innerHTML="";
return aD
}function q(aD,aE){aB(aD).appendChild(aE)
}function w(aD,aE){if(G){aD.innerHTML="";
aD.appendChild(document.createTextNode(aE))
}else{aD.textContent=aE
}}function A(aG,aF){if(!aF){return 0
}if(!aG){return aF.length
}for(var aE=aG.length,aD=aF.length;
aE>=0&&aD>=0;
--aE,--aD){if(aG.charAt(aE)!=aF.charAt(aD)){break
}}return aD+1
}function s(aG,aD){if(aG.indexOf){return aG.indexOf(aD)
}for(var aE=0,aF=aG.length;
aE<aF;
++aE){if(aG[aE]==aD){return aE
}}return -1
}function L(aD){return/\w/.test(aD)||aD.toUpperCase()!=aD.toLowerCase()
}var g="\n\nb".split(/\n/).length!=3?function(aI){var aJ=0,aD=[],aH=aI.length;
while(aJ<=aH){var aG=aI.indexOf("\n",aJ);
if(aG==-1){aG=aI.length
}var aF=aI.slice(aJ,aI.charAt(aG-1)=="\r"?aG-1:aG);
var aE=aF.indexOf("\r");
if(aE!=-1){aD.push(aF.slice(0,aE));
aJ+=aE+1
}else{aD.push(aF);
aJ=aG+1
}}return aD
}:function(aD){return aD.split(/\r\n?|\n/)
};
p.splitLines=g;
var b=window.getSelection?function(aE){try{return aE.selectionStart!=aE.selectionEnd
}catch(aD){return false
}}:function(aF){try{var aD=aF.ownerDocument.selection.createRange()
}catch(aE){}if(!aD||aD.parentElement()!=aF){return false
}return aD.compareEndPoints("StartToEnd",aD)!=0
};
p.defineMode("null",function(){return{token:function(aD){aD.skipToEnd()
}}
});
p.defineMIME("text/plain","null");
var u={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",91:"Mod",92:"Mod",93:"Mod",109:"-",107:"=",127:"Delete",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63276:"PageUp",63277:"PageDown",63275:"End",63273:"Home",63234:"Left",63232:"Up",63235:"Right",63233:"Down",63302:"Insert",63272:"Delete"};
p.keyNames=u;
(function(){for(var aD=0;
aD<10;
aD++){u[aD+48]=String(aD)
}for(var aD=65;
aD<=90;
aD++){u[aD]=String.fromCharCode(aD)
}for(var aD=1;
aD<=12;
aD++){u[aD+111]=u[aD+63235]="F"+aD
}})();
p.version="2.34";
return p
})();
CStudioAuthoring.Module.moduleLoaded("codemirror",{});