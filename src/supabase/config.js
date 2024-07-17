// src/config.js
import supabase from "../lib/helper/SupabaseClient";

class Service {
  constructor() {
    this.client = supabase;
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
      console.error("Error updating user name:", error);
      return { error };
    }
  }

  async fetchUserName() {
    try {
      const { data, error } = await this.client
        .from("profiles")
        .select("full_name");
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error("Error fetching user name:", error);
      return [];
    }
  }
  async insertBlog(blogData) {
    try {
      const { data, error } = await this.client
        .from("blog")
        .insert([blogData]);
      if (error) {
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Error inserting blog:", error);
      return { error };
    }
  }
}

const service = new Service();

export default service;
