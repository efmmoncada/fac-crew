import { useRef, useState, useEffect } from "react";
import Tree from "react-d3-tree";
import { EmployeeInfo } from "../data";
import { buildTreeData } from "../buildTreeData";
import OrgChartNode from "./OrgChartNode";

interface Props {
  employees: EmployeeInfo[];
}

export default function OrgChart({ employees }: Props) {
  const treeData = buildTreeData(employees);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 80 });

  useEffect(() => {
    if (containerRef.current) {
      setTranslate({ x: containerRef.current.clientWidth / 2, y: 100 });
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "90vh" }}>
      <Tree
        data={treeData}
        translate={translate}
        orientation="vertical"
        pathFunc="diagonal"
        collapsible
        zoomable
        renderCustomNodeElement={(props) => <OrgChartNode {...props} />}
        nodeSize={{ x: 280, y: 280 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
        initialDepth={2}
      />
    </div>
  );
}
