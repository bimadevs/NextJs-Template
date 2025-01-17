import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Button } from "./button";
import { OrbEffect } from "./orb-effect";

interface HeroProps {
  mainHeading: string;
  tagline: string;
  buttonLabel?: string;
  buttonHref?: string;
  inputLabel?: string;
  caption?: string;
  containerClassName?: string;
}

export function Hero({
  mainHeading,
  tagline,
  buttonLabel = "Join Beta",
  buttonHref = "/beta-access",
  inputLabel = "Your work email",
  caption = "No credit card required.",
  containerClassName,
}: HeroProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative bg-background py-16 md:py-28 lg:py-36 px-6",
          "overflow-hidden",
          containerClassName
        )}
      >
        <div className="container mx-auto flex flex-col gap-16 lg:gap-28">
          <div className="flex flex-col items-center space-y-8 lg:space-y-14 text-center">
            <h1
              className="inline-block animate-fade-in bg-gradient-to-b from-foreground 
            via-foreground/90 to-muted-foreground bg-clip-text text-3xl font-bold 
            text-transparent drop-shadow-xl sm:text-5xl lg:text-7xl xl:text-8xl lg:leading-normal xl:leading-normal"
            >
              {mainHeading}
            </h1>

            <p
              className="max-w-lg animate-fade-in font-medium 
            text-muted-foreground opacity-0 [animation-delay:150ms] sm:text-lg lg:text-xl"
            >
              {tagline}
            </p>

            <div
              className="relative z-10 animate-fade-in opacity-0 [animation-delay:300ms]
            flex flex-col items-center space-y-3 w-full"
            >
              <div className="flex w-full max-w-md gap-3">
                <Input
                  type="email"
                  placeholder={inputLabel}
                  className="flex-1 border-brand/20 bg-foreground/5"
                />
                <Button
                  asChild
                  variant="default"
                  className="bg-gradient-to-b from-brand to-brand/80 
                  hover:from-brand/90 hover:to-brand/70 text-white"
                >
                  <a href={buttonHref}>{buttonLabel}</a>
                </Button>
              </div>
              <span className="text-xs text-muted-foreground/80">
                {caption}
              </span>
            </div>

            <OrbEffect />
          </div>
        </div>
      </div>
    </section>
  );
}
