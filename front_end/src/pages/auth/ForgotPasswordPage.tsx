import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { FormInput } from '../../components/auth/FormInput';
import { SubmitButton } from '../../components/auth/SubmitButton';

export const ForgotPasswordPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle={
        <>
          Remember your password?{' '}
          <Link to="/login" className="font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
            Sign in
          </Link>
        </>
      }
      illustration="/auth/forgot-password-illustration.svg"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <p className="text-sm text-gray-400 mb-6">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email address"
            autoComplete="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <SubmitButton>Send reset link</SubmitButton>
      </form>
    </AuthLayout>
  );
};