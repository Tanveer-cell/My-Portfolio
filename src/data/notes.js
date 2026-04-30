export const handwrittenNotes = [
  {
    slug: 'cell-signalling-and-immunology-ifas',
    title: 'Cell Signalling and Immunology',
    subject: 'Immunology',
    type: 'Handwritten PDF',
    description: 'Lecture notes covering cell signalling and core immunology concepts.',
    url: 'https://pub-6723464932c04c0188272a9415f94b49.r2.dev/cell-signalling-and-immunology.pdf',
  },
];

export const typedSections = [
  {
    title: 'Biology Fundamentals',
    subsections: [
      {
        title: 'Central Dogma + Simple Kinetics',
        content: `
        Information flow: \\( DNA \\rightarrow RNA \\rightarrow Protein \\).
        <br/>
        A minimal transcription/translation model:
        \\[
            \\frac{d[mRNA]}{dt} = k_{tx} - k_{deg}[mRNA]
        \\]
        \\[
            \\frac{dP}{dt} = k_{tl}[mRNA] - k_{deg}P
        \\]
        At steady state, \\( [mRNA]_{ss} = \\frac{k_{tx}}{k_{deg}} \\).
        `,
      },
      {
        title: 'Enzyme Kinetics (Michaelis-Menten)',
        content: `
        \\[
            v = \\frac{V_{max}[S]}{K_m + [S]}
        \\]
        Where \\( V_{max} = k_{cat}[E]_0 \\). A linear form:
        \\[
            \\frac{1}{v} = \\frac{K_m}{V_{max}}\\frac{1}{[S]} + \\frac{1}{V_{max}}
        \\]
        Key idea: lower \\(K_m\\) implies higher affinity.
        `,
      },
      {
        title: 'PCR Basics',
        content: `
        A rough melting temperature estimate:
        \\[
            T_m \\approx 2(A+T) + 4(G+C) \\; \\text{in } ^\\circ C
        \\]
        Exponential amplification:
        \\[
            N = N_0 \\cdot 2^n
        \\]
        where \\(n\\) is the number of cycles.
        `,
      },
    ],
  },
  {
    title: 'Chemistry for Biotech',
    subsections: [
      {
        title: 'Buffers and pH',
        content: `
        Henderson-Hasselbalch:
        \\[
            pH = pK_a + \\log_{10} \\left( \\frac{[A^-]}{[HA]} \\right)
        \\]
        Buffer capacity peaks when \\( pH \\approx pK_a \\).
        `,
      },
      {
        title: 'Thermodynamics and Equilibrium',
        content: `
        \\[
            \\Delta G = \\Delta G^\\circ + RT\\ln Q
        \\]
        At equilibrium, \\( Q = K \\) and:
        \\[
            K = e^{-\\Delta G^\\circ / RT}
        \\]
        Negative \\(\\Delta G\\) implies spontaneity.
        `,
      },
      {
        title: 'Spectroscopy (Beer-Lambert)',
        content: `
        \\[
            A = \\varepsilon \\, l \\, c
        \\]
        Where \\(A\\) is absorbance, \\(\\varepsilon\\) molar absorptivity, \\(l\\) path length, \\(c\\) concentration.
        `,
      },
    ],
  },
  {
    title: 'Physics in Biology',
    subsections: [
      {
        title: 'Diffusion',
        content: `
        Fick's law:
        \\[
            J = -D\\nabla C
        \\]
        One-dimensional mean square displacement:
        \\[
            \\langle x^2 \\rangle = 2Dt
        \\]
        `,
      },
      {
        title: 'Fluid Flow',
        content: `
        Reynolds number:
        \\[
            Re = \\frac{\\rho v L}{\\mu}
        \\]
        Low \\(Re\\) indicates laminar flow, common in microfluidics.
        `,
      },
      {
        title: 'Optics and Microscopy',
        content: `
        Diffraction-limited resolution:
        \\[
            d \\approx 0.61\\frac{\\lambda}{NA}
        \\]
        Increasing numerical aperture improves resolution.
        `,
      },
    ],
  },
];
