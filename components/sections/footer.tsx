import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="py-16 px-4 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-around mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link
                  href="#features"
                  className="hover:text-foreground/100 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#architecture"
                  className="hover:text-foreground/100 transition-colors"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="#comparison"
                  className="hover:text-foreground/100 transition-colors"
                >
                  Comparison
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-foreground/100 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground/100 transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Cachetron.</p>
          <p className="mt-4 md:mt-0">
            A Vendor-Agnostic Caching Infrastructure Layer for Modern Backends.
          </p>
        </div>
      </div>
    </footer>
  );
}
