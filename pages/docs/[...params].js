import { useRouter } from "next/router"

const Doc = () => {
    const router = useRouter()
    const { params = [] } = router.query

    if (params.length === 2){
        return(
            <div>
                Viewing docs for feature {params[0]} and concept {params[1]}
            </div>
        )
    }else {
        return (
            <div>Return to Home</div>
        )
    }

}

export default Doc