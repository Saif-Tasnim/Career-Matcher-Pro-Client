import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export const useSpecData = id => {
    
    const [axiosSecure] = useAxiosSecure();

    const { data: loadData = {}, isLoading } = useQuery({
        queryKey: ['loadData'],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/donorSingleData/${id}`)
            return res.data;
        }
    })

    return loadData;
}