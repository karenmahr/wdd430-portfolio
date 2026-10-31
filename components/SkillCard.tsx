interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({ title, description }: SkillCardProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-white-700">{description}</p>
    </div>
  );
}