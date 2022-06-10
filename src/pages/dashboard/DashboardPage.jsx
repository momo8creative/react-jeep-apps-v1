import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <div>DashboardPage</div>
      <Link to="/pemakaian/add">Tambah Pemakaian</Link>
    </div>
  );
};

export default DashboardPage;
