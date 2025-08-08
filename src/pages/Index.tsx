import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import CompareSection from "@/components/site/CompareSection";
import RateSelector from "@/components/site/RateSelector";
import Testimonials from "@/components/site/Testimonials";
import Footer from "@/components/site/Footer";
import { useState, useMemo, useCallback } from "react";

export type ModelOption = "openai" | "claude" | "both";

const RATES: Record<ModelOption, number> = {
  openai: 2,
  claude: 3,
  both: 4,
};

const Index = () => {
  const [model, setModel] = useState<ModelOption>("openai");
  const [hours, setHours] = useState<number>(3);

  const perHour = useMemo(() => RATES[model], [model]);
  const total = useMemo(() => perHour * hours, [perHour, hours]);

  const onStart = useCallback(() => {
    // Hook up to checkout or auth flow here
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero
          model={model}
          setModel={setModel}
          hours={hours}
          setHours={setHours}
          perHour={perHour}
          total={total}
          onStart={onStart}
        />
        <CompareSection onChoose={setModel} />
        <RateSelector
          model={model}
          setModel={setModel}
          hours={hours}
          setHours={setHours}
          perHour={perHour}
          total={total}
          onStart={onStart}
        />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
