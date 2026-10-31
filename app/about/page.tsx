import SkillCard from "@/components/SkillCard";

export default function About() {
 return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-white-700">
          This about page shares more information about my background and work.
        </p>
      </section>

      <SkillCard
        title="Technical skills"
        description="I´m Pursuing my Bachelor's Degree in Software Development, I currently have my Certificate in Web Computer Programming and knowledge on Data Analytics."
      />
    </main>
);
}
