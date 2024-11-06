interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <nav className="flex flex-col space-y-2">
        {children}
      </nav>
    </div>
  );
}