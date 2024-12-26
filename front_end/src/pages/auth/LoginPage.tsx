import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthLayout } from '../../components/auth/AuthLayout';
import { FormInput } from '../../components/auth/FormInput';
import { PasswordInput } from '../../components/auth/PasswordInput';
import { SubmitButton } from '../../components/auth/SubmitButton';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      email,
      password,  
    };
    try {
      const response = await fetch('http://localhost:3360/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      //console.log('variables :', formData);
      //console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log('User logged in:', data);
        navigate('/'); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred');
    }
  };
  

  return (
    <AuthLayout
      title="Welcome back"
      subtitle={
        <>
          New to AlgoSketch?{' '}
          <Link to="/register" className="font-medium text-emerald-500 hover:text-emerald-400 transition-colors">
            Create an account
          </Link>
        </>
      }
      illustration="/auth/login-illustration.svg"
    >
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email address"
          autoComplete="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          id="password"
          name="password"
          label="Password"
          autoComplete="current-password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-emerald-500 focus:ring-emerald-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
              Remember me
            </label>
          </div>

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <SubmitButton>Sign in</SubmitButton>
      </motion.form>
    </AuthLayout>
  );
};
