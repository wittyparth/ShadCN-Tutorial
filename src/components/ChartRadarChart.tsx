import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "./ui/chart"
import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"


const ChartRadarChart = () => {
    const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 285 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 203 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 264 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig
  return (
    <Card className="border-0">
        <CardHeader>

        <CardTitle>Radar Chart - Grid Circle Filled</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid
              className="fill-(--color-desktop) opacity-20"
              gridType="circle"
            />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ChartContainer>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
        <div className="flex items-center gap-2 leading-none font-medium mx-auto">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none mx-auto">
          January - June 2024
        </div>
        </CardFooter>
    </Card>
  )
}

export default ChartRadarChart