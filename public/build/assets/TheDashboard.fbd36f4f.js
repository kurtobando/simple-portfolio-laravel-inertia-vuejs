import{o as n,a as i,b as s,w as a,d as r,e,j as o,F as l,H as c,L as u}from"./app.d4cd9af0.js";const d=e("title",null,"Dashboard",-1),h={class:"min-h-screen bg-slate-100 grid place-items-center p-6"},p={class:"p-8 bg-white shadow flex flex-col gap-4 w-full md:w-2/3"},_=e("h1",{class:"font-bold text-5xl mb-8"},"Hello there!",-1),f=["href"],m=e("p",{class:"text-xs text-slate-400"}," Laravel Horizon provides a beautiful dashboard and code-driven configuration for your Laravel powered Redis queues. Horizon allows you to easily monitor key metrics of your queue system such as job throughput, runtime, and job failures. ",-1),b=["href"],x=e("p",{class:"text-xs text-slate-400"}," Laravel Telescope makes a wonderful companion to your local Laravel development environment. Telescope provides insight into the requests coming into your application, exceptions, log entries, database queries, queued jobs, mail, notifications, cache operations, scheduled tasks, variable dumps, and more. ",-1),g=e("p",{class:"text-xs text-slate-400"},"Sign-out your current session.",-1),k={__name:"TheDashboard",setup(v){return(t,w)=>(n(),i(l,null,[s(r(c),null,{default:a(()=>[d]),_:1}),e("div",h,[e("div",p,[_,e("a",{class:"hover:text-blue-500 transition-colors duration-200",target:"_blank",href:t.route("horizon.index")},[o(" Horizon "),m],8,f),e("a",{class:"hover:text-blue-500 transition-colors duration-200",target:"_blank",href:t.route("telescope")},[o(" Telescope "),x],8,b),s(r(u),{class:"hover:text-blue-500 transition-colors duration-200 text-left",href:t.route("sign-out"),as:"button",method:"post"},{default:a(()=>[o(" Sign-out "),g]),_:1},8,["href"])])])],64))}};export{k as default};
