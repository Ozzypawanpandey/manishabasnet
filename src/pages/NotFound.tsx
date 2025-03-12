
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-8xl font-bold text-primary/20">404</h1>
          <h2 className="text-2xl font-bold mt-4 mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/90"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
