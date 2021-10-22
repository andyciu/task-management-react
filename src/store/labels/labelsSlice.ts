import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiLabelsList } from "../../apis/labels";
import { LabelsListRes } from "../../interface/labels";

interface LabelsState {
  value: LabelsListRes[];
}

const initialState: LabelsState = {
  value: [],
};

export const labelsSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {
    writeData: (state, action: PayloadAction<LabelsListRes[]>) => {
      state.value = action.payload;
    },
  },
});

const InitLabelsSliceData = async (dispatch: Function) => {
  // console.log('InitLabelsSliceData')
  const data = await ApiLabelsList();
  dispatch(writeData(data.content));
};

// Action creators are generated for each case reducer function
export const { writeData } = labelsSlice.actions;
export { InitLabelsSliceData };
export default labelsSlice.reducer;
