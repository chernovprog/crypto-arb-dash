import React, { useState } from 'react';

import { Alert, Button, CircularProgress, Container, Link, Stack, TextField, Typography, } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Surface from "@/components/common/Surface";
import { type Credentials, useAuth } from "@/providers/Auth/context";

import type { AxiosError } from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState<Credentials>({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData);
      navigate('/');
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      setError(axiosError.response?.data?.message || 'Incorrect email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Surface sx={{ mt: 8, p: 4 }}>
        <Stack alignItems="center" spacing={3}>
          <Typography component="h1" variant="h4" fontWeight="fontWeightBold">
            Log in
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
              autoComplete="current-password"
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

            <Button
              disabled={loading}
              fullWidth
              size="large"
              sx={{ height: 56 }}
              type="submit"
              variant="contained"
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Enter'}
            </Button>
          </Stack>
        </Stack>
      </Surface>

      <Stack
        alignItems="center"
        spacing={2}
        sx={{ mt: 4, fontWeight: "fontWeightBold" }}
      >
        <Link component={RouterLink} to="/signup">
          Don't have an account?
        </Link>

        <Link component={RouterLink} to="/reset-password">
          Forgot your password?
        </Link>
      </Stack>
    </Container>
  );
};

export default LoginPage;
