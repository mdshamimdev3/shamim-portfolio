import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

import Seo from "../../components/Seo";
import CaseStudyHero from "../../components/case-study/CaseStudyHero";
import CaseStudySection from "../../components/case-study/CaseStudySection";
import ProjectNavigation from "../../components/case-study/ProjectNavigation";
import TechStack from "../../components/case-study/TechStack";

const technologies = [
  {
    name: "Laravel",
    description:
      "Backend application structure, routing and server-side functionality.",
  },
  {
    name: "PHP",
    description: "Server-side application logic and request handling.",
  },
  {
    name: "MySQL",
    description: "Persistent storage for application and product data.",
  },
  {
    name: "Blade",
    description: "Server-rendered pages and reusable interface layouts.",
  },
  {
    name: "JavaScript",
    description: "Interactive behaviour on the storefront.",
  },
  {
    name: "HTML & CSS",
    description: "Responsive page structure and visual presentation.",
  },
];

const architecture = [
  {
    icon: ShoppingBag,
    title: "E-commerce storefront",
    description:
      "A customer-facing storefront designed to present products and support product discovery.",
  },
  {
    icon: Package,
    title: "Product management",
    description:
      "Product-focused application workflows for managing the items displayed in the store.",
  },
  {
    icon: LayoutDashboard,
    title: "Management interface",
    description:
      "Administrative workflows for maintaining the store and its product information.",
  },
  {
    icon: Smartphone,
    title: "Responsive experience",
    description:
      "A storefront experience designed to remain usable across desktop and mobile screens.",
  },
];

const features = [
  "Customer-facing e-commerce storefront",
  "Product presentation and browsing",
  "Product management workflows",
  "Responsive user interface",
  "Laravel-based application structure",
  "Live website deployment",
];

const challenges = [
  {
    title: "Presenting products clearly",
    problem:
      "An online fashion store needs a storefront where customers can browse and understand the available products.",
    solution:
      "A product-focused storefront organizes the shopping experience around product discovery and presentation.",
    concept: "E-commerce Architecture · Product Management",
  },
  {
    title: "Supporting different screen sizes",
    problem:
      "Customers may visit the store using phones, tablets and desktop devices.",
    solution:
      "The interface is designed to provide a responsive browsing experience across screen sizes.",
    concept: "Responsive Web Design",
  },
  {
    title: "Operating a live website",
    problem:
      "A working application needs to be configured and maintained beyond the local development environment.",
    solution:
      "The project provided practical experience working with a deployed e-commerce website.",
    concept: "Deployment · Production Environment",
  },
];

export default function StylezoCaseStudy() {
  return (
    <>
      <Seo
        title="STYLEZO Case Study"
        description="A Laravel-based fashion e-commerce project by MD Shamim."
      />

      <CaseStudyHero
        number="02"
        name="STYLEZO"
        category="Fashion E-commerce"
        title="An online fashion storefront built around product discovery and shopping."
        description="STYLEZO is a fashion e-commerce website focused on presenting products through a customer-facing storefront. The project provided practical experience working with a Laravel application and a live production website."
        technologies={["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS"]}
        live="https://stylezofashion.com/"
      />

      <CaseStudySection
        eyebrow="01 / Overview"
        title="The project"
        description="STYLEZO brings together a customer-facing fashion storefront and product-focused management workflows. It represents practical work with an e-commerce application beyond a simple static website."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="text-sm text-muted">Project type</p>
            <h3 className="mt-2 text-xl font-semibold">Fashion E-commerce</h3>
          </div>

          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="text-sm text-muted">Application status</p>
            <h3 className="mt-2 text-xl font-semibold">Live Website</h3>
          </div>

          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="text-sm text-muted">Backend</p>
            <h3 className="mt-2 text-xl font-semibold">Laravel / PHP</h3>
          </div>

          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="text-sm text-muted">Database</p>
            <h3 className="mt-2 text-xl font-semibold">MySQL</h3>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="02 / Architecture"
        title="How the application is organized"
        description="The project combines storefront presentation, product-focused workflows and a backend application structure."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {architecture.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-line bg-surface p-6"
              >
                <Icon className="size-6 text-accent" />

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Features"
        title="Core capabilities"
        description="The main areas of the application and its storefront experience."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-md border border-line p-4"
            >
              <span className="size-2 shrink-0 rounded-full bg-accent" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Challenges"
        title="Engineering considerations"
      >
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className="rounded-lg border border-line bg-surface p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold">{challenge.title}</h3>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Challenge
                  </p>
                  <p className="mt-3 leading-7 text-muted">
                    {challenge.problem}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Approach
                  </p>
                  <p className="mt-3 leading-7 text-muted">
                    {challenge.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-4">
                <p className="text-xs text-muted">
                  Concepts: {challenge.concept}
                </p>
              </div>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Technology"
        title="Tools and technologies"
      >
        <TechStack items={technologies} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="06 / What I learned"
        title="Practical experience"
      >
        <div className="max-w-3xl space-y-4 leading-8 text-muted">
          <p>
            Working with STYLEZO helped me understand how an e-commerce
            application moves beyond backend functionality into a live
            customer-facing product.
          </p>

          <p>
            It strengthened my experience with Laravel application development,
            product-oriented workflows, responsive interfaces and production
            deployment.
          </p>

          <p>
            It also highlighted the importance of maintaining a reliable
            production environment and handling real-world application
            requirements.
          </p>
        </div>
      </CaseStudySection>

      <ProjectNavigation
        previous={{ name: "NOOR", to: "/projects/noor" }}
        next={{ name: "E-DISH", to: "/projects/e-dish" }}
      />
    </>
  );
}
