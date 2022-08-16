import MockData from "../sp-service/sp-mock-data";

class UserInfoServices {
  public static getUserInfoDTO(userId?: number): any {
    return {
      url: `cafeteria/profile${userId ? "/" + userId : ""}`,
      method: "GET",
      mockData: MockData.UserInfo,
    };
  }
  public static getSettingData(): any {
    return {
      url: `Cafeteria/home/settings`,
      method: "GET",
      mockData: MockData.MockSetting,
    };
  }
}
export default UserInfoServices;
