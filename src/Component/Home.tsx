import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import Gettable from "./Gettable";
import FormModel from "./Formview";
import { IcrudData } from "./Datatype";

// getting value from localstorage

const getDataform = () => {
  const List = localStorage.getItem("adminData");

  if (List) {
    return JSON.parse(List);
  } else {
    return [];
  }
};

export default function Home() {
  const [adminData, setAdmindata] = useState<IcrudData[]>(getDataform);
  const [showForm, setShowform] = useState(false);
  const [editData, setEditData] = useState<IcrudData | null>(null);

  const handleShowform = () => {
    setShowform(true);
  };

  const fromClosebtn = () => {
    setShowform(false);
    setEditData(null);
  };

  const addDataontable = (addData: IcrudData) => {
    setAdmindata([...adminData, addData]);
    setShowform(false);
  };

  // store data on localstorage
  useEffect(() => {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }, [adminData]);

  const onDeletedata = (id: number) => {
    const listData = [...adminData];
    const filterData = listData.filter((element) => {
      return element.id !== id;
    });
    setAdmindata(filterData);
    localStorage.setItem("adminData", JSON.stringify(filterData));
  };

  const onEditdata = (item: IcrudData) => {
    setEditData({ ...item });
    setShowform(true);
  };

  const addEditData = (newData: IcrudData) => {
    let adminDataCopy = [...adminData];
    const index = adminDataCopy.findIndex((element) => {
      return element.id === newData.id;
    });
    if (index !== -1) {
      adminDataCopy[index] = newData;
      setAdmindata(adminDataCopy);
      localStorage.setItem("adminData", JSON.stringify(adminDataCopy));
      setShowform(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="Button_part mt-5">
        <Button variant="contained" onClick={handleShowform}>
          Add New
        </Button>

        <Gettable
          getData={adminData}
          handleDelete={onDeletedata}
          handleEdit={onEditdata}
        />

        {showForm && (
          <FormModel
            handleClosebtn={fromClosebtn}
            editData={editData}
            handleAdd={addDataontable}
            handleEdit={addEditData}
          />
        )}
      </div>
    </div>
  );
}
