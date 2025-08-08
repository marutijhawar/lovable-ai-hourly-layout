import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TESTIMONIALS = [
  { quote: "Lovable made AI access flexible and affordable.", name: "Riley M.", role: "Founder" },
  { quote: "Seamless model switching and clear pricing.", name: "Alex P.", role: "Engineer" },
  { quote: "Exactly what we needed for bursty workloads.", name: "Jordan K.", role: "Product" },
  { quote: "Great UX—started in minutes.", name: "Sam T.", role: "Designer" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container mx-auto py-16 md:py-20">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight">What users say</h2>
        <p className="mt-2 text-muted-foreground">Simple, clear, and fast to start.</p>
      </div>

      <div className="relative">
        <Carousel>
          <CarouselContent>
            {TESTIMONIALS.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover-scale">
                  <CardContent className="flex h-full flex-col justify-between gap-4 p-6">
                    <p className="text-base">“{t.quote}”</p>
                    <div className="text-sm text-muted-foreground">{t.name} • {t.role}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
