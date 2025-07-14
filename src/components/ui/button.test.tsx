import { describe, it, expect } from 'vitest';
import { buttonVariants } from './button';

describe('Componente Button', () => {
  describe('buttonVariants', () => {
    it('deve gerar classes corretas para o botão padrão', () => {
      const classes = buttonVariants();
      expect(classes).toContain('bg-primary');
      expect(classes).toContain('text-primary-foreground');
    });

    it('deve gerar classes corretas para botão destrutivo', () => {
      const classes = buttonVariants({ variant: 'destructive' });
      expect(classes).toContain('bg-destructive');
      expect(classes).toContain('text-white');
    });

    it('deve gerar classes corretas para botão outline', () => {
      const classes = buttonVariants({ variant: 'outline' });
      expect(classes).toContain('border');
      expect(classes).toContain('bg-background');
    });

    it('deve gerar classes corretas para tamanho pequeno', () => {
      const classes = buttonVariants({ size: 'sm' });
      expect(classes).toContain('h-8');
    });

    it('deve gerar classes corretas para tamanho grande', () => {
      const classes = buttonVariants({ size: 'lg' });
      expect(classes).toContain('h-10');
    });

    it('deve ter as classes básicas', () => {
      const classes = buttonVariants();
      expect(classes).toContain('inline-flex');
      expect(classes).toContain('rounded-md');
    });
  });
}); 