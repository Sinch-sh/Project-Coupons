import httpClient from "./http-common";
class Service
{
    getCupon()
    {
        return httpClient.get("/mapcontroller/getAlldetails");
    }
    getbycompname(compname)
    {
        return httpClient.get(`/mapcontroller/getByCompanyName/${compname}`)
    }
    addnewcoupon(data)
    {
        return httpClient.post("/mapcontroller/create",data);
        
    }
    getcouponbycompId(id)
    {
        return httpClient.get(`/mapcontroller/getcoupondetailsbyId/${id}`);
    }
    deleteCoupon(id)
    {
       return httpClient.delete(`/mapcontroller/deleteProductsbyId/${id}`,id)
    }
    admingetcustomer()
    {
        return httpClient.get("/Admin/allcustomers")
    }
    updateCouponById(id,data)
    {
        return httpClient.put(`/mapcontroller/updateById/${id}`,data)
    }
}
 export default new Service();