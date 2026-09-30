import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between py-4 border-b border-obsidian-border bg-obsidian/90 backdrop-blur-md">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand font-black text-obsidian-950 shadow-brand-glow">
            M
          </div>
          <span className="font-bold text-crisp text-lg font-display tracking-tight">Mova</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <Link href="/dashboard" className="hover:text-crisp transition-colors">
            Dashboard
          </Link>
          <Link href="/pay" className="hover:text-crisp transition-colors">
            Pay P2P
          </Link>
          <Link href="/split" className="hover:text-crisp transition-colors">
            Group Splits
          </Link>
          <Link href="/fund" className="hover:text-crisp transition-colors">
            Crowdfund
          </Link>
          <Link href="/merchant" className="hover:text-crisp transition-colors">
            Merchants
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="momo" size="sm" withPulseRing>
          MoMo Live
        </Badge>
        <Button size="sm" variant="default" className="shadow-brand-glow">
          Launch App
        </Button>
      </div>
    </nav>
  );
}
