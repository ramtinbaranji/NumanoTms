import { sp } from "@pnp/sp";
import SPLists from "src/entities/lists";
import MockData from "./user-mock";
import AdvanceSelectValue from "./advance-select-value";

class ViewAsServices {
  public constructor() {
    sp.setup({
      sp: {
        headers: {
          Accept: "application/json; odata=nometadata",
        },
      },
    });
  }

  public async getUserInfo(searchTerm: string): Promise<AdvanceSelectValue[]> {
    let result: any[] = [];
    if (process.env.NODE_ENV === "production") {
      const top = searchTerm.length === 0 ? 0 : 50;
      const filter = `(InActive eq 0) 
        and (substringof('${searchTerm}',Title) 
        or substringof('${searchTerm}',Username/Name) 
        or substringof('${searchTerm}',SPLatinFullName))`;
      if (searchTerm.length > 0) {
        result = await sp.web.lists
          .getByTitle(SPLists.Users)
          .items.filter(encodeURIComponent(filter))
          .select("SPLatinFullName", "Department", "ID", "SubDepartment", "Title", "Avatar")
          // .expand("Username")
          .orderBy("Title", true)
          .top(top)
          .get();
      } else {
        result = [];
      }
      const mappedData: AdvanceSelectValue[] = result.map(
        ({ Title, ID, SPLatinFullName, Department, Avatar, SubDepartment }) => {
         
          return {
            label: Title,
            value: ID.toString(),
            department: Department,
            spLatinFullName: SPLatinFullName,
            avatar: Avatar,
            subDepartment:SubDepartment,
          };
        },
      );
      return Promise.resolve(mappedData);
    } else {
      result = MockData.getUserInfo.filter(x => x.spLatinFullName?.includes(searchTerm));
      return Promise.resolve(result);
    }
  }
}
export default ViewAsServices;
