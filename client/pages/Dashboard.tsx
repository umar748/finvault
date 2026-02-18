import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Wallet, ArrowUpRight, ArrowDownRight, CreditCard, Download, Plus, Eye, EyeOff, Settings, LogOut, Edit2, Bell, Lock, Shield } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const spendingData = [
  { month: "Jan", amount: 3200, budget: 4200 },
  { month: "Feb", amount: 2800, budget: 4200 },
  { month: "Mar", amount: 4100, budget: 4200 },
  { month: "Apr", amount: 2900, budget: 4200 },
  { month: "May", amount: 3800, budget: 4200 },
  { month: "Jun", amount: 3490, budget: 4200 },
];

const categoryData = [
  { name: "Food & Dining", value: 1240, fill: "#3b82f6" },
  { name: "Transportation", value: 820, fill: "#10b981" },
  { name: "Entertainment", value: 490, fill: "#f59e0b" },
  { name: "Utilities", value: 570, fill: "#8b5cf6" },
];

const defaultTransactions = [
  { name: "Apple Store", date: "Oct 24, 2023", amount: "-$199.00", icon: CreditCard, color: "text-slate-500", bg: "bg-slate-100 dark:bg-slate-800", type: "expense" },
  { name: "Stripe Payout", date: "Oct 23, 2023", amount: "+$4,500.00", icon: ArrowUpRight, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30", type: "income" },
  { name: "Starbucks", date: "Oct 22, 2023", amount: "-$12.50", icon: CreditCard, color: "text-slate-500", bg: "bg-slate-100 dark:bg-slate-800", type: "expense" },
  { name: "Netflix Subscription", date: "Oct 21, 2023", amount: "-$15.99", icon: CreditCard, color: "text-slate-500", bg: "bg-slate-100 dark:bg-slate-800", type: "expense" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [hideBalance, setHideBalance] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [transactionForm, setTransactionForm] = useState({
    description: "",
    amount: "",
    category: "Food & Dining",
    type: "expense",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    // Get user profile from localStorage
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    } else {
      // Redirect to login if no profile found
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    navigate("/login");
  };

  const handleTransactionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTransaction = {
      name: transactionForm.description,
      date: new Date(transactionForm.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      amount: `${transactionForm.type === "income" ? "+" : "-"}$${parseFloat(transactionForm.amount).toFixed(2)}`,
      icon: transactionForm.type === "income" ? ArrowUpRight : CreditCard,
      color: transactionForm.type === "income" ? "text-emerald-500" : "text-slate-500",
      bg: transactionForm.type === "income" ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-slate-100 dark:bg-slate-800",
      type: transactionForm.type,
    };

    setTransactions([newTransaction, ...transactions]);
    setIsModalOpen(false);
    setTransactionForm({
      description: "",
      amount: "",
      category: "Food & Dining",
      type: "expense",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="container py-8 space-y-8">
      {/* User Profile Section */}
      {userProfile && (
        <Card className="bg-gradient-to-r from-primary/10 to-emerald-500/10 border-primary/20 hover:shadow-lg transition-all duration-300">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                  {userProfile.fullName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{userProfile.fullName}</h2>
                  <p className="text-muted-foreground">{userProfile.email}</p>
                  <p className="text-sm text-muted-foreground mt-1">Member since {userProfile.joinDate}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                  <DialogTrigger asChild>
                    <Button className="gap-2">
                      <Settings className="h-4 w-4" />
                      Settings
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Profile & Settings</DialogTitle>
                      <DialogDescription>
                        Manage your account settings and preferences
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      {/* Account Settings */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Lock className="h-5 w-5 text-primary" />
                          Account Settings
                        </h3>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start gap-3">
                            <Edit2 className="h-4 w-4" />
                            Edit Profile
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-3">
                            <Lock className="h-4 w-4" />
                            Change Password
                          </Button>
                          <Button variant="outline" className="w-full justify-start gap-3">
                            <Shield className="h-4 w-4" />
                            Two-Factor Authentication
                          </Button>
                        </div>
                      </div>

                      {/* Preferences */}
                      <div>
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Bell className="h-5 w-5 text-primary" />
                          Preferences
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <label className="text-sm font-medium">Email Notifications</label>
                            <input type="checkbox" defaultChecked className="rounded" />
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <label className="text-sm font-medium">Push Notifications</label>
                            <input type="checkbox" defaultChecked className="rounded" />
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <label className="text-sm font-medium">Weekly Reports</label>
                            <input type="checkbox" defaultChecked className="rounded" />
                          </div>
                        </div>
                      </div>

                      {/* Account Info */}
                      <div>
                        <h3 className="font-semibold mb-4">Account Information</h3>
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg space-y-3">
                          <div>
                            <p className="text-xs text-muted-foreground">Email</p>
                            <p className="font-medium">{userProfile.email}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Member Since</p>
                            <p className="font-medium">{userProfile.joinDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Account Status</p>
                            <p className="font-medium text-emerald-600">Active ✓</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                      <Button onClick={() => setIsProfileOpen(false)} className="flex-1">
                        Close
                      </Button>
                      <Button variant="destructive" className="gap-2" onClick={handleLogout}>
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">Your Financial Dashboard</h1>
          <p className="text-muted-foreground text-lg mt-2">{userProfile ? `Welcome back, ${userProfile.fullName.split(" ")[0]}. Here's what's happening with your money.` : "Loading..."}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Transaction</DialogTitle>
                <DialogDescription>
                  Record a new income or expense transaction to your account.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleTransactionSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Transaction Type</Label>
                  <select
                    value={transactionForm.type}
                    onChange={(e) =>
                      setTransactionForm({ ...transactionForm, type: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="e.g., Coffee, Salary, Rent"
                    value={transactionForm.description}
                    onChange={(e) =>
                      setTransactionForm({
                        ...transactionForm,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    value={transactionForm.amount}
                    onChange={(e) =>
                      setTransactionForm({
                        ...transactionForm,
                        amount: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    value={transactionForm.category}
                    onChange={(e) =>
                      setTransactionForm({
                        ...transactionForm,
                        category: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Food & Dining">Food & Dining</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={transactionForm.date}
                    onChange={(e) =>
                      setTransactionForm({
                        ...transactionForm,
                        date: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1">
                    Add Transaction
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <div className="flex gap-2">
              <button 
                onClick={() => setHideBalance(!hideBalance)}
                className="text-muted-foreground hover:text-foreground"
              >
                {hideBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{hideBalance ? "••••" : "$45,231.89"}</div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              ↑ +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+$12,234.00</div>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              ↑ +4.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-rose-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-$4,120.50</div>
            <p className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
              ↓ -12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="mt-2 h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-emerald-500" style={{ width: "78%" }} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Spending Trend</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Last 6 months comparison</p>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px"
                  }}
                />
                <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="budget" fill="#e5e7eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">This month's breakdown</p>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value}`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Your latest activity</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.slice(0, 4).map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${tx.bg} ${tx.color}`}>
                      <tx.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{tx.name}</p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                  </div>
                  <p className={`text-sm font-bold ${tx.amount.startsWith("+") ? "text-emerald-500" : "text-slate-900 dark:text-white"}`}>
                    {tx.amount}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-primary hover:text-primary/80">View all {transactions.length} transactions</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Key metrics at a glance</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <p className="text-sm text-muted-foreground mb-2">Average Daily Spending</p>
                <p className="text-2xl font-bold">$137.35</p>
                <p className="text-xs text-slate-500 mt-1">+12% vs last month</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <p className="text-sm text-muted-foreground mb-2">Largest Transaction</p>
                <p className="text-2xl font-bold">$1,250.00</p>
                <p className="text-xs text-slate-500 mt-1">Rent payment</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <p className="text-sm text-muted-foreground mb-2">Savings Rate</p>
                <p className="text-2xl font-bold">23.5%</p>
                <p className="text-xs text-emerald-500 mt-1">↑ +2% vs target</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
