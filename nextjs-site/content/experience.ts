import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    company: "Salesforce",
    title: "Lead Member of Technical Staff",
    description: [
      "Working within the Argus team that powers alerting and monitoring at Salesforce.",
    ],
  },
  {
    company: "LinkedIn",
    title: "Senior Software Engineer",
    description: [
      "Part of the core team that built a massively distributed time series storage solution for storing operational metrics that ingests 10s of millions of data points every second.",
      "Developed the indexing layer that does fast lookups of billions of unique metrics (10s of billions of strings).",
      "Rewrote a monitoring server that speaks TCP and handles health check connections from hundreds of thousands of machines while generating event streams.",
      "Developed features for a real-time external monitoring system while making it scale to multiple data centers.",
    ],
  },
  {
    company: "University of Utah",
    title: "Graduate Research Assistant",
    description: [
      "Defended thesis on February 23rd, 2017. Research focused on data center storage and Distributed Systems, specifically how modern NICs impact performance of scalable In-Memory Stores.",
      "Worked on building storage systems that leverage newer network fabrics and technologies such as Infiniband/RDMA.",
      "Research Assistant under Prof. Ryan Stutsman with the Utah Scalable Computer Systems group.",
      "Previously Research Assistant in the Flux Research Group under Prof. Robert Ricci.",
    ],
  },
  {
    company: "LinkedIn (Internship)",
    title: "Software Engineering Intern",
    period: "Summer 2016",
    description: [
      "Worked for the Monitoring Infrastructure team developing auto remediation solutions.",
      "Developed an out-of-band monitoring solution in Python and state-driven automation using SaltStack.",
    ],
  },
  {
    company: "DreamWorks Animation",
    title: "R&D Engineer",
    description: [
      "Worked on render farm and studio infrastructure systems.",
    ],
  },
  {
    company: "Zynga",
    title: "Storage Research Engineer",
    description: [
      "Worked in the ZCloud Storage Research team on zBase, a high-performance elastic distributed key-value store.",
    ],
  },
];
