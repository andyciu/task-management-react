import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiUserGetNickName } from "../../apis/user";

interface userState {
  isLogin: boolean;
  nickname: string;
}

const initialState: userState = {
  isLogin: false,
  nickname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setNickName: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
  },
});

const InitUserNickNameData = async (dispatch: Function) => {
  const data = await ApiUserGetNickName();
  if (data.content && data.content.name) {
    dispatch(setNickName(data.content.name));
  }
};

// Action creators are generated for each case reducer function
export const { setLogin, setNickName } = userSlice.actions;
export { InitUserNickNameData };
export default userSlice.reducer;
