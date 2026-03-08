import type { OngoingProject } from "@/types/project";

export const ongoingWork: OngoingProject[] = [
  {
    slug: "rubin-period-finding",
    title: "Robust Period Recovery for Rubin/LSST Variable Stars",
    currentFocus:
      "I am framing a Rubin/LSST-oriented research pipeline for periodic variables that focuses on robust period recovery under irregular survey cadence, then validating the recovered periods and classes against Gaia DR3.",
    problemStatement:
      "With Rubin sampling that is intrinsically non-uniform, the central problem is not just running Lomb-Scargle, but deciding when a recovered period is genuinely reliable and when it is likely an alias or false period.",
    tags: [
      "Rubin/LSST",
      "Period Finding",
      "Variable Stars",
      "Gaia DR3",
      "Time-Series Astronomy",
    ],
    sections: [
      {
        title: "Astrophysical Motivation",
        paragraphs: [
          "Periodic variables such as RR Lyrae, Cepheids, and eclipsing binaries matter because they anchor the distance ladder, trace Galactic structure across halo, disk, and bulge populations, and expose stellar physics through pulsation, binarity, and evolution.",
          "At a high level the task sounds simple: take a light curve, recover the period, and classify the variable. The real difficulty starts once Rubin cadence enters the picture.",
        ],
      },
      {
        title: "Why Rubin Makes Period Finding Hard",
        bullets: [
          "Sampling is not uniform, so the window function can generate strong aliases that compete with or even dominate the true period.",
          "Multi-band observations exist, but they are not always simultaneous, so naïvely combining filters can distort the periodogram while splitting them lowers signal-to-noise.",
          "Early light curves are sparse, which makes period recovery unstable until enough visits accumulate.",
          "Different variable classes create different failure modes: RR Lyrae can alias into harmonics, eclipsing binaries often collapse to P/2, and Cepheids invite physical checks through period-luminosity consistency.",
        ],
      },
      {
        title: "Research Goal",
        paragraphs: [
          "The working problem statement is: with Rubin-like irregular sampling, how do we recover periodic variables reliably, quantify alias risk explicitly, and produce a small high-quality catalog of periods plus classes that can be defended with external validation?",
        ],
      },
      {
        title: "Planned Scientific Pipeline",
        bullets: [
          "Ingest object-level light curves with time, magnitude or flux, uncertainty, and band information.",
          "Apply quality cuts for extreme errors, flagged photometry, and subtraction artifacts when relevant.",
          "Run Lomb-Scargle period search while keeping multiple candidate peaks instead of trusting only the top one.",
          "Test harmonics such as P, P/2, and 2P, then measure stability with bootstrap-style resampling or time-chunking.",
          "Check consistency across available bands and derive a confidence score from peak contrast, folded-curve scatter, and resampling stability.",
          "Extract phase-folded features such as robust amplitude, asymmetry, rise-time fraction, eclipse depth ratio, and percentile-based shape summaries.",
          "Start with rule-based or tree-based classification for RR Lyrae, Cepheids, eclipsing binaries, and an other or uncertain class.",
          "Cross-match against Gaia DR3 as a defensible validation layer for both period recovery and class-level confusion.",
        ],
      },
      {
        title: "Why This Project Matters",
        paragraphs: [
          "The scientific value is not a broker or alert-stream system. The value is a defensible object-level inference workflow that can say which periods are trustworthy, which ones are likely aliases, and how that uncertainty propagates into downstream variable-star catalogs.",
          "That makes the project a bridge between survey cadence realism, classical time-series methods, and astrophysical validation rather than a generic machine-learning classification exercise.",
        ],
      },
    ],
    status: "Ongoing",
  },
];
