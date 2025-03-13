type Team = "Electricians" | "Grounds" | "Carpenters" | "Movers" | "HVAC" | "Plumbers" | "Locksmith" | "Management"; 


export type EmployeeInfo = {
  headshotURL: string;
  name: string;
  title: string;
  team: Team
  email: string;
};

export const employees: EmployeeInfo[] = [
  {
    name: "Sydney Larrison",
    title: "Department Administrative Support 3",
    team: "Management",
    email: "larrisos@hsd.k12.or.us",
    headshotURL: "/larrisos.jpg"
  },
  {
    name: "Lisa Hicks",
    title: "Supervisor - Facilities",
    team: "Management",
    email: "hicksl@hsd.k12.or.us",
    headshotURL: "/hicksl.jpg"
  },
  {
    name: "Summer Rayborn",
    title: "Department Administrative Support 2",
    team: "Management",
    email: "rayborns@hsd.k12.or.us",
    headshotURL: "/rayborns.jpg"
  },
  {
    name: "Jeffrey Reed",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "reedj@hsd.k12.or.us",
    headshotURL: "/reedj.jpg"
  },
  {
    name: "Leonell Andrade",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "andradel@hsd.k12.or.us",
    headshotURL: "/andradel.jpg"
  },
  {
    name: "Juan Delgado Pizano",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "delgadoj@hsd.k12.or.us",
    headshotURL: "/delgadoj.jpg"
  },
  {
    name: "Raymond Abad",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "abadr@hsd.k12.or.us",
    headshotURL: "/abadr.jpg"
  },
  {
    name: "Edward Kehm",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "kehme@hsd.k12.or.us",
    headshotURL: "/kehme.jpg"
  },
  {
    name: "Ramiro Arreola Avila",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "arreolar@hsd.k12.or.us",
    headshotURL: "/arreolar.jpg"
  },
  {
    name: "Fabian Gonzalez Magana",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "gonzalef@hsd.k12.or.us",
    headshotURL: "/gonzalef.jpg"
  },
  {
    name: "Bradley Hess",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "hessb@hsd.k12.or.us",
    headshotURL: "/hessb.jpg"
  },
  {
    name: "Nathan Rosales",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "rosalesn@hsd.k12.or.us",
    headshotURL: "/rosalesn.jpg"
  },
  {
    name: "Carlos Delorenza",
    title: "Groundskeeper 1",
    team: "Grounds",
    email: "delorenc@hsd.k12.or.us",
    headshotURL: "/delorenc.jpg"
  },
  {
    name: "Matthew Wolf",
    title: "Groundskeeper 2",
    team: "Grounds",
    email: "wolfma@hsd.k12.or.us",
    headshotURL: "/wolfma.jpg"
  },
  {
    name: "Darrell Fields",
    title: "Groundskeeper 3",
    team: "Grounds",
    email: "fieldsd@hsd.k12.or.us",
    headshotURL: "/fieldsd.jpg"
  },
  {
    name: "Sanford Sutherland",
    title: "Groundskeeper 3",
    team: "Grounds",
    email: "sutherls@hsd.k12.or.us",
    headshotURL: "/sutherls.jpg"
  },
  {
    name: "Peter Hrdlicka",
    title: "Groundskeeper 3 - Irrigation and Wetland",
    team: "Grounds",
    email: "hrdlickp@hsd.k12.or.us",
    headshotURL: "/hrdlickp.jpg"
  },
  {
    name: "Robert Keplinger",
    title: "Maintenance 2",
    team: "Carpenters",
    email: "keplingr@hsd.k12.or.us",
    headshotURL: "/keplingr.jpg"
  },
  {
    name: "Daniel Collien",
    title: "Maintenance 2",
    team: "HVAC",
    email: "colliend@hsd.k12.or.us",
    headshotURL: "/colliend.jpg"
  },
  {
    name: "Edward Buck",
    title: "Maintenance 2",
    team: "Carpenters",
    email: "bucke@hsd.k12.or.us",
    headshotURL: "/bucke.jpg"
  },
  {
    name: "David Delplanche",
    title: "Maintenance 2",
    team: "Carpenters",
    email: "delplada@hsd.k12.or.us",
    headshotURL: "/delplada.jpg"
  },
  {
    name: "Kevin Brito",
    title: "Maintenance 2",
    team: "Electricians",
    email: "britok@hsd.k12.or.us",
    headshotURL: "/britok.jpg"
  },
  {
    name: "Michael Russ",
    title: "Maintenance 2",
    team: "Carpenters",
    email: "russm@hsd.k12.or.us",
    headshotURL: "/russm.jpg"
  },
  {
    name: "Wayne Cree",
    title: "Maintenance 2",
    team: "Carpenters",
    email: "creew@hsd.k12.or.us",
    headshotURL: "/creew.jpg"
  },
  {
    name: "Erick Chavez-Garcia",
    title: "Maintenance 2",
    team: "HVAC",
    email: "chavezge@hsd.k12.or.us",
    headshotURL: "/chavezge.jpg"
  },
  {
    name: "Raul De La Torre Martinez",
    title: "Maintenance 2",
    team: "Plumbers",
    email: "delatorr@hsd.k12.or.us",
    headshotURL: "/delatorr.jpg"
  },
  {
    name: "John Meador",
    title: "Maintenance 4",
    team: "Electricians",
    email: "meadorj@hsd.k12.or.us",
    headshotURL: "/meadorj.jpg"
  },
  {
    name: "Ronald Nearing",
    title: "Maintenance 4",
    team: "Plumbers",
    email: "nearingr@hsd.k12.or.us",
    headshotURL: "/nearingr.jpg"
  },
  {
    name: "Daniel Hyde",
    title: "Maintenance 4",
    team: "Locksmith",
    email: "hyded@hsd.k12.or.us",
    headshotURL: "/hyded.jpg"
  },
  {
    name: "Nico Geerling",
    title: "Maintenance 4",
    team: "HVAC",
    email: "geerlinn@hsd.k12.or.us",
    headshotURL: "/geerlinn.jpg"
  },
  {
    name: "Keith Baldwin",
    title: "Maintenance Foreman",
    team: "HVAC",
    email: "baldwink@hsd.k12.or.us",
    headshotURL: "/baldwink.jpg"
  },
  {
    name: "Jordan Yelland",
    title: "Supervisor - Electrical Systems",
    team: "Electricians",
    email: "yellandj@hsd.k12.or.us",
    headshotURL: "/yellandj.jpg"
  },
  {
    name: "Servando Cortes",
    title: "Warehouse 2",
    team: "Movers",
    email: "cortess@hsd.k12.or.us",
    headshotURL: "/cortess.jpg"
  },
  {
    name: "Juan Baeza",
    title: "Warehouse 2",
    team: "Movers",
    email: "baezaj@hsd.k12.or.us",
    headshotURL: "/baezaj.jpg"
  }
];

