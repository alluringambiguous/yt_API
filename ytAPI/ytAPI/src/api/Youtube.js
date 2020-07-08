//  IMPORTING LIBRARIES
import axios from "axios";


//  EXPORTING THE FILE
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
