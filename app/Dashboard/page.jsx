import Dashboard from "../../app/component/Dashboard";

export async function generateMetadata() {
  return {
    title: "Dashboard",
    description: "Halaman Dashboard.",
  };
}

export default function HalamanDashboard() {
  return <Dashboard />;
}