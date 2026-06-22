import { LayoutDashboard, FolderOpen, Image as ImageIcon, Calendar, LogOut } from "lucide-react";

export type AdminView = "dashboard" | "categories" | "gallery" | "appointments";

interface AdminSidebarProps {
  activeView: AdminView;
  onNavigate: (view: AdminView) => void;
  onLogout: () => void;
}

const navItems: Array<{ id: AdminView; label: string; icon: any }> = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "categories", label: "Categories", icon: FolderOpen },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "appointments", label: "Appointments", icon: Calendar },
];

export default function AdminSidebar({ activeView, onNavigate, onLogout }: AdminSidebarProps) {
  return (
    <aside className="hidden lg:flex w-80 shrink-0 flex-col bg-slate-900 text-slate-100 min-h-screen border-r border-slate-800">
      <div className="px-8 py-10 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold leading-tight">Demystifying Smiles</h1>
        <p className="mt-2 text-sm text-slate-400">Admin Panel</p>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-left text-lg font-medium transition-colors ${
                active
                  ? "bg-sky-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon className="h-6 w-6 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-3 rounded-2xl bg-red-500 px-5 py-4 text-lg font-medium text-white transition-colors hover:bg-red-600"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
