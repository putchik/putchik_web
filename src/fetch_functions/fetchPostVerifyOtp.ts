import { IAuthFormData } from "../components/Forms/AuthForm/AuthForm";
import { TypesOfLogin } from "../components/LogInInputTypes";

export async function fetchPostVerifyOtpSignIn(typeOfLogin: TypesOfLogin, phone: string, email: string, otp: string) {
    interface SignInData {
        OTP: string;
        totp_contact_type: "phone" | "email";
        phone: string | undefined;
        email: string | undefined;
    }

    const bodyData: SignInData = {
        OTP: otp,
        totp_contact_type: typeOfLogin,
        phone: typeOfLogin === "phone" ? phone : undefined,
        email: typeOfLogin === "email" ? email : undefined,
    };

    const body = JSON.stringify(bodyData);

    try {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/auth/sign_in/verify_otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/auth/sign_in/verify_otp fetch operation:', error);
        throw error;
    }
}


export async function fetchPostVerifyOtpRegisterAsPhysical(typeOfLogin: TypesOfLogin, formData: IAuthFormData, otp: string) {
    interface RegisterDataAsPhysical {
        OTP: string;
        totp_contact_type: "phone" | "email";
        phone: string | undefined;
        email: string | undefined;
        name: string | undefined;
    }

    const bodyData: RegisterDataAsPhysical = {
        OTP: otp,
        totp_contact_type: typeOfLogin,
        phone: typeOfLogin === "phone" ? formData.phone : undefined,
        email: typeOfLogin === "email" ? formData.email : undefined,
        name: formData.fullName,
    };

    const body = JSON.stringify(bodyData);

    try {
        const response = await fetch('http://localhost:8000/api/auth/register/as_physical/verify_otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/auth/register/as_physical/verify_otp fetch operation:', error);
        throw error;
    }
}

export async function fetchPostVerifyOtpRegisterAsOrg(typeOfLogin: TypesOfLogin, formData: IAuthFormData, otp: string) {
    interface RegisterDataAsOrg {
        OTP: string;
        totp_contact_type: "phone" | "email";
        phone: string | undefined;
        email: string | undefined;
        organization_name: string | undefined;
        inn: string | undefined;
    }

    const bodyData: RegisterDataAsOrg = {
        OTP: otp,
        totp_contact_type: typeOfLogin,
        phone: typeOfLogin === "phone" ? formData.phone : undefined,
        email: typeOfLogin === "email" ? formData.email : undefined,
        organization_name: formData.organization,
        inn: formData.inn,
    };

    const body = JSON.stringify(bodyData);

    try {
        const response = await fetch('http://localhost:8000/api/auth/register/as_organization/verify_otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the /api/auth/register/as_organization/verify_otp fetch operation:');
        throw error;
    }
}