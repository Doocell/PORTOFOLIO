import { useEffect, useState } from "react";

export function TypingRoles({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1200);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((x) => x + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, roles]);

  return (
    <span className="inline-block">
      <span>{text}</span>
      <span className="inline-block w-[3px] h-[0.9em] bg-foreground align-middle ml-1 animate-blink" />
    </span>
  );
}
