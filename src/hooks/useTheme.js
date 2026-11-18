import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context.js';

export default function useTheme() {
  return useContext(ThemeContext);
}
