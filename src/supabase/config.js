import SupabaseClient from "../lib/helper/SupabaseClient";

export class Service {
  constructor() {
    this.client = SupabaseClient;
  }

  async UserName(id, fullName) {
    try {
      const { data, error } = await this.client
        .from("profiles")
        .update({ full_name: fullName })
        .eq("id", id);

      if (error) {
        console.error("Error updating data:", error);
        return { error };
      }
      return { data };
    } catch (error) {
      console.error("Error fetching userName:", error);
      return { error };
    }
  }
}

const service = new Service();

export default service;
