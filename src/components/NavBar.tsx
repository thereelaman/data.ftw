import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">Logo</div>
        <Input type="search" placeholder="Search..." className="w-64" />
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/about/" className="text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="/support/" className="text-gray-300 hover:text-white">
          Support
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Found Some Data Missing?</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Found Some Data Missing?</DialogTitle>
              <DialogDescription>
                Please let us know if you have found any data missing.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default NavBar;
