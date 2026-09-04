import { CustomNodeElementProps } from "react-d3-tree";
import EmployeeCard from "./EmployeeCard";
import { TreeNode } from "../buildTreeData";

export default function OrgChartNode({
  nodeDatum,
  toggleNode,
}: CustomNodeElementProps) {
  const data = nodeDatum as unknown as TreeNode;
  const hasChildren = !!nodeDatum.children?.length;

  if (data.isTeamNode) {
    return (
      <g>
        <foreignObject width={200} height={80} x={-100} y={0}>
          <div className="team-node" onClick={() => toggleNode()}>
            <div className="team-node-label">{data.name}</div>
            <div className="team-node-count">{nodeDatum.children?.length ?? 0} members</div>
          </div>
        </foreignObject>
      </g>
    );
  }

  return (
    <g>
      <foreignObject width={260} height={240} x={-130} y={0}>
        <div onClick={() => toggleNode()} style={{ cursor: hasChildren ? "pointer" : "default" }}>
          <EmployeeCard {...data.employee!} />
        </div>
      </foreignObject>
    </g>
  );
}
