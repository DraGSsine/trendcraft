"use client";

import { useState } from "react";
import { Check, Hash, Loader2, Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ContentIdea {
  title: string;
  description: string;
  tags: string[];
}

const categories = [
  "Technology",
  "Gaming",
  "Lifestyle",
  "Education",
  "Food & Cooking",
  "Travel",
  "Fitness & Health",
  "Business",
  "Entertainment",
  "Fashion & Beauty",
];

const timeRanges = [
  { value: "24h", label: "Last 24 Hours" },
  { value: "48h", label: "Last 48 Hours" },
  { value: "7d", label: "Last 7 Days" },
];

export default function Page() {
  const [category, setCategory] = useState("");
  const [timeRange, setTimeRange] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ideas, setIdeas] = useState<ContentIdea[]>([]);

  const handleGenerate = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIdeas([
      {
        title: "How AI is Revolutionizing Remote Work in 2025",
        description: "Explore the latest AI-powered tools and technologies transforming remote work environments, focusing on productivity and team collaboration.",
        tags: ["AI", "Remote Work", "Future Tech"]
      },
      {
        title: "Top 10 Tech Gadgets That Will Change Your Workflow",
        description: "A comprehensive review of innovative devices that are reshaping how professionals work and interact with technology.",
        tags: ["Gadgets", "Productivity", "Tech Review"]
      },
      {
        title: "The Future of Cloud Computing: What You Need to Know",
        description: "Deep dive into emerging cloud technologies and their impact on businesses, including hybrid solutions and edge computing.",
        tags: ["Cloud", "Enterprise", "Innovation"]
      }
    ]);
    setIsLoading(false);
  };

  return (
    <main className="h-screen w-full relative overflow-y-scroll ">
      <div className="absolute inset-0  bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-6 py-24 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Generate Trending Content Ideas
            </h1>
            <p className="text-zinc-400 text-lg">
              Get AI-powered content suggestions based on current trends
            </p>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 shadow-xl mb-8">
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">
                    Category
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">
                    Time Range
                  </label>
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {timeRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">
                  Channel Description
                </label>
                <Input
                  placeholder="Describe your channel or content focus..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-zinc-800 border-zinc-700"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!category || !timeRange || !description || isLoading}
                className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 text-zinc-50"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Ideas
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {ideas.length > 0 && (
            <div className="grid gap-4">
              {ideas.map((idea, index) => (
                <Card
                  key={index}
                  className={cn(
                    "bg-zinc-900 border-zinc-800 shadow-xl transition-all duration-300",
                    "hover:bg-zinc-800/50 group"
                  )}
                >
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-indigo-500" />
                      </div>
                      <span className="text-lg text-white group-hover:text-indigo-500 transition-colors">
                        {idea.title}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-zinc-400 ml-11">
                      {idea.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4 ml-11">
                      {idea.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                        >
                          <Hash className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}