import { ChangeEvent, FC } from 'react';
import { FormGroup } from '../../components/FormGroup';
import { Input } from '../../components/Input';

export const SearchForm: FC<{ searchValue: string; onChange: (event: string) => void }> = ({
  searchValue,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="w-1/3">
      <FormGroup label="Search" name="search">
        <Input
          name="search"
          id="search"
          value={searchValue}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search..."
        />
      </FormGroup>
    </div>
  );
};
