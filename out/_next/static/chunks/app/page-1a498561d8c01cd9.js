(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{56024:function(e,t,a){Promise.resolve().then(a.bind(a,63825)),Promise.resolve().then(a.bind(a,24394)),Promise.resolve().then(a.bind(a,23534)),Promise.resolve().then(a.bind(a,32731)),Promise.resolve().then(a.bind(a,80791)),Promise.resolve().then(a.bind(a,81447))},63825:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(57437),s=a(2265),n=a(1295),o=a(12741),l=a(82549),i=a(31541),c=a(28734),d=a(45367),m=a(76020);function x(){let[e,t]=(0,s.useState)(!1),[a,x]=(0,s.useState)({name:"",email:"",phone:"",requirements:""}),[u,h]=(0,s.useState)(null),[f,b]=(0,s.useState)(!1),[p,g]=(0,s.useState)(null),y=async e=>{e.preventDefault(),b(!0);try{let e=new FormData;e.append("name",a.name),e.append("email",a.email),e.append("phone",a.phone),e.append("requirements",a.requirements),e.append("to","info@hiilcore.com"),u&&e.append("attachment",u),(await fetch("http://localhost:5000/api/contact",{method:"POST",body:e})).ok?(g("success"),x({name:"",email:"",phone:"",requirements:""}),h(null),setTimeout(()=>{t(!1),g(null)},2e3)):g("error")}catch(e){console.error("Error submitting form:",e),g("error")}finally{b(!1)}},j=e=>{let{name:t,value:a}=e.target;x(e=>({...e,[t]:a}))};return(0,r.jsxs)("section",{id:"contact",className:"pt-20 py-16 px-6 bg-gray-50",children:[(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsxs)("div",{className:"max-w-2xl mx-auto text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:"Contact Us"}),(0,r.jsx)("p",{className:"text-xl text-gray-700",children:"Have questions or need a custom solution? Reach out to us and we'll get back to you promptly."})]}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-center gap-8 mb-8",children:[(0,r.jsxs)("a",{href:"mailto:contact@hiilcore.com",className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors",children:[(0,r.jsx)(n.Z,{className:"h-6 w-6"}),"info@hiilcore.com"]}),(0,r.jsxs)("a",{href:"tel:+97433782295",className:"flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors",children:[(0,r.jsx)(o.Z,{className:"h-6 w-6"}),"+974 (33) 782-295"]})]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{onClick:()=>t(!0),className:"bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300",children:"Send Us Your Requirements"})})]}),e&&(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:(0,r.jsxs)("div",{className:"bg-white rounded-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto",children:[(0,r.jsx)("button",{onClick:()=>t(!1),className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors","aria-label":"Close modal",children:(0,r.jsx)(l.Z,{size:24})}),(0,r.jsx)("h3",{className:"text-2xl font-bold mb-6",children:"Send Your Requirements"}),(0,r.jsxs)("form",{onSubmit:y,className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name *"}),(0,r.jsx)("input",{type:"text",id:"name",name:"name",required:!0,value:a.name,onChange:j,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow",placeholder:"Your name"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email *"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email",required:!0,value:a.email,onChange:j,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow",placeholder:"your.email@example.com"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),(0,r.jsx)("input",{type:"tel",id:"phone",name:"phone",value:a.phone,onChange:j,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow",placeholder:"+1 (234) 567-8900"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"requirements",className:"block text-sm font-medium text-gray-700 mb-1",children:"Your Requirements *"}),(0,r.jsx)("textarea",{id:"requirements",name:"requirements",required:!0,rows:4,value:a.requirements,onChange:j,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-y min-h-[100px]",placeholder:"Please describe your project or requirements..."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Attach Document (Optional)"}),u?(0,r.jsxs)("div",{className:"mt-1 flex items-center space-x-2 p-3 border border-gray-300 rounded-lg bg-gray-50",children:[(0,r.jsx)(c.Z,{className:"h-6 w-6 text-blue-500"}),(0,r.jsx)("span",{className:"flex-1 truncate text-sm",children:u.name}),(0,r.jsx)("button",{type:"button",onClick:()=>{h(null)},className:"text-red-500 hover:text-red-700 transition-colors","aria-label":"Remove file",children:(0,r.jsx)(d.Z,{className:"h-5 w-5"})})]}):(0,r.jsx)("div",{onDragOver:e=>{e.preventDefault(),e.stopPropagation()},onDrop:e=>{e.preventDefault(),e.stopPropagation();let t=e.dataTransfer.files[0];t&&t.size<=5242880?h(t):alert("Please select a file smaller than 5MB")},className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors cursor-pointer",children:(0,r.jsxs)("div",{className:"space-y-2 text-center",children:[(0,r.jsx)(i.Z,{className:"mx-auto h-12 w-12 text-gray-400"}),(0,r.jsxs)("div",{className:"flex text-sm text-gray-600",children:[(0,r.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none",children:[(0,r.jsx)("span",{children:"Upload a file"}),(0,r.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only",onChange:e=>{let t=e.target.files[0];t&&t.size<=5242880?h(t):alert("Please select a file smaller than 5MB")},accept:".pdf,.doc,.docx,.txt,.rtf"})]}),(0,r.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,r.jsx)("p",{className:"text-xs text-gray-500",children:"PDF, DOC, DOCX up to 5MB"})]})})]}),(0,r.jsx)("button",{type:"submit",disabled:f,className:"w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 \n                  ".concat(f?"bg-gray-400":"bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800","\n                  text-white font-semibold transition-all duration-300 transform hover:scale-[1.02]"),children:f?(0,r.jsx)("div",{className:"animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{size:20}),(0,r.jsx)("span",{children:"Send Message"})]})}),"success"===p&&(0,r.jsx)("div",{className:"text-green-600 text-center mt-4 font-medium",children:"Message sent successfully!"}),"error"===p&&(0,r.jsx)("div",{className:"text-red-600 text-center mt-4 font-medium",children:"Failed to send message. Please try again."})]})]})})]})}},24394:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(57437),s=a(2265),n=a(90998),o=a(3021),l=a(83423),i=a(49036),c=a(34690),d=a(52369);function m(){let e=(0,s.useRef)([]);(0,s.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("opacity-100","translate-y-0")})},{threshold:.1,rootMargin:"50px"});return e.current.forEach(e=>{e&&t.observe(e)}),()=>t.disconnect()},[]);let t=[{icon:(0,r.jsx)(n.Z,{className:"h-12 w-12 text-blue-500 mb-4"}),title:"Real-time Monitoring",description:"Access your data anytime, anywhere with our cloud-based monitoring system."},{icon:(0,r.jsx)(o.Z,{className:"h-12 w-12 text-green-500 mb-4"}),title:"Instant Alerts",description:"Receive immediate notifications when critical thresholds are reached."},{icon:(0,r.jsx)(l.Z,{className:"h-12 w-12 text-purple-500 mb-4"}),title:"Cloud Integration",description:"Seamlessly sync and store your data in the cloud for easy access."},{icon:(0,r.jsx)(i.Z,{className:"h-12 w-12 text-red-500 mb-4"}),title:"Advanced Security",description:"Enterprise-grade security to protect your sensitive IoT data."},{icon:(0,r.jsx)(c.Z,{className:"h-12 w-12 text-yellow-500 mb-4"}),title:"Remote Management",description:"Control and configure your devices from anywhere in the world."},{icon:(0,r.jsx)(d.Z,{className:"h-12 w-12 text-orange-500 mb-4"}),title:"Easy Integration",description:"Seamlessly integrate with your existing systems and workflows."}];return(0,r.jsx)("section",{id:"features",className:"pt-20 py-16 px-6 bg-gray-50",children:(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12",children:"Why Choose Our IoT Solutions?"}),(0,r.jsx)("p",{className:"text-center mb-12 text-xl text-gray-700 max-w-2xl mx-auto",children:"Our IoT solutions offer unmatched technical capabilities that empower businesses to stay ahead in a rapidly evolving technological landscape."}),(0,r.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((t,a)=>(0,r.jsxs)("div",{ref:t=>e.current[a]=t,className:"bg-white p-8 rounded-lg shadow-lg transform opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:-translate-y-1",style:{transitionDelay:"".concat(100*a,"ms")},children:[(0,r.jsx)("div",{className:"flex justify-center",children:t.icon}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-3 text-center",children:t.title}),(0,r.jsx)("p",{className:"text-gray-600 text-center",children:t.description})]},a))})]})})}},23534:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var r=a(57437),s=a(69102),n=a.n(s);a(2265);var o=a(17158);let l=e=>{let{style:t}=e;return(0,r.jsx)("div",{className:"absolute h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent animate-[moveRight_2s_linear_infinite]",style:t})};function i(){return(0,r.jsxs)("header",{className:"jsx-eb6e60d24114a3f9 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden h-[400px] flex items-center justify-center",children:[(0,r.jsx)("div",{className:"jsx-eb6e60d24114a3f9 absolute inset-0",children:Array.from({length:8}).map((e,t)=>(0,r.jsx)(l,{style:{left:"".concat(100*Math.random(),"%"),top:"".concat(100*Math.random(),"%"),width:"120px",transform:"rotate(".concat(360*Math.random(),"deg)"),animationDelay:"".concat(.5*t,"s")}},"stream-".concat(t)))}),(0,r.jsx)(n(),{id:"eb6e60d24114a3f9",children:"@-webkit-keyframes moveRight{from{-webkit-transform:translatex(-100%);transform:translatex(-100%)}to{-webkit-transform:translatex(100%);transform:translatex(100%)}}@-moz-keyframes moveRight{from{-moz-transform:translatex(-100%);transform:translatex(-100%)}to{-moz-transform:translatex(100%);transform:translatex(100%)}}@-o-keyframes moveRight{from{-o-transform:translatex(-100%);transform:translatex(-100%)}to{-o-transform:translatex(100%);transform:translatex(100%)}}@keyframes moveRight{from{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}to{-webkit-transform:translatex(100%);-moz-transform:translatex(100%);-o-transform:translatex(100%);transform:translatex(100%)}}"}),(0,r.jsx)("div",{className:"jsx-eb6e60d24114a3f9 container mx-auto px-6 py-16 relative z-10 flex items-center justify-center h-full",children:(0,r.jsxs)("div",{className:"jsx-eb6e60d24114a3f9 flex flex-col items-center text-center",children:[(0,r.jsx)("h1",{className:"jsx-eb6e60d24114a3f9 text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500",children:"Smart IoT Solutions for Modern Business"}),(0,r.jsx)("p",{className:"jsx-eb6e60d24114a3f9 text-xl mb-8 max-w-2xl animate-fade-in-delay text-gray-300",children:"Empowering businesses with cutting-edge IoT technology."}),(0,r.jsxs)("button",{onClick:()=>{var e;return null===(e=document.getElementById("contact"))||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})},className:"jsx-eb6e60d24114a3f9 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-8 py-3 rounded-full font-semibold text-white flex items-center transform hover:scale-105 transition-all shadow-lg hover:shadow-teal-500/50",children:["Get Started ",(0,r.jsx)(o.Z,{className:"ml-2"})]})]})})]})}},80791:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(57437),s=a(25829),n=a(98253),o=a(77480),l=a(25750),i=a(80882),c=a(6141);let d=[{title:"Water Level Monitoring",icon:s.Z,description:"Real-time water level monitoring for tanks, reservoirs, and water systems."},{title:"Smart Building Solutions",icon:n.Z,description:"Automate and monitor building systems including HVAC, lighting, and security."},{title:"Home Automation",icon:o.Z,description:"Transform your home with smart devices and sensors."},{title:"Staff Monitoring",icon:l.Z,description:"Track attendance, assignments, and real-time staff locations with RFID integration."},{title:"Irrigation Monitoring",icon:i.Z,description:"Monitor soil moisture, flow rates, and automate irrigation schedules across zones."},{title:"Drip Automation",icon:c.Z,description:"Smart drip irrigation with automated scheduling and moisture-based control."}],m=e=>{let{Icon:t}=e;return(0,r.jsx)(t,{className:"h-12 w-12 text-blue-500 mb-4"})};function x(){return(0,r.jsx)("section",{id:"solutions",className:"pt-20 py-16 px-6 bg-gray-50",children:(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12",children:"Our Solutions"}),(0,r.jsx)("p",{className:"text-center mb-12 text-xl text-gray-700 max-w-2xl mx-auto",children:"Discover our comprehensive IoT solutions for business automation and monitoring, featuring advanced irrigation and staff management systems."}),(0,r.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map((e,t)=>(0,r.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",children:[(0,r.jsx)("div",{className:"flex justify-center mb-4",children:(0,r.jsx)(m,{Icon:e.icon})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-3 text-center",children:e.title}),(0,r.jsx)("p",{className:"text-gray-600 text-center",children:e.description})]},t))})]})})}}},function(e){e.O(0,[113,940,540,623,971,938,744],function(){return e(e.s=56024)}),_N_E=e.O()}]);