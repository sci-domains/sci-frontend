import { cn } from '@/lib/utils';
import React, { FormEvent } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
  onSubmit,
  className,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      e.preventDefault();
      onSubmit(value);
    }
  };

  return (
    <form
      className={cn(styles.searchContainer, className)}
      role="search"
      onSubmit={handleSubmit}
    >
      <img
        loading="lazy"
        src="/images/icons/search.svg"
        className={styles.icon}
        alt="Search Icon"
      />
      <input
        type="search"
        className={styles.searchInput}
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default SearchBar;
