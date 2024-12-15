'use client';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './DomainInput.module.scss';

interface DomainSearchInputProps {
  onDomainChange?: (domain: string) => void;
  onSubmit?: (domain: string) => void;
  initialValue?: string;
  placeholder?: string;
  ariaLabel?: string;
}

const DomainSearchInput: FC<DomainSearchInputProps> = ({
  onDomainChange,
  onSubmit,
  initialValue = '',
  placeholder = 'Write a domain',
  ariaLabel = 'Domain search input',
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onDomainChange?.(newValue);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form
      className={styles.container}
      role="search"
      onSubmit={handleSubmit}
      aria-label="Search for domain"
    >
      <img
        loading="lazy"
        src="/images/icons/search.svg"
        className={styles.icon}
        alt="Search Icon"
      />
      <label htmlFor="domainSearchInput" className={styles.srOnly}>
        Enter domain name
      </label>
      <input
        type="text"
        id="domainSearchInput"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        autoComplete="off"
        spellCheck="false"
      />
    </form>
  );
};

export default DomainSearchInput;
