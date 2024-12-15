import SearchBar from '@/components/SearchBar/SearchBar';
import { Chain, chains } from '@/types/chain';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ChainSelector.module.scss';

interface ChainSelectorProps {
  onSelect?: (chain: Chain) => void;
}

const ChainSelector: React.FC<ChainSelectorProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredChains = chains.filter((chain) =>
    chain.chainName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (chain: Chain) => {
    setSelectedChain(chain);
    setIsOpen(false);
    setSearchTerm('');
    onSelect?.(chain);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={`${styles.selector} ${isOpen ? styles.selectorOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.selectorText}>
          {selectedChain?.chainName || 'Select chain'}
        </span>
        {selectedChain?.icon && (
          <img
            loading="lazy"
            src={selectedChain.icon}
            className={styles.selectorIcon}
            alt={selectedChain.chainName}
          />
        )}
      </button>

      {isOpen && (
        <div className={styles.dropdownContent}>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search..."
          />

          <div className={styles.optionsList}>
            {filteredChains.length > 0 ? (
              <>
                {!searchTerm && (
                  <button
                    className={styles.option}
                    onClick={() =>
                      handleSelect({
                        chainId: 0,
                        chainName: 'All chains',
                      })
                    }
                  >
                    <span>All chains</span>
                  </button>
                )}
                {filteredChains.map((chain) => (
                  <button
                    key={chain.chainId}
                    className={styles.option}
                    onClick={() => handleSelect(chain)}
                  >
                    <span>{chain.chainName}</span>
                    <img
                      loading="lazy"
                      src={chain.icon}
                      className={styles.optionIcon}
                      alt={chain.chainName}
                    />
                  </button>
                ))}
              </>
            ) : (
              <div className={styles.noResults}>
                There are no chains that match your search. Try with a different
                term.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChainSelector;
