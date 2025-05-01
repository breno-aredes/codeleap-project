export const useAuthenticatedFetch = () => {
  const token = localStorage.getItem("token");

  const authenticatedFetch = async (url: string, options: RequestInit = {}) => {
    console.log(options);
    const headers = {
      ...options.headers,
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    console.log("Headers enviados na requisição:", headers);

    const response = await fetch(url, { ...options, headers });

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    try {
      return await response.json();
    } catch (error) {
      console.warn("Nenhum corpo JSON retornado:", error);
      return response;
    }
  };

  return authenticatedFetch;
};
