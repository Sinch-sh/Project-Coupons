import httpClient from "./http-common";
class Service
{
    getCustomer()
    {
        return httpClient.post("//submitPaymentDetail");
    }
    

}
 export default new Service();