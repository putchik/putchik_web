import styles from "./ProfilePage.module.css";
import Header from "../../components/Header/Header";
import Profile, { UserInfo } from "../../components/Profile/Profile";
import { useEffect, useState } from "react";
import fetchGetUserProfile from "../../fetch_functions/fetchGetUserProfile";


const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>(
        {
            email: 'sjvvljnkvjvnk@nscj.ru',
            phone: '+78909876789',
            person: 'physical',
            companyName: 'comp',
            companyINN: 'inn',
            fullName: 'Иван Иванов',
        }
    )

    const handleInputChange = (name: string, value: string) => {
        setUserInfo({ ...userInfo, [name]: value });
        // console.log(name + ': ' + value);
    };

    useEffect(() => {
        if (localStorage.getItem('token') !== '') {
            fetchGetUserProfile()
                .then(data => console.log(data))
        }
    }, [])

    return (
        <div className={styles.page}>
            <Header />
            <Profile userInfo={userInfo} handleInputChange={handleInputChange} />
        </div>
    );
};

export default ProfilePage;
