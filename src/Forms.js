import React from 'react'
import './Form.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

function Forms() {
    const Schema = yup.object().shape({
        FullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().min(18).max(60).required(),
        password: yup.string().min(4).max(20).required(),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null]).required()


    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schema)
    });
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='full name' {...register('FullName')} />
                <p>{errors.FullName?.message}</p>
                <input type="email" placeholder='email' {...register('email')} />
                <input type="number" placeholder='age' {...register('age')} />
                <input type="password" placeholder='password' {...register('password')} />
                <input type="password" placeholder='confirm password' {...register('confirmpassword')} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Forms