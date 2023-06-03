import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {

    const { user } = useContext(AuthContext);
    const { _id, name, recipe, image, category, price } = item;
    const navigate = useNavigate();
    const location = useLocation();

    const [, refetch] = useCart();

    const handleCart = (item) => {

        const orderItem = {itemId: _id, name, price, category, image, email: user?.email};
        // console.log(item);
        if (user && user.email) {
            fetch(`http://localhost:5000/carts`, {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Successfully Added to the cart',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                        refetch();
                    }
                })
                .catch(err => console.log(err.message))
        }
        else {
            Swal.fire({
                title: 'You need to Login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: { from: location }});
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-950 text-white absolute right-0 top-0 me-5 mt-5 px-4 py-2'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleCart(item)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;