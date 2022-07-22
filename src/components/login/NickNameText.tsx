import { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hook";
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
      <Navbar.Text>Signed in as: {nickName}</Navbar.Text>
      <Button
        variant="secondary"
        onClick={() => {
          localStorage.removeItem("token");
          dispatch(setLogin(false));
          dispatch(setNickName(""));
        }}
      >
        LogOut
      </Button>
    </>
  );
};

export { NickNameText };
