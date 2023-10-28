/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({services}) => {
    const {_id, title, img, price} = services
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg text-orange-500">Price: ${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
            <button className="btn text-white bg-orange-500">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;