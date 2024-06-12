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

export function FooterTab() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex gap-2 bg-green-600 text-white">
                <TabsTrigger value="link">Links</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="link">
                <Card>
                    <CardHeader>
                        <CardTitle>Links</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="link">Link</Label>
                            <Input id="link" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save changes</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="contact">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="telephone">Telephone</Label>
                            <Input id="telephone" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="website">Website</Label>
                            <Input id="website" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
