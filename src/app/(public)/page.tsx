'use client'
import { Button } from "../../components/ui/button"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet"
import ResgisterForm from "./_components/register-form";
import LoginForm from "./_components/login-form";
import { useSearchParams } from "next/navigation";

function Homepage() {

  const [openAuthSheet, setOpenAuthSheet] = React.useState(false);
  const searchParams = useSearchParams();
  // const queryStrings = new URLSearchParams(window.location.search);

  const formType = searchParams.get('formType');

  return (
    <div className="flex flex-col">

      <div className="bg-primary px-20 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold">S . H . E . Y</h1>
        <Button
          variant={"outline"}
          onClick={() => setOpenAuthSheet(true)}
        >
          Login
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 items-center h-[85vh] px-20">

        <div className="col-span-1 mt-20 lg:mt-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold text-primary">
              Discover & Book Your Dream Vacation
            </h1>
            <p className="text-sm text-gray-700 font-semibold">
              Welcome to Shey Travel Packages — your go-to platform for discovering unforgettable travel experiences. Browse exclusive travel packages, book hassle-free getaways, and explore curated destinations from around the world.
            </p>

            <Button className="w-max">
              Get Started
            </Button>
          </div>
        </div>

        <div className="col-span-1">
          <img
            src={"https://shey-travel-packages-booking.vercel.app/hero2.png"}
            className="w-full h-96 object-contain"
          />
        </div>

      </div>

      {openAuthSheet &&
        <Sheet
          open={openAuthSheet}
          onOpenChange={setOpenAuthSheet}
        >
          <SheetContent className="lg:min-w-[500px]">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            <div className="flex items-center justify-center h-screen">
              {formType === 'register' ? <ResgisterForm /> : <LoginForm />}
            </div>

          </SheetContent>
        </Sheet>
      }
    </div>
  )
}

export default Homepage
