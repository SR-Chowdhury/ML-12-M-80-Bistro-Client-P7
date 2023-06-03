import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if(imageResponse.status) {
                    const imgeURL = imageResponse.data.display_url;
                    const {name, recipe, category, price} = data;
                    const newItem = {name, recipe, image: imgeURL, category, price: parseFloat(price)};
                    // console.log(newItem);
                    
                    axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log('new item insterted', data);
                        if (data.data.insertedId) {
                            Swal.fire({
                                title: 'New Menu item insterted successfully',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                },
                                timer: 1500
                            })
                            reset();
                        }
                    })
                }
            })
            .catch(err => console.log(err.message))
    };


    return (
        <div className='w-full'>
            <ReactHelmet title={'Add Item'} />
            <SectionTitle subHeading={'Whats new'} Heading={'Add an Item'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='px-16'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Receipe *</span>
                        </label>
                        <input type="text" placeholder="Item Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered lg:w-full" />
                    </div>
                    <div className='flex gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category *</span>
                            </label>
                            <select defaultValue={'Pick one'} {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled>Pick one</option>
                                <option value={'pizza'}>Pizza</option>
                                <option value={'soup'}>Soup</option>
                                <option value={'salad'}>Salad</option>
                                <option value={'dessert'}>Dessert</option>
                                <option value={'drinks'}>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price *</span>
                            </label>
                            <input type="number" placeholder="Item Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Receipe details *</span>
                        </label>
                        <textarea {...register("recipe", { required: true, maxLength: 200 })} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Item image *</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                    </div>
                    <button className="btn btn-warning my-5">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;