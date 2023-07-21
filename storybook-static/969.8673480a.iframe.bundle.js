/*! For license information please see 969.8673480a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunknhm_ui=self.webpackChunknhm_ui||[]).push([[969],{"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/istanbul-lib-coverage/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const{FileCoverage}=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/file-coverage.js"),{CoverageMap}=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/coverage-map.js"),{CoverageSummary}=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/coverage-summary.js");module.exports={createCoverageSummary:obj=>obj&&obj instanceof CoverageSummary?obj:new CoverageSummary(obj),createCoverageMap:obj=>obj&&obj instanceof CoverageMap?obj:new CoverageMap(obj),createFileCoverage:obj=>obj&&obj instanceof FileCoverage?obj:new FileCoverage(obj)},module.exports.classes={FileCoverage}},"./node_modules/istanbul-lib-coverage/lib/coverage-map.js":(module,__unused_webpack_exports,__webpack_require__)=>{const{FileCoverage}=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/file-coverage.js"),{CoverageSummary}=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/coverage-summary.js");function maybeConstruct(obj,klass){return obj instanceof klass?obj:new klass(obj)}class CoverageMap{constructor(obj){this.data=obj instanceof CoverageMap?obj.data:function loadMap(source){const data=Object.create(null);return source?(Object.entries(source).forEach((([k,cov])=>{data[k]=maybeConstruct(cov,FileCoverage)})),data):data}(obj)}merge(obj){const other=maybeConstruct(obj,CoverageMap);Object.values(other.data).forEach((fc=>{this.addFileCoverage(fc)}))}filter(callback){Object.keys(this.data).forEach((k=>{callback(k)||delete this.data[k]}))}toJSON(){return this.data}files(){return Object.keys(this.data)}fileCoverageFor(file){const fc=this.data[file];if(!fc)throw new Error(`No file coverage available for: ${file}`);return fc}addFileCoverage(fc){const cov=new FileCoverage(fc),{path}=cov;this.data[path]?this.data[path].merge(cov):this.data[path]=cov}getCoverageSummary(){const ret=new CoverageSummary;return Object.values(this.data).forEach((fc=>{ret.merge(fc.toSummary())})),ret}}module.exports={CoverageMap}},"./node_modules/istanbul-lib-coverage/lib/coverage-summary.js":(module,__unused_webpack_exports,__webpack_require__)=>{const percent=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/percent.js"),dataProperties=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/data-properties.js");class CoverageSummary{constructor(obj){this.data=obj?obj instanceof CoverageSummary?obj.data:obj:{lines:{total:0,covered:0,skipped:0,pct:"Unknown"},statements:{total:0,covered:0,skipped:0,pct:"Unknown"},functions:{total:0,covered:0,skipped:0,pct:"Unknown"},branches:{total:0,covered:0,skipped:0,pct:"Unknown"},branchesTrue:{total:0,covered:0,skipped:0,pct:"Unknown"}},function assertValidSummary(obj){if(!(obj&&obj.lines&&obj.statements&&obj.functions&&obj.branches))throw new Error("Invalid summary coverage object, missing keys, found:"+Object.keys(obj).join(","))}(this.data)}merge(obj){return["lines","statements","branches","functions","branchesTrue"].forEach((key=>{obj[key]&&(this[key].total+=obj[key].total,this[key].covered+=obj[key].covered,this[key].skipped+=obj[key].skipped,this[key].pct=percent(this[key].covered,this[key].total))})),this}toJSON(){return this.data}isEmpty(){return 0===this.lines.total}}dataProperties(CoverageSummary,["lines","statements","functions","branches","branchesTrue"]),module.exports={CoverageSummary}},"./node_modules/istanbul-lib-coverage/lib/data-properties.js":module=>{module.exports=function dataProperties(klass,properties){properties.forEach((p=>{Object.defineProperty(klass.prototype,p,{enumerable:!0,get(){return this.data[p]}})}))}},"./node_modules/istanbul-lib-coverage/lib/file-coverage.js":(module,__unused_webpack_exports,__webpack_require__)=>{const percent=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/percent.js"),dataProperties=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/data-properties.js"),{CoverageSummary}=__webpack_require__("./node_modules/istanbul-lib-coverage/lib/coverage-summary.js");const keyFromLoc=({start,end})=>`${start.line}|${start.column}|${end.line}|${end.column}`,mergeProp=(aHits,aMap,bHits,bMap,itemKey=keyFromLoc)=>{const aItems={};for(const[key,itemHits]of Object.entries(aHits)){const item=aMap[key];aItems[itemKey(item)]=[itemHits,item]}for(const[key,bItemHits]of Object.entries(bHits)){const bItem=bMap[key],k=itemKey(bItem);if(aItems[k]){const aPair=aItems[k];bItemHits.forEach?bItemHits.forEach(((hits,h)=>{void 0!==aPair[0][h]?aPair[0][h]+=hits:aPair[0][h]=hits})):aPair[0]+=bItemHits}else aItems[k]=[bItemHits,bItem]}const hits={},map={};return Object.values(aItems).forEach((([itemHits,item],i)=>{hits[i]=itemHits,map[i]=item})),[hits,map]};class FileCoverage{constructor(pathOrObj,reportLogic=!1){if(!pathOrObj)throw new Error("Coverage must be initialized with a path or an object");if("string"==typeof pathOrObj)this.data=function emptyCoverage(filePath,reportLogic){const cov={path:filePath,statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{}};return reportLogic&&(cov.bT={}),cov}(pathOrObj,reportLogic);else if(pathOrObj instanceof FileCoverage)this.data=pathOrObj.data;else{if("object"!=typeof pathOrObj)throw new Error("Invalid argument to coverage constructor");this.data=pathOrObj}!function assertValidObject(obj){if(!(obj&&obj.path&&obj.statementMap&&obj.fnMap&&obj.branchMap&&obj.s&&obj.f&&obj.b))throw new Error("Invalid file coverage object, missing keys, found:"+Object.keys(obj).join(","))}(this.data)}getLineCoverage(){const statementMap=this.data.statementMap,statements=this.data.s,lineMap=Object.create(null);return Object.entries(statements).forEach((([st,count])=>{if(!statementMap[st])return;const{line}=statementMap[st].start,prevVal=lineMap[line];(void 0===prevVal||prevVal<count)&&(lineMap[line]=count)})),lineMap}getUncoveredLines(){const lc=this.getLineCoverage(),ret=[];return Object.entries(lc).forEach((([l,hits])=>{0===hits&&ret.push(l)})),ret}getBranchCoverageByLine(){const branchMap=this.branchMap,branches=this.b,ret={};return Object.entries(branchMap).forEach((([k,map])=>{const line=map.line||map.loc.start.line,branchData=branches[k];ret[line]=ret[line]||[],ret[line].push(...branchData)})),Object.entries(ret).forEach((([k,dataArray])=>{const covered=dataArray.filter((item=>item>0)),coverage=covered.length/dataArray.length*100;ret[k]={covered:covered.length,total:dataArray.length,coverage}})),ret}toJSON(){return this.data}merge(other){if(!0===other.all)return;if(!0===this.all)return void(this.data=other.data);let[hits,map]=mergeProp(this.s,this.statementMap,other.s,other.statementMap);this.data.s=hits,this.data.statementMap=map;const keyFromLocationsProp=x=>keyFromLoc(x.locations[0]);[hits,map]=mergeProp(this.f,this.fnMap,other.f,other.fnMap,(x=>keyFromLoc(x.loc))),this.data.f=hits,this.data.fnMap=map,[hits,map]=mergeProp(this.b,this.branchMap,other.b,other.branchMap,keyFromLocationsProp),this.data.b=hits,this.data.branchMap=map,this.bT&&other.bT&&([hits,map]=mergeProp(this.bT,this.branchMap,other.bT,other.branchMap,keyFromLocationsProp),this.data.bT=hits)}computeSimpleTotals(property){let stats=this[property];"function"==typeof stats&&(stats=stats.call(this));const ret={total:Object.keys(stats).length,covered:Object.values(stats).filter((v=>!!v)).length,skipped:0};return ret.pct=percent(ret.covered,ret.total),ret}computeBranchTotals(property){const stats=this[property],ret={total:0,covered:0,skipped:0};return Object.values(stats).forEach((branches=>{ret.covered+=branches.filter((hits=>hits>0)).length,ret.total+=branches.length})),ret.pct=percent(ret.covered,ret.total),ret}resetHits(){const statements=this.s,functions=this.f,branches=this.b,branchesTrue=this.bT;Object.keys(statements).forEach((s=>{statements[s]=0})),Object.keys(functions).forEach((f=>{functions[f]=0})),Object.keys(branches).forEach((b=>{branches[b].fill(0)})),branchesTrue&&Object.keys(branchesTrue).forEach((bT=>{branchesTrue[bT].fill(0)}))}toSummary(){const ret={};return ret.lines=this.computeSimpleTotals("getLineCoverage"),ret.functions=this.computeSimpleTotals("f","fnMap"),ret.statements=this.computeSimpleTotals("s","statementMap"),ret.branches=this.computeBranchTotals("b"),this.bt&&(ret.branchesTrue=this.computeBranchTotals("bT")),new CoverageSummary(ret)}}dataProperties(FileCoverage,["path","statementMap","fnMap","branchMap","s","f","b","bT","all"]),module.exports={FileCoverage}},"./node_modules/istanbul-lib-coverage/lib/percent.js":module=>{module.exports=function percent(covered,total){let tmp;return total>0?(tmp=1e5*covered/total,Math.floor(tmp/10)/100):100}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);