export interface CountContextType {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
