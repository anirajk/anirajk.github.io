---
layout: page
title: Aniraj Kesavan
---

<div style="width: 100%; display: inline-block;">
<img src="{{ site.baseurl }}/public/aniraj-kesavan.jpeg" alt="Headshot" width="25%" style="float: left;"/>
<div style="float: left; padding-left: 20px;">
<span style="font-size: 150%;">Aniraj Kesavan</span><br>
Senior Engineer<br>
Linkedin<br>
<a href="mailto:anirajkesavan@gmail.com">anirajkesavan@gmail.com</a>
</div>
</div>

<p></p>

[Experience](#workex) -
[Advisors](#advisors) -
[Publications](#publications) - 
[Resume](#cv)

Distributed Systems Enthusiast.

Building online monitoring solutions for the world's largest professional network.

I'm highly passionate about infrastructure development at scale and would love to connect about ideas and opportunities.


# <a name="workex"></a> Experience

I'm working as a Senior Engineer with the Monitoring Infrastructure team at Linkedin. 

<br>

I'm currently part of the core team that builds a massively distributed time series storage solution for storing operational metrics that ingests 10s of  millions of data points every second. 
<br>
I build and support the indexing layer that does fast lookups of billions of unique metrics (10s of billions of strings).
We build custom solutions such as compressed bitmaps and sharded caches on top of well proven relational stores such as Postgres and relatively newer sharded RDBMS solutions such as Vitess.

While at Linkedin, also rewrote a monitoring server that speaks tcp and handles health check connections from hundreds of thousands of machines and writes these data points while generating event streams and developed features for a real time external monitoring system while making it scale to multiple data centers.

<br>

Before rejoining Linkedin as a full time Engineer, I was a graduate student in University of Utah.

*I defended my thesis on February 23rd, 2017. The [thesis](https://github.com/anirajk/masters-thesis) and 
[code](https://github.com/anirajk/ibv-bench/tree/ddio) are publicly available on github.*

 My research interests are in data center storage and Distributed Systems and how modern NICs impact performance of scalable In-Memory Stores.
I'm passionate about building storage systems that leverage newer network fabrics and technologies such as Infiniband/RDMA.
I interned with Linkedin in the summer of 2016 in their Mountain View Campus. I was working for the Monitoring Infrastructure team developing auto remediation solutions for their stack. I developed an out of band monitoring solution in python and some state driven automation using saltstack.

<br>

I was working as a Research Assistant under Prof. Stutsman with the Utah Scalable Computer Systems group.
Earlier I was a Research Assistant in the [Flux Research Group](https://www.flux.utah.edu/) under Prof. Ricci.<br>
In the summer of 2016, I interned with LinkedIn.
Formerly, I was as an R&D Engineer at DreamWorks Animation ([IMDb](http://www.imdb.com/name/nm6593212/))
and before that I was working with Zynga in their ZCloud Storage Research team on [zBase](https://zynga.com/blogs/engineering/zbase-high-performance-elastic-distributed-key-value-store-2).<br>
I graduated with a bachelor's degree from [Govt. Model Engineering College](http://www.mec.ac.in/) in 2012.


# <a name="advisors"></a> Advisors
- I was advised by [Prof. Ryan Stutsman](http://rstutsman.github.io/), who built phenomenal systems
such as [RAMCloud](http://ramcloud.stanford.edu/) and [Deuteronomy](https://www.microsoft.com/en-us/research/publication/high-performance-transactions-in-deuteronomy/)
- I have also worked with [Prof. Robert Ricci](http://www.flux.utah.edu/users/ricci/), who is credited with some of the best known network research test beds such as [APT](https://www.aptlab.net/), [Cloudlab](https://www.cloudlab.us) and [Emulab](http://emulab.net/).




# <a name="publications"></a> Publications

## Conferences

1. Chinmay Kulkarni, **Aniraj Kesavan**, Tian Zhang, Robert Ricci, Ryan Stutsman
   [Rocksteady: Fast Migration for Low-latency In-memory Storage](https://dl.acm.org/authorize?N47268)
   - In *[Proceedings of The 26th ACM Symposium on Operating Systems Principles, October 28-31, 2017, Shanghai, China](https://www.sigops.org/sosp/sosp17/program.html)*

## Workshops

1. **Aniraj Kesavan**, Robert Ricci and Ryan Stutsman <br>
   [To Copy or Not to Copy: Making In-Memory Databases Fast on Modern NICs](https://www.flux.utah.edu/paper/kesavan-imdm2016)<br>
   - In *[Proceedings of ADMS-IMDM 2016](http://www.adms-conf.org/2016/kesavan_adms16.pdf)* co-located with VLDB 2016, September 2016.

## Invited Articles

1. Chinmay Kulkarni, **Aniraj Kesavan**, Robert Ricci and Ryan Stutsman <br>
   [Beyond Simple Request Processing with RAMCloud](http://sites.computer.org/debull/A17mar/issue1.htm)
   - In Special Issue on Distributed Data Management and RDMA of *IEEE Computer Society Bulletin of the Technical Committee on Data Engineering*, March 2017. Vol 40 No.1

# <a name="cv"></a> Resume

- [Resume](./public/cv-kesavan.pdf)
