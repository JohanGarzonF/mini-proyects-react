import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
export const FilterContext = createContext()

// Este es el que nos provee el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
