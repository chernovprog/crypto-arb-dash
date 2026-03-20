import React, { useState } from 'react';

import { Alert, Button, CircularProgress, Container, Link, Stack, TextField, Typography, } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Surface from "@/components/common/Surface";
import { type Credentials, useAuth } from '@/providers/Auth/context';

const SignupPage = () => {
  const [formData, setFormData] = useState<Credentials>({ email: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (formData.password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      await signup(formData);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Surface sx={{ mt: 8, p: 4 }}>
        <Stack alignItems="center" spacing={3}>
          <Typography component="h1" variant="h4" fontWeight="fontWeightBold">
            Sign Up
          </Typography>

          <Typography variant="body1" color="text.secondary" textAlign="center">
            Create your account to get started.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          )}

          <Stack
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ width: '100%' }}
            spacing={2.5}
          >
            <TextField
              autoComplete="email"
              autoFocus
              disabled={loading}
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
              required
              value={formData.email}
            />

            <TextField
              autoComplete="new-password"
              disabled={loading}
              fullWidth
              id="password"
              label="Password"
              name="password"
              onChange={handleChange}
              required
              type="password"
              value={formData.password}
            />

            <TextField
              autoComplete="new-password"
              disabled={loading}
              fullWidth
              id="confirm-password"
              label="Confirm Password"
              name="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              type="password"
              value={confirmPassword}
            />

            <Button
              disabled={
                loading || !formData.email.trim() || !formData.password.trim() || formData.password !== confirmPassword
              }
              fullWidth
              size="large"
              sx={{ py: 1.5 }}
              type="submit"
              variant="contained"
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
            </Button>
          </Stack>
        </Stack>
      </Surface>

      <Stack alignItems="center" sx={{ mt: 4 }}>
        <Link
          component={RouterLink}
          to="/login"
          fontWeight="fontWeightBold"
        >
          Already have an account? Sign In
        </Link>
      </Stack>
    </Container>
  );
};

export default SignupPage;
