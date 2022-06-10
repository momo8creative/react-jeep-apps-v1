import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ModalAlert from "../components/modal-alert/ModalAlert";
import Toast from "../components/toast/Toast";
import useAlert from "../hooks/useAlert";
import useFetch from "../hooks/useFetch";
import { useAuthContext } from "./AuthContext";

const URL_API = import.meta.env.VITE_URL_API_PEMAKAIAN;
const PemakaianContext = createContext();
export const usePemakaianContext = () => useContext(PemakaianContext);

const PemakaianContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [pemakaians, setPemakaians] = useState();
  const [lastPemakaian, setLastPemakaian] = useState();
  const [pemakaianById, setPemakaianById] = useState();

  const [filterPemakaian, setFilterPemakaian] = useState({
    bulan: new Date().getMonth() + 1,
    tahun: new Date().getFullYear(),
  });

  const { isLoad, isResponse, fetchData } = useFetch();

  const { alertValue, openAlert, closeAlert } = useAlert();

  const pemakaianApi = {
    get: async (sheet, filter) => {
      const result = await fetchData({
        url: URL_API,
        action: "read",
        sheet,
        filter,
      });

      if (result.error) return;
      setPemakaians(result);
      return;
    },

    getLast: async (sheet) => {
      const result = await fetchData({
        url: URL_API,
        action: "read-last",
        sheet,
      });

      if (result.error) return;

      setLastPemakaian(result);
      return result;
    },

    getById: async (sheet, filter) => {
      const result = await fetchData({
        url: URL_API,
        action: "read-by-id",
        sheet,
        filter,
      });

      if (result.error) return;
      setPemakaianById(result);
      return result;
    },

    post: async (sheet, data, callback) => {
      data["_id"] = uuidv4();
      data["created_by"] = user.name;
      const result = await fetchData({
        url: URL_API,
        action: "insert",
        sheet,
        data,
      });

      if (result.error) return;
      openAlert(
        ["success", "Berhasil menambah data pemakaian baru !"],
        callback
      );
      return result;
    },

    update: async (sheet, data, callback) => {
      data["updated_by"] = user.name;
      const result = await fetchData({
        url: URL_API,
        action: "update",
        sheet,
        data,
      });
      openAlert(["success", "Berhasil ubah pemakaian !"], callback);

      if (result.error) return alert(`Error -> ${result.message}`);
      return result;
    },
  };

  return (
    <PemakaianContext.Provider
      value={{
        pemakaians,
        lastPemakaian,
        pemakaianApi,
        pemakaianById,
        filterPemakaian,
        setFilterPemakaian,
      }}
    >
      {isLoad && <Toast response={isResponse} />}

      {alertValue && <ModalAlert data={alertValue} onClose={closeAlert} />}

      {children}
    </PemakaianContext.Provider>
  );
};

export default PemakaianContextProvider;
