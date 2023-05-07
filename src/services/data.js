import axios from '../axiosConfig.js'


export const data = (data) => {


    const options =
        {
            baseURL: 'https://torre.bio/api/bios',

            url: `/${data}`,

            method: "GET",
        }


    return (
        axios(options)
            .then(response => {

                return response.data

            })
            .catch((err) => {
                console.error("Backend Error: " ,err);
                return { state: false,message:"Backend Error",error:err };
          
              })

    )
} 
