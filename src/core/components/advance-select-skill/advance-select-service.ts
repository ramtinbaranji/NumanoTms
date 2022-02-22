import { sp, Web } from "@pnp/sp";
import MockData from "./allusers-mock";
import SPLists from "../../../entities/lists";
import AdvanceSelectValue from "./advance-select-value";

class AdvanceSelectServices {
  public constructor() {
    sp.setup({
      sp: {
        headers: {
          Accept: "application/json; odata=verbose",
        },
      },
    });
  }

  public async getSkills(searchTerm: string, listname: string): Promise<AdvanceSelectValue[]> {
    if (process.env.NODE_ENV === "production") {
      const web = new Web("https://aura.digikala.com/hris/lms-site");
      const top = 50;
      const filter =
        searchTerm.length > 0
          ? ` substringof('${searchTerm}',Title) or substringof('${searchTerm}',${
              listname === SPLists.TNABehavioralSkills ? "BehavioralSkillEN" : "TechnicalSkillEn"
            })`
          : `Title ne ''`;
      let result: any[] = [];

      if (listname === SPLists.TNATechnicalskills) {
        result = await web.lists
          .getByTitle(SPLists.TNATechnicalskills)
          .items.filter(encodeURIComponent(filter))
          .select("Title", "TechnicalSkillEn", "Id")
          .orderBy("Order", false)
          .top(top)
          .get();
      } else if (listname === SPLists.TNABehavioralSkills) {
        result = await web.lists
          .getByTitle(SPLists.TNABehavioralSkills)
          .items.filter(encodeURIComponent(filter))
          .select("Title", "BehavioralSkillEN", "Id")
          .orderBy("Order", false)
          .top(top)
          .get();
      }
      if (result.length === 0) {
        return Promise.resolve([]);
      } else {
        return Promise.resolve(
          result.map(result => {
            return {
              title: result.Title,
              titleEn: SPLists.TNATechnicalskills === listname ? result.TechnicalSkillEn : result.BehavioralSkillEN,
              id: result.Id,
              label: SPLists.TNATechnicalskills === listname ? result.TechnicalSkillEn : result.BehavioralSkillEN,
              value: String(result.Id),
            };
          }),
        );
      }
    }

    return Promise.resolve(MockData.getSkills);
  }
}
export default AdvanceSelectServices;
