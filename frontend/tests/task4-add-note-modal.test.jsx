import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

describe('Task 4: Add Note Functionality', () => {
  beforeEach(() => {
    // Clear any existing state between tests
  });

  it('should clear input after submitting a note', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    await user.type(input, 'Test Note');
    expect(input).toHaveValue('Test Note');
    
    await user.click(submitButton);
    
    expect(input).toHaveValue('');
  });

  it('should not add empty notes', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Try to submit empty input
    await user.click(submitButton);
    
    expect(screen.getByText(/no notes yet/i)).toBeInTheDocument();
  });

  it('should not add notes with only whitespace', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    await user.type(input, '   ');
    await user.click(submitButton);
    
    expect(screen.getByText(/no notes yet/i)).toBeInTheDocument();
  });

  it('should add note when form is submitted via Enter key', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'Note submitted via Enter{Enter}');
    
    expect(screen.getByText('Note submitted via Enter')).toBeInTheDocument();
  });

  it('should handle multiple note submissions', async () => {
    const user = userEvent.setup();
    
    render(<App />);
    
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    const notes = ['First', 'Second', 'Third'];
    
    for (const note of notes) {
      await user.type(input, note);
      await user.click(submitButton);
    }
    
    notes.forEach(note => {
      expect(screen.getByText(note)).toBeInTheDocument();
    });
  });
});
