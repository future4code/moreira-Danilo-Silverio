import React,{ useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { Icon, ProfilePicture, UserContainer } from "../../assets/styles/UserCard/UserCardStyle";
import LocalIcon from "../../assets/images/local-icon.png";
import CompanyIcon from "../../assets/images/company-icon.png";
import FollowersIcon from "../../assets/images/followers-icon.png";





const UserCard = () => {
    
    const {userData} = useContext(GlobalContext);

    const viewUser = userData.map((user) => {
        
        return (
            <UserContainer key={user.id}>
                <ProfilePicture src={user.avatar_url} alt={user.login} />
                <h1>{user.name}</h1>
                <h2>{user.login}</h2>
                <p>
                    <Icon src={FollowersIcon} alt="Followers icon" />
                    <span>{user.followers}</span> followers <span>{user.following}</span>  following
                </p>
                <p>
                    <Icon src={CompanyIcon} alt={user.company} />
                     {user.company}
                </p>
                <p>
                    <Icon src={LocalIcon} alt={user.location} />
                    {user.location}
                </p>
            </UserContainer>
        )
    });

    return viewUser

};

export default UserCard;