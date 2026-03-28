export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Jan Skibinski </span>
        <span className="font-mono text-xs">Built with care and passion</span>
      </div>
    </footer>
  );
}
