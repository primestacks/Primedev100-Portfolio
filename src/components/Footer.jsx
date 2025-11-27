export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {currentYear} Primdev100 portfolio. Built with passion.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
