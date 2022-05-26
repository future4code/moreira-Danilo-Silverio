import React, { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { UserRepoContainer } from "../../assets/styles/UserRepo/UserRepoStyle";

const UserRepo = () => {

    const { userRepo } = useContext(GlobalContext);

    console.log(userRepo)

    const viewRepositories = userRepo.map((repo) => {
        return (
            <UserRepoContainer>
                Olá
            </UserRepoContainer>
        )
    });

    return viewRepositories
};

export default UserRepo;