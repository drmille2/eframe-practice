let M=0,T=`string`,N=1,U=`Object`,Y=179,K=`utf-8`,J=null,R=`number`,S=`boolean`,X=4,Q=`function`,W=16,H=Array,V=Error,O=Float64Array,P=Int32Array,L=Uint8Array,I=undefined;var u=(a=>{const b=typeof a;if(b==R||b==S||a==J){return `${a}`};if(b==T){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==J){return `Symbol`}else{return `Symbol(${b})`}};if(b==Q){const b=a.name;if(typeof b==T&&b.length>M){return `Function(${b})`}else{return `Function`}};if(H.isArray(a)){const b=a.length;let c=`[`;if(b>M){c+=u(a[M])};for(let d=N;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>N){d=c[N]}else{return toString.call(a)};if(d==U){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return U}};if(a instanceof V){return `${a.name}: ${a.message}\n${a.stack}`};return d});var w=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-W);a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd369f1b0a8a33a12(g,b,c);var d=p()[g/X+ M];var e=p()[g/X+ N];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer(W)}});var k=(a=>{if(d===b.length)b.push(b.length+ N);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var G=(async(a)=>{if(typeof a===`undefined`){a=new URL(`calculator_bg.wasm`,import.meta.url)};const b=C();if(typeof a===T||typeof Request===Q&&a instanceof Request||typeof URL===Q&&a instanceof URL){a=fetch(a)};D(b);const {instance:c,module:d}=await B(await a,b);return E(c,d)});var F=(a=>{const b=C();D(b);const c=new WebAssembly.Module(a);const d=new WebAssembly.Instance(c,b);return E(d,c)});function z(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var E=((b,c)=>{a=b.exports;G.__wbindgen_wasm_module=c;m=new O();o=new P();h=new L();a.__wbindgen_start();return a});var B=(async(a,b)=>{if(typeof Response===Q&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===Q){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var p=(()=>{if(o.byteLength===M){o=new P(a.memory.buffer)};return o});var l=(a=>a===I||a===J);var c=(a=>b[a]);var D=((a,b)=>{});var x=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hef0512487d64dba6(b,c,k(d))});var C=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==N){b.a=M;return !0};const c=!1;return c});b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===R?d:I;n()[a/8+ N]=l(e)?M:e;p()[a/X+ M]=!l(e)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===T?e:I;var g=l(f)?M:t(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=q;p()[b/X+ N]=h;p()[b/X+ M]=g});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===S?(b?N:M):2;return d});b.wbg.__wbg_instanceof_WebGl2RenderingContext_d76863c237fc08d8=(a=>{const b=c(a) instanceof WebGL2RenderingContext;return b});b.wbg.__wbg_bindVertexArray_e286fd9529ad575e=((a,b)=>{c(a).bindVertexArray(c(b))});b.wbg.__wbg_bufferData_8cc65bc0f93ec890=((a,b,d,e)=>{c(a).bufferData(b>>>M,c(d),e>>>M)});b.wbg.__wbg_createVertexArray_dc39e314b7c3ef4b=(a=>{const b=c(a).createVertexArray();return l(b)?M:k(b)});b.wbg.__wbg_texImage2D_f53e486a5b25cc32=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_7457e44155c4aeef=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_3d2a68bf40703a95=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,k)}),arguments)};b.wbg.__wbg_activeTexture_8f60f273fde6acfe=((a,b)=>{c(a).activeTexture(b>>>M)});b.wbg.__wbg_attachShader_c82f0696db7f45e4=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_6b1023547fd79019=((a,b,d)=>{c(a).bindBuffer(b>>>M,c(d))});b.wbg.__wbg_bindFramebuffer_6a49d0fb299f48b4=((a,b,d)=>{c(a).bindFramebuffer(b>>>M,c(d))});b.wbg.__wbg_bindRenderbuffer_c1bcd9fb19a5d7b3=((a,b,d)=>{c(a).bindRenderbuffer(b>>>M,c(d))});b.wbg.__wbg_bindTexture_c289a570903a4b00=((a,b,d)=>{c(a).bindTexture(b>>>M,c(d))});b.wbg.__wbg_blendEquationSeparate_0ed3fcb5009f489d=((a,b,d)=>{c(a).blendEquationSeparate(b>>>M,d>>>M)});b.wbg.__wbg_blendFuncSeparate_0fdb1b3feb0d6ffd=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>M,d>>>M,e>>>M,f>>>M)});b.wbg.__wbg_clear_6cf5a4f4859f38ce=((a,b)=>{c(a).clear(b>>>M)});b.wbg.__wbg_clearColor_296c069d39204e58=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_3c845581600f0eae=((a,b,d,e,f)=>{c(a).colorMask(b!==M,d!==M,e!==M,f!==M)});b.wbg.__wbg_compileShader_9ef519d440deb293=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_4bc066fc2872c766=(a=>{const b=c(a).createBuffer();return l(b)?M:k(b)});b.wbg.__wbg_createFramebuffer_8168177765b5f9e4=(a=>{const b=c(a).createFramebuffer();return l(b)?M:k(b)});b.wbg.__wbg_createProgram_9df7fd700d993bf3=(a=>{const b=c(a).createProgram();return l(b)?M:k(b)});b.wbg.__wbg_createRenderbuffer_e3e7b1d147e259f2=(a=>{const b=c(a).createRenderbuffer();return l(b)?M:k(b)});b.wbg.__wbg_createShader_4d302cde325e840c=((a,b)=>{const d=c(a).createShader(b>>>M);return l(d)?M:k(d)});b.wbg.__wbg_createTexture_0a0872f47dc63ec1=(a=>{const b=c(a).createTexture();return l(b)?M:k(b)});b.wbg.__wbg_deleteShader_1f5b4ebdecbfe16e=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_853ed659ddf15d35=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_b509021cc9123098=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_0120fa75c7af49e0=((a,b)=>{c(a).disable(b>>>M)});b.wbg.__wbg_disableVertexAttribArray_7b658b18b1251736=((a,b)=>{c(a).disableVertexAttribArray(b>>>M)});b.wbg.__wbg_drawElements_9659ac1285c85c9e=((a,b,d,e,f)=>{c(a).drawElements(b>>>M,d,e>>>M,f)});b.wbg.__wbg_enable_29c1ce9ede8ce5c3=((a,b)=>{c(a).enable(b>>>M)});b.wbg.__wbg_enableVertexAttribArray_6026f3706125cd38=((a,b)=>{c(a).enableVertexAttribArray(b>>>M)});b.wbg.__wbg_framebufferRenderbuffer_d2f0ca9cb6d52674=((a,b,d,e,f)=>{c(a).framebufferRenderbuffer(b>>>M,d>>>M,e>>>M,c(f))});b.wbg.__wbg_framebufferTexture2D_d2143444bda9c1c1=((a,b,d,e,f,g)=>{c(a).framebufferTexture2D(b>>>M,d>>>M,e>>>M,c(f),g)});b.wbg.__wbg_getAttribLocation_cf52cf0c00892876=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_53fc40ccdcccf995=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_f095d37c52e30092=function(){return z(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return l(e)?M:k(e)}),arguments)};b.wbg.__wbg_getParameter_6897e9c7dbe2a8e3=function(){return z(((a,b)=>{const d=c(a).getParameter(b>>>M);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_d184caa574305599=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=l(f)?M:t(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=q;p()[b/X+ N]=h;p()[b/X+ M]=g});b.wbg.__wbg_getProgramParameter_2fbb4ed8178889ac=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getShaderInfoLog_8a60728afb5f6565=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=l(f)?M:t(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=q;p()[b/X+ N]=h;p()[b/X+ M]=g});b.wbg.__wbg_getShaderParameter_5559d063d1453318=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getSupportedExtensions_e99d856a613e1a7c=(a=>{const b=c(a).getSupportedExtensions();return l(b)?M:k(b)});b.wbg.__wbg_getUniformLocation_8159488a872cf133=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return l(f)?M:k(f)});b.wbg.__wbg_linkProgram_71ffdb00aea0d6f0=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_29bd0203415c7547=((a,b,d)=>{c(a).pixelStorei(b>>>M,d)});b.wbg.__wbg_renderbufferStorage_8d35086a55cdbb4d=((a,b,d,e,f)=>{c(a).renderbufferStorage(b>>>M,d>>>M,e,f)});b.wbg.__wbg_scissor_d725cba0ef477328=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_3aaf925adea06239=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_299f562a3124ec24=((a,b,d,e)=>{c(a).texParameteri(b>>>M,d>>>M,e)});b.wbg.__wbg_uniform1i_2b86b6d18373130c=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_efda91346da61a0b=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_8ccbf4d31e1e419b=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_853a6c7f979434ca=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>M,d,e>>>M,f!==M,g,h)});b.wbg.__wbg_viewport_cc888d91dee9ae7a=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_instanceof_Window_42f092928baaee84=(a=>{const b=c(a) instanceof Window;return b});b.wbg.__wbg_document_15b2e504fb1556d6=(a=>{const b=c(a).document;return l(b)?M:k(b)});b.wbg.__wbg_location_312161fbd0cf64f0=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_9be277c167dac7dc=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_c92e987f726e49cd=function(){return z((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_f62b23191dbf3b27=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_performance_6a3706d0a3ba1118=(a=>{const b=c(a).performance;return l(b)?M:k(b)});b.wbg.__wbg_localStorage_ef2b9820e472266b=function(){return z((a=>{const b=c(a).localStorage;return l(b)?M:k(b)}),arguments)};b.wbg.__wbg_matchMedia_45f8eaad817967bb=function(){return z(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return l(e)?M:k(e)}),arguments)};b.wbg.__wbg_open_3d95d6fe17d59c4f=function(){return z(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return l(g)?M:k(g)}),arguments)};b.wbg.__wbg_requestAnimationFrame_9e5ccef32fec2b99=function(){return z(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_setTimeout_b9c1670391a219b8=function(){return z(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_addEventListener_b2c53f6c8c23bac8=function(){return z(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_clientX_e24ae62c30359a79=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_623ec4c13b3d821e=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_9e2e6f4b1ec9595c=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_ca83eebd8c6225ef=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_4f66dd3f3b7a2673=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_80d1dce690815d29=(a=>{const b=c(a).button;return b});b.wbg.__wbg_length_21f850b6e2367840=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_5b12223c251c2707=((a,b)=>{const d=c(a)[b>>>M];return l(d)?M:k(d)});b.wbg.__wbg_name_58a2fe4a4df50c8f=((b,d)=>{const e=c(d).name;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f});b.wbg.__wbg_lastModified_969093fcccb0fa19=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_userAgent_5152263a9cdf7d79=function(){return z(((b,d)=>{const e=c(d).userAgent;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_keyCode_3075e448a1211124=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_f68144e23e506e43=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_c5358f866c4f1ea6=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_f0821ad63ff4a752=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_6130fc4c73b4548c=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_1d07807397d0091b=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_4c91be0431f26101=((b,d)=>{const e=c(d).key;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f});b.wbg.__wbg_href_87729771ef419286=function(){return z(((b,d)=>{const e=c(d).href;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_origin_11dfb1e99683be9f=function(){return z(((b,d)=>{const e=c(d).origin;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_protocol_258aa38e11fab58e=function(){return z(((b,d)=>{const e=c(d).protocol;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_host_c091b965e70c86a3=function(){return z(((b,d)=>{const e=c(d).host;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_hostname_b07f630991087fd6=function(){return z(((b,d)=>{const e=c(d).hostname;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_port_9bfce0cafe9f40d1=function(){return z(((b,d)=>{const e=c(d).port;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_search_91c67a620520f3b6=function(){return z(((b,d)=>{const e=c(d).search;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_hash_af5b2bffa7584263=function(){return z(((b,d)=>{const e=c(d).hash;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f}),arguments)};b.wbg.__wbg_setProperty_e0774a610618c48e=function(){return z(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_parentElement_14138ef2ff0b9c88=(a=>{const b=c(a).parentElement;return l(b)?M:k(b)});b.wbg.__wbg_appendChild_d21bac021b5bbfde=function(){return z(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_data_603bf0b6091a0dd6=((b,d)=>{const e=c(d).data;var f=l(e)?M:t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=q;p()[b/X+ N]=g;p()[b/X+ M]=f});b.wbg.__wbg_dataTransfer_6d2ad742f3aeb90b=(a=>{const b=c(a).dataTransfer;return l(b)?M:k(b)});b.wbg.__wbg_preventDefault_b4d36c8196fbe491=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_69631ec1e1f6375b=(a=>{c(a).stopPropagation()});b.wbg.__wbg_identifier_66eed250a435f3cf=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_abd4b5925566f9d0=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_f6e405434d15c203=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_0c7da5fe80d097b7=(a=>{const b=c(a).force;return b});b.wbg.__wbg_body_5e6efc7a3c1b65f3=(a=>{const b=c(a).body;return l(b)?M:k(b)});b.wbg.__wbg_createElement_28fc3740fb11defb=function(){return z(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_927eae2597d26692=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return l(e)?M:k(e)});b.wbg.__wbg_setid_c71562a03816a125=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_9a56a21aec5e6883=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_scrollWidth_21d74b21b80709a6=(a=>{const b=c(a).scrollWidth;return b});b.wbg.__wbg_scrollHeight_eac1ece7d31fd9d2=(a=>{const b=c(a).scrollHeight;return b});b.wbg.__wbg_clientWidth_59d679e9a2f26aed=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_af8b9534d666597a=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_getBoundingClientRect_a008242eae1b5be0=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_scrollTop_3654530920b016f7=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_hidden_ac9199982db9bb89=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_5965384ab4f3fb2e=((a,b)=>{c(a).hidden=b!==M});b.wbg.__wbg_style_365767989176e8d2=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_4a3deb6fa8f8b5bb=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_e677d8f941258936=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_66ecd3281b309d08=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_blur_3d909bbeac9a005f=function(){return z((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_66bb7c767837cd51=function(){return z((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_instanceof_WebGlRenderingContext_4cb7ae1ccfe71ed9=(a=>{const b=c(a) instanceof WebGLRenderingContext;return b});b.wbg.__wbg_bufferData_b0959f6e8fa1bac9=((a,b,d,e)=>{c(a).bufferData(b>>>M,c(d),e>>>M)});b.wbg.__wbg_texImage2D_0e7ebc8be7be603a=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_1b1e9e3aac53bef3=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_activeTexture_1f86480fc893f091=((a,b)=>{c(a).activeTexture(b>>>M)});b.wbg.__wbg_attachShader_910d42315ce8a2cf=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_17e7701f3783fe14=((a,b,d)=>{c(a).bindBuffer(b>>>M,c(d))});b.wbg.__wbg_bindFramebuffer_3e96fa5dfc8d1c3e=((a,b,d)=>{c(a).bindFramebuffer(b>>>M,c(d))});b.wbg.__wbg_bindRenderbuffer_0bdbd016ec6a9432=((a,b,d)=>{c(a).bindRenderbuffer(b>>>M,c(d))});b.wbg.__wbg_bindTexture_50372861417a920b=((a,b,d)=>{c(a).bindTexture(b>>>M,c(d))});b.wbg.__wbg_blendEquationSeparate_37531a4f9d3b9d98=((a,b,d)=>{c(a).blendEquationSeparate(b>>>M,d>>>M)});b.wbg.__wbg_blendFuncSeparate_690a210dcfcf1188=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>M,d>>>M,e>>>M,f>>>M)});b.wbg.__wbg_clear_63eb7a100551635e=((a,b)=>{c(a).clear(b>>>M)});b.wbg.__wbg_clearColor_75726e31a509516b=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_13c7ea240440e44d=((a,b,d,e,f)=>{c(a).colorMask(b!==M,d!==M,e!==M,f!==M)});b.wbg.__wbg_compileShader_4ae3f58c811393d2=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_1a5c0608cbb5262d=(a=>{const b=c(a).createBuffer();return l(b)?M:k(b)});b.wbg.__wbg_createFramebuffer_8e2ec689848c3c48=(a=>{const b=c(a).createFramebuffer();return l(b)?M:k(b)});b.wbg.__wbg_createProgram_e82f0c292b92d048=(a=>{const b=c(a).createProgram();return l(b)?M:k(b)});b.wbg.__wbg_createRenderbuffer_e3408ce52f4fbbd2=(a=>{const b=c(a).createRenderbuffer();return l(b)?M:k(b)});b.wbg.__wbg_createShader_47aca7e73f341855=((a,b)=>{const d=c(a).createShader(b>>>M);return l(d)?M:k(d)});b.wbg.__wbg_createTexture_d0a3e4c23b48c479=(a=>{const b=c(a).createTexture();return l(b)?M:k(b)});b.wbg.__wbg_deleteShader_be9b7c5ca6232634=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_d92d6ef2f8d4f885=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_96d9340c6b2f2af7=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_9b9697b542fd7068=((a,b)=>{c(a).disable(b>>>M)});b.wbg.__wbg_disableVertexAttribArray_c673a9661b1a145d=((a,b)=>{c(a).disableVertexAttribArray(b>>>M)});b.wbg.__wbg_drawElements_1ce29b43195e850c=((a,b,d,e,f)=>{c(a).drawElements(b>>>M,d,e>>>M,f)});b.wbg.__wbg_enable_fd0494026c22d513=((a,b)=>{c(a).enable(b>>>M)});b.wbg.__wbg_enableVertexAttribArray_fb815e4bac96e84e=((a,b)=>{c(a).enableVertexAttribArray(b>>>M)});b.wbg.__wbg_framebufferRenderbuffer_3bae9b8f0fcbabd4=((a,b,d,e,f)=>{c(a).framebufferRenderbuffer(b>>>M,d>>>M,e>>>M,c(f))});b.wbg.__wbg_framebufferTexture2D_40d44c2959d700c8=((a,b,d,e,f,g)=>{c(a).framebufferTexture2D(b>>>M,d>>>M,e>>>M,c(f),g)});b.wbg.__wbg_getAttribLocation_806b6f7c502fbb83=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_67a4879babe0ac79=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_01b31b83ab09097b=function(){return z(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return l(e)?M:k(e)}),arguments)};b.wbg.__wbg_getParameter_cdedfa4a885bf1ce=function(){return z(((a,b)=>{const d=c(a).getParameter(b>>>M);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_877ead0372418939=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=l(f)?M:t(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=q;p()[b/X+ N]=h;p()[b/X+ M]=g});b.wbg.__wbg_getProgramParameter_b925281cc104aece=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getShaderInfoLog_41c1fac084c27bba=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=l(f)?M:t(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=q;p()[b/X+ N]=h;p()[b/X+ M]=g});b.wbg.__wbg_getShaderParameter_f4134a1d05c41379=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getSupportedExtensions_484ef27c6c785329=(a=>{const b=c(a).getSupportedExtensions();return l(b)?M:k(b)});b.wbg.__wbg_getUniformLocation_1e5bbe374221799f=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return l(f)?M:k(f)});b.wbg.__wbg_linkProgram_9583241ca29e93d4=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_0be1a401dbc2c96a=((a,b,d)=>{c(a).pixelStorei(b>>>M,d)});b.wbg.__wbg_renderbufferStorage_6af08c163ce45c57=((a,b,d,e,f)=>{c(a).renderbufferStorage(b>>>M,d>>>M,e,f)});b.wbg.__wbg_scissor_9bd60e24b06cb9fa=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_88896867d034a493=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_f6100356bad10edc=((a,b,d,e)=>{c(a).texParameteri(b>>>M,d>>>M,e)});b.wbg.__wbg_uniform1i_e81c32d408c8f0f0=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_89b5d08aadc7e99b=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_3157baa8f3032b14=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_245aa6fcda0cbb3d=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>M,d,e>>>M,f!==M,g,h)});b.wbg.__wbg_viewport_671ae296a8ebfabf=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_size_af69963903ab4d7a=(a=>{const b=c(a).size;return b});b.wbg.__wbg_arrayBuffer_d4002abd6619499e=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_type_f12b220dfe1a631f=((b,d)=>{const e=c(d).type;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f});b.wbg.__wbg_top_fb523cecbe4ed028=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_f05715d9717867bb=(a=>{const b=c(a).left;return b});b.wbg.__wbg_getItem_1db55b1eb4116c1e=function(){return z(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=l(g)?M:t(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=q;p()[b/X+ N]=i;p()[b/X+ M]=h}),arguments)};b.wbg.__wbg_setItem_1f474989a35f4c9f=function(){return z(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_touches_fc3d307b62b1da70=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_77c970d8d8be45fb=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_length_0f15a078125b39a7=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_a84dfd00133181bf=((a,b)=>{const d=c(a).item(b>>>M);return l(d)?M:k(d)});b.wbg.__wbg_get_0484f47eebd9224d=((a,b)=>{const d=c(a)[b>>>M];return l(d)?M:k(d)});b.wbg.__wbg_instanceof_HtmlInputElement_3fad42774bc62388=(a=>{const b=c(a) instanceof HTMLInputElement;return b});b.wbg.__wbg_setautofocus_b5ef206101530fce=((a,b)=>{c(a).autofocus=b!==M});b.wbg.__wbg_setsize_3117737c17d3d6b5=((a,b)=>{c(a).size=b>>>M});b.wbg.__wbg_value_30770021ca38e0db=((b,d)=>{const e=c(d).value;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f});b.wbg.__wbg_setvalue_7b7950dacc5eb607=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_width_67dae5c4bf46630b=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_7e6fdd733cb6456a=(a=>{const b=c(a).height;return b});b.wbg.__wbg_length_536cac70d26e8c2c=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_c5af70c6322c6ae5=((a,b)=>{const d=c(a)[b>>>M];return l(d)?M:k(d)});b.wbg.__wbg_bindVertexArrayOES_4a73d8002b63d507=((a,b)=>{c(a).bindVertexArrayOES(c(b))});b.wbg.__wbg_createVertexArrayOES_6213a32819761411=(a=>{const b=c(a).createVertexArrayOES();return l(b)?M:k(b)});b.wbg.__wbg_deltaX_c6424f322b7fc622=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_439cc75be784d15e=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_9a9992d84b151599=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_items_336dc1439376d26f=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_530e77eeb09ff21d=(a=>{const b=c(a).files;return l(b)?M:k(b)});b.wbg.__wbg_instanceof_HtmlCanvasElement_9f56aef8c479066b=(a=>{const b=c(a) instanceof HTMLCanvasElement;return b});b.wbg.__wbg_width_54a66e74169bb513=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_79da97dd2684789d=((a,b)=>{c(a).width=b>>>M});b.wbg.__wbg_height_d4607377aede83c6=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_d1ec9b4faad45a42=((a,b)=>{c(a).height=b>>>M});b.wbg.__wbg_getContext_efe7e95b72348104=function(){return z(((a,b,d)=>{const e=c(a).getContext(j(b,d));return l(e)?M:k(e)}),arguments)};b.wbg.__wbg_matches_1681a8adbec212dc=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_now_c2563c77371d3ec4=(a=>{const b=c(a).now();return b});b.wbg.__wbg_randomFillSync_91e2b39becca6147=function(){return z(((a,b,d)=>{c(a).randomFillSync(A(b,d))}),arguments)};b.wbg.__wbg_getRandomValues_b14734aa289bc356=function(){return z(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbg_process_e56fd54cf6319b6c=(a=>{const b=c(a).process;return k(b)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==J;return d});b.wbg.__wbg_versions_77e21455908dad33=(a=>{const b=c(a).versions;return k(b)});b.wbg.__wbg_node_0dd25d832e4785d5=(a=>{const b=c(a).node;return k(b)});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===T;return b});b.wbg.__wbg_crypto_b95d7173266618a9=(a=>{const b=c(a).crypto;return k(b)});b.wbg.__wbg_msCrypto_5a86d77a66230f81=(a=>{const b=c(a).msCrypto;return k(b)});b.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd=(()=>{const a=module;return k(a)});b.wbg.__wbg_require_0db1598d9ccecb30=function(){return z(((a,b,d)=>{const e=c(a).require(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_get_ad41fee29b7e0f53=((a,b)=>{const d=c(a)[b>>>M];return k(d)});b.wbg.__wbg_length_a73bfd4c96dd97ef=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_971e9a5abe185139=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_33d7bcddbbfa394a=function(){return z(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_self_fd00a1ef86d1b2ed=function(){return z((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_6f6e346d8bbd61d7=function(){return z((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_3348936ac49df00a=function(){return z((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_67175caf56f55ca9=function(){return z((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===I;return b});b.wbg.__wbg_resolve_0107b3a501450ba0=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_18da6e5453572fc8=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_e5489f796341454b=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_34f5ec9f8a838ba0=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_b2ede4e61e350cde=((a,b,d)=>{const e=new Int8Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_cfe444c6bbe4f43a=((a,b,d)=>{const e=new Int16Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_a3bd1d840b8dadb5=((a,b,d)=>{const e=new P(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_88fdad741db1b182=((a,b,d)=>{const e=new L(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_new_cda198d9dbc6d7ea=(a=>{const b=new L(c(a));return k(b)});b.wbg.__wbg_set_1a930cfcda1a8067=((a,b,d)=>{c(a).set(c(b),d>>>M)});b.wbg.__wbg_length_51f19f73d6d9eff3=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithbyteoffsetandlength_fcb76b931813ca6b=((a,b,d)=>{const e=new Uint16Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_08cdc2f5a8faedef=((a,b,d)=>{const e=new Uint32Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_fb619fd76ea1f132=((a,b,d)=>{const e=new Float32Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithlength_66e5530e7079ea1b=(a=>{const b=new L(a>>>M);return k(b)});b.wbg.__wbg_subarray_270ff8dd5582c1ac=((a,b,d)=>{const e=c(a).subarray(b>>>M,d>>>M);return k(e)});b.wbg.__wbg_log_02e20a3c32305fb7=((b,c)=>{try{console.log(j(b,c))}finally{a.__wbindgen_free(b,c)}});b.wbg.__wbg_log_5c7513aa8c164502=((b,c,d,e,f,g,h,i)=>{try{console.log(j(b,c),j(d,e),j(f,g),j(h,i))}finally{a.__wbindgen_free(b,c)}});b.wbg.__wbg_mark_abc7631bdced64f0=((a,b)=>{performance.mark(j(a,b))});b.wbg.__wbg_measure_c528ff64085b7146=function(){return z(((b,c,d,e)=>{try{performance.measure(j(b,c),j(d,e))}finally{a.__wbindgen_free(b,c);a.__wbindgen_free(d,e)}}),arguments)};b.wbg.__wbg_new_693216e109162396=(()=>{const a=new V();return k(a)});b.wbg.__wbg_stack_0ddaca5d1abfb52f=((b,d)=>{const e=c(d).stack;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f});b.wbg.__wbg_error_09919627ac0992f5=((b,c)=>{try{console.error(j(b,c))}finally{a.__wbindgen_free(b,c)}});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;p()[b/X+ N]=g;p()[b/X+ M]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new V(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper763=((a,b,c)=>{const d=v(a,b,Y,w);return k(d)});b.wbg.__wbindgen_closure_wrapper765=((a,b,c)=>{const d=v(a,b,Y,x);return k(d)});b.wbg.__wbindgen_closure_wrapper832=((a,b,c)=>{const d=v(a,b,209,y);return k(d)});return b});var n=(()=>{if(m.byteLength===M){m=new O(a.memory.buffer)};return m});var A=((a,b)=>i().subarray(a/N,a/N+ b));var e=(a=>{if(a<36)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:N,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=M;try{return e(c,f.b,...b)}finally{if(--f.cnt===M){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var t=((a,b,c)=>{if(c===I){const c=r.encode(a);const d=b(c.length);i().subarray(d,d+ c.length).set(c);q=c.length;return d};let d=a.length;let e=b(d);const f=i();let g=M;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==M){a=a.slice(g)};e=c(e,d,d=g+ a.length*3);const b=i().subarray(e+ g,e+ d);const f=s(a,b);g+=f.written};q=g;return e});var i=(()=>{if(h.byteLength===M){h=new L(a.memory.buffer)};return h});var j=((a,b)=>g.decode(i().subarray(a,a+ b)));var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hcb837c4cad3304b0(b,c,k(d))});let a;const b=new H(32).fill(I);b.push(I,J,!0,!1);let d=b.length;const g=new TextDecoder(K,{ignoreBOM:!0,fatal:!0});g.decode();let h=new L();let m=new O();let o=new P();let q=M;const r=new TextEncoder(K);const s=typeof r.encodeInto===Q?((a,b)=>r.encodeInto(a,b)):((a,b)=>{const c=r.encode(a);b.set(c);return {read:a.length,written:c.length}});export default G;export{F as initSync}