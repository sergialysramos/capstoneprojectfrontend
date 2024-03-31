import React, { useState, useContext } from 'react'
import FormPageLayout from '../../components/FormPageLayout/FormPageLayout'
import CustomForm from '../../components/CustomForm/CustomForm'
import { AuthContext } from '../../contexts/AuthContext'
import PageWrapper from '../../components/PageWrapper/PageWrapper'


const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [userData, setUserData] = useState ({
        email:"",
        contraseña:""
    })

    const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1525708117204-bbe93e711abb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const onChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        await login(userData)
    }

    return (
        <PageWrapper>
            <FormPageLayout backgroundImage={BACKGROUND_IMAGE}>
                <CustomForm

                    title={"Login"}
                    subtitle={"Solo para mustachers!:"}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    options={["email", "password"]}
                />
            </FormPageLayout>
        </PageWrapper>
    )
}

export default LoginPage