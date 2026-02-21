import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";

export const articles = [
  {
    slug: "the-millennium-problems",
    title: "The Millennium Problems",
    summary:
      "The seven problems that have pushed mathematicians to think deeply for decades.",
    time: "9 min read",
    date: "March 22, 2023",
    featured: true,
    img: article1,
    content: `
## What Are the Millennium Problems?

In 2000, the Clay Mathematics Institute introduced **seven** unsolved problems and attached a **$1,000,000** prize to each. These problems sit at the core of mathematics and spill into physics, computer science, and engineering.

Below is a concise, student‑friendly overview of each problem and why it matters.

---

## 1. P vs NP

If a solution can be *verified* quickly, can it also be *found* quickly?  
Formally, is $\\mathbf{P} = \\mathbf{NP}$ ?  

This problem touches cryptography, optimization, and complexity theory.

---

## 2. Riemann Hypothesis

All non‑trivial zeros of the Riemann zeta function  
$$
\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}
$$
are conjectured to lie on the critical line $\\Re(s) = \\tfrac{1}{2}$.  

It’s deeply linked to the distribution of prime numbers.

---

## 3. Poincaré Conjecture ✅ (Solved)

Every simply connected, closed 3‑manifold is homeomorphic to $S^3$.  

Grigori Perelman proved this in 2003, using Ricci flow techniques.

---

## 4. Hodge Conjecture

In algebraic geometry, the conjecture links topology to algebra:  
Are all rational cohomology classes of type $\\left(p,p\\right)$ algebraic?

In short: can every “nice” topological feature be represented by algebraic cycles?

---

## 5. Yang–Mills Existence and Mass Gap

Quantum field theories for the strong interaction appear to have a **mass gap**.  
The conjecture asks for a rigorous proof that Yang–Mills theory exists and has:

$$
\\Delta > 0
$$

where $\\Delta$ is the energy gap between the vacuum and the first excited state.

---

## 6. Navier–Stokes Existence and Smoothness

Do smooth solutions to the Navier–Stokes equations always exist in 3D?

$$
\\frac{\\partial \\mathbf{u}}{\\partial t} + (\\mathbf{u} \\cdot \\nabla)\\mathbf{u}
= -\\nabla p + \\nu \\nabla^2 \\mathbf{u}
$$

This matters for turbulence and fluid modeling across biology, climate, and engineering.

---

## 7. Birch and Swinnerton‑Dyer Conjecture

Relates elliptic curves to the behavior of their L‑functions at $s=1$.

If  
$$
L(E, s) \\sim (s-1)^r
$$
then $r$ should equal the rank of the elliptic curve.

It’s a bridge between number theory and geometry.

---

## Why These Problems Matter

Each problem acts like a **lens**: the tools created to solve them often push multiple fields forward.  
Even partial results have shaped modern mathematics, physics, and computation.

If you want, I can expand any one of the seven into a dedicated article with visuals and intuition.
    `,
  },
  {
    slug: "world-of-iot",
    title: "World of IoT",
    summary:
      "A deep dive into the world of IoT and how connected devices shape daily life.",
    time: "9 min read",
    date: "March 22, 2023",
    featured: true,
    img: article2,
    content: `
The Internet of Things connects everyday objects to the web, enabling sensing, control, and automation across homes, cities, and industries.

This piece walks through the core building blocks: sensors, connectivity, edge compute, and cloud platforms. It also highlights the tradeoffs between power, latency, and cost.

We wrap up with security and privacy risks that matter most for real deployments, plus practical steps to reduce them.
    `,
  },
  {
    slug: "form-validation-react-custom-hook",
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    summary:
      "Design a clean, reusable form validation hook and reduce repeated code.",
    time: "6 min read",
    date: "March 22, 2023",
    featured: false,
    img: article4,
    content: `
Form logic can get messy fast. A custom hook helps centralize validation rules, errors, and input handling.

We will define a consistent API for inputs, then build validations that compose and stay readable.

By the end, you will have a small hook you can drop into new forms without rewriting boilerplate.
    `,
  },
  {
    slug: "create-modal-component-react-portals",
    title: "Create Modal Component In React Using React Portals",
    summary: "Build accessible modals and avoid z-index and overflow traps.",
    time: "7 min read",
    date: "March 22, 2023",
    featured: false,
    img: article3,
    content: `
Portals let your modal render outside the normal DOM hierarchy, which avoids stacking and overflow issues.

We will build a modal that manages focus, traps keyboard navigation, and closes predictably.

You will also see how to organize state so modals stay easy to reuse.
    `,
  },
  {
    slug: "create-loading-screen-react",
    title: "Create Loading Screen In React",
    summary: "Create a polished loading screen with a smooth transition.",
    time: "5 min read",
    date: "March 22, 2023",
    featured: false,
    img: article2,
    content: `
Loading screens are a chance to communicate progress and reduce perceived wait time.

We will build a simple loader component, wire it to data fetching, and animate it in and out.

The result is a minimal pattern you can apply across pages.
    `,
  },
  {
    slug: "smooth-scrolling-react",
    title: "Smooth Scrolling In Reactjs",
    summary: "Create smooth scrolling for anchor links and section jumps.",
    time: "4 min read",
    date: "March 22, 2023",
    featured: false,
    img: article5,
    content: `
Smooth scrolling can make long pages feel more intentional and easier to navigate.

We will add a small helper for anchor links and ensure it plays nicely with the browser.

This approach works with vanilla anchors and keeps the implementation light.
    `,
  },
];

export const featuredArticles = articles.filter((article) => article.featured);
export const allArticles = articles.filter((article) => !article.featured);
