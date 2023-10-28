import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(() => {

        axios.get(url, {withCredentials:true})
        .then(res => {
            setBookings(res.data)
        })

        // fetch(url, {withcredentials: true})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])

    const handleDelete = (id) => {
        
        const proceed = confirm('Are you sure you want to delete');
        if(proceed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert("Delete bookings successfully")
                    const remainingBookings = bookings.filter(booking => booking._id !== id)
                    setBookings(remainingBookings)
                }
            })
        }
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({status: "confirm"})
        
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remainingBookings = bookings.filter(booking => booking._id !== id)
                const updateBookings = bookings.find(booking => booking._id === id)
                updateBookings.status = "confirm"
                const newBookings = [updateBookings, ...remainingBookings]
                setBookings(newBookings)
            }
            
        })
    
    }




    return (
        <div>
            <h2 className="text-3xl text-center font-bold p-8">Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-bold">
                            <th>
                                <label>
                                    Action
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Service name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                      
                       {
                            bookings.map(bookings => <BookingsRow handleDelete={handleDelete} handleConfirm={handleConfirm} key={bookings._id} bookings={bookings}></BookingsRow>)
                        }
                      

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;

