'use client';
import {
   Menubar,
   MenubarCheckboxItem,
   MenubarContent,
   MenubarItem,
   MenubarMenu,
   MenubarTrigger,
} from '@/components/ui/menubar';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { moreNavItems } from '@/data/navItem';
import Link from 'next/link';

const MoreMenu = () => {
   return (
      <Menubar>
         <MenubarMenu>
            <MenubarTrigger className="group bg-transparent hover:bg-transparent hover:text-primary">
               <span
                  className="flex flex-nowrap items-center hover:text-primary"
               >
                  More
                  <ChevronDown
                     className="ml-2 h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
               </span>
            </MenubarTrigger>
            <MenubarContent>
               {moreNavItems.map((item, idx) => (
                  <MenubarItem key={idx} asChild>
                     <Link href={item.href}>
                        {item.name}
                     </Link>
                  </MenubarItem>
               ))}
            </MenubarContent>
         </MenubarMenu>
      </Menubar>
   );
};

export default MoreMenu;
