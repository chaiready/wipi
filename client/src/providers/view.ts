import { httpProvider } from "./http";

export class ViewProvider {
  /**
   * 获取所有访问
   */
  static async getViews(): Promise<IView[]> {
    return httpProvider.get("/view");
  }

  /**
   * 添加访问
   * @param data
   */
  static async addView(data): Promise<IView> {
    return httpProvider.post("/view", data);
  }

  static async deleteView(id): Promise<IView> {
    return httpProvider.delete("/view/" + id);
  }
}