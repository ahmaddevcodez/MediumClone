import SupabaseClient from "../lib/helper/SupabaseClient";

export class AuthService {
  constructor() {
    this.client = SupabaseClient;
  }

  async createAccount({ email }) {
    const { data, error } = await this.client.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: true, // Allow user creation
        emailRedirectTo: "http://localhost:5173/UserNameInfo",
      },
    });
    if (error) {
      throw error;
    }
    return data;
  }

  async SignIn({ email }) {
    const { data, error } = await this.client.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: true, // Allow user creation
        emailRedirectTo: "http://localhost:5173/",
      },
    });
    if (error) {
      throw error;
    }
    return data;
  }

  async getUser() {
    try {
      const {
        data: { user },
        error,
      } = await this.client.auth.getUser();
      if (error) {
        throw error;
      }
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  async signOut() {
    try {
      const { error } = await this.client.auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error signing out user:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
