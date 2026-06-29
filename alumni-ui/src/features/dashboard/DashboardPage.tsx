import { CalendarDays, GraduationCap, Users, UserCheck } from "lucide-react";

import PageHeader from "./components/PageHeader";
import StatsCard from "./components/StatsCard";
import StatsGrid from "./components/StatsGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <PageHeader
        title="Dashboard"
        description="Welcome to the Alumni System Dashboard."
      />

      <StatsGrid>
        <StatsCard
          title="Total Alumni"
          value="12,543"
          icon={<Users className="h-5 w-5 text-muted-foreground" />}
        />

        <StatsCard
          title="Registered Alumni"
          value="8,934"
          icon={<GraduationCap className="h-5 w-5 text-muted-foreground" />}
        />

        <StatsCard
          title="Upcoming Events"
          value="12"
          icon={<CalendarDays className="h-5 w-5 text-muted-foreground" />}
        />

        <StatsCard
          title="Verified Alumni"
          value="7,856"
          icon={<UserCheck className="h-5 w-5 text-muted-foreground" />}
        />
      </StatsGrid>
    </div>
  );
}