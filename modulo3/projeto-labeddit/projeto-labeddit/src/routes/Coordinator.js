export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToLoginPage = (navigate) => {
    navigate("/labeddit/login")
}

export const goToPostDetails = (navigate, id) => {
    navigate(`/labeddit/posts/${id}/comments`)
}

export const createPost = (navigate) => {
    navigate("/labeddit/post/create-post")
}
