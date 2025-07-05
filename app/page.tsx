"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Chatbot } from "@/components/chatbot"
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronRight,
  Play,
  Code,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Terminal,
  Settings,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function PlaywrightJavaBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "introduction",
        "web-testing",
        "api-testing",
        "challenges",
        "certificates",
        "best-practices",
        "practical-scenarios",
        "attribution",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Swastick's Tutorial
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {[
                { id: "hero", label: "Home" },
                { id: "introduction", label: "Introduction" },
                { id: "web-testing", label: "Web Testing" },
                { id: "api-testing", label: "API Testing" },
                { id: "challenges", label: "Challenges" },
                { id: "certificates", label: "Certificates" },
                { id: "best-practices", label: "Best Practices" },
                { id: "practical-scenarios", label: "Practical Scenarios" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-medium transition-colors hover:text-primary px-2 py-1 rounded-md ${
                    activeSection === item.id ? "text-primary bg-primary/10" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="animate-pulse hover:animate-none h-8 w-8 p-0"
              >
                {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-8 w-8 p-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 pb-3 animate-in slide-in-from-top-2">
              <div className="flex flex-col space-y-1">
                {[
                  { id: "hero", label: "Home" },
                  { id: "introduction", label: "Introduction" },
                  { id: "web-testing", label: "Web Testing" },
                  { id: "api-testing", label: "API Testing" },
                  { id: "challenges", label: "Challenges" },
                  { id: "certificates", label: "Certificates" },
                  { id: "best-practices", label: "Best Practices" },
                  { id: "practical-scenarios", label: "Practical Scenarios" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <Badge variant="secondary" className="mb-4 animate-bounce">
              <Zap className="w-3 h-3 mr-1" />
              Latest Playwright Techniques
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Playwright Automation
              <br />
              <span className="text-3xl md:text-5xl">Using Java</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the art of web and API testing automation with Playwright and Java. Comprehensive guides,
              real-world examples, and expert insights to elevate your testing skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("introduction")}
                className="group animate-pulse hover:animate-none"
              >
                Start Learning
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("api-testing")}>
                <Code className="w-4 h-4 mr-2" />
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Introduction to Playwright with Java</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Playwright is a powerful automation framework that enables reliable end-to-end testing for modern web
              applications across all major browsers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Globe className="w-6 h-6 text-blue-500" />
                  <CardTitle>Cross-Browser Testing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Playwright supports Chromium, Firefox, and WebKit with a single API, ensuring your applications work
                  consistently across all browsers.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm">
                    {`// Launch different browsers
Browser chromium = Playwright.create().chromium().launch();
Browser firefox = Playwright.create().firefox().launch();
Browser webkit = Playwright.create().webkit().launch();`}
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  <CardTitle>Reliable Testing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Auto-waiting, web-first assertions, and built-in retry mechanisms make your tests more reliable and
                  less flaky.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm">
                    {`// Auto-waiting for elements
page.locator("#submit-button").click();
// Waits for element to be actionable`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Setting Up Playwright with Java</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Add Maven Dependency</h4>
                  <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm whitespace-pre">{`<dependency>
    <groupId>com.microsoft.playwright</groupId>
    <artifactId>playwright</artifactId>
    <version>1.40.0</version>
</dependency>`}</code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Install Browsers</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <code className="text-sm">
                      mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="install"
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Basic Setup</h4>
                  <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm whitespace-pre">{`import com.microsoft.playwright.*;

public class PlaywrightExample {
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch();
            Page page = browser.newPage();
            page.navigate("https://example.com");
            System.out.println(page.title());
            browser.close();
        }
    }
}`}</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Web Testing Section */}
      <section id="web-testing" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Testing with Playwright</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to create robust web automation tests using Playwright's powerful features
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Page Object Model Implementation</CardTitle>
                <CardDescription>
                  Organize your test code with the Page Object Model pattern for better maintainability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre">{`public class LoginPage {
    private final Page page;
    private final Locator usernameInput;
    private final Locator passwordInput;
    private final Locator loginButton;

    public LoginPage(Page page) {
        this.page = page;
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-btn");
    }

    public void login(String username, String password) {
        usernameInput.fill(username);
        passwordInput.fill(password);
        loginButton.click();
    }

    public boolean isLoginSuccessful() {
        return page.locator(".welcome-message").isVisible();
    }
}`}</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Locator Strategies</CardTitle>
                <CardDescription>
                  Master different locator strategies for reliable element identification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Text-based Locators</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <code className="text-sm">page.locator("text=Submit").click();</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Role-based Locators</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <code className="text-sm">
                        page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Submit"));
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">CSS Selectors</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <code className="text-sm">page.locator("button[data-testid='submit']");</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Complete Web Testing Example</CardTitle>
              <CardDescription>
                A comprehensive example demonstrating form interaction, assertions, and error handling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm whitespace-pre">{`import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

public class WebTestExample {
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            // Launch browser with options
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
                .setHeadless(false)
                .setSlowMo(1000));
            
            // Create browser context with viewport
            BrowserContext context = browser.newContext(new Browser.NewContextOptions()
                .setViewportSize(1280, 720));
            
            Page page = context.newPage();
            
            // Navigate to the application
            page.navigate("https://example-app.com/login");
            
            // Wait for page to load
            page.waitForLoadState(LoadState.NETWORKIDLE);
            
            // Fill login form
            page.locator("#email").fill("user@example.com");
            page.locator("#password").fill("securePassword123");
            
            // Click login button and wait for navigation
            page.locator("button[type='submit']").click();
            page.waitForURL("**/dashboard");
            
            // Verify successful login
            assertThat(page.locator(".welcome-message"))
                .containsText("Welcome back!");
            
            // Take screenshot for verification
            page.screenshot(new Page.ScreenshotOptions()
                .setPath(Paths.get("dashboard.png")));
            
            // Interact with dashboard elements
            page.locator("[data-testid='user-menu']").click();
            page.locator("text=Profile Settings").click();
            
            // Verify profile page
            assertThat(page).hasTitle("Profile Settings");
            
            browser.close();
        }
    }
}`}</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Testing Section */}
      <section id="api-testing" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Testing with Playwright</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage Playwright's powerful API testing capabilities for comprehensive backend testing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Basic API Request Testing</CardTitle>
                <CardDescription>Learn how to make HTTP requests and validate responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre">{`import com.microsoft.playwright.*;

public class APITestExample {
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            APIRequestContext request = playwright.request().newContext();
            
            // GET Request
            APIResponse response = request.get("https://api.example.com/users");
            
            // Validate response
            assert response.status() == 200;
            assert response.headers().get("content-type").contains("application/json");
            
            // Parse JSON response
            String responseBody = response.text();
            System.out.println("Response: " + responseBody);
            
            request.dispose();
        }
    }
}`}</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>POST Request with Authentication</CardTitle>
                <CardDescription>Handle authentication and POST requests with JSON payloads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre">{`// Create request context with headers
APIRequestContext request = playwright.request().newContext(
    new APIRequest.NewContextOptions()
        .setBaseURL("https://api.example.com")
        .setExtraHTTPHeaders(Map.of(
            "Authorization", "Bearer " + authToken,
            "Content-Type", "application/json"
        ))
);

// POST request with JSON body
String jsonBody = "{\\"name\\": \\"John Doe\\", \\"email\\": \\"john@example.com\\"}";
APIResponse response = request.post("/users", 
    RequestOptions.create().setData(jsonBody));

// Validate response
assert response.status() == 201;
JsonNode responseJson = new ObjectMapper().readTree(response.text());
assert responseJson.get("id").asInt() > 0;`}</code>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Complete API Testing Suite</CardTitle>
              <CardDescription>
                A comprehensive API testing example with error handling and data validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm whitespace-pre">{`import com.microsoft.playwright.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Map;

public class ComprehensiveAPITest {
    private static final String BASE_URL = "https://api.example.com";
    private static final ObjectMapper mapper = new ObjectMapper();
    
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            // Create API request context
            APIRequestContext request = playwright.request().newContext(
                new APIRequest.NewContextOptions()
                    .setBaseURL(BASE_URL)
                    .setIgnoreHTTPSErrors(true) // Handle certificate issues
                    .setExtraHTTPHeaders(Map.of(
                        "Accept", "application/json",
                        "User-Agent", "Playwright-Java-Tests"
                    ))
            );
            
            // Test 1: Health Check
            testHealthCheck(request);
            
            // Test 2: User Authentication
            String authToken = testAuthentication(request);
            
            // Test 3: CRUD Operations
            testUserCRUD(request, authToken);
            
            // Test 4: Error Handling
            testErrorHandling(request);
            
            request.dispose();
        }
    }
    
    private static void testHealthCheck(APIRequestContext request) {
        System.out.println("Testing API Health Check...");
        APIResponse response = request.get("/health");
        
        assert response.status() == 200 : "Health check failed";
        System.out.println("✓ Health check passed");
    }
    
    private static String testAuthentication(APIRequestContext request) {
        System.out.println("Testing Authentication...");
        
        String loginPayload = "{\\"username\\": \\"testuser\\", \\"password\\": \\"testpass\\"}";
        APIResponse response = request.post("/auth/login", 
            RequestOptions.create()
                .setData(loginPayload)
                .setHeader("Content-Type", "application/json"));
        
        assert response.status() == 200 : "Authentication failed";
        
        try {
            JsonNode responseJson = mapper.readTree(response.text());
            String token = responseJson.get("token").asText();
            assert !token.isEmpty() : "Token is empty";
            
            System.out.println("✓ Authentication successful");
            return token;
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse auth response", e);
        }
    }
    
    private static void testUserCRUD(APIRequestContext request, String authToken) {
        System.out.println("Testing User CRUD Operations...");
        
        // Create authenticated request context
        APIRequestContext authRequest = request.newContext(
            new APIRequest.NewContextOptions()
                .setExtraHTTPHeaders(Map.of(
                    "Authorization", "Bearer " + authToken,
                    "Content-Type", "application/json"
                ))
        );
        
        // CREATE - Add new user
        String newUser = "{\\"name\\": \\"Test User\\", \\"email\\": \\"test@example.com\\"}";
        APIResponse createResponse = authRequest.post("/users", 
            RequestOptions.create().setData(newUser));
        
        assert createResponse.status() == 201 : "User creation failed";
        
        try {
            JsonNode createdUser = mapper.readTree(createResponse.text());
            int userId = createdUser.get("id").asInt();
            
            // READ - Get user by ID
            APIResponse getResponse = authRequest.get("/users/" + userId);
            assert getResponse.status() == 200 : "User retrieval failed";
            
            // UPDATE - Modify user
            String updateData = "{\\"name\\": \\"Updated User\\"}";
            APIResponse updateResponse = authRequest.put("/users/" + userId,
                RequestOptions.create().setData(updateData));
            assert updateResponse.status() == 200 : "User update failed";
            
            // DELETE - Remove user
            APIResponse deleteResponse = authRequest.delete("/users/" + userId);
            assert deleteResponse.status() == 204 : "User deletion failed";
            
            System.out.println("✓ CRUD operations completed successfully");
            
        } catch (Exception e) {
            throw new RuntimeException("CRUD operations failed", e);
        }
        
        authRequest.dispose();
    }
    
    private static void testErrorHandling(APIRequestContext request) {
        System.out.println("Testing Error Handling...");
        
        // Test 404 - Not Found
        APIResponse notFoundResponse = request.get("/users/99999");
        assert notFoundResponse.status() == 404 : "Expected 404 for non-existent user";
        
        // Test 400 - Bad Request
        APIResponse badRequestResponse = request.post("/users",
            RequestOptions.create().setData("invalid json"));
        assert badRequestResponse.status() == 400 : "Expected 400 for invalid JSON";
        
        // Test 401 - Unauthorized
        APIResponse unauthorizedResponse = request.get("/protected-endpoint");
        assert unauthorizedResponse.status() == 401 : "Expected 401 for unauthorized access";
        
        System.out.println("✓ Error handling tests passed");
    }
}`}</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section id="challenges" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Challenges in API Testing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to handle the most common issues encountered in API testing automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  <CardTitle>Browser Instance Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  One of the most common challenges is properly managing browser instances in API testing, especially
                  when combining web and API tests.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ Common Mistake</h4>
                    <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                      <code className="text-sm">{`// Don't create multiple browser instances unnecessarily
Browser browser1 = playwright.chromium().launch();
Browser browser2 = playwright.chromium().launch(); // Wasteful!`}</code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Best Practice</h4>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                      <code className="text-sm">{`// Reuse browser instance with multiple contexts
Browser browser = playwright.chromium().launch();
BrowserContext context1 = browser.newContext();
BrowserContext context2 = browser.newContext();`}</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-6 h-6 text-blue-500" />
                  <CardTitle>Request Context Lifecycle</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Managing API request contexts properly to avoid memory leaks and connection issues.
                </p>

                <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre">{`public class APITestManager {
    private APIRequestContext requestContext;
    
    @BeforeEach
    public void setUp() {
        Playwright playwright = Playwright.create();
        requestContext = playwright.request().newContext(
            new APIRequest.NewContextOptions()
                .setBaseURL("https://api.example.com")
                .setTimeout(30000)
        );
    }
    
    @AfterEach
    public void tearDown() {
        if (requestContext != null) {
            requestContext.dispose(); // Always dispose!
        }
    }
}`}</code>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Advanced Browser Instance Patterns</CardTitle>
              <CardDescription>
                Sophisticated patterns for managing browser instances in complex test scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm whitespace-pre">{`public class BrowserManager {
    private static final ThreadLocal<Browser> browserThreadLocal = new ThreadLocal<>();
    private static final ThreadLocal<Playwright> playwrightThreadLocal = new ThreadLocal<>();
    
    public static Browser getBrowser() {
        if (browserThreadLocal.get() == null) {
            Playwright playwright = Playwright.create();
            playwrightThreadLocal.set(playwright);
            
            Browser browser = playwright.chromium().launch(
                new BrowserType.LaunchOptions()
                    .setHeadless(true)
                    .setArgs(Arrays.asList(
                        "--disable-web-security",
                        "--disable-features=VizDisplayCompositor",
                        "--no-sandbox"
                    ))
            );
            browserThreadLocal.set(browser);
        }
        return browserThreadLocal.get();
    }
    
    public static BrowserContext createContext() {
        return getBrowser().newContext(new Browser.NewContextOptions()
            .setIgnoreHTTPSErrors(true)
            .setViewportSize(1280, 720)
            .setUserAgent("Mozilla/5.0 (compatible; PlaywrightBot/1.0)")
        );
    }
    
    public static APIRequestContext createAPIContext() {
        return playwrightThreadLocal.get().request().newContext(
            new APIRequest.NewContextOptions()
                .setIgnoreHTTPSErrors(true)
                .setTimeout(60000)
                .setExtraHTTPHeaders(Map.of(
                    "Accept", "application/json",
                    "Content-Type", "application/json"
                ))
        );
    }
    
    public static void cleanup() {
        Browser browser = browserThreadLocal.get();
        if (browser != null) {
            browser.close();
            browserThreadLocal.remove();
        }
        
        Playwright playwright = playwrightThreadLocal.get();
        if (playwright != null) {
            playwright.close();
            playwrightThreadLocal.remove();
        }
    }
}`}</code>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Resource Management</h3>
                <p className="text-sm text-muted-foreground">
                  Always dispose of contexts and close browsers to prevent memory leaks
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Thread Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Use ThreadLocal for parallel test execution with multiple browser instances
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Context Isolation</h3>
                <p className="text-sm text-muted-foreground">
                  Create separate contexts for different test scenarios to avoid interference
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificate Issues Section */}
      <section id="certificates" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Handling Certificate Issues</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to resolve SSL/TLS certificate problems using ignoreHTTPSErrors(true) and other techniques
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <CardTitle>Common Certificate Errors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                      SSL Certificate Verification Failed
                    </h4>
                    <code className="text-sm text-red-600 dark:text-red-300">
                      javax.net.ssl.SSLHandshakeException: PKIX path building failed
                    </code>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Self-Signed Certificate</h4>
                    <code className="text-sm text-red-600 dark:text-red-300">
                      Error: self signed certificate in certificate chain
                    </code>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Certificate Name Mismatch</h4>
                    <code className="text-sm text-red-600 dark:text-red-300">Error: Hostname verification failed</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  <CardTitle>Solution: ignoreHTTPSErrors(true)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The <code className="bg-muted px-2 py-1 rounded">ignoreHTTPSErrors(true)</code> method bypasses SSL
                  certificate validation, allowing tests to run against development or staging environments.
                </p>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <code className="text-sm whitespace-pre">{`// For Browser Context
BrowserContext context = browser.newContext(
    new Browser.NewContextOptions()
        .setIgnoreHTTPSErrors(true)
);

// For API Request Context
APIRequestContext request = playwright.request().newContext(
    new APIRequest.NewContextOptions()
        .setIgnoreHTTPSErrors(true)
);`}</code>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Complete Certificate Handling Implementation</CardTitle>
              <CardDescription>
                A comprehensive approach to handling various certificate scenarios in your tests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm whitespace-pre">{`import com.microsoft.playwright.*;
import java.util.Map;

public class CertificateHandlingExample {
    
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            
            // Method 1: Browser Context with Certificate Handling
            testWithBrowserContext(playwright);
            
            // Method 2: API Request Context with Certificate Handling
            testWithAPIContext(playwright);
            
            // Method 3: Combined Web and API Testing
            testCombinedScenario(playwright);
        }
    }
    
    private static void testWithBrowserContext(Playwright playwright) {
        System.out.println("Testing with Browser Context - Certificate Handling");
        
        Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
            .setHeadless(false)
            .setIgnoreDefaultArgs(Arrays.asList("--disable-web-security"))
        );
        
        // Create context with certificate handling
        BrowserContext context = browser.newContext(new Browser.NewContextOptions()
            .setIgnoreHTTPSErrors(true)  // Ignore SSL certificate errors
            .setExtraHTTPHeaders(Map.of(
                "Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language", "en-US,en;q=0.5",
                "Accept-Encoding", "gzip, deflate",
                "User-Agent", "Mozilla/5.0 (compatible; PlaywrightBot/1.0)"
            ))
        );
        
        Page page = context.newPage();
        
        try {
            // Navigate to HTTPS site with certificate issues
            page.navigate("https://self-signed.badssl.com/");
            
            // Verify page loaded despite certificate issues
            String title = page.title();
            System.out.println("Page title: " + title);
            
            // Take screenshot for verification
            page.screenshot(new Page.ScreenshotOptions()
                .setPath(Paths.get("certificate-test.png")));
            
            System.out.println("✓ Successfully handled certificate issues in browser");
            
        } catch (Exception e) {
            System.err.println("Browser test failed: " + e.getMessage());
        } finally {
            context.close();
            browser.close();
        }
    }
    
    private static void testWithAPIContext(Playwright playwright) {
        System.out.println("Testing with API Context - Certificate Handling");
        
        // Create API request context with certificate handling
        APIRequestContext request = playwright.request().newContext(
            new APIRequest.NewContextOptions()
                .setIgnoreHTTPSErrors(true)  // Ignore SSL certificate errors
                .setTimeout(30000)
                .setExtraHTTPHeaders(Map.of(
                    "Accept", "application/json",
                    "Content-Type", "application/json",
                    "User-Agent", "Playwright-API-Test/1.0"
                ))
        );
        
        try {
            // Test API endpoint with certificate issues
            APIResponse response = request.get("https://self-signed.badssl.com/");
            
            System.out.println("Response Status: " + response.status());
            System.out.println("Response Headers: " + response.headers());
            
            // Verify response
            if (response.status() == 200) {
                System.out.println("✓ Successfully handled certificate issues in API request");
            }
            
        } catch (Exception e) {
            System.err.println("API test failed: " + e.getMessage());
        } finally {
            request.dispose();
        }
    }
    
    private static void testCombinedScenario(Playwright playwright) {
        System.out.println("Testing Combined Web and API Scenario");
        
        Browser browser = playwright.chromium().launch();
        
        // Browser context for web testing
        BrowserContext webContext = browser.newContext(
            new Browser.NewContextOptions()
                .setIgnoreHTTPSErrors(true)
                .setViewportSize(1280, 720)
        );
        
        // API context for API testing
        APIRequestContext apiContext = playwright.request().newContext(
            new APIRequest.NewContextOptions()
                .setIgnoreHTTPSErrors(true)
                .setBaseURL("https://api.staging-environment.com")
        );
        
        try {
            Page page = webContext.newPage();
            
            // Step 1: Login via web interface
            page.navigate("https://staging-app.com/login");
            page.locator("#username").fill("testuser");
            page.locator("#password").fill("testpass");
            page.locator("#login-btn").click();
            
            // Step 2: Extract authentication token from browser
            String authToken = (String) page.evaluate("() => localStorage.getItem('authToken')");
            
            // Step 3: Use token for API testing
            APIResponse apiResponse = apiContext.get("/user/profile",
                RequestOptions.create().setHeader("Authorization", "Bearer " + authToken));
            
            // Step 4: Verify API response
            assert apiResponse.status() == 200;
            System.out.println("API Response: " + apiResponse.text());
            
            // Step 5: Update data via API
            String updatePayload = "{\\"name\\": \\"Updated Name\\"}";
            APIResponse updateResponse = apiContext.put("/user/profile",
                RequestOptions.create()
                    .setHeader("Authorization", "Bearer " + authToken)
                    .setData(updatePayload));
            
            assert updateResponse.status() == 200;
            
            // Step 6: Verify changes in web interface
            page.reload();
            String updatedName = page.locator(".user-name").textContent();
            assert updatedName.equals("Updated Name");
            
            System.out.println("✓ Combined web and API testing completed successfully");
            
        } catch (Exception e) {
            System.err.println("Combined test failed: " + e.getMessage());
        } finally {
            webContext.close();
            apiContext.dispose();
            browser.close();
        }
    }
}

// Additional utility class for certificate management
class CertificateUtils {
    
    public static BrowserContext createSecureBrowserContext(Browser browser) {
        return browser.newContext(new Browser.NewContextOptions()
            .setIgnoreHTTPSErrors(true)
            .setExtraHTTPHeaders(Map.of(
                "Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Cache-Control", "no-cache",
                "Pragma", "no-cache"
            ))
        );
    }
    
    public static APIRequestContext createSecureAPIContext(Playwright playwright, String baseURL) {
        return playwright.request().newContext(
            new APIRequest.NewContextOptions()
                .setBaseURL(baseURL)
                .setIgnoreHTTPSErrors(true)  // Key method for certificate issues
                .setTimeout(60000)
                .setExtraHTTPHeaders(Map.of(
                    "Accept", "application/json",
                    "Content-Type", "application/json",
                    "Cache-Control", "no-cache"
                ))
        );
    }
    
    public static void logCertificateInfo(APIResponse response) {
        System.out.println("=== Certificate Information ===");
        System.out.println("Status: " + response.status());
        System.out.println("Status Text: " + response.statusText());
        System.out.println("Headers: " + response.headers());
        System.out.println("URL: " + response.url());
        System.out.println("===============================");
    }
}`}</code>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✅ When to Use ignoreHTTPSErrors(true)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Testing against development/staging environments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Working with self-signed certificates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Internal corporate networks with custom CAs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Local development servers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">⚠️ Security Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Never use in production environments</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Disables important security validations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Use only for testing purposes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Document usage in test documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section id="best-practices" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Practices & Advanced Techniques</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master advanced Playwright techniques and industry best practices for robust automation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  <CardTitle>Test Organization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Use Page Object Model pattern</li>
                  <li>• Implement data-driven testing</li>
                  <li>• Create reusable test utilities</li>
                  <li>• Organize tests by feature/module</li>
                  <li>• Use descriptive test names</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <CardTitle>Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Run tests in parallel</li>
                  <li>• Use browser context isolation</li>
                  <li>• Implement smart waiting strategies</li>
                  <li>• Optimize selector strategies</li>
                  <li>• Cache authentication tokens</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  <CardTitle>Reliability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Handle dynamic content properly</li>
                  <li>• Implement retry mechanisms</li>
                  <li>• Use explicit waits over sleeps</li>
                  <li>• Validate test data setup</li>
                  <li>• Clean up test artifacts</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Advanced Test Configuration</CardTitle>
              <CardDescription>Production-ready test configuration with comprehensive settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm whitespace-pre">{`// playwright.config.java - Configuration class
public class PlaywrightConfig {
    
    public static final class BrowserConfig {
        public static final boolean HEADLESS = Boolean.parseBoolean(
            System.getProperty("headless", "true"));
        public static final int TIMEOUT = Integer.parseInt(
            System.getProperty("timeout", "30000"));
        public static final String BROWSER = System.getProperty("browser", "chromium");
        public static final boolean SLOW_MO = Boolean.parseBoolean(
            System.getProperty("slowMo", "false"));
    }
    
    public static final class APIConfig {
        public static final String BASE_URL = System.getProperty(
            "api.baseUrl", "https://api.example.com");
        public static final int TIMEOUT = Integer.parseInt(
            System.getProperty("api.timeout", "60000"));
        public static final boolean IGNORE_HTTPS = Boolean.parseBoolean(
            System.getProperty("api.ignoreHttps", "false"));
    }
    
    public static BrowserType.LaunchOptions getBrowserLaunchOptions() {
        List<String> args = new ArrayList<>();
        args.add("--disable-web-security");
        args.add("--disable-features=VizDisplayCompositor");
        args.add("--no-sandbox");
        args.add("--disable-dev-shm-usage");
        
        if (System.getProperty("os.name").toLowerCase().contains("linux")) {
            args.add("--disable-gpu");
        }
        
        return new BrowserType.LaunchOptions()
            .setHeadless(BrowserConfig.HEADLESS)
            .setSlowMo(BrowserConfig.SLOW_MO ? 1000 : 0)
            .setArgs(args)
            .setTimeout(BrowserConfig.TIMEOUT);
    }
    
    public static Browser.NewContextOptions getContextOptions() {
        return new Browser.NewContextOptions()
            .setViewportSize(1280, 720)
            .setIgnoreHTTPSErrors(APIConfig.IGNORE_HTTPS)
            .setExtraHTTPHeaders(Map.of(
                "Accept-Language", "en-US,en;q=0.9",
                "Accept-Encoding", "gzip, deflate, br",
                "Cache-Control", "no-cache",
                "Pragma", "no-cache"
            ))
            .setUserAgent("Mozilla/5.0 (compatible; PlaywrightBot/1.0; +http://example.com/bot)");
    }
    
    public static APIRequest.NewContextOptions getAPIContextOptions() {
        return new APIRequest.NewContextOptions()
            .setBaseURL(APIConfig.BASE_URL)
            .setTimeout(APIConfig.TIMEOUT)
            .setIgnoreHTTPSErrors(APIConfig.IGNORE_HTTPS)
            .setExtraHTTPHeaders(Map.of(
                "Accept", "application/json",
                "Content-Type", "application/json",
                "User-Agent", "Playwright-API-Client/1.0"
            ));
    }
}`}</code>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Parallel Test Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre">{`// TestNG parallel execution
@Test(threadPoolSize = 3, invocationCount = 10)
public void parallelAPITest() {
    try (Playwright playwright = Playwright.create()) {
        APIRequestContext request = playwright.request()
            .newContext(PlaywrightConfig.getAPIContextOptions());
        
        // Your test logic here
        APIResponse response = request.get("/endpoint");
        assert response.status() == 200;
        
        request.dispose();
    }
}

// JUnit 5 parallel execution
@EnabledIf("java.util.concurrent.ForkJoinPool.getCommonPoolParallelism() > 1")
@Execution(ExecutionMode.CONCURRENT)
class ParallelTests {
    
    @Test
    @Execution(ExecutionMode.CONCURRENT)
    void testEndpoint1() {
        // Test implementation
    }
    
    @Test
    @Execution(ExecutionMode.CONCURRENT)
    void testEndpoint2() {
        // Test implementation
    }
}`}</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Error Handling & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre">{`public class TestUtils {
    
    public static void handleTestFailure(Page page, String testName) {
        try {
            // Take screenshot on failure
            byte[] screenshot = page.screenshot();
            String fileName = testName + "_" + 
                System.currentTimeMillis() + ".png";
            Files.write(Paths.get("screenshots", fileName), screenshot);
            
            // Capture page source
            String pageSource = page.content();
            Files.write(Paths.get("page-sources", 
                testName + "_source.html"), pageSource.getBytes());
            
            // Log browser console messages
            page.onConsoleMessage(msg -> 
                System.out.println("Console: " + msg.text()));
                
        } catch (Exception e) {
            System.err.println("Failed to capture failure artifacts: " + 
                e.getMessage());
        }
    }
    
    public static void logAPIResponse(APIResponse response) {
        System.out.println("=== API Response Details ===");
        System.out.println("URL: " + response.url());
        System.out.println("Status: " + response.status());
        System.out.println("Headers: " + response.headers());
        System.out.println("Body: " + response.text());
        System.out.println("============================");
    }
}`}</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Testing Scenarios Section */}
      <section id="practical-scenarios" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Practical Testing Scenarios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world testing scenarios with complete code examples for common automation challenges
            </p>
          </div>

          {/* E-commerce Testing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span>E-commerce Testing Scenario</span>
              </CardTitle>
              <CardDescription>
                Complete end-to-end testing of an e-commerce application including product search, cart operations, and
                checkout
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm whitespace-pre">{`import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import java.util.List;
import java.util.Map;

public class EcommerceTestScenario {
    private Playwright playwright;
    private Browser browser;
    private BrowserContext context;
    private Page page;
    
    @BeforeEach
    public void setUp() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
            .setHeadless(false)
            .setSlowMo(500));
        
        context = browser.newContext(new Browser.NewContextOptions()
            .setViewportSize(1280, 720)
            .setIgnoreHTTPSErrors(true));
        
        page = context.newPage();
        
        // Enable request/response logging
        page.onRequest(request -> 
            System.out.println("Request: " + request.method() + " " + request.url()));
        page.onResponse(response -> 
            System.out.println("Response: " + response.status() + " " + response.url()));
    }
    
    @Test
    public void testCompleteEcommercePurchaseFlow() {
        try {
            // Step 1: Navigate to e-commerce site
            page.navigate("https://demo-store.example.com");
            page.waitForLoadState(LoadState.NETWORKIDLE);
            
            // Step 2: Search for product
            searchForProduct("laptop");
            
            // Step 3: Filter and select product
            applyFilters();
            selectProduct();
            
            // Step 4: Add to cart and verify
            addToCartAndVerify();
            
            // Step 5: Proceed to checkout
            proceedToCheckout();
            
            // Step 6: Fill shipping information
            fillShippingInformation();
            
            // Step 7: Select payment method and complete order
            completePayment();
            
            // Step 8: Verify order confirmation
            verifyOrderConfirmation();
            
        } catch (Exception e) {
            captureFailureArtifacts("ecommerce_test_failure");
            throw e;
        }
    }
    
    private void searchForProduct(String searchTerm) {
        System.out.println("Searching for product: " + searchTerm);
        
        // Wait for search box and enter search term
        Locator searchBox = page.locator("[data-testid='search-input']");
        searchBox.waitFor(new Locator.WaitForOptions().setTimeout(10000));
        searchBox.fill(searchTerm);
        
        // Click search button or press Enter
        page.locator("[data-testid='search-button']").click();
        
        // Wait for search results to load
        page.waitForSelector(".product-grid", new Page.WaitForSelectorOptions()
            .setTimeout(15000));
        
        // Verify search results are displayed
        assertThat(page.locator(".product-item")).hasCountGreaterThan(0);
        System.out.println("✓ Search results loaded successfully");
    }
    
    private void applyFilters() {
        System.out.println("Applying product filters");
        
        // Apply price filter
        page.locator("[data-testid='price-filter-500-1000']").check();
        
        // Apply brand filter
        page.locator("[data-testid='brand-filter-dell']").check();
        
        // Apply rating filter
        page.locator("[data-testid='rating-filter-4-stars']").check();
        
        // Wait for filtered results
        page.waitForFunction("() => document.querySelector('.loading-spinner') === null");
        
        // Verify filters are applied
        assertThat(page.locator(".active-filter")).hasCountGreaterThan(0);
        System.out.println("✓ Filters applied successfully");
    }
    
    private void selectProduct() {
        System.out.println("Selecting product from search results");
        
        // Get first product from filtered results
        Locator firstProduct = page.locator(".product-item").first();
        
        // Store product details for later verification
        String productName = firstProduct.locator(".product-name").textContent();
        String productPrice = firstProduct.locator(".product-price").textContent();
        
        // Click on product to view details
        firstProduct.click();
        
        // Wait for product detail page to load
        page.waitForSelector(".product-detail-container");
        
        // Verify we're on the correct product page
        assertThat(page.locator(".product-title")).containsText(productName);
        
        System.out.println("✓ Product selected: " + productName);
    }
    
    private void addToCartAndVerify() {
        System.out.println("Adding product to cart");
        
        // Select product options if available
        if (page.locator(".product-options").isVisible()) {
            // Select size
            page.locator("[data-testid='size-option-medium']").click();
            
            // Select color
            page.locator("[data-testid='color-option-black']").click();
        }
        
        // Set quantity
        page.locator("[data-testid='quantity-input']").fill("2");
        
        // Add to cart
        page.locator("[data-testid='add-to-cart-button']").click();
        
        // Wait for cart update notification
        page.waitForSelector(".cart-notification", new Page.WaitForSelectorOptions()
            .setTimeout(5000));
        
        // Verify cart icon shows updated count
        assertThat(page.locator(".cart-count")).containsText("2");
        
        // Verify success message
        assertThat(page.locator(".cart-notification"))
            .containsText("Product added to cart successfully");
        
        System.out.println("✓ Product added to cart successfully");
    }
    
    private void proceedToCheckout() {
        System.out.println("Proceeding to checkout");
        
        // Click cart icon to open cart
        page.locator("[data-testid='cart-icon']").click();
        
        // Wait for cart dropdown/modal to appear
        page.waitForSelector(".cart-dropdown");
        
        // Verify cart contents
        assertThat(page.locator(".cart-item")).hasCount(1);
        
        // Click checkout button
        page.locator("[data-testid='checkout-button']").click();
        
        // Wait for checkout page to load
        page.waitForURL("**/checkout");
        
        System.out.println("✓ Navigated to checkout page");
    }
    
    private void fillShippingInformation() {
        System.out.println("Filling shipping information");
        
        // Fill shipping form
        Map<String, String> shippingInfo = Map.of(
            "firstName", "John",
            "lastName", "Doe",
            "email", "john.doe@example.com",
            "phone", "+1234567890",
            "address", "123 Main Street",
            "city", "New York",
            "zipCode", "10001",
            "country", "United States"
        );
        
        for (Map.Entry<String, String> entry : shippingInfo.entrySet()) {
            Locator field = page.locator("[data-testid='shipping-" + entry.getKey() + "']");
            field.fill(entry.getValue());
        }
        
        // Select state from dropdown
        page.locator("[data-testid='shipping-state']").selectOption("NY");
        
        // Select shipping method
        page.locator("[data-testid='shipping-method-standard']").check();
        
        // Continue to payment
        page.locator("[data-testid='continue-to-payment']").click();
        
        // Wait for payment section to load
        page.waitForSelector(".payment-section");
        
        System.out.println("✓ Shipping information filled successfully");
    }
    
    private void completePayment() {
        System.out.println("Completing payment process");
        
        // Select payment method
        page.locator("[data-testid='payment-method-card']").check();
        
        // Fill credit card information (test data)
        page.locator("[data-testid='card-number']").fill("4111111111111111");
        page.locator("[data-testid='card-expiry']").fill("12/25");
        page.locator("[data-testid='card-cvv']").fill("123");
        page.locator("[data-testid='card-name']").fill("John Doe");
        
        // Fill billing address (same as shipping)
        page.locator("[data-testid='billing-same-as-shipping']").check();
        
        // Review order summary
        verifyOrderSummary();
        
        // Place order
        page.locator("[data-testid='place-order-button']").click();
        
        // Wait for order processing
        page.waitForSelector(".order-processing", new Page.WaitForSelectorOptions()
            .setTimeout(30000));
        
        System.out.println("✓ Payment completed successfully");
    }
    
    private void verifyOrderSummary() {
        System.out.println("Verifying order summary");
        
        // Verify product details in summary
        assertThat(page.locator(".order-summary .product-name")).isVisible();
        assertThat(page.locator(".order-summary .product-quantity")).containsText("2");
        
        // Verify pricing
        assertThat(page.locator(".order-summary .subtotal")).isVisible();
        assertThat(page.locator(".order-summary .shipping-cost")).isVisible();
        assertThat(page.locator(".order-summary .tax")).isVisible();
        assertThat(page.locator(".order-summary .total")).isVisible();
        
        System.out.println("✓ Order summary verified");
    }
    
    private void verifyOrderConfirmation() {
        System.out.println("Verifying order confirmation");
        
        // Wait for confirmation page
        page.waitForURL("**/order-confirmation/**");
        
        // Verify confirmation message
        assertThat(page.locator(".confirmation-message"))
            .containsText("Your order has been placed successfully");
        
        // Verify order number is displayed
        assertThat(page.locator(".order-number")).isVisible();
        String orderNumber = page.locator(".order-number").textContent();
        
        // Verify order details
        assertThat(page.locator(".order-details")).isVisible();
        
        // Take screenshot of confirmation page
        page.screenshot(new Page.ScreenshotOptions()
            .setPath(Paths.get("order-confirmation-" + orderNumber + ".png")));
        
        System.out.println("✓ Order confirmation verified. Order Number: " + orderNumber);
    }
    
    private void captureFailureArtifacts(String testName) {
        try {
            // Take screenshot
            page.screenshot(new Page.ScreenshotOptions()
                .setPath(Paths.get("failures/" + testName + "-screenshot.png")));
            
            // Save page source
            String pageSource = page.content();
            Files.write(Paths.get("failures/" + testName + "-source.html"), 
                pageSource.getBytes());
            
            // Save console logs
            List<String> consoleLogs = page.evaluate("() => window.consoleLogs || []");
            Files.write(Paths.get("failures/" + testName + "-console.log"), 
                String.join("\n", consoleLogs).getBytes());
                
        } catch (Exception e) {
            System.err.println("Failed to capture failure artifacts: " + e.getMessage());
        }
    }
    
    @AfterEach
    public void tearDown() {
        if (context != null) context.close();
        if (browser != null) browser.close();
        if (playwright != null) playwright.close();
    }
}`}</code>
              </div>
            </CardContent>
          </Card>

          {/* Form Validation Testing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Form Validation Testing</span>
              </CardTitle>
              <CardDescription>
                Comprehensive form validation testing including field validation, error handling, and user experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm whitespace-pre">{`public class FormValidationTests {
    
    @Test
    public void testUserRegistrationFormValidation() {
        page.navigate("https://example.com/register");
        
        // Test empty form submission
        testEmptyFormValidation();
        
        // Test individual field validations
        testEmailValidation();
        testPasswordValidation();
        testPhoneValidation();
        testDateValidation();
        
        // Test successful form submission
        testSuccessfulRegistration();
    }
    
    private void testEmptyFormValidation() {
        System.out.println("Testing empty form validation");
        
        // Try to submit empty form
        page.locator("[data-testid='submit-button']").click();
        
        // Verify required field errors are displayed
        assertThat(page.locator("[data-testid='email-error']"))
            .containsText("Email is required");
        assertThat(page.locator("[data-testid='password-error']"))
            .containsText("Password is required");
        assertThat(page.locator("[data-testid='firstName-error']"))
            .containsText("First name is required");
        
        // Verify form is not submitted
        assertThat(page).hasURL("**/register");
        
        System.out.println("✓ Empty form validation working correctly");
    }
    
    private void testEmailValidation() {
        System.out.println("Testing email field validation");
        
        String[] invalidEmails = {
            "invalid-email",
            "@example.com",
            "user@",
            "user..name@example.com",
            "user@example",
            ""
        };
        
        for (String email : invalidEmails) {
            // Clear and fill email field
            page.locator("[data-testid='email-input']").fill("");
            page.locator("[data-testid='email-input']").fill(email);
            
            // Trigger validation (blur event)
            page.locator("[data-testid='email-input']").blur();
            
            // Verify error message appears
            assertThat(page.locator("[data-testid='email-error']"))
                .containsText("Please enter a valid email address");
        }
        
        // Test valid email
        page.locator("[data-testid='email-input']").fill("user@example.com");
        page.locator("[data-testid='email-input']").blur();
        
        // Verify no error message
        assertThat(page.locator("[data-testid='email-error']")).not().isVisible();
        
        System.out.println("✓ Email validation working correctly");
    }
    
    private void testPasswordValidation() {
        System.out.println("Testing password field validation");
        
        // Test password strength requirements
        String[] weakPasswords = {
            "123",           // Too short
            "password",      // No numbers/special chars
            "12345678",      // No letters
            "Password",      // No numbers/special chars
            "password123"    // No special chars
        };
        
        for (String password : weakPasswords) {
            page.locator("[data-testid='password-input']").fill("");
            page.locator("[data-testid='password-input']").fill(password);
            page.locator("[data-testid='password-input']").blur();
            
            // Verify password strength indicator
            assertThat(page.locator("[data-testid='password-strength']"))
                .hasClass(/.*weak.*/);
        }
        
        // Test strong password
        page.locator("[data-testid='password-input']").fill("StrongPass123!");
        page.locator("[data-testid='password-input']").blur();
        
        assertThat(page.locator("[data-testid='password-strength']"))
            .hasClass(/.*strong.*/);
        
        // Test password confirmation
        page.locator("[data-testid='confirm-password-input']").fill("DifferentPass123!");
        page.locator("[data-testid='confirm-password-error']").blur();
        
        assertThat(page.locator("[data-testid='confirm-password-error']"))
            .containsText("Passwords do not match");
        
        // Fix password confirmation
        page.locator("[data-testid='confirm-password-input']").fill("StrongPass123!");
        page.locator("[data-testid='confirm-password-input']").blur();
        
        assertThat(page.locator("[data-testid='confirm-password-error']")).not().isVisible();
        
        System.out.println("✓ Password validation working correctly");
    }
    
    private void testPhoneValidation() {
        System.out.println("Testing phone number validation");
        
        String[] invalidPhones = {
            "123",
            "abcdefghij",
            "123-456",
            "+1-800-INVALID"
        };
        
        for (String phone : invalidPhones) {
            page.locator("[data-testid='phone-input']").fill("");
            page.locator("[data-testid='phone-input']").fill(phone);
            page.locator("[data-testid='phone-input']").blur();
            
            assertThat(page.locator("[data-testid='phone-error']"))
                .containsText("Please enter a valid phone number");
        }
        
        // Test valid phone formats
        String[] validPhones = {
            "+1-555-123-4567",
            "(555) 123-4567",
            "555.123.4567",
            "5551234567"
        };
        
        for (String phone : validPhones) {
            page.locator("[data-testid='phone-input']").fill("");
            page.locator("[data-testid='phone-input']").fill(phone);
            page.locator("[data-testid='phone-input']").blur();
            
            assertThat(page.locator("[data-testid='phone-error']")).not().isVisible();
        }
        
        System.out.println("✓ Phone validation working correctly");
    }
    
    private void testDateValidation() {
        System.out.println("Testing date field validation");
        
        // Test date picker functionality
        page.locator("[data-testid='birthdate-input']").click();
        
        // Verify date picker opens
        assertThat(page.locator(".date-picker")).isVisible();
        
        // Select a future date (should be invalid for birthdate)
        LocalDate futureDate = LocalDate.now().plusYears(1);
        page.locator(".date-picker").locator("[data-date='" + futureDate + "']").click();
        
        assertThat(page.locator("[data-testid='birthdate-error']"))
            .containsText("Birthdate cannot be in the future");
        
        // Select a valid date
        LocalDate validDate = LocalDate.now().minusYears(25);
        page.locator("[data-testid='birthdate-input']").click();
        page.locator(".date-picker").locator("[data-date='" + validDate + "']").click();
        
        assertThat(page.locator("[data-testid='birthdate-error']")).not().isVisible();
        
        System.out.println("✓ Date validation working correctly");
    }
    
    private void testSuccessfulRegistration() {
        System.out.println("Testing successful form submission");
        
        // Fill all required fields with valid data
        page.locator("[data-testid='firstName-input']").fill("John");
        page.locator("[data-testid='lastName-input']").fill("Doe");
        page.locator("[data-testid='email-input']").fill("john.doe@example.com");
        page.locator("[data-testid='phone-input']").fill("+1-555-123-4567");
        page.locator("[data-testid='password-input']").fill("StrongPass123!");
        page.locator("[data-testid='confirm-password-input']").fill("StrongPass123!");
        
        // Accept terms and conditions
        page.locator("[data-testid='terms-checkbox']").check();
        
        // Submit form
        page.locator("[data-testid='submit-button']").click();
        
        // Wait for success page or message
        page.waitForSelector("[data-testid='success-message']", 
            new Page.WaitForSelectorOptions().setTimeout(10000));
        
        // Verify success
        assertThat(page.locator("[data-testid='success-message']"))
            .containsText("Registration successful");
        
        System.out.println("✓ Form submission successful");
    }
}`}</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Attribution Section */}
      <section id="attribution" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-in fade-in-0 slide-in-from-bottom-4">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-dashed border-blue-200 dark:border-blue-800">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Made by Swastick For TRE
                </h3>
                <p className="text-muted-foreground mb-6">
                  This comprehensive guide was crafted with expertise and attention to detail, providing you with the
                  knowledge needed to master Playwright automation with Java.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Badge variant="secondary" className="animate-bounce">
                    <Zap className="w-3 h-3 mr-1" />
                    Expert Content
                  </Badge>
                  <Badge variant="secondary" className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Production Ready
                  </Badge>
                  <Badge variant="secondary" className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                    <Globe className="w-3 h-3 mr-1" />
                    Best Practices
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">Swastick's Tutorial</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Master automation testing with comprehensive guides and real-world examples.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToSection("introduction")}
                    className="hover:text-primary transition-colors"
                  >
                    Getting Started
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("web-testing")}
                    className="hover:text-primary transition-colors"
                  >
                    Web Testing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("api-testing")}
                    className="hover:text-primary transition-colors"
                  >
                    API Testing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("best-practices")}
                    className="hover:text-primary transition-colors"
                  >
                    Best Practices
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("practical-scenarios")}
                    className="hover:text-primary transition-colors"
                  >
                    Practical Scenarios
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Topics Covered</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Browser Instance Management</li>
                <li>• Certificate Handling</li>
                <li>• API Testing Strategies</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Swastick with Mastercard.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="animate-pulse hover:animate-none"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}
