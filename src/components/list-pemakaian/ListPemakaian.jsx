import { Link } from "react-router-dom";
import { usePemakaianContext } from "../../contexts/PemakaianContext";
import {
  getDate,
  getDateTimeAgo,
  getHalfMonth,
  getYear,
} from "../../utils/DateTime";
import {
  SList,
  SListActionButton,
  SListContainer,
  SListItem,
  SListItemAction,
  SListItemLeft,
  SListItemRight,
} from "./Styles";

const ListPemakaian = () => {
  const { pemakaians } = usePemakaianContext();

  return (
    <SListContainer>
      {pemakaians.map((data, i) => (
        <SList key={i}>
          <SListItemLeft>
            <h2>
              {getDate(data.tgl_berangkat)}-{getDate(data.tgl_kembali)}
            </h2>
            <div>
              {getHalfMonth(data.tgl_berangkat)} {getYear(data.tgl_berangkat)}
            </div>
          </SListItemLeft>

          <SListItem>
            <div>{data.keperluan}</div>
            <div>{data.tujuan}</div>
            <small>Santoso, {getDateTimeAgo(data.created_on)} lalu</small>
          </SListItem>

          <SListItemRight>
            <div>Km Akhir</div>
            <h2>{data.km_akhir}</h2>
          </SListItemRight>

          <SListItemAction>
            <SListActionButton variant="primary">
              <Link to={`detail/${data._id}`}>Tampilkan</Link>
            </SListActionButton>
            <SListActionButton variant="warning">
              <Link to={`edit/${data._id}`}>Ubah</Link>
            </SListActionButton>
            <SListActionButton variant="danger">Hapus</SListActionButton>
          </SListItemAction>
        </SList>
      ))}
    </SListContainer>
  );
};

export default ListPemakaian;
