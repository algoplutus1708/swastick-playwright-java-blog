"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Sparkles,
  Code,
  BookOpen,
  HelpCircle,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "code" | "suggestion"
}

interface ChatbotProps {
  className?: string
}

export function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm your Playwright Java assistant. I can help you with automation testing questions, code examples, and best practices. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const quickSuggestions = [
    { text: "How to setup Playwright?", icon: <Code className="w-3 h-3" /> },
    { text: "API testing examples", icon: <BookOpen className="w-3 h-3" /> },
    { text: "Certificate handling", icon: <HelpCircle className="w-3 h-3" /> },
    { text: "Best practices", icon: <Sparkles className="w-3 h-3" /> },
  ]

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("setup") || message.includes("install")) {
      return `To setup Playwright with Java:

1. Add Maven dependency:
\`\`\`xml
<dependency>
  <groupId>com.microsoft.playwright</groupId>
  <artifactId>playwright</artifactId>
  <version>1.40.0</version>
</dependency>
\`\`\`

2. Install browsers:
\`mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="install"\`

3. Basic usage:
\`\`\`java
try (Playwright playwright = Playwright.create()) {
  Browser browser = playwright.chromium().launch();
  Page page = browser.newPage();
  page.navigate("https://example.com");
}
\`\`\`

Need help with anything specific?`
    }

    if (message.includes("api") && message.includes("test")) {
      return `Here's a basic API testing example:

\`\`\`java
APIRequestContext request = playwright.request().newContext();
APIResponse response = request.get("https://api.example.com/users");

// Validate response
assert response.status() == 200;
assert response.headers().get("content-type").contains("application/json");

String responseBody = response.text();
request.dispose();
\`\`\`

For authentication, you can add headers:
\`\`\`java
APIRequestContext request = playwright.request().newContext(
  new APIRequest.NewContextOptions()
    .setExtraHTTPHeaders(Map.of(
      "Authorization", "Bearer " + token
    ))
);
\`\`\`

Would you like to see more advanced examples?`
    }

    if (message.includes("certificate") || message.includes("ssl") || message.includes("https")) {
      return `To handle certificate issues, use \`ignoreHTTPSErrors(true)\`:

**For Browser Context:**
\`\`\`java
BrowserContext context = browser.newContext(
  new Browser.NewContextOptions()
    .setIgnoreHTTPSErrors(true)
);
\`\`\`

**For API Context:**
\`\`\`java
APIRequestContext request = playwright.request().newContext(
  new APIRequest.NewContextOptions()
    .setIgnoreHTTPSErrors(true)
);
\`\`\`

⚠️ **Important:** Only use this for testing environments, never in production!

Need help with a specific certificate error?`
    }

    if (message.includes("best practice") || message.includes("tips")) {
      return `Here are key Playwright Java best practices:

🎯 **Test Organization:**
• Use Page Object Model pattern
• Implement data-driven testing
• Create reusable utilities

⚡ **Performance:**
• Run tests in parallel
• Use browser context isolation
• Implement smart waiting strategies

🛡️ **Reliability:**
• Handle dynamic content properly
• Use explicit waits over sleeps
• Implement retry mechanisms
• Always dispose contexts and close browsers

📝 **Code Quality:**
• Use descriptive test names
• Add proper error handling
• Capture screenshots on failures

Which area would you like to explore further?`
    }

    if (message.includes("parallel") || message.includes("concurrent")) {
      return `For parallel test execution:

**TestNG Example:**
\`\`\`java
@Test(threadPoolSize = 3, invocationCount = 10)
public void parallelTest() {
  try (Playwright playwright = Playwright.create()) {
    APIRequestContext request = playwright.request().newContext();
    // Your test logic
    request.dispose();
  }
}
\`\`\`

**JUnit 5 Example:**
\`\`\`java
@Execution(ExecutionMode.CONCURRENT)
class ParallelTests {
  @Test
  @Execution(ExecutionMode.CONCURRENT)
  void test1() { /* test logic */ }
}
\`\`\`

**Thread Safety Tip:** Use ThreadLocal for browser instances in parallel execution.

Need help with thread-safe browser management?`
    }

    if (message.includes("error") || message.includes("debug") || message.includes("troubleshoot")) {
      return `Common troubleshooting tips:

🔍 **Debugging Steps:**
1. Take screenshots on failure
2. Capture page source
3. Log console messages
4. Check network requests

📸 **Capture Artifacts:**
\`\`\`java
// Screenshot
page.screenshot(new Page.ScreenshotOptions()
  .setPath(Paths.get("failure.png")));

// Page source
String source = page.content();
Files.write(Paths.get("source.html"), source.getBytes());
\`\`\`

🚨 **Common Issues:**
• Element not found → Check selectors and wait conditions
• Timeout errors → Increase timeout or improve waiting strategy
• Certificate errors → Use ignoreHTTPSErrors(true)
• Memory leaks → Always dispose contexts

What specific error are you encountering?`
    }

    if (message.includes("hello") || message.includes("hi") || message.includes("help")) {
      return `Hello! I'm here to help with Playwright Java automation. I can assist with:

🚀 **Getting Started**
• Setup and installation
• Basic examples
• Configuration

🧪 **Testing**
• Web automation
• API testing
• Form validation

🔧 **Advanced Topics**
• Certificate handling
• Performance testing
• Best practices

💡 **Troubleshooting**
• Common errors
• Debugging tips
• Optimization

What would you like to learn about?`
    }

    // Default response
    return `I'd be happy to help with that! Here are some topics I can assist with:

• **Setup & Installation** - Getting Playwright Java up and running
• **Web Testing** - Page interactions, locators, assertions
• **API Testing** - HTTP requests, authentication, validation
• **Certificate Issues** - SSL/TLS troubleshooting
• **Best Practices** - Code organization, performance, reliability
• **Troubleshooting** - Common errors and debugging

Could you be more specific about what you'd like to know? Or try one of the quick suggestions below!`
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot thinking time
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: getBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
          type:
            inputValue.toLowerCase().includes("code") || inputValue.toLowerCase().includes("example") ? "code" : "text",
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    handleSendMessage()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatMessage = (content: string) => {
    // Simple markdown-like formatting
    const parts = content.split(/(`[^`]+`|```[\s\S]*?```)/g)

    return parts.map((part, index) => {
      if (part.startsWith("```") && part.endsWith("```")) {
        const code = part.slice(3, -3).trim()
        const [lang, ...codeLines] = code.split("\n")
        const codeContent = codeLines.join("\n")

        return (
          <div key={index} className="my-3">
            <div className="bg-muted/50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              {lang && <div className="text-xs text-muted-foreground mb-2 uppercase font-semibold">{lang}</div>}
              <pre className="whitespace-pre-wrap">{codeContent}</pre>
            </div>
          </div>
        )
      } else if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={index} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
            {part.slice(1, -1)}
          </code>
        )
      } else {
        // Handle other formatting
        return part.split("\n").map((line, lineIndex) => {
          if (
            line.startsWith("• ") ||
            line.startsWith("🎯 ") ||
            line.startsWith("⚡ ") ||
            line.startsWith("🛡️ ") ||
            line.startsWith("📝 ") ||
            line.startsWith("🔍 ") ||
            line.startsWith("📸 ") ||
            line.startsWith("🚨 ") ||
            line.startsWith("🚀 ") ||
            line.startsWith("🧪 ") ||
            line.startsWith("🔧 ") ||
            line.startsWith("💡 ")
          ) {
            return (
              <div key={`${index}-${lineIndex}`} className="my-1 font-medium">
                {line}
              </div>
            )
          }
          return (
            <div key={`${index}-${lineIndex}`}>
              {line}
              {lineIndex < part.split("\n").length - 1 && <br />}
            </div>
          )
        })
      }
    })
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 transition-all duration-300 ${isMinimized ? "h-16" : ""} ${className}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <CardTitle className="text-sm font-semibold">Playwright Assistant</CardTitle>
            <p className="text-xs opacity-90">Java automation expert</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
          >
            {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-[calc(600px-80px)] p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 max-w-[85%] ${
                      message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      }`}
                    >
                      {message.sender === "user" ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 ${
                        message.sender === "user" ? "bg-blue-500 text-white" : "bg-muted text-foreground"
                      }`}
                    >
                      <div className="text-sm leading-relaxed">{formatMessage(message.content)}</div>
                      <div
                        className={`text-xs mt-1 opacity-70 ${
                          message.sender === "user" ? "text-blue-100" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="bg-muted rounded-lg px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t">
              <p className="text-xs text-muted-foreground mb-2">Quick suggestions:</p>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                    onClick={() => handleSuggestionClick(suggestion.text)}
                  >
                    {suggestion.icon}
                    <span className="ml-1">{suggestion.text}</span>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Playwright Java..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Press Enter to send • Shift+Enter for new line</p>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
