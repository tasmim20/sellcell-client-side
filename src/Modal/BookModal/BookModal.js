import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const BookModal = ({buy,setBuy}) => {
    const {name, price2, location,phoneNumber} = buy;
    const{user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const myName = form.myName.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
    
       
        const booking = {
               phoneBrand:itemName,
               buyer:user.displayName,
               email:user.email,
               price,
               meetingLocation:location,
               sellerNumber:phoneNumber,
        }
        console.log(booking);
       
        fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.acknowledged) {
                setBuy(null);
             
                  toast.success('Successfully Booked', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: 'white',
                      backgroundColor:'green'
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                
                 
              }
              else{
                  toast.error(data.message);
                  // alert(data.message)
              }
          })


    }

    return (
        <>
  
           <input type="checkbox" id="book-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-3xl font-bold mt-2 mb-6">Booking Now.....</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
    <input type="text" name="myName" placeholder="Your Name" disabled value={user.displayName} className="input input-success w-full " />
    <input type="text" name="email" placeholder="Email Address" disabled value={user.email} className="input input-bordered input-success w-full " />
    <input type="text" name="itemName"  placeholder="Type here" disabled value={name} className="input input-bordered input-success font-semibold w-full " />
    <input type="price" name="price" placeholder="Type here" disabled value={price2} className="input input-bordered input-success font-semibold w-full" />
     <div className='mt-2  text-green-900'>
        <h2 >Contact with Seller: {phoneNumber}</h2>
        
        <h2>Meeting location: {location}</h2>
     </div>
  
    <input type="submit" value="Submit"  className='w-full btn btn-success my-2 text-black'/>
  
    </form>
  </div>
</div> 

        </>
    );
};

export default BookModal;