import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

import { projects } from '@/data/projects';

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type Props = {
   params: {
      id: string;
   };
};

const ProjectDetailsPage = async ({ params }: Props) => {
   const { id } = await params;

   const project = projects.find((pro) => pro.id === id);

   if (!project) {
      return notFound();
   }

   return (
      <section className="bg-background">
         <div className="mx-auto max-w-7xl pt-28">
            {/* Back Button */}
            <div className="mb-6">
               <Button
                  asChild
                  variant="ghost"
                  className="group rounded-full px-2 hover:bg-primary/5"
               >
                  <Link href={`/#${project.id}`}>
                     <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                     Back to Projects
                  </Link>
               </Button>
            </div>

            {/* Hero Section */}
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
               {/* LEFT SIDE */}
               <div className="space-y-6">
                  {/* Project Title */}
                  <div>
                     <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        {project.title}
                     </h1>

                     <p className="mt-5 max-w-3xl text-base leading-7 md:text-lg">
                        {project.description}
                     </p>
                  </div>

                  {/* Gallery Slider */}
                  <Card className="overflow-hidden border border-primary/30 shadow-xl">
                     <CardContent className="p-0">
                        <Carousel className="w-full">
                           <CarouselContent>
                              {project.imageUrl.map((img, index) => (
                                 <CarouselItem key={index}>
                                    <div className="relative aspect-video w-full overflow-hidden">
                                       <Image
                                          src={img}
                                          alt={`${project.title} preview ${index + 1}`}
                                          fill
                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                          className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                                          priority={index === 0}
                                       />
                                    </div>
                                 </CarouselItem>
                              ))}
                           </CarouselContent>

                           <CarouselPrevious className="left-4 border border-primary/30 bg-primary/5 text-primary hover:bg-primary" />
                           <CarouselNext className="right-4 border border-primary/30 bg-primary/5 text-primary hover:bg-primary" />
                        </Carousel>
                     </CardContent>
                  </Card>
               </div>

               {/* RIGHT SIDE */}
               <div className="space-y-6">
                  {/* Action Buttons */}
                  <Card className="border border-primary/30 shadow-lg bg-primary/5">
                     <CardContent className="space-y-4 p-6">
                        <div className="flex flex-col gap-3">
                           <Button
                              asChild
                              size="lg"
                              className="w-full rounded-full"
                           >
                              <Link href={project.liveLink} target="_blank">
                                 <ExternalLink className="mr-2 h-4 w-4" />
                                 Live Preview
                              </Link>
                           </Button>

                           <Button
                              asChild
                              size="lg"
                              className="w-full rounded-full"
                           >
                              <Link href={project.repoLink} target="_blank">
                                 <Github className="mr-2 h-4 w-4" />
                                 GitHub Repo
                              </Link>
                           </Button>
                        </div>

                        {project.note && (
                           <>
                              <Separator />

                              <div>
                                 <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                    Note
                                 </h3>

                                 <p className="text-sm leading-6 text-muted-foreground">
                                    {project.note}
                                 </p>
                              </div>
                           </>
                        )}
                     </CardContent>
                  </Card>

                  {/* Tech Stack */}
                  <Card className="border border-primary/30 shadow-lg bg-primary/5">
                     <CardContent className="p-6">
                        <h2 className="mb-5 text-xl font-semibold text-white">
                           Tech Stack
                        </h2>

                        <div className="flex flex-wrap gap-4">
                           {project.techStack.map((tech, index) => {
                              const Icon = tech.icon;

                              return (
                                 <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 text-white px-4 py-2 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                 >
                                    <Icon
                                       size={22}
                                       style={{ color: tech.color }}
                                    />

                                    <span className="text-sm font-medium">
                                       {tech.name}
                                    </span>
                                 </div>
                              );
                           })}
                        </div>
                     </CardContent>
                  </Card>

                  {/* Features */}
                  <Card className="border border-primary/30 shadow-lg bg-primary/5">
                     <CardContent className="p-6 text-white">
                        <h2 className="mb-5 text-xl font-semibold">
                           Key Features
                        </h2>

                        <div className="space-y-4">
                           {project.features.map((feature, index) => (
                              <div
                                 key={index}
                                 className="flex items-start gap-3"
                              >
                                 <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                                 <p className="text-sm leading-6 ">{feature}</p>
                              </div>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProjectDetailsPage;
