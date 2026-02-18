import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: replace with real auth
    if (email && password) {
      // Store user info in localStorage
      const userData = {
        fullName: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email: email,
        joinDate: new Date().toLocaleDateString(),
      };
      localStorage.setItem("userProfile", JSON.stringify(userData));
      navigate("/dashboard");
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!signupForm.fullName || !signupForm.email || !signupForm.password || !signupForm.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!signupForm.acceptTerms) {
      alert("Please accept the Terms of Service");
      return;
    }

    // TODO: replace with real auth API call
    console.log("New user registered:", signupForm);
    
    // Store user info in localStorage
    const userData = {
      fullName: signupForm.fullName,
      email: signupForm.email,
      joinDate: new Date().toLocaleDateString(),
    };
    localStorage.setItem("userProfile", JSON.stringify(userData));
    
    // Auto-login after signup
    setIsSignupOpen(false);
    setSignupForm({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <div className="p-8 rounded-2xl border bg-card shadow-lg">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-muted-foreground">Sign in to your FinVault account</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="login-email">Email Address</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">Forgot password?</a>
                </div>

                <Button type="submit" className="w-full h-11 rounded-lg font-semibold">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>By signing in, you agree to our <a href="/terms" className="text-primary hover:underline">Terms of Service</a></p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="signup">
            <div className="p-8 rounded-2xl border bg-card shadow-lg">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
                <p className="text-muted-foreground">Join thousands who trust FinVault</p>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="John Doe"
                    value={signupForm.fullName}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, fullName: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="signup-email">Email Address</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@company.com"
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, email: e.target.value })
                    }
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">We'll never share your email</p>
                </div>

                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a strong password"
                    value={signupForm.password}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, password: e.target.value })
                    }
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">At least 8 characters</p>
                </div>

                <div>
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    value={signupForm.confirmPassword}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, confirmPassword: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={signupForm.acceptTerms}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, acceptTerms: e.target.checked })
                    }
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="/terms" className="text-primary hover:underline font-semibold">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-primary hover:underline font-semibold">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button type="submit" className="w-full h-11 rounded-lg font-semibold">
                  Create Account
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Secure registration with bank-level encryption 🔒</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800">
            <div className="text-2xl mb-2">🔒</div>
            <p className="font-semibold">Bank-Level Security</p>
            <p className="text-xs text-muted-foreground">AES-256 Encryption</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800">
            <div className="text-2xl mb-2">⚡</div>
            <p className="font-semibold">Instant Setup</p>
            <p className="text-xs text-muted-foreground">Get started in minutes</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800">
            <div className="text-2xl mb-2">📱</div>
            <p className="font-semibold">All Devices</p>
            <p className="text-xs text-muted-foreground">Web, iOS & Android</p>
          </div>
        </div>
      </div>
    </div>
  );
}
