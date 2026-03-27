"use client";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ProductHomepageCardComponent({ product }) {
  // 1. Prevent router errors by checking if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Use real data from your API payload
  const id = product?.id;
  const name = product?.name || "Macbook Pro M5";
  const price = product?.price || "1,999";
  const image = product?.image || "/image/macbook.png";

  return (
    <div className="group relative w-full max-w-md h-[700px] bg-gradient-to-br from-pink-50 to-white rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden border border-pink-100 shadow-[0_20px_50px_rgba(236,72,153,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(236,72,153,0.1)] hover:-translate-y-2">
      
      {/* Decorative Background */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl group-hover:bg-pink-300/40 transition-colors duration-700" />
      
      {/* Header Section */}
      <div className="relative z-10 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="bg-pink-500/10 text-pink-600 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
            Featured Technology
          </span>
          <Zap className="size-3 text-pink-500 fill-pink-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mt-2 italic">
          {name}
        </h2>
        <p className="text-slate-400 text-sm font-medium">
          The future of workflow starts here.
        </p>
      </div>

      {/* Product Image Section */}
      <div className="relative z-10 flex items-center justify-center py-4 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
        <Image
          src={image}
          width={400}
          height={300}
          alt={name}
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(236,72,153,0.3)]"
          priority
        />
      </div>

      {/* Footer / Action Section */}
      <div className="relative z-10 w-full flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
            Starting at
          </span>
          <span className="text-2xl font-black text-slate-800">${price}</span>
        </div>

        {/* 3. Link logic: Only render when mounted to prevent the Router Error */}
        {isMounted ? (
          <Link href={`/products/${id}`} prefetch={false}>
            <Button className="group/btn bg-pink-400 hover:bg-pink-600 text-white h-14 px-8 rounded-2xl font-bold shadow-lg shadow-pink-200 transition-all active:scale-95 flex gap-2">
              View Details
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        ) : (
          <Button disabled className="bg-slate-100 text-slate-400 h-14 px-8 rounded-2xl font-bold">
            Loading...
          </Button>
        )}
      </div>
    </div>
  );
}