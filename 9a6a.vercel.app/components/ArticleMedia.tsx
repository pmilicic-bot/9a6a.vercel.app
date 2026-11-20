import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

export default function ArticleMedia({slug,alt}:{slug:string;alt:string}){
  const extensions = ['jpg','jpeg','png','webp'];
  const extension = extensions.find(ext => fs.existsSync(path.join(process.cwd(),'public','images',`${slug}.${ext}`)));
  if (extension) return <div className="article-photo"><Image src={`/images/${slug}.${extension}`} alt={alt} fill sizes="(max-width: 800px) 100vw, 900px" unoptimized priority /></div>;
  return <div className="article-placeholder"><span>9A6A FIELD ARCHIVE</span><b>9A6A</b><small>FOTOGRAFIJA JOŠ NIJE DODANA</small></div>;
}
