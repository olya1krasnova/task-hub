import { Search } from 'lucide-react';

interface Props {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const SearchField = ({ placeholder = 'Search...', value, onChange }: Props) => {
  return (
    <div className="flex items-center w-full max-w-sm px-4 py-2 bg-background rounded-full shadow">
      <Search size={20} className="text-neutral-500 mr-2" />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        className="w-full bg-transparent focus:outline-none text-sm placeholder:text-neutral-400 text-neutral-800"
      />
    </div>
  );
};

export default SearchField;
