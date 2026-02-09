import { advisors } from "@/content/advisors";

export function Advisors() {
  return (
    <section id="advisors" className="py-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Advisors</h2>
      <ul className="space-y-4">
        {advisors.map((advisor, index) => (
          <li key={index} className="text-gray-600">
            I was advised by{" "}
            <a
              href={advisor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              {advisor.name}
            </a>
            , who {advisor.description.toLowerCase()}.
          </li>
        ))}
      </ul>
    </section>
  );
}
