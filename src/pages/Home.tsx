import ChartBarGraph from "@/components/ChartBarGraph.tsx"
import AppLayout from "../components/AppLayout.tsx"
import ChartAreaChart from "@/components/ChartAreaChart.tsx"
import ChartRadarChart from "@/components/ChartRadarChart.tsx"
import CardList from "@/components/CardList.tsx"
import TodoList from "@/components/TodoList.tsx"

const Home = () => {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-md lg:col-span-2 bg-primary-foreground"><ChartBarGraph/></div>
        <div className="p-4 rounded-md bg-primary-foreground"><CardList title="Popular Content"/></div>
        <div className="p-4 rounded-md bg-primary-foreground"><ChartRadarChart/></div>
        <div className="p-4 rounded-md bg-primary-foreground"><TodoList/></div>
        <div className="p-4 rounded-md lg:col-span-2 bg-primary-foreground"><ChartAreaChart/></div>
        <div className="p-4 rounded-md bg-primary-foreground"><CardList title="latestTransactions"/></div>
      </div>
    </AppLayout>
  )
}

export default Home