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
import Upload from "@/components/upload"
import { ReportTab } from "./reportTabs"
import DownloadList from "./downloadList"

export function DownloadTab() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="download">Downloads</TabsTrigger>
                <TabsTrigger value="report">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="download">
                <Card>
                    <CardHeader>
                        <CardTitle>Downloads</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <DownloadList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="report">
                <Card>
                    <CardHeader>
                        <CardTitle>Reports</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ReportTab />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
