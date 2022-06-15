import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency';

export const fetchCard = async (page = 1) => {
  try {
    const axiosResponse = await axios.get(
      `api/v1/users?&page=${page}&count=6`,
    );
    console.log(axiosResponse.data)
    return axiosResponse.data;
  } catch (err) {
    throw err;
  }
}