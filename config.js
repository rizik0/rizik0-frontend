const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  console.warn("Warning: VITE_API_BASE_URL is not defined. Using fallback or expecting failure.");
  // Optionally provide a default or throw an error depending on your needs
  // apiBaseUrl = 'http://localhost:8080'; // Example fallback
}

export default apiBaseUrl;