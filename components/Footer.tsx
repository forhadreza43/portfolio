import React from "react";

const Footer: React.FC = () => (
  <footer className="text-center py-6 px-4 mt-12 lg:mt-20 border-t border-primary/50">
    <div>
      <p>
        &copy; {new Date().getFullYear()} Reza Portfolio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
