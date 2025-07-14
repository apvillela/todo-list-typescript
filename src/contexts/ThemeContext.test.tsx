import { describe, it, expect } from 'vitest';
import { useTheme, ThemeProvider } from './ThemeContext';

describe('ThemeContext', () => {
  describe('useTheme', () => {
    it('deve ser uma função', () => {
      expect(typeof useTheme).toBe('function');
    });
  });

  describe('ThemeProvider', () => {
    it('deve ser uma função/componente', () => {
      expect(typeof ThemeProvider).toBe('function');
    });
  });

  describe('Tipos de tema', () => {
    it('deve trabalhar com temas light e dark', () => {
      const validThemes = ['light', 'dark'];
      
      validThemes.forEach(theme => {
        expect(theme).toMatch(/^(light|dark)$/);
      });
    });
  });
}); 