import Stack from "@mui/material/Stack";

import type { Dispatch, SetStateAction } from "react";

import { categories, type Category } from "../utils/constants";

interface Props {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<Category>>;
}

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(category => (
        <button
          type="button"
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? "#fc1503" : "",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: 15,
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? 1 : 0.8,
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}
