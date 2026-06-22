import { useState } from "react";
import { clearToken } from "../services/api";
import AdminSidebar, { type AdminView } from "./admin/AdminSidebar";
import AdminDashboard from "./admin/AdminDashboard";
import CategoryManager from "./admin/CategoryManager";
import GalleryManager from "./admin/GalleryManager";
import AppointmentManager from "./admin/AppointmentManager";
import { Menu, X } from "lucide-react";

interface AdminPanelProps {
  onLogout: () => void;
}

export default function AdminPanel({ onLogout }: AdminPanelProps) {
  const [activeView, setActiveView] = useState<AdminView>("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (view: AdminView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    clearToken();
    onLogout();
  };

  const content = {
    dashboard: <AdminDashboard onNavigate={handleNavigate} />,
    categories: <CategoryManager />,
    gallery: <GalleryManager />,
    appointments: <AppointmentManager />,
  }[activeView];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar activeView={activeView} onNavigate={handleNavigate} onLogout={handleLogout} />

      <div className="flex-1 min-w-0">
        <div className="lg:hidden sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center justify-between px-4 py-4">
            <div>
              <h1 className="text-xl font-bold">Demystifying Smiles</h1>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
            <button
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="rounded-xl border border-slate-700 p-2"
              aria-label="Toggle admin menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-slate-800 bg-slate-900 px-4 py-3 space-y-2">
              {(["dashboard", "categories", "gallery", "appointments"] as AdminView[]).map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${
                    activeView === item ? "bg-sky-600 text-white" : "bg-slate-800 text-slate-200"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <button
                onClick={handleLogout}
                className="w-full rounded-xl bg-red-500 px-4 py-3 text-left text-sm font-medium text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <main className="p-4 sm:p-6 lg:p-8 xl:p-10">{content}</main>
      </div>
    </div>
  );
}
