import Image from "next/image";
export function ProjectArt({ src, title }: { src: string; title: string }) {
  return (
    <div className="project-art">
      <Image
        src={src}
        alt={`${title} interface preview`}
        fill
        sizes="(max-width: 800px) 100vw, 60vw"
      />
      <span className="project-art-shade" aria-hidden="true" />
      <span className="project-art-action" aria-hidden="true">
        View project <span>↗</span>
      </span>
    </div>
  );
}
