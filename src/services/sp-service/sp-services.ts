import { sp } from "@pnp/sp";

export default class SPRestService {
  public constructor() {
    sp.setup({
      sp: {
        headers: {
          Accept: "application/json; odata=verbose",
        },
      },
    });
  }
  /* *******************************************************************************88 */
  public async checkUserInGroup(groupId: number, userID: number): Promise<boolean> {
    const users: any[] = await sp.web.siteGroups
      .getById(groupId)
      .users.filter("Id eq " + userID)
      .get();
    if (users.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  //
}
