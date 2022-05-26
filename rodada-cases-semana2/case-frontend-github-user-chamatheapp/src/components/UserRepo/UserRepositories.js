import React, { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { UserRepositories, RepositoryContainer } from "../../assets/styles/UserRepo/UserRepoStyle";
import StartIcon from "../../assets/images/star-icon.png";


const UserRepo = () => {

    const { userRepo } = useContext(GlobalContext);

    console.log(userRepo)

    const viewRepositories = userRepo.map((repo, index) => {

        return (
            <UserRepositories key={repo.id}>
                <h2>{repo.name}</h2>
                <p>Language: <strong>{repo.language}</strong></p>
                <p>
                    <img src={StartIcon} alt="Stars count:" /> 
                    <strong>{repo.stargazers_count}</strong>
                </p>
            </UserRepositories>
        )
    });

    return (
        <RepositoryContainer>
            {viewRepositories}
        </RepositoryContainer>
    )
};

export default UserRepo;