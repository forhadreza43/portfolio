import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
   children: ReactNode;
   className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
   name: string;
   className: string;
   background: ReactNode;
   description: string;
   href: string;
   cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
   return (
      <div
         className={cn(
            'grid w-full auto-rows-[22rem] grid-cols-5 gap-4',
            className
         )}
         {...props}
      >
         {children}
      </div>
   );
};

const BentoCard = ({
   name,
   className,
   background,
   description,
   href,
   cta,
   ...props
}: BentoCardProps) => (
   <div
      key={name}
      className={cn(
         // Removed bg-[${background}], just use standard background
         `group relative col-span-5 flex flex-col justify-between overflow-hidden rounded-xl`,
         className
      )}
      {...props}
   >
      {/* Render the background as a full-bleed, absolutely positioned element */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
         {background}
      </div>
      {/* add overlay gradient */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-t from-black/85 via-black/30 to-transparent" />

      <div className="relative z-10 flex flex-col h-full p-4">
         <div className="pointer-events-none z-50 flex transform-gpu flex-col gap-1 mt-auto">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="max-w-lg">{description}</p>
         </div>
         <div className="mt-auto pt-4">
            <Button
               variant="link"
               asChild
               size="sm"
               className="pointer-events-auto p-0"
            >
               <a href={href}>
                  {cta}
                  <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
               </a>
            </Button>
         </div>
      </div>
      {/* Optional: Overlay for hover effect, can uncomment if needed */}
      {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 z-20" /> */}
   </div>
);

export { BentoCard, BentoGrid };
