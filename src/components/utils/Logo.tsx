'use client';

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface LogoProps {
    className?: string;
    text: string;
}

const Logo: React.FC<LogoProps> = ({
    text,
    className
}) => {

    const router = useRouter();

    const handleLogoRoute = useCallback(() => {
        router.push('/');
    }, [router])

  return (
    <div
        id="logo"
        onClick={handleLogoRoute}
        className={`hover:cursor-pointer`}
    >
        <span>{text}</span>
    </div>
  )
}

export default Logo;