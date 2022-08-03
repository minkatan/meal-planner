import React from 'react'
import { useRouter } from 'next/router'


const PostDetails = () => {
    const router = useRouter()
    const id = router.query.postId

    return (
        <div>Post {id}</div>
    )
}

export default PostDetails