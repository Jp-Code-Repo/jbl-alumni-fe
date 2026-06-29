import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-2 text-muted-foreground">
        Welcome to the Alumni System Dashboard.
      </p>
    </div>
  );
}