import ApplicationRequest from "src/hooks/useService";
import MockData from "../sp-service/sp-mock-data";

class UserInfoServices {
  public static getUserInfoDTO(userId?: number): ApplicationRequest {
    return {
      url: `cafeteria/profile${userId ? "/" + userId : ""}`,
      method: "GET",
      mockData: MockData.UserInfo,
    };
  }
  public static getSettingData(): ApplicationRequest {
    return {
      url: `Cafeteria/home/settings`,
      method: "GET",
      mockData: MockData.MockSetting,
    };
  }
}
export default UserInfoServices;
