import * as React from "react";
import { Menu, Terminal, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData: NavigationSection[];
}

export default function Header({ navigationData }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-900/8 bg-paper-50/85 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <Logo size="sm" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigationData.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                item.isActive
                  ? "text-volt-600 bg-volt-500/10 font-semibold"
                  : "text-ink-600 hover:text-ink-950 hover:bg-ink-900/5"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden sm:inline-flex bg-ink-950 text-paper-50 hover:bg-ink-800 rounded-lg px-4"
            asChild
          >
            <a href="/contact">
              Let's Talk
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 text-volt-400" />
            </a>
          </Button>

          {/* Mobile Sheet Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-lg border-ink-900/15"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-paper-50">
                <SheetHeader className="text-left border-b border-ink-900/8 pb-4">
                  <SheetTitle>
                    <Logo size="sm" />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 py-6">
                  {navigationData.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                        item.isActive
                          ? "bg-volt-500/10 text-volt-600 font-semibold"
                          : "text-ink-700 hover:bg-ink-900/5 hover:text-ink-950"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                  <div className="mt-6 pt-4 border-t border-ink-900/8">
                    <Button
                      className="w-full bg-volt-600 hover:bg-volt-700 text-white rounded-lg"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href="/contact">Start a Project</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
