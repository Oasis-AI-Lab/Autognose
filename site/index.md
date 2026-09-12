---
title: Autognose
description: An early-stage open-source project — a self-aware knowledge layer for RAG and agents. No code yet. What we believe, and what we do not know.
---

<!-- ─────────────────────────────────────────────────────────────────────
     Autognose — positioning page (single page, independent of the README)
     Scope: answers "why". The README will answer "how".

     Editing notes:
     · Every section is opened by an HTML comment labelled
       "SECTION n · NAME" (n = 1..5), so sections can be moved or rewritten
       independently.
     · The style block at the very bottom is the only non-content part.
       Delete it to get plain Markdown; nothing in the text depends on it.
     · Visual system adapted from Lemma-AI-Projects.github.io (monochrome,
       Newsreader / Inter / JetBrains Mono, paper cards, hairline rules).
     ───────────────────────────────────────────────────────────────────── -->

# Autognose

A self-aware knowledge layer for RAG and agents.

MIT · no code yet

<p class="pillrow"><a class="pill" href="https://github.com/Oasis-AI-Lab/Autognose">Repository</a><a class="pill pill--ghost" href="https://github.com/Oasis-AI-Lab/Autognose/issues">Issues</a></p>

<!-- SECTION 1 · WHAT IT IS -->

<p class="k">01</p>

## What Autognose is

Retrieval systems answer. They rarely say how well-founded the answer is. Autognose keeps that information — what a system knows about its own knowledge: where a piece came from, whether it was ever checked, whether it still holds, and how confident the system is entitled to be. Its job is to decide, not to generate: given a question and what was retrieved for it, answer, retrieve more, ask, or decline. A decision made honestly is what we mean by self-aware.

<!-- SECTION 2 · WHAT IT IS NOT -->

<p class="k">02</p>

## What Autognose is not

Projects lose contributors to wrong assumptions faster than to bad code.

- Not a RAG framework. If you already have a retriever, Autognose does not replace it, and does not care which one you use.
- Not a vector database or an index.
- Not an LLM training project.
- Not an AGI project.
- Not a claim about consciousness. Self-aware here means a system can report the state of its own knowledge, and nothing more.
- Not usable yet: no code, no benchmark, no demo, no release. This page is not a preview of one.

<!-- SECTION 3 · WHAT WE BELIEVE -->

<p class="k">03</p>

## What we believe

- **Meta-knowledge first.** Every item carries its own provenance and status; nothing is built on items that lack them.
- **Evaluated, or it does not count.** If we cannot measure whether a system declines when it should, the capability is unbuilt.
- **One narrow wedge.** Better to be obviously incomplete than vaguely broad: one measurable thing beats three plausible ones.
- **Uncertainty stated, not hidden.** Where we do not know, we say so, here and in the code.
- **Cheap enough to leave on.** If provenance costs a real fraction of a query budget, the design is wrong.

<!-- SECTION 4 · WHAT WE DO NOT KNOW YET -->

<p class="k">04</p>

## What we do not know yet

Most project pages omit this section. Nothing here is scheduled.

- **Where to cut the wedge.** We have candidates for the first thing to build and no decision. Everything downstream is provisional.
- **The field set.** Knowledge state needs explicit fields, and we do not know which. Three or ten, chunk or claim level: the answer determines the public API, so none exists yet.
- **How to measure it.** No benchmark we know of scores abstention: declining when the evidence is thin. We do not know how large a labelled set of such cases must be.
- **Whether the overhead is tolerable.** Metadata decays; nobody will maintain it by hand. We do not know how much can be derived automatically, or whether the rest is acceptable.
- **What shape it takes.** Library or service; Python is a leaning, not a decision.
- **Whether you are the audience we assume.** Open-source developers who already run a retrieval stack and recognise this problem — an assumption from reading, not from talking to you.

<!-- SECTION 5 · HOW TO ENGAGE -->

<p class="k">05</p>

## How to engage

Nothing to install. The repository is public at [Oasis-AI-Lab/Autognose](https://github.com/Oasis-AI-Lab/Autognose): principles, a boundary report, a survey of the problem. No code.

What we need now is a case, not a patch. If you have watched a retrieval system answer confidently where the evidence was thin, or could not tell whether a passage was still true, open an issue. Failure cases are what we are shortest on.

Pull requests would be premature until the schema is fixed — a statement of sequence, not a closed door. If the schema is what interests you, the boundary report sets out the options; tell us where it is wrong.

<!-- FOOTER -->

<p class="foot">Autognose 自知</p>

<style>
/* ════════════════════════════════════════════════════════════════
   AUTOGNOSE · POSITIONING PAGE
   Visual system adapted from Lemma-AI-Projects.github.io — monochrome,
   hairline rules, paper cards, film grain. Delete this block for plain MD.
   ════════════════════════════════════════════════════════════════ */
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root{
  --ink:#0A0A0B;
  --text:#2B2B30;
  --mut:#6E6E77;
  --mut-2:#9C9CA4;
  --bg:#FFFFFF;
  --surface:#F4F4F6;
  --paper-a:#FCFCFB;
  --paper-b:#F4F3F1;
  --hair:rgba(10,10,11,.10);
  --hair-2:rgba(10,10,11,.055);
  --serif:"Newsreader",Georgia,"Noto Serif SC","Source Han Serif SC","Songti SC",serif;
  --sans:"Inter","Noto Sans SC","PingFang SC","Microsoft YaHei",-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;
  --mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  --max:680px;
  --ease:cubic-bezier(.23,1,.32,1);
  --ease-out:cubic-bezier(.16,1,.3,1);
}

html{background:var(--bg);color-scheme:light;scroll-behavior:smooth;-webkit-text-size-adjust:100%}

body{
  margin:0;
  padding:0 clamp(20px,5vw,40px) clamp(72px,9vw,120px);
  background:var(--bg);color:var(--text);
  font-family:var(--sans);font-weight:400;
  font-size:17px;line-height:1.72;
  -webkit-font-smoothing:antialiased;
  overflow-x:clip;
}
body>*{max-width:var(--max);margin-left:auto;margin-right:auto}

/* hero glow (Lemma .hero::before) */
body::before{
  content:"";position:fixed;left:50%;top:-16%;width:min(1560px,128vw);aspect-ratio:16/10;
  transform:translateX(-50%);z-index:-2;pointer-events:none;
  background:radial-gradient(50% 46% at 50% 38%,
    rgba(10,10,11,.075) 0%,rgba(10,10,11,.025) 48%,rgba(10,10,11,0) 76%);
}
/* film grain (Lemma .grain::before, slope lowered for a text page) */
body::after{
  content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.042'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
}

::selection{background:rgba(10,10,11,.12);color:var(--ink)}

/* ── brand wordmark ───────────────────────────────────────────── */
h1{
  font-family:var(--serif);font-weight:300;
  font-size:clamp(46px,9vw,82px);line-height:1.02;letter-spacing:-.03em;
  color:var(--ink);-webkit-text-stroke:.6px currentColor;
  margin:clamp(64px,10vh,120px) auto clamp(16px,2.2vw,24px);
}
h1+p{
  font-family:var(--sans);font-weight:500;
  font-size:clamp(19px,2.2vw,25px);line-height:1.42;letter-spacing:-.025em;
  color:var(--ink);text-wrap:balance;
  margin:0 auto 22px;
}
h1+p+p{
  font-family:var(--mono);font-size:11.5px;font-weight:500;
  letter-spacing:.16em;text-transform:uppercase;color:var(--mut);
  margin:0 auto;
}

/* ── section kickers + headings ───────────────────────────────── */
.k{
  font-family:var(--mono);font-size:11px;font-weight:500;
  letter-spacing:.16em;text-transform:uppercase;color:var(--mut-2);
  border-top:1px solid var(--hair);
  padding-top:18px;
  margin:clamp(64px,8vw,104px) auto 16px;
}
h2{
  font-family:var(--serif);font-weight:400;
  font-size:clamp(27px,3.6vw,38px);line-height:1.18;letter-spacing:-.02em;
  color:var(--ink);text-wrap:balance;
  margin:0 auto clamp(20px,2.4vw,28px);
}

p{margin:0 auto 16px;text-wrap:pretty}

/* ── links ────────────────────────────────────────────────────── */
a{
  color:var(--ink);text-decoration:underline;
  text-decoration-thickness:1px;text-underline-offset:3px;
  transition:opacity 150ms var(--ease);
}
@media(hover:hover) and (pointer:fine){a:hover{opacity:.66}}
:is(a,button):focus-visible{outline:2px solid var(--ink);outline-offset:3px;border-radius:4px}

/* ── paper cards (Lemma .paper) ───────────────────────────────── */
ul{margin:0 auto;padding:0;list-style:none}
ul li{
  position:relative;
  background:linear-gradient(180deg,var(--paper-a),var(--paper-b));
  border-radius:16px;padding:20px 22px 20px 26px;margin:0 0 12px;
  box-shadow:0 1px 2px rgba(20,15,40,.04),0 14px 40px -26px rgba(20,15,40,.18);
  font-size:16px;line-height:1.68;
  transition:transform .45s var(--ease),box-shadow .45s var(--ease);
}
@media(hover:hover) and (pointer:fine){
  ul li:hover{transform:translateY(-3px);
    box-shadow:0 4px 12px rgba(20,15,40,.06),0 26px 48px -24px rgba(20,15,40,.22)}
}
ul li::before{
  content:"";position:absolute;left:0;top:20px;bottom:20px;width:2px;
  border-radius:2px;background:var(--ink);opacity:.16;
  transition:opacity .35s var(--ease);
}
ul li:hover::before{opacity:.55}
ul li strong{
  font-family:var(--serif);font-weight:500;font-size:18px;
  letter-spacing:-.012em;color:var(--ink);
}

/* ── buttons (Lemma .pill) ────────────────────────────────────── */
.pillrow{display:flex;gap:12px;flex-wrap:wrap;margin:30px auto 0}
.pill{
  display:inline-block;padding:11px 22px;border-radius:999px;
  background:var(--ink);color:#FFFFFF !important;
  font-family:var(--sans);font-size:15px;font-weight:500;letter-spacing:-.01em;
  text-decoration:none;
  box-shadow:0 12px 40px -18px rgba(10,10,11,.55);
  transition:opacity 180ms var(--ease),transform 180ms var(--ease);
}
@media(hover:hover) and (pointer:fine){.pill:hover{opacity:.86}}
.pill:active{transform:scale(.98)}
.pill--ghost{
  background:transparent;color:var(--ink) !important;
  border:1px solid var(--hair);box-shadow:none;
}

/* ── footer ───────────────────────────────────────────────────── */
.foot{
  font-family:var(--mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;
  color:var(--mut-2);
  border-top:1px solid var(--hair);
  padding-top:20px;
  margin:clamp(72px,9vw,112px) auto 0;
}

@media(max-width:560px){
  body{font-size:16.5px}
  ul li{padding:18px 18px 18px 22px;font-size:15.5px}
  ul li strong{font-size:17px}
}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *{transition:none !important;animation:none !important}
}
</style>
