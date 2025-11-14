import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500 dark:text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Content Engine. Powered by Google Gemini.</p>
      </div>
    </footer>
  );
};

export default Footer;
