# Simple Note App - Starter Files

A starter template for building a simple note-taking application with React and Vite.

## Project Structure

```
simple-note-starter-files/
└── frontend/          # React + Vite frontend application
    ├── src/          # Frontend source code (implement here)
    │   ├── App.jsx   # Main application component (TODO: implement)
    │   ├── main.jsx  # Application entry point
    │   └── index.css # Global styles
    ├── tests/        # Frontend unit tests
    └── package.json  # Frontend dependencies
```

## Getting Started

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## Your Task

Build a simple note-taking application with the following features:

1. **Input Field**: Add a text input field for entering notes
2. **Submit Button**: Add a button to submit notes
3. **Notes List**: Display all submitted notes in a list
4. **Empty State**: Show a message when no notes exist
5. **Input Clearing**: Clear the input field after submitting a note

## Running Tests

**Run All Tests:**
```bash
cd frontend
npm test
```

**Run Individual Tests:**
```bash
cd frontend

# Run Task 1 tests
npm test -- task1-sidebar --run

# Run Task 2 tests
npm test -- task2-note-list --run

# Run Task 3 tests
npm test -- task3-note-viewer --run

# Run Task 4 tests
npm test -- task4-add-note-modal --run
```

**Note:** The `--run` flag runs tests once and exits. Remove it to run in watch mode (auto-reruns on file changes).

## Test Files

- `tests/task1-sidebar.test.jsx` - Tests for input field and submit button
- `tests/task2-note-list.test.jsx` - Tests for notes list display
- `tests/task3-note-viewer.test.jsx` - Tests for note display
- `tests/task4-add-note-modal.test.jsx` - Tests for add note functionality

All tests are implementation-independent (no CSS class names, function names, or variable names).

## Implementation Tips

- Use React hooks (`useState`) to manage notes and input state
- Use semantic HTML elements (form, input, button)
- Tests use `getByRole` and text content, so focus on functionality, not specific class names
- Start with Task 1, then move to Task 2, etc.
