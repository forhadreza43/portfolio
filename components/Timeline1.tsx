//Timeline.tsx
import { Github } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  location: string;
  description: string;
  icon: string;
  githubUrl?: string;
  side: "left" | "right";
}

const events: TimelineEvent[] = [
  {
    date: "November 23rd – 25th, 2018",
    title: "Hack Western 5",
    location: "London, Ontario",
    description:
      "Developed a mobile application which delivered bedtime stories using augmented reality.",
    icon: "👾",
    githubUrl: "#",
    side: "right",
  },
  {
    date: "September 14th – 16th, 2018",
    title: "Hack The North",
    location: "Waterloo, Ontario",
    description:
      "Delivers university campus wide events in real time to all students.",
    icon: "🏔️",
    side: "left",
  },
  {
    date: "March 23rd – 24th, 2018",
    title: "FirstNet Public Safety Hackathon",
    location: "San Francisco, California",
    description:
      "Developed a mobile application which communicates from inside an ambulance to doctors at hospital.",
    icon: "🛡️",
    side: "right",
  },
  {
    date: "September 14th – 16th, 2018",
    title: "Hack The North",
    location: "Waterloo, Ontario",
    description:
      "Delivers university campus wide events in real time to all students.",
    icon: "💻",
    githubUrl: "#",
    side: "left",
  },
];

const TimelineCard = ({ event }: { event: TimelineEvent }) => {
  const isLeft = event.side === "left";

  return (
    <div className="relative flex items-center w-full mb-12 last:mb-0">
      {/* Left content */}
      <div className={`w-5/12 ${isLeft ? "" : "opacity-0 pointer-events-none"}`}>
        {isLeft && (
          <div className="text-right pr-8">
            <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
            <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.location}</p>
            {event.description && (
              <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
            )}
            {event.githubUrl && (
              <a
                href={event.githubUrl}
                className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm hover:bg-accent transition-colors"
              >
                <Github size={14} />
                Github
              </a>
            )}
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="flex-shrink-0 w-2/12 flex justify-center relative z-10">
        <div className="w-10 h-10 rounded-full bg-timeline-dot border-2 border-timeline-dot-border flex items-center justify-center text-lg">
          {event.icon}
        </div>
      </div>

      {/* Right content */}
      <div className={`w-5/12 ${!isLeft ? "" : "opacity-0 pointer-events-none"}`}>
        {!isLeft && (
          <div className="pl-8">
            <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
            <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.location}</p>
            {event.description && (
              <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
            )}
            {event.githubUrl && (
              <a
                href={event.githubUrl}
                className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm hover:bg-accent transition-colors"
              >
                <Github size={14} />
                Github
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Timeline1 = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-timeline-line -translate-x-1/2" />

        {events.map((event, index) => (
          <TimelineCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Timeline1;
