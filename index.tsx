import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Radio, Gamepad2, LineChart, ShieldCheck, Globe2, ArrowRight, Rocket, Zap } from 'lucide-react';

const tokens={brand:{blue:'#60A5FA',blueDeep:'#2563EB',cyan:'#22D3EE'},surface:{base:'#000000',card:'#0B0F1A',stroke:'#1F2A44'}};

function GlowBackdrop(){return(<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-[80vh] w-[80vw] rounded-full blur-3xl" style={{background:`radial-gradient(closest-side, ${tokens.brand.blue}55, transparent 60%)`,filter:'blur(60px)'}}/>
  <div className="absolute inset-x-0 bottom-0 h-64" style={{background:`linear-gradient(180deg, transparent, ${tokens.surface.card})`}}/>
</div>);}

function Badge({children}:{children:React.ReactNode}){return(<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs" style={{borderColor:tokens.surface.stroke,backgroundColor:'#0B1220AA'}}>
  <Zap className="w-3.5 h-3.5"/>{children}</span>);}

function CTA({href,children}:{href:string;children:React.ReactNode}){return(<a href={href} className="group inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-medium transition hover:scale-[1.02]" style={{borderColor:tokens.surface.stroke,background:'linear-gradient(180deg, rgba(96,165,250,0.15), rgba(37,99,235,0.10))'}}>{children}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5"/></a>);}

function Card({title,icon,children}:{title:string;icon:React.ReactNode;children:React.ReactNode}){return(<div className="rounded-2xl p-5 shadow-xl ring-1 backdrop-blur-md" style={{background:'linear-gradient(180deg, rgba(11,15,26,0.85), rgba(11,15,26,0.65))',boxShadow:'0 10px 30px rgba(0,0,0,0.4)',borderColor:tokens.surface.stroke}}>
  <div className="flex items-center gap-3 text-sky-300"><div className="p-2 rounded-xl bg-black/30 ring-1 ring-white/5">{icon}</div><h3 className="text-base font-semibold tracking-tight">{title}</h3></div>
  <div className="mt-3 text-sm text-slate-300">{children}</div></div>);}

function LogoMark({size=64}:{size?:number}){const ringColor='#3DFF3D';return(<div className="relative flex items-center justify-center" style={{width:size,height:size}}>
  <motion.div aria-hidden className="absolute inset-0 rounded-full" initial={{rotate:0,opacity:0.9}} animate={{rotate:360}} transition={{repeat:Infinity,duration:14,ease:'linear'}} style={{boxShadow:`0 0 40px ${ringColor}66, inset 0 0 30px ${ringColor}33`,border:`3px solid ${ringColor}`}}/>
  <motion.div aria-hidden className="absolute inset-[-14%] rounded-full blur-2xl" initial={{opacity:0.55,scale:0.96}} animate={{opacity:[0.45,0.9,0.45],scale:[0.96,1.03,0.96]}} transition={{repeat:Infinity,duration:5.6}} style={{background:`radial-gradient(circle, rgba(96,165,250,0.45), transparent 60%)`}}/>
  <img src="/TruFi_logo_email.png" alt="TruFi logo" className="relative drop-shadow-[0_0_30px_rgba(96,165,250,0.85)]" style={{maxWidth:'84%',maxHeight:'84%',objectFit:'contain'}}/>
</div>);}

export default function Home(){const features=[
  {icon:<Mic2 className="w-6 h-6" aria-hidden/>,title:'X Spaces Hosting & Production',text:'Premium, high‑engagement Spaces with run‑of‑show, speaker wrangling, clips, and analytics.'},
  {icon:<Radio className="w-6 h-6" aria-hidden/>,title:'IMUTV Syndication (27 Countries)',text:'Direct broadcast pathways to expand reach beyond crypto Twitter.'},
  {icon:<Gamepad2 className="w-6 h-6" aria-hidden/>,title:'Game Dev Marketing — XRP Warlords',text:'Go‑to‑market, creator collabs, and live event activations for Web3 titles.'},
  {icon:<LineChart className="w-6 h-6" aria-hidden/>,title:'Top‑Tier Tokenomics',text:'Institutional‑grade design with transparent mechanics and utility (XRPL‑ready).'},
  {icon:<ShieldCheck className="w-6 h-6" aria-hidden/>,title:'TextRP Affiliation',text:'Will & Mike — product credibility, infra guidance, and partner integrations.'},
  {icon:<Globe2 className="w-6 h-6" aria-hidden/>,title:'IRL → Web2 → Web3 Transitions',text:'Onboarding brick‑and‑mortar brands with tokenization, wallets, and DAO ops.'},
];return(<main className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
  <Head><title>TruFi — Web3 Growth Engine</title><meta name="description" content="TruFi: Web3 growth engine for IRL brands and tokenized communities — XRPL-first."/></Head>
  <GlowBackdrop/>
  <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
    <div className="flex items-center gap-3"><LogoMark size={44}/><div className="hidden sm:block text-sm text-slate-300/90">DAO • Tokenization • XRPL</div></div>
    <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300"><a href="#solutions" className="hover:text-white">Solutions</a><a href="#work" className="hover:text-white">Use Cases</a><a href="#contact" className="hover:text-white">Contact</a></nav>
    <a href="https://TruFiDAO.com" className="rounded-xl px-4 py-2 text-sm font-medium ring-1 transition hover:scale-[1.02]" style={{background:'linear-gradient(180deg, rgba(96,165,250,0.12), rgba(37,99,235,0.10))',borderColor:tokens.surface.stroke}}>Visit Site</a>
  </header>
  <section className="relative z-10 mx-auto max-w-6xl px-6 pt-6 pb-10">
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-5 flex items-center justify-center"><Badge>Early Access — Coming Soon</Badge></div>
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
        <h1 className="text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-extrabold tracking-tight">Web3 Growth Engine for IRL Brands & Tokenized Communities</h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300">We design trustworthy token economies, produce culture‑driven media, and orchestrate on‑chain growth — rooted in XRPL performance and real‑world outcomes.</p>
      </motion.div>
      <div className="mt-8 flex items-center justify-center"><motion.div initial={{scale:0.96,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.8}} className="group"><LogoMark size={260}/></motion.div></div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3"><CTA href="https://TruFiDAO.com">TruFiDAO.com</CTA><CTA href="mailto:team@trufidao.com?subject=TruFi%20—%20Request%20Deck">Request the Deck</CTA></div>
      <div className="mt-8 text-sm text-slate-400 max-w-2xl mx-auto"><em>“To establish a robust foundation of trust, ensuring that progress is not compromised by the actions or reputations of others.”</em></div>
    </div>
  </section>
  <section className="relative z-10 mx-auto max-w-6xl px-6 pb-2"><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{['DAO Ops','XRPL AMMs','Media','Community'].map((k,i)=>(<div key={i} className="rounded-xl px-4 py-3 text-center ring-1" style={{borderColor:tokens.surface.stroke,background:'#0B0F1Aaa'}}><div className="text-xs uppercase tracking-wide text-slate-400">Focus</div><div className="text-lg font-semibold text-sky-300">{k}</div></div>))}</div></section>
  <section id="solutions" className="relative z-10 mx-auto max-w-6xl px-6 py-12">
    <div className="mb-8 text-center"><h2 className="text-2xl sm:text-3xl font-bold">Solutions that Ship Culture & Credibility</h2><p className="mt-2 text-slate-300 max-w-2xl mx-auto">From X Spaces production to broadcast syndication and tokenomics — TruFi is your full‑stack growth partner.</p></div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{features.map((f,idx)=>(<Card key={idx} title={f.title} icon={<div className="text-sky-300">{f.icon}</div>}><p>{f.text}</p></Card>))}</div>
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      <Card title="Event Collaborations — XMEME × DiscoCat/Ramiro" icon={<Rocket className="w-6 h-6"/>}><p>Immersive showcases that merge live culture with on‑chain membership and AMM‑driven engagement. Perfect for conferences and side‑events.</p></Card>
      <Card title="Legacy Marketing Integration (Web2 included)" icon={<Globe2 className="w-6 h-6"/>}><p>We unify traditional funnels, web, and broadcast with crypto‑native activation — so IRL brands can scale into Web3 with confidence.</p></Card>
    </div>
  </section>
  <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 pb-14">
    <div className="mb-8 text-center"><h2 className="text-2xl sm:text-3xl font-bold">Built For</h2><p className="mt-2 text-slate-300 max-w-2xl mx-auto">Brick‑and‑mortar founders, creators, and token communities ready to professionalize, tokenize, and scale.</p></div>
    <div className="grid gap-5 md:grid-cols-3">{[{title:'Brick & Mortar Brands',bullets:['Membership tokens & rewards','Point‑of‑sale + wallet onboarding','Community flywheels (events, offers)']},{title:'Creators & Media',bullets:['Syndicated shows via IMUTV','X Spaces + micro‑content','NFTs & gated experiences']},{title:'Games & Protocols',bullets:['Go‑to‑market activations','XRPL AMM analytics','Community governance (DAO)']}].map((c,i)=>(<div key={i} className="rounded-2xl p-5 ring-1" style={{borderColor:tokens.surface.stroke,background:'#0B0F1Acc'}}><div className="mb-2 text-sky-300 font-semibold">{c.title}</div><ul className="space-y-2 text-sm text-slate-300">{c.bullets.map((b,j)=>(<li key={j} className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 rounded-full bg-sky-400"/><span>{b}</span></li>))}</ul></div>))}</div>
  </section>
  <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
    <div className="grid items-center gap-6 md:grid-cols-2">
      <div><h3 className="text-xl sm:text-2xl font-bold">Let’s build on a foundation of trust.</h3><p className="mt-2 text-slate-300">Tell us your goal (launch, relaunch, fundraise, or scale). We’ll respond with an actionable plan and timeline.</p><div className="mt-5 flex flex-wrap gap-3"><CTA href="mailto:team@trufidao.com?subject=TruFi%20Inquiry">Email TruFi</CTA><CTA href="https://x.com/TruFi_DAO">Follow on X</CTA></div></div>
      <div className="rounded-2xl p-5 ring-1" style={{borderColor:tokens.surface.stroke,background:'#0B0F1Acc'}}><div className="text-sm text-slate-300"><div className="font-semibold text-sky-300">What to prepare</div><ul className="mt-2 list-disc pl-5 space-y-1"><li>IRL business summary or community goals</li><li>Current links (site, socials, storefronts)</li><li>Any brand assets (logo, colors, fonts)</li></ul></div></div>
    </div>
  </section>
  <footer className="relative z-10 border-t/0 px-6 pb-8"><div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"><div className="flex items-center gap-2"><span className="opacity-80">© {new Date().getFullYear()} TruFi. All rights reserved.</span></div><div className="flex items-center gap-4"><a href="#" className="hover:text-sky-300">Privacy</a><a href="#" className="hover:text-sky-300">Terms</a><a href="mailto:team@trufidao.com" className="hover:text-sky-300">Contact</a></div></div></footer>
</main>);}
