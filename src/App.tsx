import "./App.css";
import OrgChart from "./components/OrgChart";
import { employees } from "./data";

export default function App() {
  return (
    <div className="flex flex-col items-center py-4 px-2 w-full max-w-full overflow-x-hidden">

      <h1 className="text-3xl mb-2">Hillsboro School District - Facilities Trade Crews</h1>
      <h2 className="text-2xl mb-6">Org Chart</h2>
      <OrgChart employees={employees} />
    </div>
  );
}
