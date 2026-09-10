import { EmployeeInfo } from "./data";

export interface TreeNode {
  name: string;
  children?: TreeNode[];
  employee?: EmployeeInfo;
  isTeamNode?: boolean;
}

const GROUP_MIN_SIZE = 1;
const MIN_DEPTH_TO_GROUP = 2; // don't group the root's direct reports (depth 1)

export function buildTreeData(
  employees: EmployeeInfo[],
  excludeEmails: string[] = []
): TreeNode[] {
  const excludeSet = new Set(excludeEmails);
  const filtered = employees.filter((e) => !excludeSet.has(e.email));

  const byEmail = new Map(filtered.map((e) => [e.email, e]));
  const childrenMap = new Map<string, EmployeeInfo[]>();
  const roots: EmployeeInfo[] = [];

  for (const emp of filtered) {
    if (emp.reportsTo === emp.email) {
      console.error(`${emp.name} lists themselves as their own manager`);
      roots.push(emp);
      continue;
    }
    if (emp.reportsTo && byEmail.has(emp.reportsTo)) {
      const list = childrenMap.get(emp.reportsTo) ?? [];
      list.push(emp);
      childrenMap.set(emp.reportsTo, list);
    } else {
      roots.push(emp);
    }
  }

  function buildChildren(kids: EmployeeInfo[], ancestry: Set<string>, depth: number): TreeNode[] {
    if (depth < MIN_DEPTH_TO_GROUP) {
      return kids.map((k) => toNode(k, ancestry, depth));
    }

    const groups = new Map<string, EmployeeInfo[]>();
    for (const kid of kids) {
      const teamKey = kid.team ?? "Unassigned";
      const list = groups.get(teamKey) ?? [];
      list.push(kid);
      groups.set(teamKey, list);
    }

    const result: TreeNode[] = [];
    for (const [team, members] of groups) {
      if (members.length >= GROUP_MIN_SIZE) {
        result.push({
          name: team,
          isTeamNode: true,
          children: members.map((m) => toNode(m, ancestry, depth + 1)),
        });
      } else {
        result.push(...members.map((m) => toNode(m, ancestry, depth)));
      }
    }
    return result;
  }

  function toNode(emp: EmployeeInfo, ancestry: Set<string>, depth: number): TreeNode {
    if (ancestry.has(emp.email)) {
      console.error(`Cycle detected at ${emp.name} (${emp.email})`);
      return { name: emp.name, employee: emp };
    }
    const nextAncestry = new Set(ancestry).add(emp.email);
    const kids = childrenMap.get(emp.email) ?? [];
    return {
      name: emp.name,
      employee: emp,
      children: kids.length ? buildChildren(kids, nextAncestry, depth + 1) : undefined,
    };
  }

  return roots.map((r) => toNode(r, new Set(), 0));
}
