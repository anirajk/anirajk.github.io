import { FileDown } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume</h2>
      <a
        href="/documents/cv-kesavan.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FileDown size={18} />
        Download Resume (PDF)
      </a>
    </section>
  );
}
