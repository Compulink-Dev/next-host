// import ImageUpload from "@/components/ImageUpload"
import { DatePicker } from "@/components/dateTimePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/upload";

export function HomeTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex items-center justify-center mb-8 bg-green-600 text-white">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="main">Main</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="events">Events</TabsTrigger>
        <TabsTrigger value="milestone">Milestone</TabsTrigger>
        <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
      </TabsList>
      <TabsContent value="hero">
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Upload />
          </CardContent>
          <CardFooter>
            <Button className="bg-green-600 hover:bg-green-500">
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="main">
        <Card>
          <CardHeader>
            <CardTitle>Main</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Upload />
            <div className="space-y-1">
              <Label htmlFor="current">Title</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Description</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-green-600 hover:bg-green-500">
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="services">
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Upload />
            <div className="space-y-1">
              <Label htmlFor="current">Title</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Description</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-green-600 hover:bg-green-500">
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="events">
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Upload />
            <div className="space-y-1">
              <Label htmlFor="current">Title</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Slug</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Date</Label>
              <DatePicker />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-green-600 hover:bg-green-500">
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="milestone">
        <Card>
          <CardHeader>
            <CardTitle>Milestone</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Title</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Number</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Subtitle</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Description</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-green-600 hover:bg-green-500">
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="testimonial">
        <Card>
          <CardHeader>
            <CardTitle>Testimonial</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Title</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Name</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Company</Label>
              <Input id="current" type="text" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Position</Label>
              <Input id="current" type="text" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-green-600 hover:bg-green-500">
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
