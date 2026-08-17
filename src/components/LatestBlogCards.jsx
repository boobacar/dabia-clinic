import { useMemo } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { POSTS } from "../data/posts";

const sortByDateDesc = (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime();

export default function LatestBlogCards() {
  const latest = useMemo(() => [...POSTS].sort(sortByDateDesc).slice(0, 5), []);
  const [lead, ...rest] = latest;
  if (!lead) return null;
  return (
    <section className="journal section-pad">
      <div className="studio-container">
        <div className="journal__head"><SectionTitle title="Des repères pour décider." subtitle="Le journal DABIA" center={false} /><Link to="/blog" className="text-link">Tous les articles →</Link></div>
        <div className="journal__layout">
          <Link to={`/blog/${lead.slug}`} className="journal-lead">
            {lead.cover && <img src={lead.cover} alt={lead.title} loading="lazy" decoding="async" />}
            <div><p className="article-meta">{lead.category} · {new Date(lead.date).toLocaleDateString("fr-FR")}</p><h3>{lead.title}</h3><p>{lead.description}</p></div>
          </Link>
          <div className="journal-list">
            {rest.map((post) => <Link key={post.slug} to={`/blog/${post.slug}`}><p className="article-meta">{post.category}</p><h3>{post.title}</h3><span aria-hidden="true">→</span></Link>)}
          </div>
        </div>
      </div>
    </section>
  );
}
