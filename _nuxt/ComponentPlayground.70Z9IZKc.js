import{L as m,H as p,d as c,ac as i,r as u,M as e,k as l}from"./entry.LUJTMDX0.js";import{u as d}from"./asyncData.Kk8ZhXqk.js";import f from"./Ellipsis.9dpG8lZh.js";import y from"./ComponentPlaygroundData.dWVK4Ki9.js";import"./TabsHeader.XhsX4D7_.js";import"./ComponentPlaygroundProps.4YZvbit-.js";import"./ProseH4.kaodP4zy.js";import"./ProseCodeInline.EZ-BBsx9.js";import"./Badge.v4anXsqI.js";import"./MDCSlot.kIuiDVdq.js";import"./slot.-B4DDOIo.js";import"./ProseP.hN2G5wwu.js";import"./index._6r9FGFb.js";import"./ComponentPlaygroundSlots.vue.3jKO_OQ8.js";import"./ComponentPlaygroundTokens.vue.M1OvSsQd.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),E=l(h,[["__scopeId","data-v-ef657663"]]);export{E as default};
