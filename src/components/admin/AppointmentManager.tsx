import { useEffect, useState } from "react";
import { Calendar, Clock, RefreshCw, Trash2, CheckCircle2 } from "lucide-react";
import { deleteAppointment, getAppointments, updateAppointmentStatus } from "../../services/api";

export default function AppointmentManager() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAppointments = async () => {
    setLoading(true);
    try {
      const data = await getAppointments();
      setAppointments(data || []);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Unable to load appointments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await updateAppointmentStatus(id, status);
      await loadAppointments();
    } catch (err: any) {
      setError(err?.message || "Unable to update appointment status.");
    }
  };

  const removeAppointment = async (id: string) => {
    if (!window.confirm("Delete this appointment?")) return;
    try {
      await deleteAppointment(id);
      await loadAppointments();
    } catch (err: any) {
      setError(err?.message || "Unable to delete appointment.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Appointments Manager</h1>
          <p className="mt-2 text-lg text-slate-500">Review bookings, confirm visits, and manage clinic schedule.</p>
        </div>
        <button
          onClick={loadAppointments}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {error && <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}

      {loading ? (
        <div className="rounded-3xl border border-slate-200 bg-white py-20 text-center text-slate-500">Loading appointments...</div>
      ) : appointments.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center text-slate-500">
          No appointments found.
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((apt) => (
            <article key={apt.id || apt._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-slate-900">{apt.name}</h2>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {apt.status || "Pending"}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Service: <span className="font-medium text-slate-700">{apt.service}</span>
                  </p>
                  <p className="text-sm text-slate-500">
                    Phone: <span className="font-medium text-slate-700">{apt.phone}</span>
                  </p>
                  <p className="text-sm text-slate-500">
                    Email: <span className="font-medium text-slate-700">{apt.email || "N/A"}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-3 xl:items-end">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-logo-blue-600" />
                      {apt.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-logo-blue-600" />
                      {apt.time}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Pending", "Confirmed", "Cancelled", "Completed"].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(apt.id || apt._id, status)}
                        className={`inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                          (apt.status || "Pending").toLowerCase() === status.toLowerCase()
                            ? "bg-logo-orange-500 text-white"
                            : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {status}
                      </button>
                    ))}
                    <button
                      onClick={() => removeAppointment(apt.id || apt._id)}
                      className="inline-flex items-center gap-1 rounded-xl bg-red-500 px-3 py-2 text-xs font-medium text-white hover:bg-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {apt.notes && (
                <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {apt.notes}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
