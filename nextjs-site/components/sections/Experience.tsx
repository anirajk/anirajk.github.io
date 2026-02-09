import { experiences } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-200 pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {exp.company}
              </h3>
              {exp.period && (
                <span className="text-sm text-gray-500">{exp.period}</span>
              )}
            </div>
            <p className="text-blue-600 font-medium mb-3">{exp.title}</p>
            <ul className="space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-gray-600 text-sm leading-relaxed">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
