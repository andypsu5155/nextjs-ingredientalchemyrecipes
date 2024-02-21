"use client";

import Image from "next/image";
import { getHomePage } from "../sanity/sanity-utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import foodPic1 from "@/public/foodpic1.webp";
import foodPic2 from "@/public/foodpic2.webp";
import foodPic3 from "@/public/foodpic3.webp";
import foodPic4 from "@/public/foodpic4.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
  const homepage = await getHomePage();

  return (
    <>
      <h1 className="2xl:absolute 2xl:top-[10rem] z-10 text-6xl font-bold text-white bg-black bg-opacity-50 p-10 rounded-2xl">
        {homepage[0] && homepage[0].headerText}
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[90%]"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={foodPic1} alt="Food Pic 1" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={foodPic2} alt="Food Pic 2" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={foodPic3} alt="Food Pic 3" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={foodPic4} alt="Food Pic 4" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-2xl">{homepage[0] && homepage[0].bodyText}</p>
      <h2>
        To get started, add the ingredients you have to your ingredient list!
      </h2>
      <Button className="mt-5 p-10 text-4xl">
        <Link href="/my-ingredients">My Ingredients</Link>
      </Button>
      <p>test</p>
    </>
  );
}
