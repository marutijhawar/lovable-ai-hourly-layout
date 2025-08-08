import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";

export type ModelOption = "openai" | "claude" | "both";

interface RateSelectorProps {
  model: ModelOption;
  setModel: (m: ModelOption) => void;
  hours: number;
  setHours: (n: number) => void;
  perHour: number;
  total: number;
  onStart: () => void;
}

const RateSelector = ({ model, setModel, hours, setHours, perHour, total, onStart }: RateSelectorProps) => {
  return (
    <section id="pricing" className="border-t bg-muted/20">
      <div className="container mx-auto py-16 md:py-20">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Choose your hourly access</h2>
          <p className="mt-2 text-muted-foreground">Set your hours and model. Pause anytime. Billed to the minute.</p>
        </div>

        <div className="mx-auto max-w-3xl rounded-lg glass-card p-6">
          <div className="flex flex-col items-center gap-6">
            <ToggleGroup type="single" value={model} onValueChange={(v) => v && setModel(v as ModelOption)}>
              <ToggleGroupItem value="openai">OpenAI</ToggleGroupItem>
              <ToggleGroupItem value="claude">Claude</ToggleGroupItem>
              <ToggleGroupItem value="both">Both</ToggleGroupItem>
            </ToggleGroup>

            <div className="w-full max-w-xl">
              <Slider min={1} max={20} step={1} value={[hours]} onValueChange={(v) => setHours(v[0])} aria-label="Select hours" />
              <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                {[1,3,5,10,20].map((t) => (
                  <span key={t}>{t}h</span>
                ))}
              </div>
            </div>

            <div className="flex w-full max-w-xl items-center justify-center gap-3">
              <Input
                type="number"
                inputMode="numeric"
                min={1}
                max={20}
                value={hours}
                onChange={(e) => setHours(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
                className="w-24 text-center"
                aria-label="Hours"
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Switch id="auto-extend" />
                <label htmlFor="auto-extend">Auto-extend</label>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="text-sm text-muted-foreground">
                Rate: <span className="font-medium text-foreground">${perHour.toFixed(2)}/hr</span> • Est. total: <span className="font-medium text-foreground">${total.toFixed(2)}</span>
              </div>
              <Button variant="gradient" size="lg" className="hover-scale" onClick={onStart}>Start now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateSelector;
