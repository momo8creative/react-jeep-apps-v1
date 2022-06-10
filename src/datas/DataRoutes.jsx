import Layout from "../components/layout/Layout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import AddPemakaianPage from "../pages/pemakaian/AddPemakaianPage";
import DetailPemakaianPage from "../pages/pemakaian/DetailPemakaianPage";
import EditPemakaianPage from "../pages/pemakaian/EditPemakaianPage";
import ViewPemakaianPage from "../pages/pemakaian/ViewPemakaianPage";

const DataRoutes = () => {
  const data = [
    {
      path: "/",
      element: <Layout />,
      list: [{ path: "", element: <DashboardPage /> }],
    },
    {
      path: "/pemakaian",
      element: <Layout />,
      list: [
        { path: "", element: <ViewPemakaianPage /> },
        { path: "add", element: <AddPemakaianPage /> },
        { path: "edit/:_id", element: <EditPemakaianPage /> },
        { path: "detail/:_id", element: <DetailPemakaianPage /> },
      ],
    },
  ];
  return { data };
};

export default DataRoutes;
