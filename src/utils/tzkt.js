// TODO 8 - Fetch storage of the Lottery by completing fetchStorage
import axios from "axios";
export const fetchStorage = async () => {
    try {
        const res = await axios.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1GuWBndZUDYj6Xse1m92cAsCuikQYqbJrY/storage");
        return res.data;
    } catch (error) {
        throw error;
    }
};
