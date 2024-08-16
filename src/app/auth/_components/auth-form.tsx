'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', { email: data.email, redirect: false });
      toast({
        title: 'Magic Link Sent',
        description: 'Check yours email for the magic link to login',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
      });
    }
  });

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sign in with a magic link
          </h1>
          <p className="text-muted-foreground">
            Enter your email below and we'll send you a magic link to sign in.
          </p>
        </div>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              {...form.register('email')}
            />
          </div>
          <Button type="submit" className="w-full">
            Send magic link
          </Button>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">
          The magic link will expire in 24 hours. If you don't receive it,
          please check your spam folder or try again.
        </p>
      </div>
    </div>
  );
}
