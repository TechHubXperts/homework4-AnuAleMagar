import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('Task 3: Note Display', () => {
  it('should display note text correctly in the list', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    await user.type(input, 'My test note content');
    await user.click(submitButton);
    
    const noteElement = screen.getByText('My test note content');
    expect(noteElement).toBeInTheDocument();
  });

  it('should display each note in a separate container', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    await user.type(input, 'Note One');
    await user.click(submitButton);
    
    await user.type(input, 'Note Two');
    await user.click(submitButton);
    
    expect(screen.getByText('Note One')).toBeInTheDocument();
    expect(screen.getByText('Note Two')).toBeInTheDocument();
    
    // Verify they are separate elements (not the same element)
    const noteOneElements = screen.getAllByText('Note One');
    const noteTwoElements = screen.getAllByText('Note Two');
    expect(noteOneElements).toHaveLength(1);
    expect(noteTwoElements).toHaveLength(1);
  });
});
