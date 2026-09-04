import { Card, Image } from "@nextui-org/react";
import { EmployeeInfo } from "../data";

type Props = EmployeeInfo;

export default function EmployeeCard({
  headshotURL,
  name,
  email,
  title,
  team,
}: Props) {
  return (
    <Card className="org-card">
      {headshotURL ? (
        <img
          src={headshotURL}
          width={72}
          height={72}
          className="org-card-img"
          alt={`Headshot of ${name}`}
        />
      ) : (
        <div className="org-card-img org-card-fallback">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
      )}
      <div className="org-card-body">
        <h2 className="org-card-name">{name}</h2>
        <p className="org-card-title">{title}</p>
        {team && <p className="org-card-team">Team: {team}</p>}
      </div>
    </Card>
  );
}
