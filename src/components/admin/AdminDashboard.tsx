import { useEffect, useState, type ReactNode } from "react";
import { Camera, FolderOpen, Calendar, CheckCircle, Image as ImageIcon, ArrowRight } from "lucide-react";
import { getAppointments, getCategories, getGallery } from "../../services/api";
import type { AdminView } from "./AdminSidebar";

interface AdminDashboardProps {
  onNavigate: (view: AdminView) => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [categories, setCategories] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [catData, galleryData, appointmentData] = await Promise.all([
          getCategories(),
          getGallery(),
          getAppointments(),
        ]);

        setCategories(catData || []);
        setGallery(galleryData || []);
        setAppointments(appointmentData || []);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const recentGallery = [...gallery].slice(0, 2);
  const recentAppointments = [...appointments].slice(0, 2);

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-4xl font-bold text-slate-900">Demystifying Smiles</h1>
        <p className="mt-2 text-lg text-slate-500">
          Welcome Admin - Here is an overview of your smile gallery and content management status.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Uploaded Images"
          value={gallery.length}
          subtitle="Total Photos"
          accent="blue"
          icon={<Camera className="h-7 w-7 text-blue-500" />}
        />
        <StatCard
          title="Categories"
          value={categories.length}
          subtitle="Active"
          accent="green"
          icon={<FolderOpen className="h-7 w-7 text-green-500" />}
        />
        <StatCard
          title="Appointments"
          value={appointments.length}
          subtitle="Total"
          accent="purple"
          icon={<Calendar className="h-7 w-7 text-purple-500" />}
        />
        <StatCard
          title="System"
          value="Live"
          subtitle="All systems operational"
          accent="amber"
          icon={<CheckCircle className="h-7 w-7 text-emerald-500" />}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <ActionButton label="Gallery Manager" onClick={() => onNavigate("gallery")} />
        <ActionButton label="Categories" onClick={() => onNavigate("categories")} />
        <ActionButton label="Appointments" onClick={() => onNavigate("appointments")} />
      </div>

      <section className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">Recent Updates</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading recent activity...</div>
          ) : (
            <div className="divide-y">
              {recentGallery.map((item) => (
                <Row
                  key={`gallery-${item._id || item.id || item.title}`}
                  icon={<ImageIcon className="h-4 w-4 text-blue-500" />}
                  title={item.title || "Gallery Item"}
                  category={item.category || "Gallery"}
                  date={formatDate(item.createdAt)}
                />
              ))}
              {recentAppointments.map((item) => (
                <Row
                  key={`apt-${item.id || item._id || item.name}`}
                  icon={<Calendar className="h-4 w-4 text-purple-500" />}
                  title={item.name || "Appointment"}
                  category={item.service || "Dental Service"}
                  date={formatDate(item.createdAt || item.date)}
                />
              ))}
              {!recentGallery.length && !recentAppointments.length && (
                <div className="p-8 text-center text-slate-500">No recent updates</div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  accent,
  icon,
}: {
  title: string;
  value: string | number;
  subtitle: string;
  accent: "blue" | "green" | "purple" | "amber";
  icon: ReactNode;
}) {
  const ring =
    accent === "blue"
      ? "border-l-blue-500"
      : accent === "green"
        ? "border-l-green-500"
        : accent === "purple"
          ? "border-l-purple-500"
          : "border-l-amber-500";

  return (
    <div className={`rounded-2xl border-l-4 ${ring} bg-white p-6 shadow-sm border border-slate-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-4xl font-bold text-slate-900">{value}</p>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <div className="rounded-full bg-slate-50 p-3">{icon}</div>
      </div>
    </div>
  );
}

function ActionButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-slate-800"
    >
      {label}
      <ArrowRight className="h-5 w-5" />
    </button>
  );
}

function Row({
  icon,
  title,
  category,
  date,
}: {
  icon: ReactNode;
  title: string;
  category: string;
  date: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 px-6 py-4 md:grid-cols-[1.5fr_1fr_0.7fr] md:items-center">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-semibold text-slate-900">{title}</span>
      </div>
      <div>
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {category}
        </span>
      </div>
      <div className="text-slate-500">{date}</div>
    </div>
  );
}

function formatDate(value: string | undefined) {
  if (!value) return "Recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
