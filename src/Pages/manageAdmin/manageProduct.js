import React, { useState, useEffect } from "react"; //useRef
import Axios from "axios";
import { Table, Input, Button } from "reactstrap";
import { API, APIIMAGE } from "../../API";
import Modal from "../../components/Modal";

function ManageProduct() {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataProductEdit, setDataProductEdit] = useState([]);
  const [dataProductDelete, setDataProductDelete] = useState([]);

  const [modalAdd, setModalAdd] = useState(false);
  const toggleModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const [addImage, setaddImage] = useState({
    addImageFileName: "Select Image..",
    addImageFile: undefined
  });

  const [editImage, seteditImage] = useState({
    editImageFileName: "Select Image..",
    editImageFile: undefined
  });

  const [modalEdit, setModaledit] = useState(false);
  const toggleModalEdit = () => {
    setModaledit(!modalEdit);
  }; // togel yang ini utk modal editnya

  const [modalDelete, setmodalDelete] = useState(false);
  const togglemodalDelete = () => {
    setmodalDelete(!modalDelete);
  };

  const toggleDataEdit = i => {
    // toggle yang ini untuk dapetin data yang ingin di edit
    setDataProductEdit(dataProduct[i]);
    setModaledit(!modalEdit);
  };

  const toggleDataDelete = i => {
    // toggle yang ini untuk dapetin data yang ingin di delete
    setDataProductDelete(dataProduct[i]);
    setmodalDelete(!modalDelete);
  };

  const [addData, setAddData] = useState({});
  const handleAddData = e => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };

  useEffect(() => {
    Axios.get(`${API}/data_product/product`)
      .then(res => {
        // console.log("res", res);

        setDataProduct(res.data.dataProduct);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //function add image
  const onAddImageFileChange = event => {
    console.log(event.target.files[0]);
    var file = event.target.files[0];
    if (file) {
      setaddImage({
        ...addImage,
        addImageFileName: file.name,
        addImageFile: event.target.files[0]
      });
    } else {
      setaddImage({
        ...addImage,
        addImageFileName: "Select Image...",
        addImageFile: undefined
      });
    }
  };

  // function edit image
  const onEditImageFileChange = event => {
    console.log(event.target.files[0]);
    var file = event.target.files[0];
    if (file) {
      seteditImage({
        ...editImage,
        editImageFileName: file.name,
        editImageFile: event.target.files[0]
      });
    } else {
      seteditImage({
        ...editImage,
        editImageFileName: "Select Image...",
        editImageFile: undefined
      });
    }
  };

  // FUNCTION ADD Product
  const addProduct = () => {
    var formdata = new FormData();

    // const {
    //   nama,
    //   harga,
    //   deskripsiAwal,
    //   kategoriId,
    //   stock,
    //   deskripsiFull,
    //   newArrival
    // } = addData;
    // const data = {
    //   nama: nama.current.value,
    //   harga: harga.current.value,
    //   deskripsiAwal: deskripsiAwal.current.value,
    //   kategoriId: kategoriId.current.value,
    //   stock: stock.current.value,
    //   deskripsiFull: deskripsiFull.current.value,
    //   newArrival: newArrival.current.value
    // };
    var Headers = {
      // Headers adalah config axios, untuk memberi tahu ada file yang ingin di upload melalui 'Content-Type':'multipart/form-data'
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    console.log(addData);
    formdata.append("image", addImage.addImageFile);
    formdata.append("data", JSON.stringify(addData));

    Axios.post(`${API}/data_product/addProduct`, formdata, Headers)
      .then(res => {
        setDataProduct(res.data.dataProduct);
        console.log(res);
        // setModalAdd(!modalAdd);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // FUNCTION RENDER KATEGORI_ID EDIT
  const editKategoriId = kategori => {
    switch (kategori) {
      case "Ikan Air Tawar":
        return "1";
      case "Ikan Air Laut":
        return "2";
      case "Aquarium":
        return "3";
      case "Utilities":
        return "4";
      default:
        break;
    }
  };

  // FUNCTION EDIT USER
  const editUser = () => {
    var formdata = new FormData();

    const data = {
      nama: dataProductEdit.nama,
      harga: dataProductEdit.harga,
      deskripsiAwal: dataProductEdit.deskripsiAwal,
      stock: dataProductEdit.stock,
      deskripsiFull: dataProductEdit.deskripsiFull,
      newArrival: dataProductEdit.newArrival,
      kategoriId: dataProductEdit.editKategoriId
    };
    data.kategoriId = dataProductEdit.editkategoriId;

    var Headers = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    formdata.append("image", editImage.editImageFile);
    formdata.append("data", JSON.stringify(data));

    Axios.put(
      `${API}/data_product/editProduct/${dataProductEdit.id}`,
      formdata,
      Headers
    )
      .then(res => {
        setDataProduct(res.data.dataProduct);
        setModaledit(!modalEdit);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // FUNCTION DELETE USER
  const deleteUser = () => {
    Axios.delete(`${API}/data_product/product/${dataProductDelete.id}`)
      .then(res => {
        setDataProduct(res.data.dataProduct);
        setmodalDelete(!modalDelete);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // MENAMPILKAN DAFTAR USER
  const renderUser = () => {
    return dataProduct.map((val, i) => {
      return (
        <tr key={i}>
          <th>{i + 1}</th>
          <td>{val.nama}</td>
          <td>{val.harga}</td>
          <td>{val.deskripsiAwal}</td>
          <td>{val.stock}</td>
          <td>{val.deskripsiFull}</td>
          <td>{val.newArrival}</td>
          <td>{val.kategori}</td>
          <td>
            <img
              src={`${APIIMAGE + val.colomImage}`}
              height="50px"
              alt={val.nama}
            />
          </td>
          <td>
            <Button
              onClick={() => toggleDataEdit(i)}
              className="mr-3 btn btn-blue"
            >
              edit
            </Button>
            {/* ketika modal yg terbuka itu cuma id yg di klik saja  */}
            <Button
              onClick={() => toggleDataDelete(i)}
              className="btn btn-blue"
            >
              {" "}
              delete{" "}
            </Button>
          </td>
        </tr>
      );
    });
  };

  // if (dataProduct.length === 0) {
  //   return <div> Loading... </div>;
  // }

  return (
    <div className="App">
      {/* modal add */}
      <Modal
        buttonName="ADD"
        title="Add Product"
        toggle={toggleModalAdd}
        modal={modalAdd}
        actionFunc={addProduct}
      >
        <Input
          className="mb-3"
          type="text"
          placeholder="input nama"
          name="nama"
          onChange={handleAddData}
        />
        <Input
          className="mb-3"
          type="text"
          placeholder="input harga"
          name="harga"
          onChange={handleAddData}
        />
        <Input
          className="mb-3"
          type="text"
          placeholder="input deskripsiAwal"
          name="deskripsiAwal"
          onChange={handleAddData}
        />
        <Input
          className="mb-3"
          type="text"
          placeholder="input kategoriId "
          name="kategoriId"
          onChange={handleAddData}
        />
        <p> 1:Ikan Air Tawar 2:Ikan Air Laut 3:Aquarium 4:utilities </p>
        <Input
          className="mb-3"
          type="text"
          placeholder="input stock"
          name="stock"
          onChange={handleAddData}
        />
        <Input
          className="mb-3"
          type="text"
          placeholder="input deskripsiFull"
          name="deskripsiFull"
          onChange={handleAddData}
        />
        <Input
          className="mb-3"
          type="text"
          placeholder="input new arrival"
          name="newArrival"
          onChange={handleAddData}
        />
        <Input
          className="mb-3"
          type="file"
          placeholder="input image"
          name="colomImage"
          onChange={onAddImageFileChange}
        />
      </Modal>

      {/* modal edit */}
      <Modal
        buttonName="SAVE"
        title="Edit User"
        toggle={toggleModalEdit}
        modal={modalEdit}
        actionFunc={editUser}
      >
        <Input
          className="mb-3"
          type="text"
          placeholder="input nama"
          // defaultValue={dataProductEdit.nama}
          value={dataProductEdit.nama}
          onChange={e =>
            setDataProductEdit({ ...dataProductEdit, userName: e.target.value })
          }
        />
        <Input
          type="number"
          placeholder="input harga"
          // defaultValue={dataProductEdit.harga}
          value={dataProductEdit.harga}
          onChange={e =>
            setDataProductEdit({ ...dataProductEdit, harga: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="input deskripsi awal"
          // defaultValue={dataProductEdit.deskripsiAwal}
          value={dataProductEdit.deskripsiAwal}
          onChange={e =>
            setDataProductEdit({
              ...dataProductEdit,
              deskripsiAwal: e.target.value
            })
          }
        />
        <Input
          type="number"
          placeholder="input kategoriId"
          defaultValue={editKategoriId(dataProductEdit.kategori)}
          // value={editKategoriId(dataProductEdit.kategori)}
          onChange={e =>
            setDataProductEdit({
              ...dataProductEdit,
              editkategoriId: e.target.value
            })
          }
        />
        <Input
          type="text"
          placeholder="input stock"
          // defaultValue={dataProductEdit.stock}
          value={dataProductEdit.stock}
          onChange={e =>
            setDataProductEdit({ ...dataProductEdit, stock: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="input deskripsi full"
          // defaultValue={dataProductEdit.deskripsiFull}
          value={dataProductEdit.deskripsiFull}
          onChange={e =>
            setDataProductEdit({
              ...dataProductEdit,
              deskripsiFull: e.target.value
            })
          }
        />
        <Input
          type="text"
          placeholder="input new arrival"
          // defaultValue={dataProductEdit.newArrival}
          value={dataProductEdit.newArrival}
          onChange={e =>
            setDataProductEdit({
              ...dataProductEdit,
              newArrival: e.target.value
            })
          }
        />
        <input
          type="file"
          label={editImage.editImageFileName}
          id="addImagePost"
          onChange={onEditImageFileChange}
          className="mt-3"
        />
      </Modal>

      {/* modal delete */}
      <Modal
        buttonName="delete"
        title="Delete User"
        toggle={togglemodalDelete}
        modal={modalDelete}
        actionFunc={deleteUser}
      >
        Are you sure?
      </Modal>

      <Button onClick={toggleModalAdd} className="btn btn-blue my-3">
        Add Data
      </Button>
      <Table className="w-75 mx-auto" striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Deskripsi Awal</th>
            <th>Stock </th>
            <th>Deskripsi Full</th>
            <th>New Arrival</th>
            <th>kategori</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderUser()}</tbody>
      </Table>
    </div>
  );
}

export default ManageProduct;
