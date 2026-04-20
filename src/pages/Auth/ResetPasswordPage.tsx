import React, { useState } from 'react';

import { Alert, Button, CircularProgress, Container, Link, Stack, TextField, Typography, } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import Surface from "@/components/common/Surface";
import { useAuth } from "@/providers/Auth/context";

import type { AxiosError } from "axios";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      await resetPassword({ email });
      setSuccess(true);
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      setError(axiosError.response?.data?.message || 'The request could not be sent. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Surface sx={{ mt: 8, p: 4 }}>
        <Stack alignItems="center" spacing={3}>
          <Typography component="h1" variant="h4" fontWeight="fontWeightBold">
            Password recovery
          </Typography>

          <Typography variant="body1" color="text.secondary" textAlign="center">
            Enter the email address associated with your account and we will send a link to reset your password.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ width: '100%' }}>
              A password reset link has been sent to your email. Please check your inbox (and spam folder).
            </Alert>
          )}

          {!success && (
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
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />

              <Button
                disabled={loading || !email.trim()}
                fullWidth
                size="large"
                sx={{ py: 1.5 }}
                type="submit"
                variant="contained"
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Send link'}
              </Button>
            </Stack>
          )}
        </Stack>
      </Surface>

      <Stack alignItems="center" sx={{ mt: 4 }}>
        <Link component={RouterLink} to="/login" fontWeight="fontWeightBold">
          Return to login
        </Link>
      </Stack>
    </Container>
  );
};

export default ResetPasswordPage;
