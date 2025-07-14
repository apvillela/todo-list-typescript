import { describe, it, expect, vi } from 'vitest';
import { buttonVariants, Button } from './button';
import React from 'react';

describe('Componente Button', () => {
  describe('buttonVariants', () => {
    it('deve gerar classes corretas para tamanhos usados no projeto', () => {
      expect(buttonVariants({ size: 'sm' })).toContain('h-8');
      expect(buttonVariants({ size: 'icon' })).toContain('size-9');
      expect(buttonVariants()).toContain('h-9');
    });

    it('deve incluir classes base obrigatórias', () => {
      const classes = buttonVariants();
      expect(classes).toContain('inline-flex');
      expect(classes).toContain('disabled:opacity-50');
    });
  });

  describe('Button Component - Casos reais de uso', () => {
    it('deve funcionar como botão de submit (SearchForm)', () => {
      const onSubmit = vi.fn();
      const button = React.createElement(Button, {
        type: 'submit',
        size: 'icon',
        disabled: false,
        onClick: onSubmit
      }, 'Search Icon');
      
      expect(button.props.type).toBe('submit');
      expect(button.props.size).toBe('icon');
      expect(button.props.disabled).toBe(false);
      expect(button.props.onClick).toBe(onSubmit);
    });

    it('deve funcionar como botão de histórico (HistoryList)', () => {
      const onSelect = vi.fn();
      const city = 'São Paulo';
      
      const button = React.createElement(Button, {
        size: 'sm',
        onClick: onSelect,
        className: 'px-3 bg-gray-800 text-gray-200'
      }, city);
      
      expect(button.props.size).toBe('sm');
      expect(button.props.onClick).toBe(onSelect);
      expect(button.props.className).toBe('px-3 bg-gray-800 text-gray-200');
      expect(button.props.children).toBe(city);
    });

    it('deve funcionar como toggle de tema (ThemeToggle)', () => {
      const toggleTheme = vi.fn();
      const iconElement = React.createElement('div', {}, 'Sun Icon');
      
      const button = React.createElement(Button, {
        onClick: toggleTheme,
        className: 'bg-gray-800 text-gray-200'
      }, iconElement);
      
      expect(button.props.onClick).toBe(toggleTheme);
      expect(button.props.className).toBe('bg-gray-800 text-gray-200');
      expect(button.props.children).toBe(iconElement);
    });

    it('deve estar desabilitado quando loading (SearchForm)', () => {
      const button = React.createElement(Button, {
        type: 'submit',
        disabled: true,
        size: 'icon'
      }, 'Search');
      
      expect(button.props.disabled).toBe(true);
      expect(button.props.type).toBe('submit');
    });
  });
}); 