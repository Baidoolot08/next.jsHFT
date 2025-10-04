import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductItem } from "../ui/product";

export const fetchNfts = createAsyncThunk<ProductItem[]>(
  "nfts/fetchNfts",
  async (): Promise<ProductItem[]> => {
    const res = await axios.get(
      "https://api-crud.elcho.dev/api/v1/9d5ef-9f8fd-517e7/Book"
    );

    const raw = res.data.data[0];

    const products = Object.keys(raw)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => raw[key]);

    return products.map(
      (item): ProductItem => ({
        id: item.id,
        image: item.image ?? "/placeholder.png",
        title: item.title ?? item.name ?? "No title",
        category: item.category ?? "Uncategorized",
        rating: item.rating ?? 0,
        price: item.price ?? 0,
      })
    );
  }
);

const Slice = createSlice({
  name: "product",
  initialState: {
    items: [] as ProductItem[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNfts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default Slice.reducer;
