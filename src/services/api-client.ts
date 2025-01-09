import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'c371b3d87c7e4ab68ca4171b8f2da71f'
  }
});