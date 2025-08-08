const Footer = () => {
  return (
    <footer id="support" className="border-t">
      <div className="container mx-auto py-12 glass-card">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#compare">Compare</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#about">About</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:support@lovable.app">support@lovable.app</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-sm text-muted-foreground">© Lovable. Hourly AI access done right.</div>
      </div>
    </footer>
  );
};

export default Footer;
