import { ExternalLink } from "lucide-react";
import { publications } from "@/content/publications";

export function Publications() {
  const conferences = publications.filter((p) => p.type === "conference");
  const workshops = publications.filter((p) => p.type === "workshop");
  const articles = publications.filter((p) => p.type === "article");

  const renderPublication = (pub: (typeof publications)[0], index: number) => {
    const authorList = pub.authors.map((author, i) => {
      const isMe = author === "Aniraj Kesavan";
      return (
        <span key={i}>
          {isMe ? <strong>{author}</strong> : author}
          {i < pub.authors.length - 1 ? ", " : ""}
        </span>
      );
    });

    return (
      <li key={index} className="mb-6">
        <div className="flex items-start gap-2">
          <div className="flex-1">
            {pub.link ? (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center gap-1"
              >
                {pub.title}
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="font-medium text-gray-900">{pub.title}</span>
            )}
            <div className="text-sm text-gray-600 mt-1">{authorList}</div>
            <div className="text-sm text-gray-500 mt-1 italic">
              {pub.venueDetail}
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <section id="publications" className="py-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Publications</h2>

      {conferences.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Conferences
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            {conferences.map(renderPublication)}
          </ol>
        </div>
      )}

      {workshops.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Workshops
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            {workshops.map(renderPublication)}
          </ol>
        </div>
      )}

      {articles.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Invited Articles
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            {articles.map(renderPublication)}
          </ol>
        </div>
      )}
    </section>
  );
}
