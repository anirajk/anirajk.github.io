import Image from "next/image";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
        <Image
          src="/images/profile.jpeg"
          alt={siteConfig.name}
          width={150}
          height={150}
          className="rounded-full"
          priority
        />
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-gray-600 mb-1">{siteConfig.title}</p>
          <p className="text-gray-500 mb-4">{siteConfig.company}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="mt-8 prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          AI-Native Tech Leader. Distributed Systems Enthusiast.
        </p>
        <p className="text-gray-600 leading-relaxed">
          10+ years building high-throughput infrastructure at Salesforce and
          LinkedIn &mdash; observability platforms, time-series databases, and
          scalable data pipelines operating at tens of millions of QPS.
          Increasingly focused on AI-native engineering: harness systems, model
          telemetry pipelines, and agentic tooling for production workloads.
          I&apos;d love to connect about ideas and opportunities.
        </p>
      </div>
    </section>
  );
}
