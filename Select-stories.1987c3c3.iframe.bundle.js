"use strict";(self.webpackChunknhm_ui=self.webpackChunknhm_ui||[]).push([[779],{"./stories/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src_Select__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Select/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src_Select__WEBPACK_IMPORTED_MODULE_1__.P,title:"Components/Forms/Select",argTypes:{}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_Select__WEBPACK_IMPORTED_MODULE_1__.P,{"data-testId":"SelectField-id",...args});Default.displayName="Default",Default.args={options:[{name:"Durward Reynolds",unavailable:!1},{name:"Kenton Towne",unavailable:!1},{name:"Therese Wunsch",unavailable:!1},{name:"Benedict Kessler",unavailable:!0},{name:"Katelyn Rohan",unavailable:!1}],defaultValue:"Select"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <Select data-testId="SelectField-id" {...args} />',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Select/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/components/listbox/listbox.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Select=({options,defaultValue,onSelect})=>{const[selectedOption,setSelectedOption]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue?{name:defaultValue}:options[0]),returnSwitch=open=>open?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20px",viewBox:"0 0 24 24",width:"20px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20px",viewBox:"0 0 24 24",width:"20px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"})]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.R,{value:selectedOption.name,onChange:value=>{console.log(value),value&&setSelectedOption({name:value}),onSelect&&onSelect()},children:({open})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.R.Button,{className:"flex items-center justify-between w-full p-4 font-bold bg-white border-2 border-black border-solid",children:[selectedOption.name,returnSwitch(open)]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.R.Options,{className:"py-2 bg-white border-2 border-t-0 border-black",children:options.map(((option,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.R.Option,{value:option.name,disabled:option.unavailable,children:({active,selected})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("px-4 py-3",option.unavailable?"text-gray-300 cursor-not-allowed":"cursor-pointer",active&&"bg-gray-200",selected&&"font-bold"),children:option.name})},i)))})]})})})};Select.displayName="Select";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Select/index.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/Select/index.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}}}]);