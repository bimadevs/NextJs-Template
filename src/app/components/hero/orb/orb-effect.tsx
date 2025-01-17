import { cn } from "@/lib/utils"

interface OrbEffectProps {
  className?: string
}

export function OrbEffect({ className }: OrbEffectProps) {
  return (
    <div className={cn("relative w-full pt-12", className)}>
      <div className="relative w-full pt-[20%]">
        {/* Main Orb Container */}
        <div className="absolute -left-[50%] top-0 z-10 w-[200%] overflow-hidden 
          rounded-[100%] border-4 border-brand bg-background/50 pt-[100%] 
          shadow-[0px_0px_12px_hsla(var(--brand)/0.8),_0px_0px_64px_hsla(var(--brand-foreground)/0.5),0px_0px_12px_hsla(var(--brand)/0.8)_inset]"
        >
          {/* Animated Layers */}
          <div 
            className="absolute -left-[50%] top-0 h-[200%] w-[200%] 
              animate-pulse-hover rounded-[100%] bg-brand-foreground/50"
            style={{ 
              maskImage: "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)" 
            }}
          />
          <div 
            className="absolute -left-[50%] top-0 h-[200%] w-[200%] 
              animate-pulse-hover rounded-[100%] bg-brand/50"
            style={{ 
              maskImage: "radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)" 
            }}
          />
          <div 
            className="absolute -left-[50%] -top-[5%] h-[200%] w-[200%] 
              animate-pulse-hover rounded-[100%] bg-white"
            style={{ 
              maskImage: "radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)" 
            }}
          />
        </div>

        {/* Gradient Effects */}
        <div className="absolute w-full top-[50%]">
          <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 
            scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] 
            sm:h-[512px] -translate-y-1/2"
          />
          <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 
            scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] 
            sm:h-[256px] -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  )
}