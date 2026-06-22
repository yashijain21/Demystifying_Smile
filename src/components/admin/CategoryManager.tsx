import { useEffect, useState } from "react";
import { FolderOpen, PlusCircle, Trash2, RefreshCw } from "lucide-react";
import { createCategory, deleteCategory, getCategories } from "../../services/api";

export default function CategoryManager() {
  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const loadCategories = async () => {
    setLoading(true);
    try {
      const data = await getCategories();
      setCategories(data || []);
    } catch (err) {
      console.error(err);
      setError("Could not load categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const addCategory = async () => {
    if (!name.trim()) return;

    try {
      setSubmitting(true);
      setError("");
      await createCategory(name.trim());
      setName("");
      await loadCategories();
    } catch (err: any) {
      setError(err?.message || "Category could not be created.");
    } finally {
      setSubmitting(false);
    }
  };

  const removeCategory = async (id: string) => {
    if (!window.confirm("Delete this category?")) return;

    try {
      await deleteCategory(id);
      await loadCategories();
    } catch (err: any) {
      setError(err?.message || "Category could not be deleted.");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Category Manager</h1>
        <p className="mt-2 text-lg text-slate-500">Create and manage gallery categories.</p>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-slate-900">
          <PlusCircle className="h-5 w-5 text-logo-orange-600" />
          Create New Category
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Enter category name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-logo-blue-500"
          />
          <button
            onClick={addCategory}
            disabled={submitting}
            className="rounded-xl bg-logo-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-logo-blue-700 disabled:opacity-60"
          >
            {submitting ? "Adding..." : "Add Category"}
          </button>
        </div>

        {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <FolderOpen className="h-5 w-5 text-logo-orange-600" />
            Active Categories
          </h2>
          <button
            onClick={loadCategories}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="py-16 text-center text-slate-500">Loading categories...</div>
        ) : categories.length === 0 ? (
          <div className="py-20 text-center">
            <FolderOpen className="mx-auto mb-4 h-12 w-12 text-slate-300" />
            <h3 className="text-lg font-semibold text-slate-700">No Categories Found</h3>
            <p className="mt-2 text-slate-500">Create your first category to get started.</p>
          </div>
        ) : (
          <div className="divide-y">
            {categories.map((cat, index) => (
              <div key={cat._id || cat.id || cat.name} className="flex items-center justify-between px-6 py-5">
                <div>
                  <h3 className="font-medium text-slate-900">{cat.name}</h3>
                  <p className="text-sm text-slate-500">Category #{index + 1}</p>
                </div>

                <button
                  onClick={() => removeCategory(cat._id || cat.id)}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
