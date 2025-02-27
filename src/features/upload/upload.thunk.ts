import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadMultiAPI, uploadSingleAPI } from "./upload.api";
import { RcFile } from "antd/es/upload";


export const uploadSingle = createAsyncThunk(
    'upload/uploadSingle',
    async (file: File | RcFile, {rejectWithValue}) => {
        try {
            return uploadSingleAPI(file)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const uploadMulti = createAsyncThunk(
    'upload/uploadMulti',
    async (files: File[] | RcFile[], {rejectWithValue}) => {
        try {
            return uploadMultiAPI(files)
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

