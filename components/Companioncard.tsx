import Image from "next/image";
import Link from "next/link";

interface CompanioncardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}
const Companioncard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanioncardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={24}
            height={24}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="clock" width={24} height={24} />
        <span className="text-sm">{duration} min</span>
      </div>
      <Link href={`/companions/${id}`} className="companion-card-link">
        <button className="btn-primary w-full justify-center">
          Take the Lesson
        </button>
      </Link>
    </article>
  );
};

export default Companioncard;
