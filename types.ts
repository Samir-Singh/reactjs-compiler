export interface CountContextType {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
