import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import { Category } from '../../types';

interface CategorySelectComponentI {
  inputRef: React.RefObject<HTMLInputElement | null>;
  defaultValue: Category;
  categories: Category[];
}

const CategorySelectComponent: React.FC<CategorySelectComponentI> = ({ inputRef, defaultValue = Category.ACTION, categories }) => (
  <NativeSelect
    fullWidth
    defaultValue={defaultValue}
    inputProps={{
      name: 'category',
      id: 'category',
    }}
    inputRef={inputRef}
  >
    {categories.map((item: Category, i: number) => (
      <option key={`category-${i}`} value={item}>
        {item}
      </option>
    ))}
  </NativeSelect>
);

export default CategorySelectComponent;
