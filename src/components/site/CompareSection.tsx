import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type ModelOption = "openai" | "claude" | "both";

interface CompareProps {
  onChoose: (m: ModelOption) => void;
}

const CompareSection = ({ onChoose }: CompareProps) => {
  return (
    <section id="compare" className="container mx-auto py-16 md:py-20">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Compare AI services</h2>
        <p className="mt-2 text-muted-foreground">A quick look at strengths, pricing, and features.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover-scale focus-within:shadow-md">
          <CardHeader>
            <CardTitle>OpenAI</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>Great for coding help and structured analysis</li>
              <li>Competitive hourly pricing</li>
              <li>Strong tool use and integrations</li>
              <li>Balanced creativity and precision</li>
            </ul>
            <div className="pt-2">
              <Button variant="outline" onClick={() => onChoose("openai")}>Choose OpenAI</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale focus-within:shadow-md">
          <CardHeader>
            <CardTitle>Claude</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-1">
              <li>Excellent long-context reasoning</li>
              <li>Strong writing and summarization</li>
              <li>Helpful for nuanced understanding</li>
              <li>Transparent metered rates</li>
            </ul>
            <div className="pt-2">
              <Button variant="outline" onClick={() => onChoose("claude")}>Choose Claude</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompareSection;
