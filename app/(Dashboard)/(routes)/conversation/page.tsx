"use client"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from "react";
import Heading from "../../_components/Heading";
import { MessageSquareMore } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../_components/constant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatCompletionRequestMessage } from "openai";
import { useRouter } from "next/navigation";
import Nomessages from "../../_components/Nomessages";
import Loader from "../../_components/Loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "../../_components/UserAvatar";
import { BotAvatar } from "../../_components/BotAvatar";
const ConversationPage = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
      const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];
      
      const response = await axios.post('/api/conversation', { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);
      
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  }
  return (
  <div>
    <Heading 
    Title="Conversation" descrption="Have the best interaction with AI."
    Icon={<MessageSquareMore/>}
    color="text-orange-700"
    bg_color="bg-orange-700/10"
    />


    <div className="px-3 lg:px-3 pt-5">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="Send a message..." 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full bg-[#163020] hover:bg-[#304D30]" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-5">
          {
            isLoading && (
              <Loader/>
            )            
          }
          {
            messages.length === 0 && !isLoading &&(
                <Nomessages label="Start a Conversation with IvicamAI" />
            )
          }
           <div className="flex flex-col gap-y-4">
            {messages.map((message) => (
              <div 
                key={message.content} 
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-white border border-black/10" : "bg-muted",
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      <Toaster />
  </div>);
};

export default ConversationPage;
