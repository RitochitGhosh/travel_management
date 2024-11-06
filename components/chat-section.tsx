"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatSectionProps {
  packageId: number;
  packageName: string;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

export default function ChatSection({ packageId, packageName }: ChatSectionProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hello! I'm your dedicated travel agent for the ${packageName} package. How can I assist you today?`,
      sender: "agent",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: Message = {
        id: messages.length + 2,
        text: getAgentResponse(newMessage),
        sender: "agent",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
    }, 1000);
  };

  return (
    <div className="flex h-[500px] flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[80%] items-start space-x-2 ${
                  message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={
                      message.sender === "agent"
                        ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                        : undefined
                    }
                  />
                  <AvatarFallback>
                    {message.sender === "agent" ? "TA" : "ME"}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="mt-1 text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex space-x-2"
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

function getAgentResponse(userMessage: string): string {
  const responses = [
    "I'd be happy to help you with that! Could you please provide more details?",
    "That's a great question! Let me check the available options for you.",
    "I understand your interest. Would you like to know more about our special offers?",
    "I can definitely assist you with booking this package. Shall we go through the details?",
    "Thank you for your question. The package includes all the amenities you mentioned.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}