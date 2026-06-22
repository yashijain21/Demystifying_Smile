import { useEffect, useState } from "react";
import { Image as ImageIcon, Upload, Trash2, RefreshCw, PlusCircle } from "lucide-react";
import { createCategory, deleteGallery, getCategories, getGallery, uploadGallery } from "../../services/api";

export default function GalleryManager() {
  const [gallery, setGallery] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [beforeImage, setBeforeImage] = useState<File | null>(null);
  const [afterImage, setAfterImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const [galleryData, categoryData] = await Promise.all([getGallery(), getCategories()]);
      setGallery(galleryData || []);
      setCategories(categoryData || []);
    } catch (err) {
      console.error(err);
      setError("Could not load gallery data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !category || !beforeImage || !afterImage) {
      setError("Please fill all required fields and upload both images.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("description", description);
    formData.append("category", category);
    formData.append("beforeImage", beforeImage);
    formData.append("afterImage", afterImage);

    try {
      setSubmitting(true);
      setError("");
      await uploadGallery(formData);
      setTitle("");
      setDescription("");
      setCategory("");
      setBeforeImage(null);
      setAfterImage(null);
      await loadData();
    } catch (err: any) {
      setError(err?.message || "Upload failed.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this gallery item?")) return;

    try {
      await deleteGallery(id);
      await loadData();
    } catch (err: any) {
      setError(err?.message || "Unable to delete gallery item.");
    }
  };

  const handleCreateQuickCategory = async () => {
    const quickName = window.prompt("New category name?");
    if (!quickName?.trim()) return;

    try {
      await createCategory(quickName.trim());
      await loadData();
    } catch (err: any) {
      setError(err?.message || "Unable to create category.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Gallery Manager</h1>
          <p className="mt-2 text-lg text-slate-500">Upload before/after treatment photos and organize them by category.</p>
        </div>
        <button
          onClick={handleCreateQuickCategory}
          className="inline-flex items-center gap-2 rounded-2xl bg-logo-orange-500 px-5 py-3 font-semibold text-white hover:bg-logo-orange-600"
        >
          <PlusCircle className="h-5 w-5" />
          Quick Add Category
        </button>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">Upload New Photo</h2>
        <form onSubmit={handleUpload} className="grid gap-6 xl:grid-cols-12">
          <div className="space-y-4 xl:col-span-8">
            <input
              type="text"
              placeholder="Title"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-logo-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-logo-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id || cat.id || cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <textarea
              rows={4}
              placeholder="Description"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-logo-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-4 xl:col-span-4">
            <div>
              <label className="mb-2 block font-medium text-slate-700">Before Image</label>
              <input type="file" accept="image/*" onChange={(e) => setBeforeImage(e.target.files?.[0] || null)} />
            </div>
            <div>
              <label className="mb-2 block font-medium text-slate-700">After Image</label>
              <input type="file" accept="image/*" onChange={(e) => setAfterImage(e.target.files?.[0] || null)} />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-logo-blue-600 px-4 py-3 font-semibold text-white hover:bg-logo-blue-700 disabled:opacity-60"
            >
              {submitting ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
              {submitting ? "Uploading..." : "Upload Gallery"}
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Gallery Items</h2>
          <button
            onClick={loadData}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="py-16 text-center text-slate-500">Loading gallery...</div>
        ) : gallery.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <ImageIcon className="mx-auto mb-4 h-12 w-12 text-slate-300" />
            <p className="text-slate-500">No gallery items found.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item) => (
              <article key={item._id || item.id || item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-2">
                  <img src={item.beforeImage} alt="before" className="h-56 w-full object-cover" />
                  <img src={item.afterImage} alt="after" className="h-56 w-full object-cover" />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">{item.category}</span>
                  </div>
                  <p className="text-sm text-slate-500">{item.description}</p>
                  <button
                    onClick={() => handleDelete(item._id || item.id)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white hover:bg-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
