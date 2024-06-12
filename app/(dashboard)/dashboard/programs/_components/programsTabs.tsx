import { DatePicker } from "@/components/dateTimePicker"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Upload from "@/components/upload"
import TaskList from "./TaskList"
import AnnualList from "./annualList"
import AdhocList from "./adhocList"

export function ProgramsTab() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="taskforce">Task Force</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="adhoc">Ad Hoc</TabsTrigger>
            </TabsList>
            <TabsContent value="taskforce">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-700">Task Force</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <TaskList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="annual">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-700">Annual</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <AnnualList />
                    </CardContent>

                </Card>
            </TabsContent>
            <TabsContent value="adhoc">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-700">Ad Hoc</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <AdhocList />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
