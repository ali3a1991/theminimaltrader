import React from 'react'
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/router';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <ArrowLeft onClick={handleBack} className="w-8 h-8 text-white cursor-pointer hover:text-orange-400 transition" />
  )
}
