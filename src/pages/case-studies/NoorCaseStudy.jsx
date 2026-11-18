import {
  Database,
  Layers3,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
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
      "Backend application structure, routing, middleware and business logic.",
  },
  {
    name: "PHP",
    description: "Server-side programming and application logic.",
  },
  {
    name: "MySQL",
    description:
      "Relational database for users, restaurants, products and orders.",
  },
  {
    name: "Eloquent ORM",
    description: "Database queries, model relationships and data access.",
  },
  {
    name: "Tailwind CSS",
    description: "Responsive interface styling and reusable UI utilities.",
  },
  {
    name: "JavaScript",
    description: "Interactive frontend behaviour.",
  },
];

const architecture = [
  {
    icon: ShieldCheck,
    title: "Role-based access",
    description:
      "Different user roles have different responsibilities and access boundaries. Authorization rules protect restricted application areas.",
  },
  {
    icon: Store,
    title: "Restaurant management",
    description:
      "Restaurant owners can manage their restaurant information and related operations through their owner dashboard.",
  },
  {
    icon: Database,
    title: "Restaurant data isolation",
    description:
      "Owner-facing queries are scoped to the authenticated owner’s restaurant instead of exposing another restaurant’s records.",
  },
  {
    icon: ShoppingBag,
    title: "Customer ordering",
    description:
      "Customers can add food items to their cart and continue through the checkout workflow.",
  },
  {
    icon: Truck,
    title: "Live rider location tracking",
    description:
      "The rider location is captured through browser geolocation and updated for the customer-facing map, allowing customers to follow the rider’s current position during delivery.",
  },
  {
    icon: Truck,
    title: "Delivery workflow",
    description:
      "Delivery zones determine the applicable delivery fee, with inside and outside Dhaka fee handling and cash-on-delivery support.",
  },
  {
    icon: Layers3,
    title: "Administrative operations",
    description:
      "Administrative and rider-facing areas provide separate interfaces for their respective operational responsibilities.",
  },
];

const challenges = [
  {
    title: "Protecting restaurant ownership boundaries",
    problem:
      "A multi-restaurant platform must prevent one owner from accessing another owner’s restaurant data.",
    solution:
      "The owner dashboard resolves the authenticated user’s restaurant and scopes relevant operations to that restaurant.",
    concept: "Authorization · Data Isolation · Eloquent Relationships",
  },
  {
    title: "Managing multiple user responsibilities",
    problem:
      "Customers, restaurant owners, riders and administrators need different application access.",
    solution:
      "Role-based access checks and middleware are used to separate protected application areas.",
    concept: "Authentication · Authorization · Middleware",
  },
  {
    title: "Handling delivery fee rules",
    problem: "Delivery charges need to depend on the selected delivery zone.",
    solution:
      "The checkout workflow handles inside-Dhaka and outside-Dhaka delivery fee rules.",
    concept: "Business Logic · Validation",
  },
  {
    title: "Keeping delivery location visible",
    problem:
      "Customers need visibility into the rider’s current position while an order is being delivered.",
    solution:
      "Browser geolocation captures the rider’s position and the customer-facing map displays the updated location.",
    concept: "Geolocation API · Location Updates · Map Integration",
  },
];

const features = [
  "Restaurant creation and management",
  "Restaurant owner dashboard",
  "Customer cart and checkout",
  "Delivery zone-based fee handling",
  "Cash on delivery workflow",
  "Rider-facing page",
  "Role-based access control",
  "Restaurant-level data isolation",
  "Rider live location tracking",
  "Customer-side rider location map",
];

export default function NoorCaseStudy() {
  return (
    <>
      <Seo
        title="NOOR — Multi-Restaurant Platform"
        description="Technical case study of NOOR, a Laravel multi-restaurant food delivery and management platform by MD Shamim."
      />

      <CaseStudyHero
        number="01"
        name="NOOR"
        category="Multi-Restaurant Food Platform"
        title="A restaurant management and food delivery platform built around role-based workflows."
        description="NOOR is a Laravel-based multi-restaurant application designed to bring customers, restaurant owners, riders and administrators into one platform. Its core focus is structured backend workflows, role-based access and restaurant-level data separation."
        technologies={[
          "Laravel",
          "PHP",
          "MySQL",
          "Eloquent ORM",
          "Tailwind CSS",
        ]}
        live="https://e-noor.ethiodeploy.app/"
      />

      <section className="wrap pb-12 md:pb-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["PROJECT TYPE", "Multi-restaurant platform"],
            ["BACKEND", "Laravel / PHP"],
            ["DATABASE", "MySQL"],
          ].map(([label, value]) => (
            <div key={label} className="border-t border-line py-5">
              <p className="text-xs font-semibold tracking-widest text-muted">
                {label}
              </p>
              <p className="mt-2 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <CaseStudySection
        eyebrow="01 / Overview"
        title="One platform. Multiple operational roles."
        description="A food delivery application is more than a customer-facing ordering page. Restaurant management, order workflows, delivery responsibilities and administrative access all need to work together. NOOR explores how those responsibilities can be structured inside one Laravel application."
      >
        <div className="rounded-lg border border-line bg-surface p-6 md:p-10">
          <p className="text-sm leading-8 text-muted">
            The application is organized around different user responsibilities.
            Customers interact with the ordering workflow, restaurant owners
            manage their restaurant, riders use a dedicated interface, and
            administrators oversee platform-level operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Customer", "Restaurant Owner", "Rider", "Super Admin"].map(
              (role) => (
                <span
                  key={role}
                  className="rounded-md border border-line px-4 py-2 text-sm"
                >
                  {role}
                </span>
              ),
            )}
          </div>
          <p className="mt-4 text-xs leading-6 text-muted">
            Additional restaurant staff workflows are planned for future
            development.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="02 / Architecture"
        title="Designed around responsibility and data boundaries."
        description="The central engineering concern is ensuring that each role interacts with the correct part of the application and the correct data."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {architecture.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-lg border border-line bg-surface p-6"
            >
              <Icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="03 / Core Features"
        title="The workflows behind the platform."
        description="The following capabilities represent the implemented project scope."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-4 border-b border-line py-4"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="04 / Technical Challenges"
        title="Engineering decisions that matter."
        description="These are the backend concepts that shape a reliable multi-role application."
      >
        <div className="space-y-4">
          {challenges.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg border border-line p-6 md:p-8"
            >
              <p className="font-mono text-xs text-accent">
                CHALLENGE {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Problem
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Approach
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.solution}
                  </p>
                </div>
              </div>

              <p className="mt-6 border-t border-line pt-4 text-xs text-accent">
                {item.concept}
              </p>
            </article>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="05 / Technology"
        title="The stack behind NOOR."
        description="Technologies used to build the application and organize its backend workflows."
      >
        <TechStack items={technologies} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="06 / Learning"
        title="What this project taught me."
        description="Building NOOR strengthened my understanding of how backend architecture affects real application behaviour."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "Think in relationships",
              "Database relationships are central to organizing users, restaurants and operational records.",
            ],
            [
              "Protect every boundary",
              "Authorization must be enforced on the backend, not just hidden in the interface.",
            ],
            [
              "Model real workflows",
              "A useful application needs its business rules and user responsibilities to work together.",
            ],
          ].map(([title, description]) => (
            <div key={title} className="border-t border-line pt-5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <ProjectNavigation next={{ name: "STYLEZO", to: "/projects/stylezo" }} />
    </>
  );
}
