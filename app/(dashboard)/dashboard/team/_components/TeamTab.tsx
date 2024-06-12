import CreateButton from "@/components/createButton"
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
import ChairsList from "./ChairsList"
import getChairs from "@/lib/team/getChairs"
import getCores from "@/lib/team/getCores"
import getTeams from "@/lib/team/getTeams"
import CoreList from "./CoreList"
import TeamList from "./TeamList"

export async function TeamTab() {

    const chairs = await getChairs()
    const cores = await getCores()
    const teams = await getTeams()

    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="title">Title</TabsTrigger>
                <TabsTrigger value="chairperson">Chairperson</TabsTrigger>
                <TabsTrigger value="steering">Steering</TabsTrigger>
                <TabsTrigger value="secretary">Secretariat</TabsTrigger>
            </TabsList>
            <TabsContent value="title">
                <Card>
                    <CardHeader>
                        <CardTitle>Title</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="subtitle">Subtitle</Label>
                            <Input id="subtitle" />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="chairperson">
                <Card>
                    <CardHeader>
                        <CardTitle>Chairperson</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="pb-4 flex justify-end">
                            <CreateButton link={'team/chair'} />
                        </div>
                        <ChairsList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="steering">
                <Card>
                    <CardHeader>
                        <CardTitle>Steering</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="pb-4 flex justify-end">
                            <CreateButton link={'team/core'} />
                        </div>
                        <CoreList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="secretary">
                <Card>
                    <CardHeader>
                        <CardTitle>Secretary</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="pb-4 flex justify-end">
                            <CreateButton link={'team'} />
                        </div>
                        <TeamList />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
