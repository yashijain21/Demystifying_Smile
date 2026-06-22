import { useEffect, useState } from "react";
import { LogIn, ShieldCheck, Unlock, CheckCircle2, ArrowLeft } from "lucide-react";
import { clearToken, getToken, loginAdmin } from "../services/api";

interface AdminLoginPageProps {
  onBackToSite: () => void;
  onLoginSuccess: () => void;
}

export default function AdminLoginPage({ onBackToSite, onLoginSuccess }: AdminLoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(getToken()));

  useEffect(() => {
    setIsLoggedIn(Boolean(getToken()));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const result = await loginAdmin(email.trim(), password);

      if (!result?.token && !result?.accessToken && !result?.data?.token) {
        throw new Error("Login succeeded but no token was returned by the backend.");
      }

      setIsLoggedIn(true);
      setSuccess(true);
      onLoginSuccess();
    } catch (err: any) {
      setError(err?.message || "Unable to log in.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    clearToken();
    setIsLoggedIn(false);
    setPassword("");
    setSuccess(false);
  };

  return (
    <section className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-[#fffaf4] via-white to-[#eef6ff] px-4 py-16">
      <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6 text-left">
          <button
            type="button"
            onClick={onBackToSite}
            className="inline-flex items-center gap-2 text-sm font-semibold text-logo-blue-700 hover:text-logo-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </button>

          <div className="inline-flex items-center gap-2 rounded-full border border-logo-orange-200 bg-logo-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-logo-orange-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Admin access
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Login to the live backend dashboard
          </h1>

          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600">
            Sign in with your admin account to manage categories, gallery uploads, and appointments through the Render backend.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-logo-blue-100 bg-white/80 p-4 shadow-sm">
              <Unlock className="h-5 w-5 text-logo-blue-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">Token-based access</p>
              <p className="mt-1 text-xs text-slate-500">Your login token is stored locally after successful sign-in.</p>
            </div>
            <div className="rounded-2xl border border-logo-orange-100 bg-white/80 p-4 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-logo-orange-600" />
              <p className="mt-3 text-sm font-semibold text-slate-900">Live API connected</p>
              <p className="mt-1 text-xs text-slate-500">Requests go to the backend at dental-backend-2vs2.onrender.com.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-logo-blue-100 bg-white shadow-xl p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-logo-blue-50 text-logo-blue-700">
              <LogIn className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900">Admin Login</h2>
              <p className="text-sm text-slate-500">Use your backend credentials</p>
            </div>
          </div>

          {isLoggedIn ? (
            <div className="space-y-5">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-left">
                <p className="font-semibold text-emerald-900">You are signed in.</p>
                <p className="mt-1 text-sm text-emerald-700">Your admin token is active in this browser session.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onBackToSite}
                  className="rounded-xl bg-logo-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-logo-orange-600 transition-colors"
                >
                  Return to site
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-logo-blue-500 focus:bg-white"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-logo-blue-500 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Login successful.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
