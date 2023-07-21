"use strict";(self.webpackChunknhm_ui=self.webpackChunknhm_ui||[]).push([[868],{"./stories/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Button=__webpack_require__("./src/Button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Form=({...props})=>{const[formData,setFormData]=(0,react.useState)({}),onChange=event=>{const{name,value}=event.target;setFormData((prevFormData=>({...prevFormData,[name]:value}))),console.log(formData)};return(0,jsx_runtime.jsxs)("form",{className:(0,clsx_m.Z)("flex flex-col gap-6 w-full"),onSubmit:props.onSubmit?props.onSubmit:event=>(event.preventDefault(),!1),action:props.action,method:props.method,children:[react.Children.map(props.children,((child,i)=>react.cloneElement(child,{...child.props,i,onChange}))),(0,jsx_runtime.jsx)(Button.z,{classes:"mt-4",children:(0,jsx_runtime.jsx)("input",{type:"submit",className:"w-fit"})})]})};Form.displayName="Form";try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((event: FormEvent<HTMLFormElement>) => void)"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"string"}},method:{defaultValue:null,description:"",name:"method",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Form/index.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/Form/index.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}var RadioGroup=__webpack_require__("./src/RadioGroup/index.tsx"),Radio=__webpack_require__("./src/Radio/index.tsx"),Input=__webpack_require__("./src/Input/index.tsx"),InputGroup=__webpack_require__("./src/InputGroup/index.tsx"),Checkbox=__webpack_require__("./src/Checkbox/index.tsx"),CheckboxGroup=__webpack_require__("./src/CheckboxGroup/index.tsx"),TextArea=__webpack_require__("./src/TextArea/index.tsx");const Form_stories={component:Form,title:"Components/Forms/Form",argTypes:{}},Default=args=>(0,jsx_runtime.jsxs)(Form,{"data-testId":"RadioField-id",...args,children:[(0,jsx_runtime.jsxs)(InputGroup.B,{children:[(0,jsx_runtime.jsx)(Input.I,{type:"text",width:"1/2",label:"First Name",name:"firstName"}),(0,jsx_runtime.jsx)(Input.I,{type:"text",width:"1/2",label:"Last Name",name:"lastName"}),(0,jsx_runtime.jsx)(Input.I,{type:"password",width:"1/3",label:"Password",name:"password",caption:"Passwords should be at least 14 characters long"}),(0,jsx_runtime.jsx)(Input.I,{type:"email",width:"2/3",label:"Email",name:"email"}),(0,jsx_runtime.jsx)(TextArea.K,{label:"Text Area",name:"textArea",width:"1/2"})]}),(0,jsx_runtime.jsxs)(RadioGroup.E,{title:"Radio Group:",children:[(0,jsx_runtime.jsx)(Radio.Y,{label:"Radio 1",name:"example"}),(0,jsx_runtime.jsx)(Radio.Y,{label:"Radio 2",name:"example"}),(0,jsx_runtime.jsx)(Radio.Y,{label:"Radio 3",name:"example"})]}),(0,jsx_runtime.jsxs)(CheckboxGroup.c,{title:"Checkbox Group:",children:[(0,jsx_runtime.jsx)(Checkbox.X,{label:"Option 1",name:"1"}),(0,jsx_runtime.jsx)(Checkbox.X,{label:"Option 2",name:"2"}),(0,jsx_runtime.jsx)(Checkbox.X,{label:"Option 3",name:"3"})]})]});Default.displayName="Default",Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => <Form data-testId="RadioField-id" {...args}>\n    <InputGroup>\n      <Input type="text" width="1/2" label="First Name" name="firstName" />\n      <Input type="text" width="1/2" label="Last Name" name="lastName" />\n      <Input type="password" width="1/3" label="Password" name="password" caption="Passwords should be at least 14 characters long" />\n      <Input type="email" width="2/3" label="Email" name="email" />\n      <TextArea label="Text Area" name="textArea" width="1/2" />\n    </InputGroup>\n    <RadioGroup title="Radio Group:">\n      <Radio label="Radio 1" name="example" />\n      <Radio label="Radio 2" name="example" />\n      <Radio label="Radio 3" name="example" />\n    </RadioGroup>\n    <CheckboxGroup title="Checkbox Group:">\n      <Checkbox label="Option 1" name="1" />\n      <Checkbox label="Option 2" name="2" />\n      <Checkbox label="Option 3" name="3" />\n    </CheckboxGroup>\n  </Form>',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/tailwind.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Button=({children,...props})=>{const variantClasses="nhm"===props.variant?"outline-nhm text-nhm hover:bg-nhm hover:text-white bg-white":"lbtp"===props.variant?"outline-lbtp text-lbtp hover:bg-lbtp hover:text-white bg-white":"default"===props.variant?"outline-black text-black hover:bg-black hover:text-white":"outline-black text-outline-black hover:bg-black hover:text-white",disabledClasses=props.disabled?"opacity-50 cursor-not-allowed":"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("outline-2 outline px-6 py-3 transition-colors font-bold w-fit",variantClasses,disabledClasses,props.classes),onClick:props.onClick,children})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"nhm"'},{value:'"lbtp"'},{value:'"default"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_Selector__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Selector/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=({...props})=>{const classes=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("rounded-none bg-white before:text-2xl before:items-center checked:bg-black \n    before:justify-center checked:bg-black before:text-white before:flex");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Selector__WEBPACK_IMPORTED_MODULE_1__.Q,{type:"checkbox",label:props.label,name:props.name,classes})};Checkbox.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/CheckboxGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>CheckboxGroup});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxGroup=({...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col gap-2",onChange:props.onChange,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"font-bold",children:props.title}),props.children]});CheckboxGroup.displayName="CheckboxGroup";try{CheckboxGroup.displayName="CheckboxGroup",CheckboxGroup.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/CheckboxGroup/index.tsx#CheckboxGroup"]={docgenInfo:CheckboxGroup.__docgenInfo,name:"CheckboxGroup",path:"src/CheckboxGroup/index.tsx#CheckboxGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/tailwind.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const Input=({...props})=>{const requiredClasses=props.required?"text-red-600":"",disabledClasses=props.disabled?"opacity-50 cursor-not-allowed":"",widthClasses="full"===props.width?"w-full":"1/3"===props.width?"w-full sm:basis-[calc(33.3%-.67rem)]":"1/2"===props.width?"w-full sm:basis-[calc(50%-.5rem)]":"2/3"===props.width?"w-full sm:basis-[calc(66.7%-.33rem)]":"w-full";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("flex flex-col gap-1",widthClasses),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("font-bold text-sm",requiredClasses,disabledClasses),htmlFor:props.name,children:props.label+(props.required?" *":"")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:props.type,id:props.name,name:props.name,onChange:props.onChange,required:props.required,disabled:props.disabled,placeholder:props.placeholder,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(props.classes,!props.disabled&&"focus:border-black hover:border-black font-semibold","border-2  bg-white focus:outline-0 transition-colors border-gray-300 px-4 py-4 text-[#333333] lining-nums",disabledClasses)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"ml-1 text-sm",children:props.caption})]})};Input.displayName="Input";try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"1/2"'},{value:'"2/3"'},{value:'"full"'},{value:'"1/3"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Input/index.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/Input/index.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/InputGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>InputGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),istanbul_lib_coverage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/istanbul-lib-coverage/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputGroup=({...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("flex flex-row flex-wrap gap-4","w-full",istanbul_lib_coverage__WEBPACK_IMPORTED_MODULE_1__.classes),onChange:props.onChange,children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(props.children,((child,i)=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{...child.props,i,onChange:props.onChange})))});InputGroup.displayName="InputGroup";try{InputGroup.displayName="InputGroup",InputGroup.__docgenInfo={description:"",displayName:"InputGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/InputGroup/index.tsx#InputGroup"]={docgenInfo:InputGroup.__docgenInfo,name:"InputGroup",path:"src/InputGroup/index.tsx#InputGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/Radio/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_Selector__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Selector/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Radio=({...props})=>{const classes=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("before:rounded-full before:content-[''] rounded-full");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Selector__WEBPACK_IMPORTED_MODULE_1__.Q,{type:"radio",label:props.label,name:props.name,classes})};Radio.displayName="Radio";try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Radio/index.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/Radio/index.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/RadioGroup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioGroup=({...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex flex-col gap-2",onChange:props.onChange,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"font-bold",children:props.title}),props.children]});RadioGroup.displayName="RadioGroup";try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/RadioGroup/index.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/RadioGroup/index.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/Selector/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Selector});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Selector=({...props})=>{const beforeStyles=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("before:w-5 before:h-5 before:scale-50 before:transform-opacity","before:opacity-0 before:checked:opacity-100 before:transition-transform","before:checked:scale-100 before:bg-black");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex items-center gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:props.type,value:props.label,name:props.name,className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("w-8 h-8 text-black border-2 border-gray-300 checked:border-black \n         flex items-center justify-center hover:border-black transition-colors",beforeStyles,props.classes)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{className:"font-semibold",children:props.label})]})};Selector.displayName="Selector";try{Selector.displayName="Selector",Selector.__docgenInfo={description:"",displayName:"Selector",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Selector/index.tsx#Selector"]={docgenInfo:Selector.__docgenInfo,name:"Selector",path:"src/Selector/index.tsx#Selector"})}catch(__react_docgen_typescript_loader_error){}},"./src/TextArea/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TextArea});__webpack_require__("./node_modules/react/index.js");var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextArea=({...props})=>{const requiredClasses=props.required?"text-red-600":"",disabledClasses=props.disabled?"opacity-50 cursor-not-allowed":"",widthClasses="full"===props.width?"w-full":"1/2"===props.width?"w-full sm:basis-[calc(50%-.5rem)]":"2/3"===props.width?"w-full sm:basis-[calc(66.7%-.33rem)]":"w-full";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("flex flex-col gap-1",widthClasses),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)("font-bold text-sm",requiredClasses,disabledClasses),htmlFor:props.name,children:props.label+(props.required?" *":"")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.Z)(props.classes,!props.disabled&&"focus:border-black hover:border-black font-semibold w-full","border-2  bg-white focus:outline-0 transition-colors border-gray-300 px-4 py-4 text-[#333333] lining-nums",disabledClasses),id:props.name,name:props.name,onChange:props.onChange,required:props.required,placeholder:props.placeholder,disabled:props.disabled})]})};TextArea.displayName="TextArea";try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"1/2"'},{value:'"2/3"'},{value:'"full"'}]}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TextArea/index.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/TextArea/index.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}}}]);