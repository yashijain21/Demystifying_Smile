const API_URL = "https://dental-backend-2vs2.onrender.com/api";

const getToken = () => localStorage.getItem("token");

const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const clearToken = () => {
  localStorage.removeItem("token");
};

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const normalizeLoginResult = (result: any) => {
  const token = result?.token || result?.accessToken || result?.data?.token;

  if (token) {
    setToken(token);
  }

  return result;
};

export const loginAdmin = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await handleResponse(res);
  return normalizeLoginResult(result);
};

export const getCategories = async () => {
  const res = await fetch(`${API_URL}/categories`);
  return handleResponse(res);
};

export const createCategory = async (name: string) => {
  const res = await fetch(`${API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({ name }),
  });

  return handleResponse(res);
};

export const deleteCategory = async (id: string) => {
  const res = await fetch(`${API_URL}/categories/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  return handleResponse(res);
};

export const getGallery = async () => {
  const res = await fetch(`${API_URL}/gallery`);
  return handleResponse(res);
};

export const uploadGallery = async (formData: FormData) => {
  const res = await fetch(`${API_URL}/gallery`, {
    method: "POST",
    headers: authHeaders(),
    body: formData,
  });

  return handleResponse(res);
};

export const updateGallery = async (id: string, formData: FormData) => {
  const res = await fetch(`${API_URL}/gallery/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: formData,
  });

  return handleResponse(res);
};

export const deleteGallery = async (id: string) => {
  const res = await fetch(`${API_URL}/gallery/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  return handleResponse(res);
};

export const getAppointments = async () => {
  const res = await fetch(`${API_URL}/appointments`);
  return handleResponse(res);
};

export const createAppointment = async (appointmentData: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}) => {
  const res = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointmentData),
  });

  return handleResponse(res);
};

export const updateAppointment = async (
  id: string,
  updates: Partial<{
    date: string;
    time: string;
    status: string;
    notes: string;
    service: string;
  }>
) => {
  const res = await fetch(`${API_URL}/appointments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify(updates),
  });

  return handleResponse(res);
};

export const updateAppointmentStatus = async (id: string, status: string) => {
  const res = await fetch(`${API_URL}/appointments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({ status }),
  });

  return handleResponse(res);
};

export const deleteAppointment = async (id: string) => {
  const res = await fetch(`${API_URL}/appointments/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  return handleResponse(res);
};

export { API_URL, getToken };
