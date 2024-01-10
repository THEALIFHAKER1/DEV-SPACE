import {
  CardTitle,
  CardFooter,
  CardDescription,
  Card,
  CardHeader,
} from "@/components/ui/card";
import { FaRegCalendarAlt } from "react-icons/fa";

interface ExperienceCardProps {
  title: string;
  position: string;
  company: string;
  date: string;
  location: string;
}

export default function ExperienceCard({
  title,
  position,
  company,
  date,
  location,
}: ExperienceCardProps) {
  return (
    <Card className="flex w-full flex-col justify-between">
      <CardHeader>
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt className="h-4 w-4 text-muted-foreground" />
          <p>{date}</p>
        </div>
        <div className="flex justify-between">
          <CardTitle className="text-base hover:underline">{title}</CardTitle>
        </div>
        <CardDescription className=" text-sm font-light">
          <p>{position}</p>
          <p>{company}</p>
          <p>{date}</p>
          <p>{location}</p>
        </CardDescription>
      </CardHeader>
      {/* <CardFooter className="flex justify-between"></CardFooter> */}
    </Card>
  );
}
