"use client";

import { useState } from "react";

import { HeartIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import Image from "next/image";

const CardProductDemo = () => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="relative max-w-md rounded-xl bg-linear-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg">
      <div className="flex h-60 items-center justify-center">
        <Image
          src="https://cdn.shadcnstudio.com/ss-assets/components/card/image-11.png?width=300&format=auto"
          alt="Shoes"
          className="w-75"
          width={200}
          height={200}
        />
      </div>
      <Button
        size="icon"
        onClick={() => setLiked(!liked)}
        className="bg-primary/10 hover:bg-primary/20 absolute top-4 right-4 rounded-full"
      >
        <HeartIcon
          className={cn(
            "size-4",
            liked ? "fill-destructive stroke-destructive" : "stroke-white"
          )}
        />
        <span className="sr-only">Like</span>
      </Button>
      <Card className="border-none">
        <CardHeader>
          <CardTitle>Nike Jordan Air Rev</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <Badge variant="outline">EU38</Badge>
            <Badge variant="outline">Black and White</Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Crossing hardwood comfort with off-court flair. &apos;80s-Inspired
            construction, bold details and nothin&apos;-but-net style.
          </p>
        </CardContent>
        <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase">Price</span>
            <span className="text-xl font-semibold">$69.99</span>
          </div>
          <Button size="lg">Add to cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardProductDemo;
