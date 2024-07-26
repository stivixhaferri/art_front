'use client'
import { useState } from 'react';
import axios from 'axios';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
   
    formData.append('email', email);
    formData.append('password', password);


    try {
      const res = await axios.post('http://localhost:8000/api/login', {email , password}, {
        withCredentials: true, 
       
      });
      if (res.status === 200) {
        router.push('/')
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen w-full mt-[-5%] items-center justify-center bg-background px-4 pb-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-4">
        <div>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-black">Sign In</h2>
          <p className="mt-2 text-center text-sm text-black">Get started with our platform today.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <Label htmlFor="email" className="sr-only">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="relative block w-full appearance-none rounded-md border border-muted px-3 py-2 text-black placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="relative block w-full appearance-none rounded-md border border-muted px-3 py-2 text-black placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
         
       
          <div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
