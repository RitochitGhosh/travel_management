import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight:["600"]
});

interface HeaderInterface {
    header: string,
    label: string;
}

export const HeaderComponent = ({
    label,
    header,
} : HeaderInterface) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className={cn("text-3xl font-semibold", font.className )}> {header}</h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}