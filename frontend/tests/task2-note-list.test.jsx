import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('Task 2: Notes List Display', () => {
  it('should show empty state when no notes exist', () => {
    render(<App />);
    expect(screen.getByText(/no notes yet/i)).toBeInTheDocument();
  });

  it('should display notes in a list after submission', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    await user.type(input, 'Test Note 1');
    await user.click(submitButton);
    
    expect(screen.getByText('Test Note 1')).toBeInTheDocument();
    expect(screen.queryByText(/no notes yet/i)).not.toBeInTheDocument();
  });

  it('should display multiple notes in the list', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    await user.type(input, 'First Note');
    await user.click(submitButton);
    
    await user.type(input, 'Second Note');
    await user.click(submitButton);
    
    expect(screen.getByText('First Note')).toBeInTheDocument();
    expect(screen.getByText('Second Note')).toBeInTheDocument();
  });
});
