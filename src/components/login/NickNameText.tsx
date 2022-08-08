import { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { writeData } from "../../store/labels/labelsSlice";
import {
  InitUserNickNameData,
  setLogin,
  setNickName,
} from "../../store/user/userSlice";

const NickNameText = () => {
  const dispatch = useAppDispatch();
  const nickName = useAppSelector((state) => state.user.nickname);

  useEffect(() => {
    if (nickName) {
    } else {
      InitUserNickNameData(dispatch);
    }
  }, []);

  return (
    <>
      <Navbar.Text>Signed in as: {nickName}&nbsp;&nbsp;</Navbar.Text>
      <Button
        variant="secondary"
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(setLogin(false));
          dispatch(setNickName(""));
          dispatch(writeData([]));
        }}
      >
        LogOut
      </Button>
    </>
  );
};

export { NickNameText };
