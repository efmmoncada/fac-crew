import "./App.css";
import EmployeeCard from "./components/EmployeeCard";
import { employees } from "./data";

export default function App() {
  return (
    <div className="flex flex-col items-center py-4 px-2">
      <h1 className="text-3xl mb-2">Hillsboro School District - Operations and Support Services</h1>
      <h2 className="text-2xl">Who to See for What</h2>
      <main className="grid p-4 grid-cols-3 gap-4">
        {employees.map((employee, i) => (
          <EmployeeCard key={employee.name} {...employee} />
        ))}
      </main>
    </div>
  );
}
