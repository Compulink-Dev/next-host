import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ResearchList from "./researchList"
import TaskList from "./taskList"
import ConferenceList from "./conferenceList"
import { Presentation } from "lucide-react"
import PresentList from "./presesntList"
import PolicyList from "./policyList"
import MonthList from "./monthlyList copy 2"
import QuarterList from "./quartetList"


export function ReportTab() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full flex bg-green-500 text-white ">
                <TabsTrigger value="research">Research Reports</TabsTrigger>
                <TabsTrigger value="task">Task Force Reports</TabsTrigger>
                <TabsTrigger value="conference">Conference Reports</TabsTrigger>
                <TabsTrigger value="policy">Policy Analysis Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="research">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600">Research Report</CardTitle>
                        <CardDescription>
                            Research report
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ResearchList />
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="task">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600">Task Force Report</CardTitle>
                        <CardDescription>
                            Task Force Report
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <TaskList />
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="conference">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600">Conference</CardTitle>
                        <CardDescription>
                            Conference & Presentations
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ConferenceList />
                    </CardContent>
                    <CardFooter>
                        <Tabs className="w-full">
                            <TabsList className="flex bg-green-600 text-white">
                                <TabsTrigger value="presentation">Conference Presentation</TabsTrigger>
                            </TabsList>
                            <TabsContent value="presentation">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-green-600">Conference Presentation</CardTitle>
                                        <CardDescription>
                                            Conference Presentation
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <PresentList />
                                    </CardContent>
                                    <CardFooter>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="policy">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-green-600">Policy Analysis Reports</CardTitle>
                        <CardDescription>
                            Policy Analysis Reports
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <PolicyList />
                    </CardContent>
                    <CardFooter>
                        <Tabs className="w-full">
                            <TabsList className="flex bg-green-500 text-white">
                                <TabsTrigger value="monthly">Monthly Bulletins</TabsTrigger>
                                <TabsTrigger value="quarterly">Quarterly Environmental Analysis Report</TabsTrigger>
                            </TabsList>
                            <TabsContent value="monthly">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-green-600">Monthly Bulletin</CardTitle>
                                        <CardDescription>
                                            Monthly Bulletin
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <MonthList />
                                    </CardContent>
                                    <CardFooter>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="quarterly">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-green-600">Quarterly Environmental Analysis Report</CardTitle>
                                        <CardDescription>
                                            Quarterly Environmental Analysis Report
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <QuarterList />
                                    </CardContent>
                                    <CardFooter>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
