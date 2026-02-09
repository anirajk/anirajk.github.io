import { Publication } from "@/lib/types";

export const publications: Publication[] = [
  {
    title: "Rocksteady: Fast Migration for Low-latency In-memory Storage",
    authors: [
      "Chinmay Kulkarni",
      "Aniraj Kesavan",
      "Tian Zhang",
      "Robert Ricci",
      "Ryan Stutsman",
    ],
    venue: "SOSP '17",
    venueDetail:
      "Proceedings of The 26th ACM Symposium on Operating Systems Principles, October 28-31, 2017, Shanghai, China",
    year: "2017",
    type: "conference",
    link: "https://dl.acm.org/authorize?N47268",
  },
  {
    title: "To Copy or Not to Copy: Making In-Memory Databases Fast on Modern NICs",
    authors: ["Aniraj Kesavan", "Robert Ricci", "Ryan Stutsman"],
    venue: "ADMS-IMDM '16",
    venueDetail: "Proceedings of ADMS-IMDM 2016, co-located with VLDB 2016, September 2016",
    year: "2016",
    type: "workshop",
    link: "https://www.flux.utah.edu/paper/kesavan-imdm2016",
  },
  {
    title: "Beyond Simple Request Processing with RAMCloud",
    authors: [
      "Chinmay Kulkarni",
      "Aniraj Kesavan",
      "Robert Ricci",
      "Ryan Stutsman",
    ],
    venue: "IEEE Data Engineering Bulletin",
    venueDetail:
      "Special Issue on Distributed Data Management and RDMA of IEEE Computer Society Bulletin of the Technical Committee on Data Engineering, March 2017. Vol 40 No.1",
    year: "2017",
    type: "article",
    link: "http://sites.computer.org/debull/A17mar/issue1.htm",
  },
];
