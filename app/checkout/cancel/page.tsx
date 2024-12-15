"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleX } from "lucide-react";

export default function CancelPage() {
  const router = useRouter();
  const [dots, setDots] = useState(""); 

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500);

    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 1500);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CircleX className="text-red-400 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Cancellation!
          </h3>
          <p className="text-gray-600 my-2">
            Redirecting to the Homepage{dots}
          </p>
        </div>
      </div>
    </div>
  );
}
