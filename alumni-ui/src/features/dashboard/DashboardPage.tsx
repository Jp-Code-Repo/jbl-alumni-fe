import { dashboardStats } from "./data/dashboard-data";

import AppBreadcrumb from "@/components/common/AppBreadcrumb";
import PageHeader from "./components/PageHeader";
import StatsCard from "./components/StatsCard";
import StatsGrid from "./components/StatsGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <AppBreadcrumb
        items={[
          {
            label: "Dashboard",
          },
        ]}
      />

      <PageHeader
        title="Dashboard"
        description="Welcome to the Alumni System Dashboard."
      />

      <StatsGrid>
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={<Icon className="h-5 w-5 text-muted-foreground" />}
            />
          );
        })}
      </StatsGrid>
    </div>
  );
}