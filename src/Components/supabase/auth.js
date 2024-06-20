import SupabaseClient from "../../lib/helper/SupabaseClient";

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
}
const authService = new AuthService();

export default authService;
