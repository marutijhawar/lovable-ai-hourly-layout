import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useToast } from "@/hooks/use-toast";
import MorphingTorusBackground from "@/components/scene/MorphingTorus";
import { ChevronUp, ChevronDown } from "lucide-react";

export type ModelOption = "openai" | "claude" | "both";

interface HeroProps {
  model: ModelOption;
  setModel: (m: ModelOption) => void;
  hours: number;
  setHours: (n: number) => void;
  perHour: number;
  total: number;
  onStart: () => void;
}

const Hero = ({ model, setModel, hours, setHours, perHour, total, onStart }: HeroProps) => {
  const { toast } = useToast();

  const gradientVar = model === "openai" ? "var(--gradient-openai)" : model === "claude" ? "var(--gradient-claude)" : "var(--gradient-both)";

  const handleStart = () => {
    toast({
      title: "Starting hourly access",
      description: `Model: ${model.toUpperCase()} • ${hours}h • Est. $${total.toFixed(2)}`,
    });
    onStart();
  };

  return (
    <section className="relative overflow-hidden border-b min-h-[100svh] flex items-center" style={{ background: gradientVar }}>
      <MorphingTorusBackground model={model} />
      <div className="container mx-auto py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center animate-fade-in text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Hourly AI access to OpenAI and Claude—no commitments.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Pay only for the time you use. Switch models anytime with transparent pricing.
          </p>

          <div className="mt-8 grid gap-4 rounded-lg glass-card p-4 md:p-6">
            <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
              <ToggleGroup
                type="single"
                value={model}
                onValueChange={(v) => v && setModel(v as ModelOption)}
                className=""
              >
                <ToggleGroupItem value="openai" aria-label="Choose OpenAI">
                  OpenAI
                </ToggleGroupItem>
                <ToggleGroupItem value="claude" aria-label="Choose Claude">
                  Claude
                </ToggleGroupItem>
                <ToggleGroupItem value="both" aria-label="Choose both">
                  Both
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="flex items-center gap-3">
                <div className="w-48">
                  <Slider
                    min={1}
                    max={20}
                    step={1}
                    value={[hours]}
                    onValueChange={(v) => setHours(v[0])}
                    aria-label="Select hours"
                  />
                </div>
                <div className="relative">
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={20}
                    value={hours}
                    onChange={(e) => setHours(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
                    className="w-24 text-center bg-background/90 text-foreground shadow-sm backdrop-blur-sm pr-10"
                    aria-label="Hours"
                  />
                  <div className="pointer-events-auto absolute inset-y-0 right-1 my-1 flex flex-col gap-1">
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="h-5 w-5"
                      onClick={() => setHours(Math.min(20, hours + 1))}
                      aria-label="Increase hours"
                    >
                      <ChevronUp className="h-3 w-3" />
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      className="h-5 w-5"
                      onClick={() => setHours(Math.max(1, hours - 1))}
                      aria-label="Decrease hours"
                    >
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
              <div className="text-sm text-muted-foreground">
                Est. total: <span className="font-medium text-foreground">${total.toFixed(2)}</span> • Rate: ${perHour.toFixed(2)}/hr
              </div>
              <div className="flex gap-3">
                <Button variant="gradient" size="lg" className="hover-scale" onClick={handleStart}>
                  Start for ${perHour.toFixed(2)}/hr
                </Button>
                <a href="#compare">
                  <Button variant="gradient" size="lg" className="hover-scale">Compare models</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
