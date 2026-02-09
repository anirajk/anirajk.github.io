export interface Experience {
  company: string;
  title: string;
  period?: string;
  description: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  venueDetail?: string;
  year: string;
  type: "conference" | "workshop" | "article";
  link?: string;
}

export interface Advisor {
  name: string;
  link: string;
  description: string;
}
