import { cn } from "@/lib/utils";
import Image from "next/image";
import { Result } from "postcss";
import React from "react";

const CustomImage = ({ src, className, alt, ...rest }) => {
    return (
        <Image
            width={0}
            height={0}
            sizes="100"
            src={src}
            className={cn("w-full object-contain  ", className)}
            alt={alt}
            {...rest}
        />
    );
};

export default CustomImage;
