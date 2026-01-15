import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios-api";

export type Fanart = {
    id: string;
    title: string;
    artist: string;
    image_path: string;
    uploader: string;
    creation_date: string;
}

export type CreatePostResponse = 
    | {success: true, message: string, image: string, id: string}
    | {success: false, error: string };

export type PostApiResponse = 
    | {success: true, data: Fanart}
    | {success: false, error: string };

type FanartState = {
    items: Fanart[];
    loading: boolean;
    error: string | null;
}

const initialState: FanartState = {
    items: [],
    loading: false,
    error: null
}

export const fetchFanarts = createAsyncThunk(
    "fanart/fetchFanarts",
    async () => {
        const res = await api.get<Fanart[]>("/posts");
        return res.data;
    }
)

export const uploadFanart = createAsyncThunk<
    {id: string}, // Return type
    {title: string; artist: string; image: File; uploaderId: string} // Input type
>(
    "fanart/uploadFanart",
    async (payload) => {
        const formData = new FormData();
        formData.append("title", payload.title);
        formData.append("artist", payload.artist);
        formData.append("image", payload.image);
        formData.append("uploaderId", payload.uploaderId);

        const res = await api.post<CreatePostResponse>("/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        if (!res.data.success) {
            throw new Error(res.data.error)
        }

        return {
            id: res.data.id
        }
    }
)

const fanartSlice = createSlice({
    name: "fanart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // Fetch Fanart Section
        .addCase(fetchFanarts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchFanarts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchFanarts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch fanarts";
        })
        // Upload Fanart Section
        .addCase(uploadFanart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(uploadFanart.fulfilled, (state) => {
            state.loading = false;
            //state.items.unshift(action.payload.post)
        })
        .addCase(uploadFanart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to upload fanart";
        })
    }
})

export default fanartSlice.reducer;