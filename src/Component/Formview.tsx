import React, { useEffect, useState } from "react";
import "./Crud.style.css";
import { Button } from "@mui/material";
import { IcrudData } from "./Datatype";

type fromProps = {
  handleClosebtn: () => void;
  editData: IcrudData | null;
  handleAdd: (addData: IcrudData) => void;
  handleEdit: (newData: IcrudData) => void;
};

export default function FormModel(props: fromProps) {
  const { handleClosebtn, editData, handleAdd, handleEdit } = props;

  const [userName, setuserName] = useState(editData?.userName);
  const [passWord, setpassWord] = useState(editData?.passWord);
  const [emailId, setemailId] = useState(editData?.emailId);

  // unique ID
  const uId = Math.floor(Math.random() * 1000000 + 1);

  // Add new data &  Update data
  const handleSubmitform = (e: any) => {
    e.preventDefault();
    const addData: any = {
      // key : value
      id: uId,
      userName: userName,
      passWord: passWord,
      emailId: emailId,
    };
    if (editData) {
      let newData  = { ...addData, id: editData.id };
      handleEdit(newData);
    } else {
      handleAdd(addData);
    }
    setuserName("");
    setpassWord("");
    setemailId("");
  };



  return (
    <div>
      <form
        className="table-part table_content shadow p-5 mt-5"
        onSubmit={handleSubmitform}
      >
        <Button
          sx={{ marginLeft: 50, marginTop: -6, fontSize: 26 }}
          onClick={handleClosebtn}
        >
          &times;
        </Button>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={userName}
            onChange={(e: any) => setuserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={passWord}
            onChange={(e: any) => setpassWord(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={emailId}
            onChange={(e: any) => setemailId(e.target.value)}
          />
        </div>

        <Button type="submit" variant="contained">
          Add Person
        </Button>
      </form>
    </div>
  );
}
