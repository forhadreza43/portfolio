import React from 'react';
import { Button } from '../ui/button';

type OutlineButtonProps = React.PropsWithChildren<object>;

const OutlineButton: React.FC<OutlineButtonProps> = ({ children }) => {
    return (
      <Button
        variant="outline"
        className="rounded-full hover:bg-primary hover:border-primary dark:hover:bg-primary/80 dark:hover:border-primary/80 dark:hover:text-white"
      >
        {children}
      </Button>
    );
};

export default OutlineButton;