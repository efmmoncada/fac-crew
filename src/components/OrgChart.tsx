import { useRef, useState, useEffect } from "react";
import Tree from "react-d3-tree";
import { EmployeeInfo } from "../data";
import { buildTreeData } from "../buildTreeData";
import OrgChartNode from "./OrgChartNode";
import EmployeeCard from "./EmployeeCard";

interface Props {
  employees: EmployeeInfo[];
}

const EXCLUDE_EMAILS = ["larrisos@hsd.k12.or.us", "rayborns@hsd.k12.or.us", "heredias@hsd.k12.or.us"];
const SUPPORT_EMAILS = ["larrisos@hsd.k12.or.us", "rayborns@hsd.k12.or.us", "heredias@hsd.k12.or.us"];

export default function OrgChart({ employees }: Props) {
  const treeData = buildTreeData(employees, EXCLUDE_EMAILS);
  const supports = employees.filter((e) => SUPPORT_EMAILS.includes(e.email));

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayInnerRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 80 });

  useEffect(() => {
    if (containerRef.current) {
      setTranslate({ x: containerRef.current.clientWidth / 2, y: 100 });
    }
  }, []);

  // Continuously mirror react-d3-tree's own transform onto the overlay,
  // instead of relying on onUpdate (which doesn't reliably fire on collapse/expand).
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;

    function syncTransform() {
      const treeG = container?.querySelector<SVGGElement>("g.rd3t-g");
      if (treeG && overlayInnerRef.current) {
        const raw = treeG.getAttribute("transform") || "";
        const match = raw.match(/translate\(([-\d.]+)[, ]+([-\d.]+)\)(?:\s*scale\(([-\d.]+)\))?/);
        if (match) {
          const [, x, y, k = "1"] = match;
          overlayInnerRef.current.style.transform = `translate(${x}px, ${y}px) scale(${k})`;
        }
      }
      rafId = requestAnimationFrame(syncTransform);
    }

    rafId = requestAnimationFrame(syncTransform);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "90vh", position: "relative", overflow: "hidden" }}>
      <Tree
        data={treeData}
        translate={translate}
        orientation="vertical"
        pathFunc="diagonal"
        collapsible
        zoomable
        zoom={0.6}
        renderCustomNodeElement={(props) => <OrgChartNode {...props} />}
        nodeSize={{ x: 280, y: 280 }}
        separation={{ siblings: 1, nonSiblings: 1.5 }}
        initialDepth={2}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <div ref={overlayInnerRef} style={{ transformOrigin: "0 0" }}>
          <div className="support-row" style={{ pointerEvents: "auto" }}>
            {supports.map((emp) => (
              <div key={emp.email} className="support-card-wrapper">
                <EmployeeCard {...emp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
