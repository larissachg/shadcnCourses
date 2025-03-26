import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-3">
      <Badge>default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">secundary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="info">info</Badge>
      <Badge capitalize variant="success">success</Badge>
    </div>
  );
}
