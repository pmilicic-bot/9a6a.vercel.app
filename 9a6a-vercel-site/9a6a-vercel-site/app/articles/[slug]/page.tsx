import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '../../../lib/articles';
import ArticleMedia from '../../../components/ArticleMedia';
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}
export function generateMetadata({params}:{params:{slug:string}}){const a=articles.find(x=>x.slug===params.slug);return {title:a?`${a.title} | 9A6A`:'Članak | 9A6A',description:a?.excerpt};}
export default function ArticlePage({params}:{params:{slug:string}}){const a=articles.find(x=>x.slug===params.slug);if(!a)notFound();return <article className="inner-page wrap article-page"><div className="kicker">{a.category} / {a.date}</div><h1>{a.title}</h1><p className="lead">{a.excerpt}</p><div className="article-meta"><span>{a.location}</span><span>9A6A FIELD NOTES</span></div><ArticleMedia slug={a.slug} alt={a.title} /><div className="prose">{a.body.map((p,i)=><p key={i}>{p}</p>)}<div className="source-box"><b>Izvor i dodatni materijali</b><p>Ovaj zapis temelji se na javno dostupnim podacima iz izvorne WordPress arhive. Sažetak nije potpuni prijepis izvornog članka.</p><a href={a.source} target="_blank" rel="noreferrer">{a.sourceLabel} ↗</a></div><Link href="/archive" className="text-link">← POVRATAK U ARHIVU</Link></div></article>}
