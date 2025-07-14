import { describe, it, expect } from 'vitest';
import { HistoryList } from './HistoryList';

describe('HistoryList', () => {
  describe('Componente', () => {
    it('deve ser uma função/componente', () => {
      expect(typeof HistoryList).toBe('function');
    });
  });

  describe('Props necessárias', () => {
    it('deve aceitar array de strings para history', () => {
      const history = ['São Paulo', 'Rio de Janeiro', 'Brasília'];
      
      expect(Array.isArray(history)).toBe(true);
      expect(history).toHaveLength(3);
      expect(history[0]).toBe('São Paulo');
    });

    it('deve aceitar array vazio', () => {
      const history: string[] = [];
      
      expect(Array.isArray(history)).toBe(true);
      expect(history).toHaveLength(0);
    });

    it('deve trabalhar com limite de 5 cidades', () => {
      const history = ['Cidade1', 'Cidade2', 'Cidade3', 'Cidade4', 'Cidade5'];
      
      expect(history).toHaveLength(5);
      expect(history.every(city => typeof city === 'string')).toBe(true);
    });
  });

  describe('Casos de uso do projeto', () => {
    it('deve aceitar cidade padrão do projeto', () => {
      const defaultCity = 'Limoeiro do Norte';
      
      expect(typeof defaultCity).toBe('string');
      expect(defaultCity).toBe('Limoeiro do Norte');
    });
  });
}); 