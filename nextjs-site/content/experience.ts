import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    company: "Salesforce",
    title: "Lead Member of Technical Staff · Tech Lead Manager",
    period: "2022–Present",
    description: [
      "Built and scaled Argus, the planet-scale metrics and alerting platform powering observability across Salesforce; re-architected ingestion, improving availability from 99.9% to 99.99%.",
      "Led storage tier migration from single-region to geo-distributed multi-region active-active architecture.",
      "Operating as a tech lead manager, expanded from owning core ingestion components to directing engineering delivery across storage, autoscaling observability, and out-of-band monitoring-pipeline telemetry.",
      "Owns delivery for a major release spanning hundreds of work items across roughly 20 engineers, while growing engineers toward independent ownership through mentorship.",
    ],
  },
  {
    company: "LinkedIn",
    title: "Senior Software Engineer",
    period: "2017–2022",
    description: [
      "Led metadata storage for the monitoring platform — tens of billions of time-series identifiers at tens of millions of QPS.",
      "Refactored metadata layer with Vitess and Roaring Bitmaps, significantly cutting storage overhead and query latency.",
      "Contributed to LinkedIn's in-house distributed time-series database serving A/B testing and ML feature pipelines.",
      "Built distributed health-check aggregation platform covering hundreds of thousands of servers.",
    ],
  },
  {
    company: "University of Utah",
    title: "Graduate Research Assistant",
    period: "2015–2017",
    description: [
      "Published researcher on high-performance data transfers for in-memory databases.",
      "Explored scatter-gather DMA on modern NICs for RAMCloud; work published at SOSP '17, VLDB '16, and IEEE Data Engineering Bulletin.",
    ],
  },
  {
    company: "DreamWorks Animation",
    title: "R&D Engineer, Production Pipeline",
    period: "2014–2015",
    description: [
      "Built graph-based production pipeline tooling for animated feature films.",
      "Credited R&D Engineer on three Hollywood productions.",
    ],
  },
  {
    company: "Zynga",
    title: "Associate Software Engineer",
    period: "2012–2013",
    description: [
      "Developed zBase, Zynga's internal high-performance distributed key-value store.",
    ],
  },
];
