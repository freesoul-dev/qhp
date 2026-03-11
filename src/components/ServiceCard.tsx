import ImageCarousel from "./ImageCarousel";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-slate-800">
      <div className="p-4">
        <ImageCarousel count={4} label={title} />
      </div>
      <div className="px-4 pb-4">
        <h3 className="mb-1 text-lg font-bold text-white">{title}</h3>
        <p className="text-xs leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
