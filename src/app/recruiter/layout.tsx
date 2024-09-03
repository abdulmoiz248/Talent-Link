import Switch from '@/components/Switch';

export default function RecruiterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-1/2">{children}</div>
      <div className="w-1/2">
        <Switch type="recuriter" />
      </div>
    </div>
  );
}
