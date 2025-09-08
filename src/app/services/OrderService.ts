import axios from "axios";
import { serverApi } from "../../lib/config";
import { Exposure } from "@mui/icons-material";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  // public async pausedOrders(): Promise<Order[]> {
  //     try {
  //       const url = this.path + "/member/top-users";
  //       const result = await axios.get(url);
  //       console.log("pausedOrders", result);

  //       return result.data;
  //     } catch (err) {
  //       console.log("error, pausedOrders:", err);
  //       throw err;
  //     }
  //   }
}

export default OrderService;
