import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { SkillHexagon } from './SkillHexagon';

interface HexagonIconProps {
   children?: ReactNode;
   size?: 'sm' | 'md' | 'lg' | 'xl';
   borderWidth?: number;
   name: string;
}

const sizeMap = {
   sm: 64,
   md: 96,
   lg: 128,
   xl: 160,
};

const SkillCard = ({
   children,
   size = 'xl',
   name,
   borderWidth = 1.5,
}: HexagonIconProps) => {
   const dimension = sizeMap[size];
   const computedIconSize = Math.round(dimension * 0.35);

   return (
      <Tooltip>
         <TooltipTrigger>
            <div
               className={cn(
                  'relative inline-flex items-center justify-center transition-transform hover:scale-105 duration-500 group'
               )}
               style={{ width: dimension, height: dimension }}
               aria-label={name}
            >
               <SkillHexagon size={ size} borderWidth={borderWidth} dimension={dimension}/>

               {/* Content */}
               <div
                  className="relative z-10 flex items-center justify-center"
                  style={{ fontSize: computedIconSize }}
               >
                  {children}
                  {/* <p className="text-nowrap text-xs font-semibold group-hover:opacity-100 opacity-0 transition-opacity duration-500 absolute -bottom-4 left-0 right-0 text-center">
          {name}
        </p> */}
               </div>
            </div>
         </TooltipTrigger>
         <TooltipContent sideOffset={-11}>{name}</TooltipContent>
      </Tooltip>
   );
};

export default SkillCard;
