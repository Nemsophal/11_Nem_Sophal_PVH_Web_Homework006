const BASE_URL = "https://homework-api.noevchanmakara.site/api/v1";
return {
  getUserProfile: async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }
    return response.json();
  },
  updateUserProfile: async (userId, userData) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    if (!response.ok) {
      throw new Error("Failed to update user profile");
    }
    return response.json();
  }
};