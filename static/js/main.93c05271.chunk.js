(this["webpackJsonpequinox-final-react"]=this["webpackJsonpequinox-final-react"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},148:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(57),r=a.n(i),o=(a(105),a(3)),d=a(2),l=(a(106),a(11)),j=a(12),b=a.p+"static/media/Earth.75452693.png";function h(){var e=Object(l.a)(["\n\twidth: 40vw;\n\theight: auto;\n\tanimation: "," 6s ease-in-out infinite;\n\ttransition: transform 0.3s;\n\n\t@media screen and (max-width: 720px) {\n\t\twidth: 80vw;\n\t}\n"]);return h=function(){return e},e}function m(){var e=Object(l.a)(["\n\tposition: absolute;\n\ttop: 100%;\n\tleft: 0;\n\twidth: 100px;\n\ttransform: translate(-23vw, -50%);\n\t@media screen and (max-width: 720px) {\n\t\ttop: 100%;\n\t\tleft: 0vw;\n\t\ttransform: translate(35%, -50%);\n\t\ttransition: transform 1s linear;\n\t}\n"]);return m=function(){return e},e}function u(){var e=Object(l.a)(["\n\t0% {\n\t\ttransform: translate(0, -1%) rotate(","deg);\n\t}\n\t50% {\n\t\ttransform: translate(0, 1%) rotate(","deg);\n\t}\n\t100% {\n\t\ttransform: translate(0, -1%) rotate(","deg);\n\t}\n"]);return u=function(){return e},e}var O=j.a.div(m()),f=j.a.img.attrs({src:"".concat(b)})(h(),(function(e){return t=e.angle,Object(j.b)(u(),t,t,t);var t})),g=function(){var e,t=Object(c.useState)(0),a=Object(d.a)(t,2),s=a[0],n=a[1],i=function(){var t=window.pageYOffset,a=window.innerHeight,s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-a;e=Math.floor(t/s*100),n(e)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}})),[s,e]},x=function(){var e=g(),t=Object(d.a)(e,1)[0];return Object(s.jsx)(O,{children:Object(s.jsx)(f,{angle:-360*t/100})})},p=(a(109),a.p+"static/media/Equinox_Logo.64c122cb.png"),w=(a.p,a.p,a.p,a.p,a.p,a.p,a(59)),v=(a(110),function(){var e=Object(c.useState)({d:"00",h:"00",m:"00",s:"00"}),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){var e=Date.parse("April 30, 2021 21:00:00")-new Date,t=Math.floor(e/864e5),a=Math.floor(e/36e5),s=Math.floor(e/6e4),c=Math.floor(e/1e3),i=t,r=a-24*t,o=s-60*a,d=c-60*s;d<10&&(d="0"+d),o<10&&(o="0"+o),r<10&&(r="0"+r),i<10&&(i="0"+i),n((function(e){return Object(w.a)(Object(w.a)({},e),{},{d:i,m:o,s:d,h:r})}))}),1e3);return function(){clearInterval(e,1e3)}}),[]),Object(s.jsx)("div",{className:"tim",children:Object(s.jsx)("p",{className:"timer",children:"".concat(a.d," : ").concat(a.h," : ").concat(a.m," : ").concat(a.s)})})}),N=(a(111),function(e){var t=e.fadeIn,a=e.reff,n=Object(c.useState)(!1),i=Object(d.a)(n,2),r=i[0],o=i[1];return Object(s.jsx)("div",{className:"page1bg",ref:a,children:Object(s.jsxs)("div",{className:"Page1Content ".concat(t?"fadeIn":""," "),children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("img",{src:p,alt:"Equinox Logo",className:"equinoxlogo"})}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)("p",{className:"dates",children:"30 April - 2 May"}),Object(s.jsx)(v,{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"regNow",onClick:function(){return window.open("https://equinoxhack.typeform.com/to/DKsjL0Il","_blank")},children:"Register Now"}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"links",children:[Object(s.jsx)("i",{className:"fas fa-phone-alt linklogos at ",onClick:function(){o((function(e){return!e}))}}),Object(s.jsx)("i",{className:"fas fa-at linklogos at",onClick:function(){window.open("mailto: equinox.robovitics@gmail.com","_blank")}}),Object(s.jsx)("i",{className:"fab fa-instagram linklogos at ",onClick:function(){window.open("https://www.instagram.com/equinox_robovitics/","_blank")}}),Object(s.jsx)("i",{className:"fab fa-facebook-square linklogos at",onClick:function(){window.open("https://www.facebook.com/Equinox-Robovitics-110054387359678","_blank")}}),Object(s.jsx)("i",{className:"fab fa-discord linklogos at ",onClick:function(){window.open("https://discord.gg/EfV4kK3Bgu","_blank")}})]}),Object(s.jsx)("p",{className:"contact ".concat(r?"showContact":""),children:"Contact: +91 98980 56388"})]})]})})}),y=a(17),k=a.p+"static/media/Moon.be1b84a2.png";function S(){var e=Object(l.a)(["\n\tposition: absolute;\n\twidth: 50vw;\n\tleft: 100%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n"]);return S=function(){return e},e}var I=j.a.img.attrs({src:"".concat(k)})(S()),q=function(){return Object(s.jsx)(I,{})},_=a.p+"static/media/Sun.0edcf9f1.png";function C(){var e=Object(l.a)(["\n\tposition: absolute;\n\twidth: 50vw;\n\tleft: 0;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n"]);return C=function(){return e},e}var T=j.a.img.attrs({src:"".concat(_)})(C()),A=function(){return Object(s.jsx)(T,{})};function z(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function E(){var e=Object(c.useState)(z()),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){function e(){s(z())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}function J(){var e=Object(l.a)(["\n\tposition: fixed;\n\ttop: 100%;\n\twidth: ","px;\n\ttransform: translateX(-50%) rotate(-","deg);\n\tz-index: 0;\n\tbackground: #ffffff;\n\ttransition: transform 0.3s;\n\t@media screen and (max-width: 720px) {\n\t\twidth: 185vh;\n\t\ttransform: translateX(-25%) rotate(-","deg);\n\t}\n"]);return J=function(){return e},e}var H=j.a.div(J(),(function(e){return e.radius}),(function(e){return e.scroll}),(function(e){return e.scroll+60})),B=function(){var e=g(),t=Object(d.a)(e,1)[0],a=Object(c.useState)(0),n=Object(d.a)(a,2),i=n[0],r=n[1],o=E(),l=o.height,j=o.width;return Object(c.useEffect)((function(){r(2*Math.sqrt(l*l+j*j))}),[l,j]),Object(s.jsxs)(H,{scroll:3.6*t+30,radius:i,children:[Object(s.jsx)(q,{}),Object(s.jsx)(A,{})]})},R=(a(148),function(e){var t=e.fadeIn,a=e.reff;return Object(s.jsx)("div",{className:"page2bg",ref:a,children:Object(s.jsx)("div",{className:"Page2Content ".concat(t?"fadeIn":""," "),children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"ABOUT EQUINOX"}),Object(s.jsx)("div",{className:"aboutStuff",children:Object(s.jsx)("p",{className:"aboutCont",children:"Equinox'21 is a 36-hour hackathon which aims to crank the creative cogs of the participants. You have the opportunity and the resources to express your creativity, ingenuity and determination to explore anything you want. Whether you\u2019re new to hacks or a seasoned pro, there\u2019s something for everyone! We will provide resources and mentors for your aid. Also, did we mention exciting goodies and takeaways? So, what are you waiting for? Come build using hardware, software, or anything you want with other hackers!"})})]})})})}),W=a(16),P=(a(154),a.p+"static/media/Arrow.96b8725b.svg"),L=function(e){var t,a,n=e.fadeIn,i=e.reff,r=Object(c.useState)(0),l=Object(d.a)(r,2),j=l[0],b=l[1],h=E(),m=h.width;h.height;return m>720?Object(s.jsx)("div",{className:"page4bg",ref:i,children:Object(s.jsxs)("div",{className:"Page3Content ".concat(n?"fadeIn":""," "),children:[Object(s.jsx)("h1",{children:"PRIZES"}),Object(s.jsxs)("div",{className:"lllk",children:[Object(s.jsx)("img",{src:P,className:"arr",style:{transform:"rotate(180deg)"},onClick:function(){b(0)}}),Object(s.jsxs)(W.Carousel,(t={showThumbs:!1,autoPlay:!1,emulateTouch:!0,showIndicators:!1,showArrows:!1,showStatus:!1,transitionTime:200,selectedItem:j},Object(o.a)(t,"emulateTouch",!1),Object(o.a)(t,"swipeable",!1),Object(o.a)(t,"className","carous"),Object(o.a)(t,"children",[Object(s.jsxs)("div",{className:"prizes",children:[Object(s.jsx)("div",{className:"cardJ cardJ1 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})}),Object(s.jsx)("div",{className:"cardJ cardJ2 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})}),Object(s.jsx)("div",{className:"cardJ cardJ3",children:Object(s.jsx)("p",{children:"To Be Announced"})})]}),Object(s.jsxs)("div",{className:"prizes",children:[Object(s.jsx)("div",{className:"cardJ cardJ1 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})}),Object(s.jsx)("div",{className:"cardJ cardJ2 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})}),Object(s.jsx)("div",{className:"cardJ cardJ3",children:Object(s.jsx)("p",{children:"To Be Announced"})})]})]),t)),Object(s.jsx)("img",{src:P,className:"arr",onClick:function(){b(1)}})]})]})}):Object(s.jsx)("div",{className:"page4bg",ref:i,children:Object(s.jsxs)("div",{className:"Page3Content ".concat(n?"fadeIn":""," "),children:[Object(s.jsx)("h1",{children:"PRIZES"}),Object(s.jsxs)("div",{className:"lllk",children:[Object(s.jsx)("img",{src:P,className:"arr",style:{transform:"rotate(180deg)"},onClick:function(){0!=j&&b((function(e){return e-1}))}}),Object(s.jsxs)(W.Carousel,(a={showThumbs:!1,autoPlay:!1,emulateTouch:!0,showIndicators:!1,showArrows:!1,showStatus:!1,transitionTime:200,selectedItem:j},Object(o.a)(a,"emulateTouch",!1),Object(o.a)(a,"swipeable",!1),Object(o.a)(a,"className","carous"),Object(o.a)(a,"children",[Object(s.jsx)("div",{className:"prizes",children:Object(s.jsx)("div",{className:"cardJ cardJ1 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})})}),Object(s.jsx)("div",{className:"prizes",children:Object(s.jsx)("div",{className:"cardJ cardJ1 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})})}),Object(s.jsx)("div",{className:"prizes",children:Object(s.jsx)("div",{className:"cardJ cardJ2 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})})}),Object(s.jsx)("div",{className:"prizes",children:Object(s.jsx)("div",{className:"cardJ cardJ2 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})})}),Object(s.jsx)("div",{className:"prizes",children:Object(s.jsx)("div",{className:"cardJ cardJ2 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})})}),Object(s.jsx)("div",{className:"prizes",children:Object(s.jsx)("div",{className:"cardJ cardJ2 prizee",children:Object(s.jsx)("p",{children:"To Be Announced"})})})]),a)),Object(s.jsx)("img",{src:P,className:"arr",onClick:function(){j<5&&b((function(e){return e+1}))}})]})]})})},D=(a(155),function(e){var t=e.fadeIn,a=e.reff;return Object(s.jsx)("div",{className:"page4bg",ref:a,children:Object(s.jsxs)("div",{className:"Page4Content ".concat(t?"fadeIn":""," "),children:[Object(s.jsx)("h1",{children:"JUDGES"}),Object(s.jsxs)("div",{className:"judges",children:[Object(s.jsx)("div",{className:"cardJ cardJ1",children:Object(s.jsx)("p",{children:"To Be Announced"})}),Object(s.jsx)("div",{className:"cardJ cardJ2",children:Object(s.jsx)("p",{children:"To Be Announced"})}),Object(s.jsx)("div",{className:"cardJ cardJ3",children:Object(s.jsx)("p",{children:"To Be Announced"})})]})]})})}),M=(a(156),a(157),function(e){var t=e.title,a=e.body,n=e.state,i=e.updateState,r=e.updateHandler,o=e.s,l=Object(c.useState)(0),j=Object(d.a)(l,2),b=j[0],h=j[1],m=Object(c.useState)(!1),u=Object(d.a)(m,2),O=(u[0],u[1]),f=Object(c.useRef)(),g={height:n?b:"0px",borderTopLeftRadius:n?"0px":"28px",borderTopRightRadius:n?"0px":"28px"},x={borderBottomLeftRadius:n?"0px":"28px",borderBottomRightRadius:n?"0px":"28px"};return Object(s.jsxs)("div",{className:"accordion",children:[Object(s.jsx)("div",{className:"accordion__button",type:"button",style:x,onClick:function(){h(f.current.offsetHeight),r(i,!n),O((function(e){return!e}))},children:t}),Object(s.jsx)("div",{className:"accordion__drawer",style:g,children:Object(s.jsxs)("p",{className:"accordion__paragraph",ref:f,children:[a," ",o?Object(s.jsx)("a",{href:"https://static.mlh.io/docs/mlh-code-of-conduct.pdf",target:"_blank",children:"MLH Code of Conduct."}):null]})})]})}),Y=[{q:"What are the rules?",a:"We want our Hack to be fun and fair to everyone. Your project should be started from scratch and worked on only during the 36 hours, and you may only incorporate outside resources (code, graphics, sound, etc) that are freely licensed and accessible to all participants equally. Of course, maintain a positive, respectful attitude toward your fellow hackers throughout the event. We ask that all attendees follow the"},{q:"What are the perks of participating in Equinox?",a:"A plethora of knowledge, keen problems solving skills and a rich technical skillset are in the cards! Additionally, Equinox will also serve as a platform to mingle with others in the tech community. Cash prizes, schawgs and other perks are in store for the winners!"},{q:"Can I start working on the hack before the event?",a:"You can research thoroughly on your ideas before the start of the event, but we insist you start working on the projects only after the hack begins to be fair to each participant and to build on your time management too!"},{q:"How big can my team be? ",a:"You can register solo but as they say \u201cthe more the merrier\u201d, so we advise you to show up with 2-4 stars in your cluster. If you do not have a team, you can interact with the other participants over our Discord Server and form your ideal cluster of stars!"},{q:"Do I have to pay to register?",a:"Not at all! Thanks to the generosity of our sponsors, we are able to conduct events like Equinox for free."},{q:"Who all can participate?",a:"Equinox\u201921 is open to all the students who are currently enrolled in a University, or have graduated within the last 12 months."},{q:"What if I don\u2019t know how to code?",a:"In this never ending world where technologies and innovation are the future, all you need is the  will to learn, the curiosity to explore and determination to bring your idea to life. Equinox is the right platform to kick start your coding journey."},{q:"What if this is my first hack?",a:"Whether you\u2019re new to hacks or a seasoned pro, there\u2019s something for everyone! In this case, Equinox will prove to be the Big Bang to your hacking journey. You can hone your skills with creativity and zeal, and take back with you substantial knowledge and experience.  "},{q:"What can I build in the hack? ",a:"If you can think it, you can build it! Be it websites, android apps, hardware or electronics, these are just the tip of the iceberg. Express your creativity, ingenuity and determination to explore anything you want. "},{q:"Who will own my ideas and projects?",a:"We know that you put your heart and soul into your ideas and their implementations, so you will be the sole owners of your projects."},{q:"When do registrations close?",a:"You have till 25th March, 2021, 23:59 IST to register yourself for the blast off to the best 36 hours of hacking you will ever have. "},{q:"What is the venue of the hackathon?",a:"Anywhere on the face of the earth that you find comfortable, with ample charging ports, while making sure you follow social distancing norms."},{q:"404: Question not found, maybe a black hole ate it?",a:"Don\u2019t worry you stray comet, we won\u2019t let you be lost. We\u2019ve got your back! Send in your query\n        over to equinox.robovitics@gmail.com or contact +91 98980 56388 and we will be more than happy to help!"}],F=(a(158),function(e){var t,a=e.fadeIn,n=e.reff,i=E(),r=(i.width,i.height,Object(c.useState)(!1)),l=Object(d.a)(r,2),j=l[0],b=l[1],h=Object(c.useState)(!1),m=Object(d.a)(h,2),u=m[0],O=m[1],f=Object(c.useState)(!1),g=Object(d.a)(f,2),x=g[0],p=g[1],w=Object(c.useState)(!1),v=Object(d.a)(w,2),N=v[0],y=v[1],k=Object(c.useState)(!1),S=Object(d.a)(k,2),I=S[0],q=S[1],_=Object(c.useState)(!1),C=Object(d.a)(_,2),T=C[0],A=C[1],z=Object(c.useState)(!1),J=Object(d.a)(z,2),H=J[0],B=J[1],R=Object(c.useState)(!1),L=Object(d.a)(R,2),D=L[0],F=L[1],G=Object(c.useState)(!1),K=Object(d.a)(G,2),U=K[0],Q=K[1],V=Object(c.useState)(!1),X=Object(d.a)(V,2),Z=X[0],$=X[1],ee=Object(c.useState)(!1),te=Object(d.a)(ee,2),ae=te[0],se=te[1],ce=Object(c.useState)(!1),ne=Object(d.a)(ce,2),ie=ne[0],re=ne[1],oe=Object(c.useState)(!1),de=Object(d.a)(oe,2),le=de[0],je=de[1],be=Object(c.useState)(0),he=Object(d.a)(be,2),me=he[0],ue=he[1],Oe=function(e,t){b(!1),O(!1),p(!1),y(!1),q(!1),A(!1),B(!1),F(!1),Q(!1),$(!1),se(!1),re(!1),je(!1),e(t)};return Object(s.jsx)("div",{className:"page5bg",ref:n,children:Object(s.jsxs)("div",{className:"Page5Content ".concat(a?"fadeIn":""," "),children:[Object(s.jsx)("h1",{children:"FAQs"}),Object(s.jsxs)(W.Carousel,(t={showThumbs:!1,autoPlay:!1,emulateTouch:!0,showIndicators:!1,showArrows:!1,showStatus:!1,transitionTime:200,selectedItem:me},Object(o.a)(t,"emulateTouch",!1),Object(o.a)(t,"swipeable",!1),Object(o.a)(t,"className","carou"),Object(o.a)(t,"children",[Object(s.jsxs)("div",{children:[Object(s.jsx)(M,{title:Y[0].q,body:Y[0].a,state:j,updateState:b,updateHandler:Oe,s:!0}),Object(s.jsx)(M,{title:Y[1].q,body:Y[1].a,state:u,updateState:O,updateHandler:Oe}),Object(s.jsx)(M,{title:Y[2].q,body:Y[2].a,state:x,updateState:p,updateHandler:Oe})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(M,{title:Y[3].q,body:Y[3].a,state:N,updateState:y,updateHandler:Oe}),Object(s.jsx)(M,{title:Y[4].q,body:Y[4].a,state:I,updateState:q,updateHandler:Oe}),Object(s.jsx)(M,{title:Y[5].q,body:Y[5].a,state:T,updateState:A,updateHandler:Oe})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(M,{title:Y[6].q,body:Y[6].a,state:H,updateState:B,updateHandler:Oe}),Object(s.jsx)(M,{title:Y[7].q,body:Y[7].a,state:D,updateState:F,updateHandler:Oe}),Object(s.jsx)(M,{title:Y[8].q,body:Y[8].a,state:U,updateState:Q,updateHandler:Oe})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)(M,{title:Y[9].q,body:Y[9].a,state:Z,updateState:$,updateHandler:Oe}),Object(s.jsx)(M,{title:Y[10].q,body:Y[10].a,state:ae,updateState:se,updateHandler:Oe}),Object(s.jsx)(M,{title:Y[11].q,body:Y[11].a,state:ie,updateState:re,updateHandler:Oe})]}),Object(s.jsx)("div",{children:Object(s.jsx)(M,{title:Y[12].q,body:Y[12].a,state:le,updateState:je,updateHandler:Oe})})]),t)),Object(s.jsxs)("div",{className:"asssd",children:[Object(s.jsx)("img",{src:P,style:{transform:"rotate(180deg)"},className:"btn ".concat(0==me?" dis":""),onClick:function(){return ue((function(e){return 0==e?e:e-1}))}}),Object(s.jsx)("img",{src:P,className:"btn ".concat(4==me?" dis":""),onClick:function(){return ue((function(e){return 4==e?4:e+1}))}})]})]})})}),G=(a.p,a.p,a.p,a(159),a.p+"static/media/Amulya.b2dcd567.svg"),K=(a.p,a.p+"static/media/cn.968a64fc.svg"),U=(a.p,a.p,a.p,a.p+"static/media/do.04bcc6ea.svg"),Q=a.p+"static/media/fr.83e06b36.svg",V=a.p+"static/media/wo.31f890f4.svg",X=a.p+"static/media/bg.c3aa72c4.svg",Z=a.p+"static/media/task.0f1da1c0.svg",$=a.p+"static/media/sashi.963227ef.svg",ee=a.p+"static/media/bal.bfa57f3b.svg",te=a.p+"static/media/voice.da5977b6.svg",ae=a.p+"static/media/jetbrains.ec887f6f.svg",se=a.p+"static/media/GFG LOGO-1.bb33a0b1.png",ce=a.p+"static/media/logo1.ab1ef977.png",ne=a.p+"static/media/codex.fd11d75a.svg",ie=a.p+"static/media/cos.536c058d.svg",re=a.p+"static/media/vb.f128bd24.png",oe=a.p+"static/media/text-logo.73f55bd9.svg",de=a.p+"static/media/wic_long_white.9fa642a8.png",le=a.p+"static/media/GsLogo_White.4b9b7fd0.png",je=a.p+"static/media/sketch-logo-light.81ecdf9f.svg",be=a.p+"static/media/YAY_Logo1.220766ad.png",he=a.p+"static/media/iba.3aef0dd4.webp",me=a.p+"static/media/vibe.6d5f77e0.jpg",ue=a.p+"static/media/absr.251ed04a.jpg",Oe=function(e){var t,a=e.fadeIn,n=e.reff,i=Object(c.useState)(0),r=Object(d.a)(i,2),l=r[0],j=r[1],b=["","https://www.codingninjas.com/","https://www.digitalocean.com/","https://www.framer.com/","https://www.wolframalpha.com/","https://www.bugsee.com/","https://www.jetbrains.com/","https://www.voiceflow.com/","https://www.taskade.com/","https://www.sashido.io/en/","https://balsamiq.com/","https://www.geeksforgeeks.org/","https://interviewbuddy.in/","https://thecodex.me/","https://testmail.app/","","https://www.girlscript.tech/home","https://www.sketch.com/","","https://indiablockchainalliance.org/","https://vibestore.in","http://absr.in/web20/default.html","https://cosmosindia.network/","https://www.virtualbadge.io/"];return Object(s.jsx)("div",{className:"page7bg",ref:n,children:Object(s.jsxs)("div",{className:"Page7Content ".concat(a?"fadeIn":""," "),children:[Object(s.jsx)("h1",{children:"SPONSORS"}),Object(s.jsx)("div",{className:"sponsors ",children:Object(s.jsxs)(W.Carousel,(t={autoPlay:!1,showThumbs:!1,emulateTouch:!0,showIndicators:!1,showArrows:!1,showStatus:!1,transitionTime:200,selectedItem:l},Object(o.a)(t,"emulateTouch",!1),Object(o.a)(t,"swipeable",!1),Object(o.a)(t,"className","carou"),Object(o.a)(t,"children",[Object(s.jsxs)("div",{className:"line1",style:{zIndex:1e3},children:[Object(s.jsx)("a",{href:b[0],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:G,className:"imgs"})}),Object(s.jsx)("a",{href:b[1],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:K,className:"imgs"})}),Object(s.jsx)("a",{href:b[2],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:U,className:"imgs"})}),Object(s.jsx)("a",{href:b[3],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:Q,className:"imgs"})}),Object(s.jsx)("a",{href:b[4],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:V,className:"imgs"})}),Object(s.jsx)("a",{href:b[5],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:X,className:"imgs"})}),Object(s.jsx)("a",{href:b[6],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:ae,className:"imgs jb"})}),Object(s.jsx)("a",{href:b[7],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:te,className:"imgs"})}),Object(s.jsx)("a",{href:b[8],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:Z,className:"imgs"})}),Object(s.jsx)("a",{href:b[9],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:$,className:"imgs"})})]}),Object(s.jsxs)("div",{className:"line1",children:[Object(s.jsx)("a",{href:b[22],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:ie,className:"imgs"})}),Object(s.jsx)("a",{href:b[11],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:se,className:"imgs"})}),Object(s.jsx)("a",{href:b[12],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:ce,className:"imgs"})}),Object(s.jsx)("a",{href:b[13],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:ne,className:"imgs"})}),Object(s.jsx)("a",{href:b[14],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:oe,className:"imgs"})}),Object(s.jsx)("a",{href:b[15],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:de,className:"imgs jb"})}),Object(s.jsx)("a",{href:b[16],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:le,className:"imgs"})}),Object(s.jsx)("a",{href:b[17],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:je,className:"imgs"})}),Object(s.jsx)("a",{href:b[18],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:be,className:"imgs"})}),Object(s.jsx)("a",{href:b[19],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:he,className:"imgs"})}),Object(s.jsx)("a",{href:b[20],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:me,className:"imgs"})}),Object(s.jsx)("a",{href:b[10],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:ee,className:"imgs"})}),Object(s.jsx)("a",{href:b[21],className:"imgs qwsd",target:"_blank",children:Object(s.jsx)("img",{src:ue,className:"imgs"})}),Object(s.jsx)("a",{href:b[23],className:"imgs",target:"_blank",children:Object(s.jsx)("img",{src:re,className:"imgs"})})]})]),t))}),Object(s.jsxs)("div",{className:"arrows",children:[Object(s.jsx)("img",{src:P,className:"al arrow ".concat(0==l?"dis":""),onClick:function(){return j(0)}}),Object(s.jsx)("img",{src:P,className:"arrow ".concat(1==l?"dis":""),onClick:function(){return j(1)}})]})]})})},fe=function(){return Object(s.jsx)("div",{style:{position:"fixed",top:0,zIndex:"100000000"},children:Object(s.jsx)("a",{id:"mlh-trust-badge",style:{display:"block",maxWidth:"100px",minWidth:"60px",position:"fixed",right:"50px",top:"0",width:"10%",zIndex:"10000"},href:"https://mlh.io/seasons/2021/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white",target:"_blank",children:Object(s.jsx)("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg",alt:"Major League Hacking 2021 Hackathon Season",style:{width:"100%"}})})})},ge=a.p+"static/media/qwe.5bcabb48.png",xe=(a(160),function(){var e=E(),t=e.width;e.height;return Object(s.jsx)(s.Fragment,{children:t>720?Object(s.jsx)("img",{src:ge,className:"bgimg"}):null})}),pe=(a(161),a.p+"static/media/oi.88d5cb94.png"),we=a.p+"static/media/blo.370cc02f.png",ve=a.p+"static/media/ar.7db06181.png",Ne=a.p+"static/media/rename.0cf4c9ad.png",ye=a.p+"static/media/def.91013587.png",ke=a.p+"static/media/hel.52e76587.png",Se=a.p+"static/media/aids.fde948ca.png",Ie=function(e){var t=e.imgs,a=e.c;return Object(s.jsx)("div",{className:"flip-card",children:Object(s.jsxs)("div",{className:"flip-card-inner",children:[Object(s.jsx)("div",{className:"flip-card-front",children:Object(s.jsx)("img",{className:"ssas",src:t})}),Object(s.jsx)("div",{className:"flip-card-back",children:Object(s.jsxs)("p",{className:"ps",children:[a," "]})})]})})},qe=function(e){var t,a=e.fadeIn,n=e.reff,i=E(),r=i.width,l=(i.height,Object(c.useState)(0)),j=Object(d.a)(l,2),b=j[0],h=j[1];return r>1200?Object(s.jsx)("div",{className:"page6bg",ref:n,children:Object(s.jsxs)("div",{className:"Page6Content ".concat(a?"fadeIn":""," "),children:[Object(s.jsx)("h1",{children:"TRACKS"}),Object(s.jsxs)("div",{className:"organizers",children:[Object(s.jsxs)("div",{className:"cardd",children:[Object(s.jsx)(Ie,{imgs:Se,c:Object(s.jsxs)(s.Fragment,{children:["AI ",Object(s.jsx)("br",{}),"and",Object(s.jsx)("br",{})," Data Science"]})}),Object(s.jsx)(Ie,{imgs:ve,c:"AR and VR"}),Object(s.jsx)(Ie,{imgs:we,c:"Blockchain"}),Object(s.jsx)(Ie,{imgs:ye,c:"Defence"})]}),Object(s.jsxs)("div",{className:"cardd stupid",children:[Object(s.jsx)(Ie,{imgs:ke,c:"Health and Safety"}),Object(s.jsx)(Ie,{imgs:Ne,c:"Robotics"}),Object(s.jsx)(Ie,{imgs:pe,c:"Open Innovation"})]})]})]})}):Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"page6bg",ref:n,children:Object(s.jsxs)("div",{className:"Page6Content ".concat(a?"fadeIn":""," "),children:[Object(s.jsx)("h1",{children:"TRACKS"}),Object(s.jsxs)("div",{className:"organizers",children:[Object(s.jsxs)(W.Carousel,(t={autoPlay:!1,emulateTouch:!0,showIndicators:!1,showArrows:!1,showStatus:!1,transitionTime:200,selectedItem:b},Object(o.a)(t,"emulateTouch",!1),Object(o.a)(t,"showThumbs",!1),Object(o.a)(t,"swipeable",!1),Object(o.a)(t,"children",[Object(s.jsx)(Ie,{imgs:Se,c:Object(s.jsxs)(s.Fragment,{children:["AI ",Object(s.jsx)("br",{}),"and",Object(s.jsx)("br",{})," Data Science"]})}),Object(s.jsx)(Ie,{imgs:pe,c:"Open Innovation"}),Object(s.jsx)(Ie,{imgs:we,c:"Blockchain"}),Object(s.jsx)(Ie,{imgs:ve,c:"AR - VR"}),Object(s.jsx)(Ie,{imgs:Ne,c:"Robotics"}),Object(s.jsx)(Ie,{imgs:ye,c:"Defence"}),Object(s.jsx)(Ie,{imgs:ke,c:"Healthcare"})]),t)),Object(s.jsxs)("div",{className:"arrows aarrows",children:[Object(s.jsx)("img",{src:P,className:"al arrow aarrow ".concat(0==b?"dis":""),onClick:function(){0!=b&&h((function(e){return e-1}))}}),Object(s.jsx)("img",{src:P,className:"arrow aarrow".concat(7==b?" dis":""),onClick:function(){7!=b&&h((function(e){return e+1}))}})]})]})]})})})},_e=a.p+"static/media/robovitics.9d028bdc.png",Ce=function(){return Object(s.jsx)("img",{src:_e,style:{position:"fixed",bottom:"3%",right:"1%",width:"15%",zIndex:"1000000000"}})};var Te=function(){var e,t=Object(c.useState)(1),a=Object(d.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){return window.addEventListener("keydown",(function(e){[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()}),!1),function(){window.removeEventListener("keydown",(function(e){[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()}),!1)}}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(fe,{}),Object(s.jsx)(xe,{}),Object(s.jsx)(Ce,{}),Object(s.jsxs)("div",{style:{position:"fixed",width:"100vw",height:"100vh",zIndex:"0",top:0},children:[Object(s.jsx)(x,{}),Object(s.jsx)(B,{})]}),Object(s.jsx)("div",{className:"mainDiv",children:Object(s.jsxs)(y.FullPage,(e={duration:1e4,normalScrollElements:".carou",beforeChange:function(e){e.from;var t=e.to;i(t)}},Object(o.a)(e,"duration",1e3),Object(o.a)(e,"children",[Object(s.jsx)(y.Slide,{children:Object(s.jsx)(N,{fadeIn:0===n})}),Object(s.jsx)(y.Slide,{children:Object(s.jsx)(R,{fadeIn:1===n})}),Object(s.jsx)(y.Slide,{children:Object(s.jsx)(L,{fadeIn:2===n})}),Object(s.jsx)(y.Slide,{children:Object(s.jsx)(D,{fadeIn:3===n})}),Object(s.jsx)(y.Slide,{children:Object(s.jsx)(F,{fadeIn:4===n})}),Object(s.jsx)(y.Slide,{children:Object(s.jsx)(qe,{fadeIn:5===n})}),Object(s.jsx)(y.Slide,{children:Object(s.jsx)(Oe,{fadeIn:6===n})})]),e))})]})})};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(Te,{})}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.93c05271.chunk.js.map