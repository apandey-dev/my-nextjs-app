// Unit tests for contact form field-level validation logic

function validateContactInput({ name, email, message }) {
  const errors = {};

  if (!name || !name.trim()) {
    errors.name = "Please enter your name.";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  }

  if (!email || !email.trim()) {
    errors.email = "Please enter your email address.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address (e.g., name@domain.com).";
    }
  }

  if (!message || !message.trim()) {
    errors.message = "Please write a message.";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

describe('Contact Form Validation Suite', () => {
  test('rejects empty inputs and returns errors for all required fields', () => {
    const result = validateContactInput({ name: '', email: '', message: '' });
    expect(result.isValid).toBe(false);
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.message).toBeDefined();
  });

  test('rejects invalid email formats', () => {
    const invalidEmails = ['plainaddress', 'missing@domain', '@missinguser.com', 'user@.com', 'user@domain.'];
    invalidEmails.forEach((email) => {
      const result = validateContactInput({
        name: 'Jordan Lee',
        email,
        message: 'This is a valid long enough message.',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBe('Please enter a valid email address (e.g., name@domain.com).');
    });
  });

  test('rejects short messages under 10 characters', () => {
    const result = validateContactInput({
      name: 'Jordan Lee',
      email: 'jordan@example.com',
      message: 'Too short',
    });
    expect(result.isValid).toBe(false);
    expect(result.errors.message).toBe('Message must be at least 10 characters long.');
  });

  test('accepts properly formatted valid inputs', () => {
    const result = validateContactInput({
      name: 'Jordan Lee',
      email: 'jordan.lee@example.com',
      message: 'Hello, I really appreciate this clean Next.js architecture!',
    });
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });
});
