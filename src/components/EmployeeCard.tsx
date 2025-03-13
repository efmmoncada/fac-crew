import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Link,
} from "@nextui-org/react";
import { EmployeeInfo } from "../data";

function formatDuties(duties: string[]): string {
  return duties.join(" • ");
}

type Props = EmployeeInfo;

export default function EmployeeCard({
  headshotURL,
  name,
  email,
  title,
  team
}: Props) {
  return (
    <Card className="p-4 justify-between">
      <CardHeader>
        <Image
          src={headshotURL}
          className="object-contain aspect-square max-h-32 max-w-36 rounded-full"
          alt={`Headshot of ${name}`}
        />
        <div className="flex flex-col px-2">
          <h2 className="font-bold">{name}</h2>
          <p className="italic">{title}</p>
          <p>
            Team: {team}
          </p>
        </div>
      </CardHeader>
     
      {/* <CardBody className="min-h-8">{formatDuties(duties)}</CardBody> */}
    </Card>
  );
}
