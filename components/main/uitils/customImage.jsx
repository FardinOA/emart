"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Result } from "postcss";
import React, { useState } from "react";

const CustomImage = ({ src, className, alt, ...rest }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleError = () => {
        setImageLoaded(true);
    };
    return (
        <>
            {!imageLoaded && src != undefined ? (
                <Image
                    onError={handleError}
                    width={0}
                    height={0}
                    sizes="100"
                    src={src}
                    className={cn("w-full object-contain  ", className)}
                    alt={alt}
                    {...rest}
                />
            ) : (
                <Image
                    onError={handleError}
                    width={0}
                    height={0}
                    sizes="100"
                    src={"/images/no-image.png"}
                    className={cn("w-full object-contain  ", className)}
                    alt={alt}
                    {...rest}
                />
            )}
        </>
    );
};

export default CustomImage;
