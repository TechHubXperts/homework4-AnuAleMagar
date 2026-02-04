import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Task 1: Input and Submit Button', () => {
  it('should render the app title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /simple notes/i })).toBeInTheDocument();
  });

  it('should render input field', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should render submit button', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('should have input field that can be typed into', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });
});
