import React, { useState } from "react";

const Tes = () => {
  const [dataProductEdit, setDataProductEdit] = useState([]);

  const editKategoriId = kategori => {
    if (kategori === "Ikan Air Tawar") {
      return () => {
        setDataProductEdit({ ...dataProductEdit, kategoriId: "1" });
        return "1";
      };
    } else if (kategori === "Ikan Air Laut") {
      return () => {
        setDataProductEdit({ ...dataProductEdit, kategoriId: "2" });
        return "2";
      };
    } else if (kategori === "Aquarium") {
      return () => {
        setDataProductEdit({ ...dataProductEdit, kategoriId: "3" });
        return "3";
      };
    } else if (kategori === "Utilities") {
      return () => {
        setDataProductEdit({ ...dataProductEdit, kategoriId: "4" });
        return "4";
      };
    }
  };

  console.log(editKategoriId("Ikan Air Tawar"));
  return <p>tes</p>;
};

export default Tes;
