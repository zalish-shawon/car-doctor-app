import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))

       
    }, [])
    
    
   

    return (
        <div>
            <div className="text-center mt-10 space-y-3">
                <h3 className="text-3xl text-orange-600">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {
                    services.map(services => <ServiceCard key={services._id} services={services}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;